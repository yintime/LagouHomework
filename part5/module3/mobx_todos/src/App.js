import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { RootStoreProvider } from "./Store"



function App(){
  return (
    <RootStoreProvider>
      <section className="todoapp">
        <Header />
        <Main />
        <Footer />
      </section>
    </RootStoreProvider>
  )
}
export default App;
