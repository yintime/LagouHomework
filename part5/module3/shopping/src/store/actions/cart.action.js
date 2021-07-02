import { createAction } from 'redux-actions'

// 向服务器发送请求 将某一个商品添加到购物车
export const addProductToCart = createAction('addProductToCart')
// 将商品添加到保存到本地的store对象中
export const addProductToLocalCart = createAction('addProductToLocalCart')

// 向服务器发送请求 获取购物车数据
export const loadCarts = createAction('loadCarts')

// 将服务器返回的购物车列表数据同步到本地
export const saveCarts = createAction('saveCarts')

// 向服务器发送请求 删除某个商品
export const deleteProductFromCart = createAction('deleteProductFromCart')

// 删除本地购物车中的某个商品
export const deleteProductFromLocalCart = createAction('deleteProductFromLocalCart')

// 向服务器发送请求 改变购物车中某一个商品的数量
export const changeProductCount = createAction('changeProductCount')

// 向服务器发送请求 改变购物车中某一个商品的数量
export const changeProductCountLocalCart = createAction('changeProductCountLocalCart')