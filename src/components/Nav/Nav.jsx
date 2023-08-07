import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import Search from '../Search/Search'
import './Nav.css'

const Nav = () => {
  
  const { searchValue, setSearchValue } = useContext(AppContext)
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);

  };
console.log(searchValue);
  return (
    <div className='nav'>
      <h2>Anime</h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} placeholder={'Search your anime'}/>
      </div>
  )
}

export default Nav