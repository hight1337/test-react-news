import { makeAutoObservable } from 'mobx'

const getLocalStorage = () => {
  let login = localStorage.getItem('login')
  if (login) {
    return JSON.parse(localStorage.getItem('login'))
  } else {
    return false
  }
}

class Login {
  login = getLocalStorage()
  loginError = false
  constructor() {
    makeAutoObservable(this)
  }

  setLoginTrue() {
    this.login = true
  }

  setLoginFalse() {
    this.login = false
  }

  setErrorTrue() {
    this.loginError = true
  }
  setErrorFalse() {
    this.loginError = false
  }
}

export default new Login()
