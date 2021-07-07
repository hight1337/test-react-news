import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Login from './store/Login'
import { observer } from 'mobx-react-lite'
/* navBar */
import NavBar from './components/NavBar'
/* pages */
import LogIn from './pages/LogIn'
import News from './pages/News'
import Profile from './pages/Profile'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'

const App = observer(() => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <LogIn />
          </Route>
          <Route exact path='/news'>
            <News />
          </Route>
          <Route exact path='/profile'>
            {Login.login ? <Profile /> : <Redirect to='/login' />}
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
})

export default App
