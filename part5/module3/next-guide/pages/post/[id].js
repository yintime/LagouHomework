import { useRouter } from "next/router"

export default function Post({data}) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  return(<div>
    <span>{data.id}</span>
    <span>{data.title}</span>
  </div>)
}

export async function getStaticPaths(){
  return {
    paths: [{params:{id:"1"}},{params:{id:"2"}}],
    fallback:true
  }
}

export async function getStaticProps ({params}) {
  console.log("getStaticProps")
  const id = params.id
  let data;
  switch (id) {
    case "1":
      data = {id:1, title:'Hello'}
      break
    case "2":
      data = {id:2, title:'world'}
      break
    case "3":
      data = {id:3, title:'Hello world'}
      break
    default:
      data = {}
  }
  return {
    props:{
      data
    }
  }
}