import React ,{Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link} from 'react-router-dom'

class EventItem extends Component{
   
    constructor(props){
        super(props)
        this.state={
          entity : props.entity
        }
    }
    render(){
        console.log(this.state.entity)
        return (
            <div>
                
               <Card style={{ width: '18rem',height:'41rem',float:'left'}}>
               {/*  <Card.Img variant="top" src={this.state.entity.img} /> */}
                <Card.Body>
                    <Card.Title>{this.state.entity.title}</Card.Title>
                    <Card.Text>
                    {this.state.entity.description}
                    </Card.Text>
                    <Button variant="link"><Link to={`/event/${this.state.entity.id}`}>Go to details</Link></Button>
                </Card.Body>
                </Card>                
            </div>
            
        )
    }
}

export default  EventItem 
