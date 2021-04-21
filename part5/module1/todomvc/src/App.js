import { Component } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

class App extends Component {
  render(){
    return (
      <section className="todoapp">
        <Header />
        <Main />
        <Footer />
      </section>
    )
  }
}

export default App;
