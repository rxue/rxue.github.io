import { useState, useEffect } from 'react'
import jsPDF from 'jspdf'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import './App.css'

function App() {
  const [cv, setCv] = useState(null)

  const handleDownloadPDF = (e) => {
    e.preventDefault()
    const doc = new jsPDF()
    const pageHeight = doc.internal.pageSize.height
    const margin = 20
    const maxWidth = 170
    let y = margin

    const checkPageBreak = (needed = 10) => {
      if (y + needed > pageHeight - margin) {
        doc.addPage()
        y = margin
      }
    }

    // Name
    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.text(`${cv.personalInfo.firstName} ${cv.personalInfo.familyName}`, margin, y)
    y += 10

    // Personal info
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    const { familyName, firstName, ...rest } = cv.personalInfo
    for (const [key, value] of Object.entries(rest)) {
      checkPageBreak()
      doc.text(`${key}: ${value}`, margin, y)
      y += 6
    }
    y += 6

    // Work Experience
    checkPageBreak(10)
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Work Experience', margin, y)
    y += 8

    for (const job of cv.experience) {
      checkPageBreak(16)
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text(job.title, margin, y)
      y += 6

      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      checkPageBreak()
      doc.text(`${job.employer} | ${job.period}`, margin, y)
      y += 5
      checkPageBreak()
      doc.text(`${job.sector} — Working language: ${job.workingLanguage}`, margin, y)
      y += 6

      for (const r of job.responsibilities) {
        const lines = doc.splitTextToSize(`• ${r}`, maxWidth)
        checkPageBreak(lines.length * 5)
        doc.text(lines, margin, y)
        y += lines.length * 5
      }
      y += 4

      const stackLines = doc.splitTextToSize(`Tech stack: ${job.technicalStack.join(', ')}`, maxWidth)
      checkPageBreak(stackLines.length * 5)
      doc.setFont('helvetica', 'italic')
      doc.text(stackLines, margin, y)
      doc.setFont('helvetica', 'normal')
      y += stackLines.length * 5 + 6
    }

    doc.save('cv.pdf')
  }

  useEffect(() => {
    fetch('/cv.json')
      .then(res => res.json())
      .then(data => setCv(data))
  }, [])

  if (!cv) return <p>Loading...</p>

  return (
    <>
      <a href="#" onClick={handleDownloadPDF}>Download PDF</a>
      <PersonalInfo personalInfo={cv.personalInfo} />
      <hr style={{borderColor: '#f8f8f8'}} />
      <Experience experience={cv.experience} />
    </>
  )
}

export default App
