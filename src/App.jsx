import { useState } from 'react'
import reactLogo from './assets/design/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/design/hero.png'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import HeroSection2 from './components/HeroSection2'
import HeroSection3 from './components/HeroSection3'
import HeroSection4 from './components/HeroSection4'
import Footer from './components/Footer'
import bg from './assets/images/bg-tablet-pattern.svg'

function App() {
 
  return (
    <main className='p-2 borde '>
      <section 
        className='bg-cover bg-center bg-no-repeat space-y-10 ' 
        style={{ backgroundImage: `url(${bg})` }}
        >
        <NavBar />
        <HeroSection />
        <HeroSection2 />
        <HeroSection3 />
        <HeroSection4 />
        <Footer />
      </section>
    </main>
  )
}

export default App
