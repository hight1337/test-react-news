import React from 'react'
import NewsState from '../store/NewsState'
import { IoMdClose } from 'react-icons/io'
import { observer } from 'mobx-react-lite'
import { action } from 'mobx'

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
          <form className='add-item__form'>
            <label htmlFor='title'>Title: </label>
            <input
              type='text'
              id='title'
              placeholder='Enter text here'
              value={NewsState.editTitleInput}
              onChange={action(
                (e) => (NewsState.editTitleInput = e.target.value)
              )}
            />
            <label htmlFor='author'>Author: </label>
            <input
              type='text'
              id='author'
              placeholder='Enter text here'
              value={NewsState.editAuthorInput}
              onChange={action(
                (e) => (NewsState.editAuthorInput = e.target.value)
              )}
            />
            <label htmlFor='url'>Link: </label>
            <input
              type='text'
              id='url'
              placeholder='Enter text here'
              value={NewsState.editUrlInput}
              onChange={action(
                (e) => (NewsState.editUrlInput = e.target.value)
              )}
            />
            <button
              type='button'
              className='btn-add add'
              onClick={() => NewsState.saveEditItem()}
            >
              Save
            </button>
            {NewsState.editModalErr && (
              <p className='modal-error'>No empty values allowed</p>
            )}
          </form>
          <button
            className='close-modal-btn'
            onClick={() => NewsState.closeEditModalWindow()}
          >
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  )
})

export default EditModal
