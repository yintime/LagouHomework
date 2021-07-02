import TodoStore from "./TodoStore";
import { createContext, useContext } from "react"

class RootStore{
  constructor(){
    this.todoStore = new TodoStore()
  }
}

const rootStore = new RootStore()
const RootStoreContext = createContext()

//返回的是一个组件
export const RootStoreProvider = ({children}) => {
  return <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
}

export const useRootStore = ()=> useContext(RootStoreContext)