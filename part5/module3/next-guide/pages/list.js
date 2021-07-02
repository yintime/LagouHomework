import Head from 'next/head'
import styles from '../styles/list.module.css'
import { readFile } from 'fs'
import { promisify } from 'util'
import { join } from 'path'

const read = promisify(readFile)

export default function List ({data}){
  return (
    <>
      <Head>
          <title>List Page</title>
      </Head>
      <div className={styles.demo}>List page works</div>
      <div>{data}</div>
    </>
  )
}

// 静态生成时获取附加数据
/* export async function getStaticProps () {
  let data = await read(join(process.cwd(),'pages','_app.js'),'utf-8')
  console.log(data)
  return {
    props:{
      data
    }
  }
} */

// 服务器端渲染 生产环境运行会刷新数据
export async function getServerSideProps (context) {
  console.log(context.query)
  let data = await read(join(process.cwd(),'pages','_app.js'),'utf-8')
  console.log('Hello')
  return {
    props:{
      data
    }
  }
}
