import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
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
    <Routes>
      <Route path="/" element={<CV json={cv} mode="html" />} />
      <Route path="/pdf" element={<CV json={cv} mode="pdf" />} />
    </Routes>
  )
}

export default App
