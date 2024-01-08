import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'


/*function MyApp(){
  return(
    <>
    <h1>Custom App</h1>
    </>
  )
}*/

/*const ReactElement = {
  type : 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'

  },
  children: 'Click me to visit google'
}*/

/*const AnotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)*/

//syntax proper as per render

//proper react syntax as per React render system (bable)

const anotherUser = "Dhruv Rohatgi"
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

//significance of evaluated expression , we cannot write full js code inside an object





ReactDOM.createRoot(document.getElementById('root')).render(
  
    //<ReactElement/>  //synatx was not proper as per custom render
    //Object will not get exceuted
    //AnotherElement
    ReactElement
    //<App/>
  
)

//React uses bundler to improvise syntax etc. (JSX)
