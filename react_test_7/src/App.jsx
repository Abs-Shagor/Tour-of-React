import './App.css'
import AwesomeComponents from './Components/AwesomeComponents'
import Charts from './Components/Charts'
import Navbar from './Components/Navbar'


function App() {

  return (
    <>
        <div className=' max-w-[1280px] xl:mx-auto m-2 flex flex-col gap-10'>
              <Navbar></Navbar>
              <Charts></Charts>
              <AwesomeComponents></AwesomeComponents>
        </div>
    </>
  )
}

export default App
