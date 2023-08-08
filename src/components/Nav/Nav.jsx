import { React, useContext } from 'react'
import { AppContext } from '../../App'
import Search from '../Search/Search'
import './Nav.css'

const Nav = () => {
  
  const { searchValue, setSearchValue } = useContext(AppContext)
  

  return (
    <div className='nav'>
      <h2>Anime</h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} placeholder={'Search your anime'}/>
      </div>
  )
}

export default Nav