import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './CardId.css'

const CardId = () => {
  const { searchValue, setSearchValue,activeCardId, setActiveCardId, selectedId, setSelectedId,animeData } = useContext(AppContext)
  const singleCard=Object.values(animeData).find(el=>el.mal_id===selectedId)
 console.log(singleCard);
  return (
    <div>
      <h1>CardId: {selectedId}</h1>
      <img src={singleCard.images.jpg.image_url} alt="" />
      <button onClick={()=>setActiveCardId(false)}>❌</button>
      </div>
  )
}

export default CardId