import PersonalInfo from './PersonalInfo'
import Experience from './Experience'

function CV({ json: json }) {
  return (
    <>
      <div className="watermark">implemented in Vibe Coding</div>
      <PersonalInfo personalInfo={json.personalInfo} />
      <hr className="section-divider" />
      <Experience experience={json.experience} />
    </>
  )
}

export default CV
