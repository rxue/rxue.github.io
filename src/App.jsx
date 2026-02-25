import { Routes, Route } from 'react-router'
import CV from './components/CV'
import enData from './assets/cv.json'
import fiData from './assets/cv_fi.json'
import metadata from './assets/cv_metadata.json'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CV data={enData} metadata={metadata} mode="html" />} />
      <Route path="/en/pdf" element={<CV data={enData} metadata={metadata} mode="pdf" />} />
      <Route path="/fi" element={<CV data={fiData} metadata={metadata} mode="html" />} />
      <Route path="/fi/pdf" element={<CV data={fiData} metadata={metadata} mode="pdf" />} />
    </Routes>
  )
}

export default App
