import './index.css'

const EventItem = props => {
  const {itemDetails, onClickImg} = props
  const {id, imageUrl, name, location} = itemDetails

  const onClick = () => {
    onClickImg(id)
  }
  return (
    <li className="item-bg">
      <button type="button" onClick={onClick}>
        <img className="img" src={imageUrl} alt={name} />
        <p className="fdsjkl">{name}</p>
        <p className="fdsjkla">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
