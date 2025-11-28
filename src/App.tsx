import { useEffect, useState } from 'react'

function App() {
  const [sessionStatus, setSessionStatus] = useState()
  useEffect(() => {
    fetch('/api/auth/session-status').then((res) =>
      res.json().then((data) => setSessionStatus(data))
    )
  }, [])

  return (
    <div>
      <h1>POCKETPa Web Client</h1>
      <p>In development</p>
      <pre>{JSON.stringify(sessionStatus, null, 2)}</pre>
    </div>
  )
}

export default App
