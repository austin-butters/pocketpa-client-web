import { useState } from 'react'

const App = () => {
  const [sessionStatus, setSessionStatus] = useState()
  const [registerAnonymousResponse, setRegisterAnonymousResponse] = useState()
  const [checkAvailabilityResponse, setCheckAvailabilityResponse] = useState()
  const [registerResponse, setRegisterResponse] = useState()

  const handleGetSessionStatus = () => {
    fetch('/api/v0/authentication/session-status')
      .then((res) => res.json())
      .then((data) => setSessionStatus(data))
  }

  const handleRegisterAnonymous = () => {
    fetch('/api/v0/authentication/register-anonymous', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => setRegisterAnonymousResponse(data))
  }

  const [emailInput, setEmailInput] = useState('')
  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value)
  }
  const [usernameInput, setUsernameInput] = useState('')
  const handleUsernameInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsernameInput(e.target.value)
  }

  const handleCheckAvailability = () => {
    fetch('/api/v0/authentication/check-registration-availability', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailInput, username: usernameInput }),
    })
      .then((res) => res.json())
      .then((data) => setCheckAvailabilityResponse(data))
  }

  const handleRegister = () => {
    fetch('/api/v0/authentication/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailInput, username: usernameInput }),
    })
      .then((res) => res.json())
      .then((data) => setRegisterResponse(data))
  }

  const handleLogout = () => {
    fetch('/api/v0/authentication/logout', {
      method: 'POST',
    })
  }

  return (
    <div>
      <h1>POCKETPa Web Client</h1>
      <p>In development</p>
      <input
        type="text"
        placeholder="Email"
        value={emailInput}
        onChange={handleEmailInputChange}
      />
      <input
        type="text"
        placeholder="Username"
        value={usernameInput}
        onChange={handleUsernameInputChange}
      />
      <br />
      <br />
      <button onClick={handleGetSessionStatus}>GET Session Status</button>
      <pre>{`Session Status:
      ${JSON.stringify(sessionStatus, null, 2)}`}</pre>
      <button onClick={handleRegisterAnonymous}>Register Anonymous</button>
      <pre>{`Register Anonymous Response:
      ${JSON.stringify(registerAnonymousResponse, null, 2)}`}</pre>
      <button onClick={handleCheckAvailability}>
        Check email and username availability
      </button>
      <pre>{`Check Availability Response:
      ${JSON.stringify(checkAvailabilityResponse, null, 2)}`}</pre>
      <button onClick={handleRegister}>Register</button>
      <pre>{`Register Response:
      ${JSON.stringify(registerResponse, null, 2)}`}</pre>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default App
