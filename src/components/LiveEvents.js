import React from "react";
import Header from './Header'
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import Axios from "axios";
import "./css/UpComingCss.css"


export default class LiveEvents extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      eventList: [],
      moreEvents: false
    }
  }
  async componentDidMount() {
    // GET request using axios with set headers
    const headers = {
      'Authorization': 'Bearer 7Y6C9Wle9gx0t47e8qQ92pousyMU04RoCvVk7fYk'

    };
    Axios.get("https://api.predicthq.com/v1/events", { headers })
      .then(response => this.setState({
        eventList: response.data.results
      }),

      );

    //console.log(response.data)
  }

  handleSeeMore() {
    this.setState({ moreEvents: true })
  }

  handleSeeLess() {
    this.setState({ moreEvents: false })
  }

  render() {
    const { eventList } = this.state;
    return (

      <div style={{ "margin-bottom": "100px" }}>
        <Header />
        <h1><u>Welcome Guys. Here are the Live Events happening around you: </u></h1>
        <p></p>
        <p></p>
        {this.state.eventList.map(item => {
          return (
            <div>
              <h4> Event Id: {item.id}</h4>
              <h4>Event Title : {item.title}</h4>
              <h4>Event Description : {item.description}</h4>
              <h4>Event Category : {item.category}</h4>
              <div>
                <h5>Event Program</h5>
                <p><h4>Event Details:</h4> {item.entities.map(entity=>{
                  return(
                    <div>
                    <h6>Program Name : {entity.name}</h6>
                    <h6>Program Location : {entity.formatted_address}</h6>
                    <h6>Program Type : {entity.type}</h6>
                    </div>
                    
                  )
                  
                })} </p>
                 <h4>Event Start Date : {item.start}</h4>
                 <h4>Event End Date : {item.end}</h4>
                <hr/>
              </div>
              
            </div>
            
          );
        })
        }
      </div>

    )
  }


}

