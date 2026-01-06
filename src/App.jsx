import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageLandingPage from './components/LandingPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LanguageLandingPage />} />
          <Route path="/landing" element={<LanguageLandingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
