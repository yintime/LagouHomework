import { Component } from 'react'
import StudentTitle from './Components/StudentTitle'
import AddStudent from './Components/AddStudent'
import StudentList from './Components/StudentList'


class App extends Component {
  // 定义状态用于管理学员信息
  state = {
    studentList: [
      //静态测试数据
      {
        "number":'01',
        "name":'test01',
        'sex':'男',
        'age':'18',
        'college':'大前端',
        'hobbies':[
          '篮球',
          '足球'
        ]
      },
      {
        "number":'02',
        "name":'test02',
        'sex':'男',
        'age':'18',
        'college':'大前端',
        'hobbies':[
          '篮球',
          '足球'
        ]
      }
    ]
  }
  // 定义将student添加进studentList
  addStudent = (student,callback) => {
    this.setState({
      studentList: [...this.state.studentList, student]
    },
    ()=>{
      callback()
      // console.log(this.state.studentList)
    })
  }

  // 定义删除操作
  removeStudent = (number) => {
    // 核心 利用number 在studentList 删除项
    // 将处理后的数据 重新 setState回去
    // 深拷贝
    const studentList = JSON.parse(JSON.stringify(this.state.studentList))
    // 查找匹配项
    const index = studentList.findIndex(student => student.number === number)
    // 利用index删除
    studentList.splice(index,1)
    // setState
    this.setState({studentList})
  }

  render() {
    return (
      <div className={'container'}>
        <StudentTitle />
        <AddStudent addStudent={this.addStudent} />
        <StudentList studentList={this.state.studentList} removeStudent={this.removeStudent} />
      </div> 
    )
  }
}

export default App;
