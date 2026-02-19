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
        <p><strong>Name:</strong> {cv.personalInfo.familyName} {cv.personalInfo.firstName}</p>
        {Object.entries(cv.personalInfo)
          .filter(([key]) => key !== 'familyName' && key !== 'firstName')
          .map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {key === 'github' ? <a href={value} target="_blank" rel="noreferrer">{value}</a> : value}</p>
          ))}
      </section>
    </>
  )
}

export default App
