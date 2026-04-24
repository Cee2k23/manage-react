import { useState } from 'react'
import reactLogo from './assets/design/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/design/hero.png'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
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
      </section>
    </main>
  )
}

export default App
