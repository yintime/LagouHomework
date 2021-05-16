import Layout from "./Layout"
import { Form, Input, Button } from "antd"
import axios from "axios"
import {API} from "../../config"
import { useHistory } from "react-router-dom"

function Signin() {
  const history = useHistory()
  const handleOnFinish = async value =>{
    let response = await axios.post(`${API}/signin`,value)
    localStorage.setItem('jwt', JSON.stringify(response.data))
    const url = response.data.user.role===1 ? "/admin/dashboard" : "/user/dashboard"
    history.push(url)
  }
  return (
    <Layout title="登录" subTitle="">
      <Form onFinish={handleOnFinish}>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Signin
