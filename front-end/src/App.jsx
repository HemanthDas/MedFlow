import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/App/Navbar'
import Doctor from './components/doctor/Doctor'
import Footer from './components/footer/Footer'
import Promote from './components/promote/Promote'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Navbar />
      <Doctor />
      <Promote />
      <Footer />
   </div>
  )
}

export default App
