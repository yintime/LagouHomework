//https://github.com/redux-utilities/redux-actions
//https://redux-actions.js.org/


import { handleActions as createReducer} from 'redux-actions'
import { saveProducts } from '../actions/product.action'

const initialState = []

const handleSaveProducts = (state,action) => {
  return action.payload
}

//handleActions(reducerMap, defaultState[, options])
//第一个参数:Map类型（reducer的键值对）
export default createReducer({
  [saveProducts]:handleSaveProducts
},initialState)