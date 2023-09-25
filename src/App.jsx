import { useState, useEffect } from 'react'
import Form from './components/Form'
import './App.css'

function App() {

  const [userData, setUserData] = useState({
    id: "",
    username: "",
    password: "",
    role: ""
  })

function handleSubmit(event){
  event.preventDefault()
  console.log(formData)
}

function callApi(){
  console.log("Fetching api")
  fetch(`https://localhost:7260/get`)
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(error => console.error(error))
  console.log(userData)
}

  return (
    <>
      <Form />
      <button onClick={callApi}>Call API</button>
    </>
  )
}

export default App
