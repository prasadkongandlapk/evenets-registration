import './index.css'

const EventItem = props => {
  const {itemDetails, onClickImg} = props
  const {imageUrl, name, location, registrationStatus} = itemDetails

  const onClick = () => {
    onClickImg(registrationStatus)
  }
  return (
    <li className="item-bg">
      <button type="button" onClick={onClick}>
        <img className="img" src={imageUrl} alt="event" />
        <p className="fdsjkl">{name}</p>
        <p className="fdsjkla">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
