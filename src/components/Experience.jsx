function Experience({ experience }) {
  return (
    <section>
      <h2>Work Experience</h2>
      {experience.map((job, index) => (
        <div key={index} style={{marginTop: '3rem'}}>
          <h3>{job.title} at {job.employer}</h3>
          <p>{job.period}</p>
          <p><em>{job.sector}</em></p>
          <ul>
            {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
          <p>Working language: {job.workingLanguage}</p>
          <p><strong>Tech stack:</strong> {job.technicalStack.join(', ')}</p>
        </div>
      ))}
    </section>
  )
}

export default Experience
