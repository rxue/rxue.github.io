function PersonalInfo({ personalInfo }) {
  const { familyName, firstName, ...rest } = personalInfo
  return (
    <section>
      <p><strong>Name:</strong> {familyName} {firstName}</p>
      {Object.entries(rest).map(([key, value]) => (
        <p key={key}><strong>{key}:</strong> {key === 'github' ? <a href={value} target="_blank" rel="noreferrer">{value}</a> : value}</p>
      ))}
    </section>
  )
}

export default PersonalInfo
