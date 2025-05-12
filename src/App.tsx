import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import InnovationPage from './pages/InnovationPage'
import SolutionsPage from './pages/SolutionsPage'
import EnergyPage from './pages/EnergyPage'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/innovationen" element={<InnovationPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/energy" element={<EnergyPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
