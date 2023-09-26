import { useState } from 'react'

export default function Form(){
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        role:"User"
        })

    function handleChange(event){
        console.log(event)
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
            ...prevFormData,
            [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        fetch(`https://localhost:7260/post`, {
            method: 'POST',
            headers: { "Content-Type": "application/json "},
            body: JSON.stringify(formData)
        })
        console.log(formData)
    }

    return (
        <>
            <div className="form-data-value">
                <div>{formData.firstName}</div>
                <div>{formData.lastName}</div>
            </div>
            <div>
                <form className='form' onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    placeholder="Username"
                    onChange={handleChange}
                    name="username"
                    value={formData.username}
                    className="form-input" />

                    <input 
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    className="form-input" />

                    <button type="submit" className='style-button'>Create</button>
                </form>
            </div>
        </>
    )
}

