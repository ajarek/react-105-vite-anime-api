import './Card.css'

const Card = ({ src, title, onClick }) => {
  return (
    <div className='card' onClick={onClick} >
      <div className='img'>
        <img
          src={src}
          alt='foto'
        />
      </div>
      <div className='title'>
        <h3>{title}</h3>
       
      </div>
    </div>
  )
}

export default Card
