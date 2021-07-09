import React from 'react'
import NewsState from '../store/NewsState'
import { IoMdClose } from 'react-icons/io'
import { observer } from 'mobx-react-lite'

const EditModal = observer(() => {
  return (
    <div>
      <div
        className={`${
          NewsState.isEditing ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className='modal-container'>
          <h3>Edit Item</h3>
          <form
            className='add-item__form'
            onSubmit={(e) => NewsState.saveEditItem(e)}
          >
            <label htmlFor='title'>Title: </label>
            <input
              type='text'
              id='title'
              placeholder='Enter text here'
              value={NewsState.editTitleInput}
              onChange={(e) => (NewsState.editTitleInput = e.target.value)}
            />
            <label htmlFor='author'>Author: </label>
            <input
              type='text'
              id='author'
              placeholder='Enter text here'
              value={NewsState.editAuthorInput}
              onChange={(e) => (NewsState.editAuthorInput = e.target.value)}
            />
            <label htmlFor='url'>Link: </label>
            <input
              type='text'
              id='url'
              placeholder='Enter text here'
              value={NewsState.editUrlInput}
              onChange={(e) => (NewsState.editUrlInput = e.target.value)}
            />
            <button type='submit' className='btn-add add'>
              Save
            </button>
            {NewsState.showModalErr && (
              <p className='modal-error'>No empty values allowed</p>
            )}
          </form>
          <button
            className='close-modal-btn'
            onClick={() => NewsState.setEditFalse()}
          >
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  )
})

export default EditModal
