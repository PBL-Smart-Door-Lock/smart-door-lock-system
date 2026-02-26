import { Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import AccessLogs from './pages/AccessLogs'
import FaceManagement from './pages/FaceManagement'
import Architecture from './pages/Architecture'
import Components from './pages/Components'
import Security from './pages/Security'
import About from './pages/About'

function App() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <div className="app-layout">
      {!isLanding && <Sidebar />}
      <div className={`main-content ${isLanding ? 'landing-page' : ''}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/access-logs" element={<AccessLogs />} />
          <Route path="/face-management" element={<FaceManagement />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/components" element={<Components />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
