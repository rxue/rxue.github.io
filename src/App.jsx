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
      <h1>{cv.name}</h1>

      {cv.experience.length > 0 && (
        <section>
          <h2>Experience</h2>
          {cv.experience.map((exp, i) => (
            <div key={i}>
              <h3>{exp.role} - {exp.company}</h3>
              <p>{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {cv.education.length > 0 && (
        <section>
          <h2>Education</h2>
          {cv.education.map((edu, i) => (
            <div key={i}>
              <h3>{edu.degree} - {edu.school}</h3>
              <p>{edu.year}</p>
            </div>
          ))}
        </section>
      )}

      {cv.skills.length > 0 && (
        <section>
          <h2>Skills</h2>
          <ul>
            {cv.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </section>
      )}
    </>
  )
}

export default App
