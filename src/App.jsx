import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cv, setCv] = useState(null)

  useEffect(() => {
    fetch('/cv.json')
      .then(res => res.json())
      .then(data => setCv(data))
  }, [])

  if (!cv) return <p>Loading...</p>

  return (
    <>
      <section>
        {Object.entries(cv.personalInfo).map(([key, value]) => (
          <p key={key}><strong>{key}:</strong> {key === 'github' ? <a href={value} target="_blank" rel="noreferrer">{value}</a> : value}</p>
        ))}
      </section>
    </>
  )
}

export default App
