import React, { Component } from "react";
import CountComp from "./CountComp";



class Product extends Component{
    state={
        moviename : "LEO"  
    }
    render(){
        return(
            <>
            <h1> Product {this.props.phoneno}</h1>
            <CountComp name={this.state.moviename}/>

            </>
        )
    }
}


export default Product