import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Search from './components/Search'
import Saved from './components/Saved'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </Router>
  )
}

export default App
