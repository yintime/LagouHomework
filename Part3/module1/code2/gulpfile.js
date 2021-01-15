const { src, dest, parallel, series, watch } = require('gulp')
const cleancss = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync')
const bs = browserSync.create()
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const del = require('del')

//style处理 因为开发直接用了CSS所以不需要less转换，只做压缩
const style = () => {
  return src('src/css/*.css',{ base: 'src' })
  .pipe(autoprefixer())
  .pipe(cleancss())
  //.pipe(rename({ "extname": ".min.css" }))
  .pipe(dest('dist/'))
}
//script压缩 项目开发js文件夹里面用的本来就是压缩版本代码 再次优化反而会有报错，这里只做转移
const script = () => {
  return src('src/js/*.js',{ base: 'src' })
    //.pipe(babel({
    //  presets: ['babel-preset-env']
    //}))
    //.pipe(uglify())
    //.pipe(rename({ "extname": ".min.js" }))
    .pipe(dest('dist'))
}
//html压缩
const html = () => {
  return src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(dest('dist'))
}

// 声明 文件清除 任务
const clean = () => {
  return del(['dist'])
}
// 声明 服务发布 任务
const serve = () => {
  // 初始化服务
  bs.init({
    notify: false,      // 禁用 浏览器 右上角的 browserSync connected 提示框
    files: 'dist/**',   // 监视 dist 下 文件的变化，然后在浏览器上实时更新
    server: {
      baseDir: './dist', // 指定服务启动的目录
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}

//并行编译CSS、JS、HTML
const build = parallel(style,script,html)
//串行清除、build、启动
const dev = series(clean, build, serve)

module.exports ={
  build,
  serve,
  dev
}