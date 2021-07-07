import React from 'react'
import NewsState from '../store/NewsState'
import Login from '../store/Login'
import { observer } from 'mobx-react-lite'
const NewsComponent = observer(() => {
  React.useEffect(() => {
    NewsState.fetchData()
  }, [])
  return (
    <section className='news'>
      <h1 className='news-title'>News</h1>
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
              Read
            </a>
            {Login.login && <button className='edit-btn'>Edit</button>}
          </div>
        )
      })}
      <div className='add-btn__container'>
        {Login.login && <button className='btn-add'>Add News</button>}
      </div>
    </section>
  )
})

export default NewsComponent
