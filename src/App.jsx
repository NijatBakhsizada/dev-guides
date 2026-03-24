import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PointSystem from './pages/PointSystem.jsx'
import Estimation from './pages/Estimation.jsx'
import CodeReview from './pages/CodeReview.jsx'
import DailyNorms from './pages/DailyNorms.jsx'
import './styles/shared.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/01-point-system" element={<PointSystem />} />
      <Route path="/02-estimation" element={<Estimation />} />
      <Route path="/03-code-review" element={<CodeReview />} />
      <Route path="/04-daily-norms" element={<DailyNorms />} />
    </Routes>
  )
}
