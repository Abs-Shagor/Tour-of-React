import './App.css'
import Sunglasses from './Components/Sunglasses/Sunglasses'
import Watches from './Components/Watches/Watches'
import CustomAPI from './Components/CustomAPI/CustomAPI'


function App() {

  return (
    <>
      <h1>Welcome To React World</h1>
      <hr />

      <Watches></Watches>
      <hr />
      <Sunglasses></Sunglasses>
      <hr />
      <CustomAPI></CustomAPI>
    </>
  )
}

export default App
