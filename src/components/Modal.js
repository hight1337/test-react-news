import React from 'react'
import NewsState from '../store/NewsState'
import { observer } from 'mobx-react-lite'
import { IoMdClose } from 'react-icons/io'
const Modal = observer(() => {
  return (
    <div>
      <div
        className={`${
          NewsState.isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className='modal-container'>
          <h3>Add item</h3>
          <form
            className='add-item__form'
            onSubmit={(e) => NewsState.addItem(e)}
          >
            <label htmlFor='title'>Title: </label>
            <input
              type='text'
              id='title'
              placeholder='Enter text here'
              value={NewsState.newsTitle}
              onChange={(e) => (NewsState.newsTitle = e.target.value)}
            />
            <label htmlFor='author'>Author: </label>
            <input
              type='text'
              id='author'
              placeholder='Enter text here'
              value={NewsState.newsAuthor}
              onChange={(e) => (NewsState.newsAuthor = e.target.value)}
            />
            <label htmlFor='url'>Link: </label>
            <input
              type='text'
              id='url'
              placeholder='Enter text here'
              value={NewsState.newsUrl}
              onChange={(e) => (NewsState.newsUrl = e.target.value)}
            />
            <button type='submit' className='btn-add add'>
              Add
            </button>
            {NewsState.showModalErr && (
              <p className='modal-error'>No empty values allowed</p>
            )}
          </form>
          <button
            className='close-modal-btn'
            onClick={() => NewsState.closeModal()}
          >
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  )
})

export default Modal
