function renderValue(key, value) {
  if (key === 'github') return <a href={value} target="_blank" rel="noreferrer">{value}</a>
  if (key === 'phone') return <span style={{backgroundColor: 'black', color: 'black', cursor: 'default'}}>{value}</span>
  return value
}

function PersonalInfo({ personalInfo }) {
  const { familyName, firstName, ...rest } = personalInfo
  return (
    <section>
      <p><strong>{familyName} {firstName}</strong></p>
      {Object.entries(rest).map(([key, value]) => (
        <p key={key}><strong>{key}:</strong> {renderValue(key, value)}</p>
      ))}
    </section>
  )
}

export default PersonalInfo
