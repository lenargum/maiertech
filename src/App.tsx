import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import InnovationPage from './pages/AreaPages/InnovationPage'
import SolutionsPage from './pages/AreaPages/SolutionsPage'
import EnergyPage from './pages/AreaPages/EnergyPage'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router basename={import.meta.env.BASE_URL}>
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
