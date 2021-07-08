import { makeAutoObservable } from 'mobx'
import { GET_NEWS_API } from '../constants/apiConfig'

class NewsState {
  news = []
  isEditing = false
  isModalOpen = false
  newsAuthor = ''
  newsTitle = ''
  newsUrl = ''
  showModalErr = false
  constructor() {
    makeAutoObservable(this)
  }

  editItem(id) {
    this.isEditing = true
  }
  addItem(e) {
    e.preventDefault()
    if (this.newsAuthor && this.newsTitle && this.newsUrl) {
      const newItem = {
        id: Math.random(),
        title: this.newsTitle,
        user: this.newsTitle,
        url: this.newsUrl,
      }
      this.news = [...this.news, newItem]
      this.closeModal()
      this.showModalErr = false
    } else {
      this.showModalErr = true
    }
  }

  openModal() {
    this.isModalOpen = true
  }

  closeModal() {
    this.isModalOpen = false
    this.newsAuthor = ''
    this.newsTitle = ''
    this.newsUrl = ''
  }
  setEditFalse() {
    this.isEditing = false
  }

  async fetchData() {
    const response = await fetch(GET_NEWS_API)
    const data = await response.json()
    this.news = data
  }
}
export default new NewsState()
