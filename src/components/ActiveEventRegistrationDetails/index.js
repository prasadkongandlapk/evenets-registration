import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props
  const notRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to rigister"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance can often make you fall totally in love with the beautiful
        art form.
      </p>
    </div>
  )

  const closedRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to rigister"
      />
      <p>Stay tuned. We will reopen the registrations soon!.</p>
    </div>
  )

  const registered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to rigister"
      />
      <p>You have already registered for this event.</p>
    </div>
  )
  switch (status) {
    case 'YET_TO_REGISTER':
      return notRegistered()
      break
    case 'REGISTERED':
      return registered()
      break
    case 'REGISTRATIONS_CLOSED':
      return closedRegistered()
      break
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
