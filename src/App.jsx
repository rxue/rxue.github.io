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
      <section>
        <h2>Work Experience</h2>
        {cv.experience.map((job, index) => (
          <div key={index}>
            <h3>{job.title}</h3>
            <p><strong>{job.employer}</strong> | {job.period}</p>
            <p><em>{job.sector}</em> &mdash; Working language: {job.workingLanguage}</p>
            <ul>
              {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
            <p><strong>Tech stack:</strong> {job.technicalStack.join(', ')}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default App
