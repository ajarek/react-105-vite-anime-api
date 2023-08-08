import { React, useContext } from 'react'
import { AppContext } from '../../App'
import './CardId.css'

const CardId = () => {
  const { setActiveCardId, selectedId, animeData } = useContext(AppContext)
  const singleCard = Object.values(animeData).find(
    (el) => el.mal_id === selectedId
  )
  console.log(singleCard)
  return (
    <div className='card-id'>
      <div className='img'>
        <img
          src={singleCard.images.jpg.image_url}
          alt=''
        />
      </div>
      <div className='info'>
        <h2>{singleCard.title}</h2>
        <p>favorites: {singleCard.favorites}</p>
        <p>popularity: {singleCard.popularity}</p>
        <p>rank: {singleCard.rank}</p>
        <p>producers: {singleCard.producers[0]?.name}</p>

        <p>
          synopsis:
          <br />
          <div className='synopsis-wrapper'> {singleCard.synopsis}</div>
        </p>

        <button onClick={() => setActiveCardId(false)}>Back</button>
      </div>
    </div>
  )
}

export default CardId
