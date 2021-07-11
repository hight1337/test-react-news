import React from 'react'

/* mobx */
import NewsState from '../store/NewsState'
import Login from '../store/Login'
import { observer } from 'mobx-react-lite'

/* icons */
import { MdEdit } from 'react-icons/md'
import { IoAddSharp } from 'react-icons/io5'
import { CgReadme } from 'react-icons/cg'

/* components */
import EditModal from './EditModal'
import Modal from './Modal'

const NewsComponent = observer(() => {
  return (
    <section className='news'>
      <h1 className='news-title'>News</h1>
      <div className='add-btn__container'>
        {Login.login && (
          <button className='btn-add' onClick={() => NewsState.openModal()}>
            <IoAddSharp />
            Add News
          </button>
        )}
        {NewsState.isModalOpen && <Modal />}
        {NewsState.isEditing && <EditModal />}
      </div>
      {NewsState.news.map((item) => {
        const { id, title, user, url } = item
        return (
          <div className='news-item' key={id}>
            <h3 className='news-title'>{title}</h3>
            <h4 className='news-author'>Author : {user}</h4>
            <a
              href={url}
              target='_blank'
              rel='noreferrer'
              className='news-link'
            >
              <CgReadme /> <span>Read</span>
            </a>
            {Login.login && (
              <button className='edit-btn'>
                <MdEdit onClick={() => NewsState.editItem(id)} />
              </button>
            )}
          </div>
        )
      })}
    </section>
  )
})

export default NewsComponent
