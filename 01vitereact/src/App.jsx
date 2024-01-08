import Tut from "./tut"
function App() {
  const username = "Dhruv"
  

  return (
    <> 
        <Tut />
        <h1> React is been learnt {username}</h1>
        <p>test para</p>
    </>

      
  )
}

export default App

/*JSX can return only single element at once
to resolve this issue div wrapper is used and since it has to be used quite often it's replaced by
<> </>  (fragment)*/

/*{username} such is termed as evaluated expression (JS)*/

