import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaistNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'

function App() {

  const pricingPromise = fetch('pricingData.json')
  .then(res=>res.json());

  return (
    <>
     
     <header>
      <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
     </header>

     <main>
<Suspense fallback={<span className="loading loading-ring loading-lg"></span>
} >
  <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
</Suspense>
     </main>
     
    </>
  )
}

export default App
