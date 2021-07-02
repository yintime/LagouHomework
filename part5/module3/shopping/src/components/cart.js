import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../store/actions/cart.action'


class Cart extends Component {
  componentDidMount(){
    const { loadCarts } = this.props
    loadCarts()
  }
  changeProductCount(cid,event){
    const { changeProductCount } = this.props
    const count = event.target.value
    changeProductCount({cid,count})
    
  }

  render(){
    const {carts, deleteProductFromCart} = this.props
    return (
      <section className="container content-section">
      <h2 className="section-header">购物车</h2>
      <div className="cart-row">
          <span className="cart-item cart-header cart-column">商品</span>
          <span className="cart-price cart-header cart-column">价格</span>
          <span className="cart-quantity cart-header cart-column">数量</span>
      </div>
      <div className="cart-items">
        {carts.map(
          (product) => {
            return (<div className="cart-row" key={product.id}>
            <div className="cart-item cart-column">
                <img className="cart-item-image" src={`http://localhost:3005${product.thumbnail}`} width="100" height="100" alt="商品缩略图"/>
                <span className="cart-item-title">{product.title}</span>
            </div>
            <span className="cart-price cart-column">￥{product.price}</span>
            <div className="cart-quantity cart-column">
                <input className="cart-quantity-input" type="number" value={product.count} onChange={(e)=>this.changeProductCount(product.id,e)} />
                <button className="btn btn-danger" type="button" onClick={()=> deleteProductFromCart(product.id)}>删除</button>
            </div>
        </div>)
          }
        )}
          
      </div>
        <div className="cart-total">
          <strong className="cart-total-title">总价</strong>
          <span className="cart-total-price">￥{carts.reduce((total,product)=>{ return total += product.price * product.count},0)}</span>
        </div>
      </section>
    )
  }
}

//mapStateToProps(state)
const mapStateToProps = state =>({
  carts:state.carts
})

//mapDispatchToProps(dispatch)
const mapDispatchToProps = dispatch =>({
  ...bindActionCreators(cartActions,dispatch)
})

//connect(mapStateToProps,mapDispatchToProps)(UI)
//mapStateToProps(state):映射状态，返回值是一个对象（{key:value}）
//mapDispatchToProps(dispatch)：映射操作状态的方法，返回值是一个对象({[name]:()=>dispatch()})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)