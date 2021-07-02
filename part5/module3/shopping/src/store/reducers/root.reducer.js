import { combineReducers } from 'redux'
import productReducer from './product.reducer'
import cartReducer from './cart.reducer'

//combineReducers(参数：{key:value}对象)
//返回合并后的state
//{products:[],carts:[]}
export default combineReducers({
  products: productReducer,
  carts: cartReducer
})