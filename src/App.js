import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from './components/Homepage'
import Menu from './components/Menu'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectsNew from "./pages/ProjectsNew"
import Error from './pages/Error'

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
          <ProjectsNew />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App