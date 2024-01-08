
import './App.css'
import Cards from './components/Cards1'

function App() {
    let myObj= {
    username: "dhruv",
    age: 20
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-4'>Tailwind Test</h1>
      <Cards username="Dhruv" btnText="click me" channel="Mowgli Vloggers" someObj = {myObj} someArr ={newArr} />
      <Cards username="aditya" btnText="visit me"/>
    </>
  )
}

export default App
