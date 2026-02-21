import { useState, useEffect } from 'react'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import DownloadPDF from './DownloadPDF'
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
      <div className="watermark">implemented in Vibe Coding</div>
      <DownloadPDF cv={cv} />
      <PersonalInfo personalInfo={cv.personalInfo} />
      <hr className="section-divider" />
      <Experience experience={cv.experience} />
    </>
  )
}

export default App
