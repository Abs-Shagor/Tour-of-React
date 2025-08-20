import './App.css'
import Charts from './Components/Charts'
import Navbar from './Components/Navbar'


function App() {

  return (
    <>
        <div className=' max-w-[1280px] xl:mx-auto m-2'>
              <Navbar></Navbar>
              <Charts></Charts>
        </div>
    </>
  )
}

export default App
