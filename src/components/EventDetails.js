import React from 'react'
import Header from './Header'

class EventDetails extends React.Component{
    render(){
        const {params}  = this.props.match
        return (
            <div>
                <Header/>
                  <h1>EventDetails The event you have selected with id :{params.id}</h1>
            </div>
        )
       
    }
}

export default EventDetails 