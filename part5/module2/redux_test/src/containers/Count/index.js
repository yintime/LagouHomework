import CountUI from '../../components/Count'
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'
import {connect} from 'react-redux'

export default connect(
  state => ({count:state}),
  //mapDispatchToProps箭头函数式写法
  /* dispatch => ({
    add:number=>dispatch(createIncrementAction(number))
  }) */
  
  //mapDispatchToProps对象式写法 返回一个action名 但react-redux会自动dispatch
  //react 自动判断这个参数是function还是对象，是function就执行，是对象就dispatch
  {
    add:createIncrementAction,
    decrement:createDecrementAction,
    addAsync:createIncrementAsyncAction
  }
)
(CountUI)
