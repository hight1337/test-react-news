import { makeAutoObservable } from 'mobx'
import { GET_NEWS_API } from '../constants/apiConfig'

class NewsState {
  news = []
  /* Edit */
  isEditing = false
  editId = 0
  editTitleInput = ''
  editAuthorInput = ''
  editUrlInput = ''
  editModalErr = false

  /* Add new Item */
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
    const specificItem = this.news.find((item) => item.id === id)
    this.editId = specificItem.id
    this.editTitleInput = specificItem.title
    this.editAuthorInput = specificItem.user
    this.editUrlInput = specificItem.url
  }
  closeEditModalWindow() {
    this.isEditing = false
    this.editId = 0
    this.editTitleInput = ''
    this.editAuthorInput = ''
    this.editUrlInput = ''
  }
  saveEditItem() {
    if (
      this.editTitleInput &&
      this.editAuthorInput &&
      this.editUrlInput &&
      this.isEditing
    ) {
      this.news = this.news.map((item) => {
        if (item.id === this.editId) {
          return {
            ...item,
            title: this.editTitleInput,
            user: this.editAuthorInput,
            url: this.editUrlInput,
          }
        }
        return item
      })
      this.editModalErr = false
      this.closeEditModalWindow()
    } else {
      this.editModalErr = true
    }
  }
  addItem() {
    if (this.newsAuthor && this.newsTitle && this.newsUrl) {
      const newItem = {
        id: Math.random(),
        title: this.newsTitle,
        user: this.newsTitle,
        url: this.newsUrl,
      }
      this.news = [newItem, ...this.news]
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

  async fetchData() {
    const response = await fetch(GET_NEWS_API)
    const data = await response.json()
    this.news = data
  }
}
export default new NewsState()
