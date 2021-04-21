import { Component } from 'react'

class AddStudent extends Component {
  constructor(){
    super()
    this.stateHandler = this.stateHandler.bind(this)
  }

  // 01 定义组件中的状态
  state = {
    number:'',
    name: '',
    sex:'男',
    age:'',
    college:'大前端',
    hobbies:[
      {id:1,title:'足球',isChecked: false},
      {id:2,title:'篮球',isChecked: false},
      {id:3,title:'橄榄球',isChecked: false},
    ],
    enterDate:''
  }

  // 深拷贝原始state
  origin = JSON.parse(JSON.stringify(this.state))

  stateHandler(e){
    // 获取当前输入值，然后调用setState 更新在具体的属性身上
    const value = e.target.value
    const prop = e.target.name
    this.setState({
      [prop]: value
    }
    // 第二个参数为回调函数 这里是指更新后执行的操作
    //,()=>{console.log(this.state.college)}
    )
  }

  hobbyHandler(index,ev){
    // console.log(index)
    // console.debug(ev.target.checked)
    const isChecked = ev.target.checked
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = isChecked
    this.setState({ hobbies })
  }

  submit = (ev) => {
    ev.preventDefault()
    //筛选出选中的爱好
    const hobbies = this.state.hobbies
    .filter(hobby => hobby.isChecked)
    .map(hobby => hobby.title)
    const formValue = {
      ...this.state,
      hobbies
    }
    
    //异步操作，为了保证添加执行完毕后复原，所以复原作为第二个回调函数
    this.props.addStudent(formValue,()=>{this.setState(this.origin)})
  }

  render() {
    return (
      <div className={"col-md-5"}>
        <form onSubmit={this.submit}>
          <div className={"form-group"}>
              <label>学号</label>
              <input name={'number'} value={this.state.number} onChange={this.stateHandler} type="number" className={"form-control"} placeholder="请输入学号" />
          </div>
          <div className={"form-group"}>
              <label>姓名</label>
              <input name={'name'} value={this.state.name} onChange={this.stateHandler} type="text" className={"form-control"} placeholder="请输入姓名" />
          </div>
          <div className={"form-group"}>
              <label>性别&nbsp;&nbsp;</label>
              <label className={"checkbox-inline"}>
                  <input name='sex' onChange={this.stateHandler} checked = {this.state.sex=== '男'} type="radio" value="男" /> 男
              </label>
              <label className={"checkbox-inline"}>
                  <input name='sex' onChange={this.stateHandler} checked = {this.state.sex=== '女'} type="radio" value="女" /> 女
              </label>
          </div>
          <div className={"form-group"}>
              <label>年龄</label>
              <input name={'age'} value={this.state.age} onChange={this.stateHandler} type="text" className={"form-control"} placeholder="请输入年龄" />
          </div>
          <div className={"form-group"}>
              <label>入学时间</label>
              <input name={'enterDate'} value={this.state.enterDate} onChange={this.stateHandler} className={"form-control"} type="date" />
          </div>
          <div className={"form-group"}>
              <label>爱好</label>
              {
                this.state.hobbies.map((hobby,index) => {
                  return (
                    <div className={"checkbox"} key={hobby.id}>
                      <label>
                          <input type="checkbox" checked={hobby.isChecked} value={hobby.title} onChange={this.hobbyHandler.bind(this,index)} /> {hobby.title}
                      </label>
                    </div>
                  )
                })
              }
          </div>
          <div className={"form-group"}>
              <label>所属学院</label>
              <select name={'college'} value={this.state.college} onChange={this.stateHandler} className={"form-control"}>
                  <option value="大前端">大前端</option>
                  <option value="Java">Java</option>
                  <option value="python">python</option>
              </select>
          </div>
          <button type="submit" className={"btn btn-default"}>添加</button>
        </form>
    </div>
    )
  }
}

export default AddStudent;
