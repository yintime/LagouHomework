import { Button, Form, Input, message } from "antd"
import Layout from "../core/Layout"
import { Link } from "react-router-dom"
import axios from "axios"
import { isAuth } from "../../helpers/auth"
import { API } from "../../config"

function AddCategory() {
  const {
    token,
    user: { _id }
  } = isAuth()

  //表单提交
  const handleOnFinish = value => {
    if (value.name) {
      axios.post(
        `${API}/category/create/${_id}`,value, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        }).then(response => {message.success(`${response.data.name} 分类添加成功`)})
    }
  }
  return (
    <Layout title = "添加分类">
      <Form onFinish={handleOnFinish}>
        <Form.Item name="name" label="分类名称">
          <Input />
        </Form.Item>
        <Form.Item name="name" label="分类名称">
          <Button type="primary" htmlType="submit">
            添加分类
          </Button>
        </Form.Item>
      </Form>
      <Button>
        <Link to="/admin/dashboard">返回 Dashboard</Link>
      </Button>
    </Layout>
  )
}

export default AddCategory
