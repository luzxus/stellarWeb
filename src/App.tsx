import './index.css'
import Service from './components/Service'
import Header from './components/Header'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Team from './components/Team'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="main-container block h-full w-full relative">
      <div>
        <Header />
        <Service />
        <Features />
        <Testimonials breakpoint="desktop" />
        <CTA />
        <Team />
        {/*  <Portfolio /> */}
        <Pricing />
        <Footer />
      </div>
    </div>
  )
}

export default App
