import React, { useState } from "react";

let count = 0

function FormReact() {

    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [email, setemail] = useState("")
    const [pro, setpro] = useState(false)

    const handlename = (event) => {
        setname(event.target.value)
    }
    const handleage = (event) => {
        setage(event.target.value)
    }
    const handleemail = (event) => {
        setemail(event.target.value)
    }

    const handlesubmit = (event) => {
        event.preventDefault()
        setpro(true)
    }


    return (
        <div>
            <h1>Register Form</h1>
            
            {!pro ?
                <form>
                    <label>Name</label>
                    <input placeholder="Enter your name" onChange={handlename} />
                    <br /> <br />
                    <label>Age</label>
                    <input placeholder="Enter your age" onChange={handleage} />
                    <br /> <br />
                    <label>Email</label>
                    <input placeholder="Enter your email" onChange={handleemail} />
                    <br /> <br />
                    <button onClick={handlesubmit}> Submit</button>
                </form>
                :
                <h1> Your response saved </h1>
            }
            {pro &&

                <div>
                    <h1> Name : {name}</h1>
                    <h1> Age : {age}</h1>
                    <h1> Email : {email}</h1>

                </div>
            }



        </div>
    )
}

export default FormReact