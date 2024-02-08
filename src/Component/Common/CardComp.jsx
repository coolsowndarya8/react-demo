import React  from "react";
import{
        Card,CardTitle,CardBody, CardSubtitle,CardText,Button 
} from "reactstrap"

function CardComp(props){
    return(
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    height="300px" width="200px"src ={props.img}
  />
  <CardBody>
    <CardTitle tag="h5">
    {props.tittle}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    > ruppee : {props.price} 
          </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
    )
}
      

export default CardComp