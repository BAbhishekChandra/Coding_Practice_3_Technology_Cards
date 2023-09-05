// Write your code here.
import './index.css'

const CardsList = props => {
  const {cardsList} = props
  const {id, title, description, imgUrl, className} = cardsList
  console.log(id)
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img className="image-element" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardsList
