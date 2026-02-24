import { useState, useEffect } from 'react'
import CV from './components/cv'
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
      <a href="/cv.pdf" className="download-link" download>Download PDF</a>
      <CV json={cv} />
    </>
  )
}

export default App
