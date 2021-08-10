import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from './components/Homepage'
import Menu from './components/Menu'
import Projects from './pages/Projects'
import Error from './pages/Error'

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App