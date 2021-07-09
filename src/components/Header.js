import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import "./css/Header.css";
import Axios from "axios";

export default class Header extends React.Component {

  isUserLoggedIn = false;
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      movieList: [],
      searchedList: []
    }
  }

  async componentDidMount() {
    Axios({
      method: "GET",
      url: "https://group26-project.herokuapp.com/currectUser"
    }).then((response) => {
      if (response.data.message === false) {
        this.isUserLoggedIn = false;
        this.setState({
          show: true
        })
      }
      else {
        this.isUserLoggedIn = true;
        this.setState({
          show: false
        })
      }

    });

    Axios({
      method: "GET",
      url: "https://group26-project.herokuapp.com/movie/getAllMovies"
    }).then((response) => {
      this.setState({ movieList: response.data })
    });
  }


  async logout() {
    await Axios({
      method: "GET",
      url: "https://group26-project.herokuapp.com/logout"
    }).then((response) => {
      window.location.href = "/"
    });

  }

  async login() {
    window.location.href = "/login"
  }


  handleSearch(e) {
    const searchedString = e.target.value;
    var tempMovieList = []
    if (searchedString.length === 0 || searchedString === '') {
      tempMovieList = []
      this.setState({ searchedList: tempMovieList })
    }

    this.state.movieList.map((movie, index) => {
      if (movie.name.toLowerCase().includes(searchedString.toLowerCase()) && searchedString !== '' && searchedString !== '-') {
        tempMovieList.push(movie)
      }
      return tempMovieList
    })
    this.setState({ searchedList: tempMovieList })

  }

  render() {
    return (
      <div >
        <div class="flex-container">
          <h1 class="title" id="eCube Movies" style={{ "margin-left": "40px", "font-family": "cursive", "font":"calibiri", "margin-top": "0px","color":"white" }}>eCube<label style={{ "color": "white" }}>Movies</label></h1>
          <div class="col-sm-5 mt-3" 
          >
          <Form style={{ "margin-right":"auto","margin-top":"-8px", "height":"35px", "width":"300px", "font":"calibiri" }}>
          <Form.Control type="text" 
          id="searchMovie"
          onChange={this.handleSearch.bind(this)}
          placeholder="Search Movie"
          
           /> 
           </Form>
          </div>
          <div className={"col-md-4 mt-2"}>
            {
              this.state.show ?
                <div id="login">
                  <button  type="button" class="btn btn-dark" style={{ "margin-right": "-100px", "margin-top":"-2px" }} onClick={this.login}>Login</button>
                </div>
                :
                <div id="logout">
                  <button type="button" class="btn btn-dark" onClick={this.logout} >Logout</button>
                </div>

            }
          </div>
        </div>

        <div id="zee">
          {this.state.searchedList.map((movie, index) => {
            return (
              <Link to={"/movie/" + movie._id}><p>{movie.name}</p></Link>
            )
          })}
        </div>
        <ul class="ul">
          <li class="menu-link">
            <Link to="/">Home</Link>
          </li>
          <li class="menu-link">
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li class="menu-link">
            <Link to="/LatestMovies">Latest Movies</Link>
          </li>
          <li class="menu-link">
            <Link to="/LiveEvents">Live Events</Link>
          </li>
          <li class="menu-link">
            <Link to="/offers">Offers</Link>
          </li>

          <li class="menu-link">
            <Link to="/contactus">Contact Us</Link>
          </li>
          {
            this.state.show ? null :
              <li class="menu-link">
                <Link to="/bookings">Bookings</Link>
              </li>
          }
          {
            this.state.show ? null :
              <li class="menu-link">
                <Link to="/MyAccount">MyAccount</Link>
              </li>
          }
        </ul>
      </div>
    );
  }
}
