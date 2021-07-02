import Link from 'next/link'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        index page works
        {/* Link标签只包含href属性 其他属性放在a标签内 必须存在a标签 */}
        <Link href="/list"><a className="demo">Jump to List pages</a></Link>
      </div>
      {/* 注意jsx属性 以及标签内是{`CSS`}模板字符串 */}
      <style jsx>{`
        .demo {
          color: red
        }
      `}
      </style>
    </>
  )
}
