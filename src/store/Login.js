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

  logIn() {
    this.login = true
  }

  logOut() {
    this.login = false
  }

  showLoginError() {
    this.loginError = true
    setTimeout(() => {
      this.hideLoginError()
    }, 4000)
  }
  hideLoginError() {
    this.loginError = false
  }
}

export default new Login()
