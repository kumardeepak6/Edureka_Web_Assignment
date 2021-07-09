import React from "react";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom"
import Axios from "axios";


export default class WatchListComponent extends React.Component {

  constructor(props){
    super()
    this.state = {movieList:[],
    moreMovies:false,
    email : "",
    name : ""
  }
  }

  async componentDidMount(){
    Axios({
        method : "GET",
        url : "https://group26-project.herokuapp.com/currectUser",
      }).then((response) => {
          if(response.data[0].email){
            this.setState({
              name : response.data[0].name,
              email : response.data[0].email,
            });
        }
        else{
          alert("Please Login First")
          window.location.href="/login";
        }    
      });
    Axios({
        method : "GET",
        url : "https://group26-project.herokuapp.com/watchList/getList",
      }).then((response) =>{
        this.setState({movieList:response.data})
      })  
  }

  removeMovie(e){
    e.preventDefault(); 
    const id = document.getElementById('id').value
    Axios({
      method : "POST",
      url : "https://group26-project.herokuapp.com/watchList/removeMovie",
      data : {"movie_id": id }
    }).then((response) =>{
      if(response.data.message === true){
        alert("movie removed")
        window.location.href="/watchList"
      }
      else{
        alert(response.data.message)
      }
    })  
  }

  render(){
    return(
      <div id="root1">
        <div class="row">
       <h3>Hello {this.state.name}</h3>
        </div>
        <br/>
        {
          this.state.movieList.length > 0 ?
                <div class="row">
                {
                  this.state.movieList.map((movie, index)=>{
                      return(
                          <div class="col-md-3">
                          <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={movie.img} height="200px" width="100px" />
                            <Card.Body>
                              <Card.Title><Link to={"/movie/"+movie._id}>{movie.name}</Link></Card.Title>
                            </Card.Body>
                            <button type="button" class="btn btn-dark" onClick={this.removeMovie.bind(this)} id= "id" value={movie._id} >Remove from Watch List </button>
                          </Card>
                          </div>
                      ) 
                  })
                  }
                  </div>
                  :
                  <h2>You Have No Movies in Watch List</h2>
  }
      </div>
    )
  }
}
