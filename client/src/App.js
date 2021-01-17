import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import Search from './components/Search'
import Saved from './components/Saved'
import './App.css'

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </Router>
  )
}

export default App
