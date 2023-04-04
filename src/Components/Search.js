import React from 'react'
import "../styles/Search.css"
import GoogleImg from '../images/google.png'
import SearchInput from './SearchInput'

function Search() {
  return (
      <div className='Search'>
          <img src={GoogleImg} alt="google logo"></img>
          <SearchInput/>
      </div>
  )
}

export default Search