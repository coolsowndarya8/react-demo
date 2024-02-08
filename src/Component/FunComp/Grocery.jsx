import React, { useState }  from "react";

function Grocery () {
   const [text,settext]=useState ("")
   const [add,setadd]=useState([])

   const handletext=(event) => {
    settext(event.target.value)
    
   }

   const handleadd=() => {
    setadd([...text,add])
   }

    return (
        <div> 
            <h1>Grocery Bud</h1>
            <input type="text area" placeholder="Enter Items" onChange={handletext}/>
            <button onClick={handleadd}>Add item </button>
            <div>
                
                {add.map((da,i)=> (
                  <div key={i}>
                    <h1>{da}</h1>
                    </div>
                )            
                )}



            </div>




        </div>
    )
}




export default Grocery 