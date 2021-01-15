const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec
//src变量，./less目录
const src = path.join(__dirname, 'less')
//dist变量，./css目录
const dist = path.join(__dirname, 'css')

//这里开始正式执行
// 确保 dist 目录存在
if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist)
}
//编译less
compile_less(src+'\\main.less', dist+"\\main.css")
//最小化css
minify_css(dist+"\\main.css",dist+"\\main.min.css")



//封装编译less2css函数
//原理：在JS中使用exec调用cmd执行lessc指令编译 src 到dist目录（同时也实现了复制）
//但我有个疑问，为什么要在JS里调用cmd？难不成作业是要自己写原生编译less到css？
function compile_less(input_file, output_file) {  
    let cmd = ['lessc ', input_file, ' ', output_file].join('');  
    exec(cmd, {encoding: 'utf-8'},   
        function(error, stdout, stderr) {  
            if(error !== null) {  
                console.log(error);  
                return;  
            }  
            console.log(stdout);  
        });  
}

//封装minify_css函数
function minify_css(input_file, output_file){
    let cmd = ['minify ', input_file, ' > ', output_file].join('');  
    exec(cmd, {encoding: 'utf-8'},   
        function(error, stdout, stderr) {  
            if(error !== null) {  
                console.log(error);  
                return;  
            }  
            console.log(stdout);  
        });  
}