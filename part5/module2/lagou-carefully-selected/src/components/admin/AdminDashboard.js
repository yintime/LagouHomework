import { Col, Menu, Row, Descriptions, Typography } from "antd"
import { Link } from "react-router-dom"
import Layout from "../core/Layout"
import {
  ShoppingCartOutlined,
  UserOutlined,
  OrderedListOutlined
} from "@ant-design/icons"
import { isAuth } from "../../helpers/auth"

const { Title } = Typography

function AdminDashboard() {
  // admin dashboard左侧区域
    // isAuth()方法必定返回JSON对象
    const {
      user: { name, email }
    } = isAuth()
  const adminLinks = () =>{
    return(
      <>
        <Title level={5}>管理员链接</Title>
        <Menu>
          <Menu.Item>
            <ShoppingCartOutlined />
            <Link to="/create/category">添加分类</Link>
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            <Link to="/create/product">添加商品</Link>
          </Menu.Item>
          <Menu.Item>
            <OrderedListOutlined />
            <Link  to="/order">订单列表</Link>
          </Menu.Item>
        </Menu>
      </>
    )
    
  }
  // admin dashboard 右侧区域
  const adminInfo = () => (
    <Descriptions title="管理员信息" bordered>
      <Descriptions.Item label="昵称">{name}</Descriptions.Item>
      <Descriptions.Item label="邮箱">{email}</Descriptions.Item>
      <Descriptions.Item label="角色">管理员</Descriptions.Item>
    </Descriptions>
  )
  return (
    <Layout title="管理员Dashboard">
      <Row>
        <Col span="4">{adminLinks()}</Col>
        <Col span="20">{adminInfo()}</Col>
      </Row>
    </Layout>
  )
}

export default AdminDashboard
