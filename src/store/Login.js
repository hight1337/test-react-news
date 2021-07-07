import { makeAutoObservable } from 'mobx'

class Login {
  login = false
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
