import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/App/Navbar'
import Doctor from './components/doctor/Doctor'
import Footer from './components/footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Navbar />
      <Doctor />
      <Footer />
   </div>
  )
}

export default App
