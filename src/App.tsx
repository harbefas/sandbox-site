import { ThemeProvider } from './context/ThemeContext'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Install from './components/Install'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <div className="flex flex-col items-center">
        <Hero />
        <Features />
        <HowItWorks />
        <Install />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
