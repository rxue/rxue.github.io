import { Routes, Route } from 'react-router'
import CV from './components/CV'
import data from './assets/cv.json'
import metadata from './assets/cv_metadata.json'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CV data={data} metadata={metadata} mode="html" />} />
      <Route path="/pdf" element={<CV data={data} metadata={metadata} mode="pdf" />} />
    </Routes>
  )
}

export default App
