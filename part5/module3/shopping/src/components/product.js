import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../store/actions/product.action'
import * as cartActions from '../store/actions/cart.action'

//UI组件
class Product extends Component {
componentDidMount(){
    const { loadProducts } = this.props
    loadProducts()
}
render(){
    const {products, addProductToCart} = this.props
    return (
        <section className="container content-section">
            <h2 className="section-header">商品列表</h2>
            <div className="shop-items">
                {
                    products.map((product) =>(
                        <div className="shop-item" key={product.id}>
                            <img className="shop-item-image" src={`http://localhost:3005${product.thumbnail}`} alt="" />
                            <span className="shop-item-title">{product.title}</span>
                            <div className="shop-item-details">
                                <span className="shop-item-price">￥{product.price}</span>
                                <button className="btn btn-primary shop-item-button"
                                type="button"
                                onClick={()=>{addProductToCart(product.id)}}
                                >加入购物车</button>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </section>
        )
    }
}
//mapStateToProps(state)
const mapStateToProps = state =>({
    products:state.products
})

//mapDispatchToProps(dispatch)
const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(productActions,dispatch),
    ...bindActionCreators(cartActions,dispatch)
})


//connect(mapStateToProps,mapDispatchToProps)(UI)
//mapStateToProps(state):映射状态，返回值是一个对象（{key:value}）
//mapDispatchToProps(dispatch)：映射操作状态的方法，返回值是一个对象({[name]:()=>dispatch()})

export default connect(mapStateToProps,mapDispatchToProps)(Product)