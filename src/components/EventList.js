import React ,{Component} from 'react'
import EventItem from './EventItem'
import {connect} from 'react-redux'
import Loading from './Loading'
import Header from './Header'
// eslint-disable-next-line
import { Card, Row, Col } from 'react-bootstrap'

import { fetchEventsBegin } from "../Actions/EventActions"
import { bindActionCreators} from 'redux';

class EventList extends Component{

//    constructor (){
//        super()
//        this.state={
//            products:json.products //added a state which will be used in render method to iterate over
//        }
//    }
   componentDidMount(){
       this.props.fetchEventsBegin()
   }

    render(){
         console.log('Event props',this.props.events)
        //using map method to iterate over array products
        const list= this.props.events && this.props.events.map((item)=><EventItem key={item.id} entity={item}></EventItem>)
        console.log('list:',list)
        return (
            <div>
                <Header/>
                <Loading/>
                <Row>
            <Col>
                {list}
                </Col>
                </Row>
                <br/>   
                <br/>      
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log('mapStateToProps',state)
      return {
          events:state.preducer.items
      }
  }
  
//   const mapDispatchToProps=(dispatch)=>{
//       return {
//           fetchProducts:()=>dispatch(fetch_products_api())
//       }
//   }
  
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchEventsBegin},dispatch)
}

  //export default EventList
  export default connect(mapStateToProps,mapDispatchToProps)(EventList)