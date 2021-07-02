import { takeEvery, put } from 'redux-saga/effects'
import { addProductToCart, addProductToLocalCart, changeProductCount, changeProductCountLocalCart, deleteProductFromCart, deleteProductFromLocalCart, loadCarts, saveCarts } from '../actions/cart.action'
import axios from 'axios'

function* handleAddProductToCart (action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add',{gid:action.payload})
  yield put(addProductToLocalCart(data))
}

function* handleLoadCart (action) {
  const { data } = yield axios.get('http://localhost:3005/cart')
  yield put(saveCarts(data))
}

function* handleDeleteProductFromCart (action) {
  const { data } = yield axios.delete('http://localhost:3005/cart/delete',{params:{cid:action.payload}})
  yield put(deleteProductFromLocalCart(data.index))
}

function* handleChangeProductCount (action) {
  const { data } = yield axios.put('http://localhost:3005/cart',action.payload)
  yield put(changeProductCountLocalCart(data))
}

export default function* cartSaga () {
  // 加载商品数据
  yield takeEvery(addProductToCart, handleAddProductToCart)
  yield takeEvery(loadCarts, handleLoadCart)
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart)
  yield takeEvery(changeProductCount,handleChangeProductCount)
}