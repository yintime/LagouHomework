import { handleActions as createReducer} from 'redux-actions'
import { addProductToLocalCart, changeProductCountLocalCart, deleteProductFromLocalCart, saveCarts } from '../actions/cart.action'

const initialState = []

const handleAddProductToLocalCart = (state,action) =>{
  //要添加的商品没有在购物车中 直接添加
  //商品已经在购物车中 数量加一
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find(product => product.id === action.payload.id)
  if (!product) {
    newState.push(action.payload)
  } else {
    product.count = product.count+1
  }
  return newState
}

const handleSaveCarts = (state,action) => {
  return action.payload
}

const handleDeleteProductFromLocalCart = (state,action) => {
  const newState = JSON.parse(JSON.stringify(state));
  newState.splice(action.payload, 1);
  return newState;
}

const handleChangeProductCountLocalCart = (state,action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const product = newState.find(product => product.id === action.payload.id)
  product.count = action.payload.count
  return newState;
}

export default createReducer({
  [addProductToLocalCart]: handleAddProductToLocalCart,
  [saveCarts]: handleSaveCarts,
  [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
  [changeProductCountLocalCart]: handleChangeProductCountLocalCart
},initialState)