import { useState } from 'react'

export default function Form(){
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:""
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

    return (
        <>
            <div className="form-data-value">
                <div>{formData.firstName}</div>
                <div>{formData.lastName}</div>
            </div>
            <div>
                <form className='form'>
                    <input 
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    className="form-input" />

                    <input 
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    className="form-input" />

                    <button type="submit" className='style-button'>Submit</button>
                </form>
            </div>
        </>
    )
}

