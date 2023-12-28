import React from 'react'
import Hero from '../components/Hero'
import BooksContainer from '../components/BooksContainer'
import MediaContainer from '../components/MediaContainer'
import AuthorContainer from '../components/AuthorContainer'

const Home = () => {
  return (
    <div>
      <Hero />
      <BooksContainer />
      <MediaContainer />
      <AuthorContainer />
    </div>
  )
}

export default Home
