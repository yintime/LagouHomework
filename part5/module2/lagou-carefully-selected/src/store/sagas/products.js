import axios from "axios"
import {takeEvery,put} from "redux-saga/effects"
import { API } from "../../config"
import { get_products, get_products_success } from "../actions/products"

function* handleGetProducts(action) {
  let response = yield axios.get(`${API}/products`,{
    params: action.payload
  })
  yield put(get_products_success({
    sortBy: action.payload.sortBy,
    products: response.data
  }))
}

export default function* productsSaga () {
  yield takeEvery(get_products,handleGetProducts)
}