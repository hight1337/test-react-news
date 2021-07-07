import { makeAutoObservable } from 'mobx'
import { GET_NEWS_API } from '../constants/apiConfig'

class NewsState {
  news = []
  isEditing = false
  constructor() {
    makeAutoObservable(this)
  }

  async fetchData() {
    const response = await fetch(GET_NEWS_API)
    const data = await response.json()
    this.news = data
  }
  setEditTrue(id) {
    this.isEditing = true
  }

  setEditFalse() {
    this.isEditing = false
  }
}
export default new NewsState()
