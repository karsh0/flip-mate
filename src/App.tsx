
import './App.css'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'

function App() {
  return <div className='w-full min-w-0 overflow-hidden flex flex-col justify-center items-center'>
    <Navbar/>
   <div className='max-w-6/7 overflow-hidden md:max-w-7xl flex flex-col justify-center items-center gap-20'>
   <Hero/>
   {/* <Features/>
   <Content/>
   <Integration/>
   <NewsLetter/> */}
   </div>
   <Footer/>
    {/* 
    FIX: navbar
    add card/ features section
    */}
  </div>
}

export default App
