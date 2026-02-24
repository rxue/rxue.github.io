function DownloadPDF() {
  const handleDownloadPDF = async () => {
    const res = await fetch('/api/generate-pdf')
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'cv.pdf'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <a href="#" className="download-link" onClick={handleDownloadPDF}>Download PDF</a>
  )
}

export default DownloadPDF
