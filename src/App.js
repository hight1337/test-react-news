import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/* navBar */
import NavBar from './components/NavBar'
/* pages */
import LogIn from './pages/LogIn'
import News from './pages/News'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <LogIn />
          </Route>
          <Route exact path='/login'>
            <LogIn />
          </Route>
          <Route exact path='/news'>
            <News />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
