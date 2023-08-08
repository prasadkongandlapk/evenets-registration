import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const notRegistered = () => (
    <div className="lkjdfsa">
      <img
        className="dsfkjl"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="ldksjfa">
        A live performance brings so much to your relationship with dance.
        Seeing dance can often make you fall totally in love with the beautiful
        art form.
      </p>
      <button>Register Here</button>
    </div>
  )

  const closedRegistered = () => (
    <div className="lkjdfsa">
      <img
        className="dsfkjl"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const registered = () => (
    <div className="lkjdfsa">
      <img
        className="dsfkjl"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  switch (status) {
    case 'YET_TO_REGISTER':
      return notRegistered()
    case 'REGISTERED':
      return registered()
    case 'REGISTRATIONS_CLOSED':
      return closedRegistered()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
