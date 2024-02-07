import React, { useEffect, useState } from "react";
import CardComp from "../Common/CardComp";

function ApiCallComp() {

    const [resdata,setresdata] = useState([])
 
    const handleapi =async()=>{
        const response = await fetch ("https://fakestoreapi.com/products")

        const data = await response.json();
        setresdata(data)
        console.log(data);
    };


  useEffect(()=>{
    handleapi()
  },[])
   return(
    <div> 
         
      <div className="container"> 
      <div className="row"> 
      
      {resdata.filter((tod)=> tod.price>60).map((photos,i)=>(
        <div className="col-3">
       <div key={i}>
        <CardComp tittle ={photos.title} price={photos.price} img={photos.image}/>
        
        </div>
        </div>
        
       
       
      ))}    
    
    </div>
    </div> 
     
   

    {/* <button onClick={handleapi}> ApiCall </button>     */}
        
    </div>
   )


}
export default ApiCallComp