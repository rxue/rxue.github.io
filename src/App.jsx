import { Routes, Route } from 'react-router'
import CV from './components/CV'
import cv from './assets/cv.json'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CV json={cv} mode="html" />} />
      <Route path="/pdf" element={<CV json={cv} mode="pdf" />} />
    </Routes>
  )
}

export default App
