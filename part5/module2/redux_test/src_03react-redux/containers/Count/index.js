import CountUI from '../../components/Count'
import { createIncrementAction } from '../../redux/count_action'
import {connect} from 'react-redux'

//react-redux中的connect用于连接UI组件与Redux
//也就是通过两个普通函数，将state和dispatch映射为props
//mapStateToProps实现State传入
function mapStateToProps(state){
  return {count:state}
}
//mapDispatchToProps实现组件通过dispatch(action())操作state数据
function mapDispatchToProps(dispatch){
  return {add:(number)=>{
    dispatch(createIncrementAction(number))
  }}
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
