import { Switch, Route } from "react-router-dom"
import AddProduct from "./admin/AddProduct"
import AddCategory from "./admin/AddCategory"
import AdminDashboard from "./admin/AdminDashboard"
import PrivateAdmin from "./admin/PrivateAdmin"
import PrivateUser from "./admin/PrivateUser"
import UserDashboard from "./admin/UserDashboard"
import Home from './core/Home'
import Shop from './core/Shop'
import Signin from "./core/Signin"
import Signup from "./core/Signup"
import Product from "./core/Product"
import Cart from "./core/Cart"
import Order from "./admin/Order"

function Routes() {
  return (
    <Switch>
      <Route path="/"  component={Home} exact />
      <Route path="/shop"  component={Shop} />
      <Route path="/signin"  component={Signin} />
      <Route path="/signup"  component={Signup} />
      <Route path="/cart"  component={Cart} />
      <PrivateAdmin path="/admin/dashboard"  component={AdminDashboard} />
      <PrivateAdmin path="/create/category"  component={AddCategory} />
      <PrivateAdmin path="/create/product"  component={AddProduct} />
      <PrivateAdmin path="/order"  component={Order} />
      <PrivateUser path="/user/dashboard"  component={UserDashboard} />
      <Route path="/product/:productId"  component={Product} />
    </Switch>
  )
}

export default Routes
