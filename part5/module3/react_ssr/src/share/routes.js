import Home from "./pages/Home";
import List from "./pages/List";

export default [{
  path:'/',
  component:Home,
  exact: true
  },{
    path:'/list',
    ...List
    //List导出的是个对象，因此在这里解构
  }]