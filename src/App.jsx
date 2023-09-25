import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:""
  })

function handleChange(event){
  console.log(event)
  const{name, value} = event.target
  setFormData(prevFormData => {
    return {
      ...prevFormData,
      [name]: value
    }
  })
}

  return (
    <>
      <div>
        {formData.firstName} {formData.lastName}
      </div>
      <div>
        <form>
            <input 
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName} />
            <input 
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName} />
            <button type="submit">Submit</button>
          </form>
      </div>
    </>
  )
}

export default App
