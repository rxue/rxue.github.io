function renderValue(key, value, mode) {
  if (key === 'github') return <a href={value} target="_blank" rel="noreferrer">{value}</a>
  if (key === 'phone' && mode === 'html') return <span style={{backgroundColor: 'black', color: 'black', cursor: 'default', userSelect: 'none'}}>{value}</span>
  return value
}

function PersonalInfo({ personalInfo, mode }) {
  const { familyName, firstName, ...rest } = personalInfo
  return (
    <section>
      <p><strong>{familyName} {firstName}</strong></p>
      {Object.entries(rest).map(([key, value]) => (
        <p key={key}><strong>{key}:</strong> {renderValue(key, value, mode)}</p>
      ))}
    </section>
  )
}

export default PersonalInfo
