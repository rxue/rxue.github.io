function Experience({ experience }) {
  return (
    <section>
      <h2>Work Experience</h2>
      {experience.map((job, index) => (
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
  )
}

export default Experience
