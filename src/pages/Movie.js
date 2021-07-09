import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      name: "",
      date: "",
      language: "",
      genre: "",
      type: "",
      description: "",
      img: "",
      trailor: "",
      reviews: []
    };
  }

  async componentDidMount() {
    axios({
      method: "Post",
      url: "https://group26-project.herokuapp.com/movie/getMovieById",
      data: { "_id": this.state.id }
    }).then((response) => {
      if (response) {
        this.setState({
          name: response.data[0].name,
          date: response.data[0].date,
          language: response.data[0].language,
          genre: response.data[0].genre,
          type: response.data[0].type,
          description: response.data[0].description,
          img: response.data[0].img,
          trailor: response.data[0].trailor
        });
      }
    })


    axios({
      method: "post",
      url: "https://group26-project.herokuapp.com/review/getReviews",
      data: { "movie_id": this.state.id }
    }).then((response) => {
      this.setState({ reviews: response.data })
    })
  }


  submitReview(e) {
    e.preventDefault()
    const review = document.getElementById('review').value;
    axios({
      method: "POST",
      url: "https://group26-project.herokuapp.com/review/addReview",
      data: { "review": review, "movie_id": this.state.id }
    }).then((response) => {
      if (response.data.message === true) {
        alert("added successfull")
      }
      else if (response.data.message === false) {
        alert("Some error occured")
      }
      else {

      }
    })
  }
  addList(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://group26-project.herokuapp.com/watchList/addList",
      data: { "movie_id": this.state.id }
    }).then((response) => {
      if (response.data.message === false) {
        alert("Please login to add movie")
      }
      else if (response.data.message === true) {
        alert("Movie added successfully")
      }
    })

  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col>
              <Row xs={5} md={2}>
                <Image
                  src={this.state.img}
                  thumbnail
                />
              </Row>
              <Row xs={5} md={2}>
                <label>Movie: {this.state.name}</label>
              </Row>
              <Row xs={5} md={2}>
                <label>Language: {this.state.language}</label>
              </Row>
              <Row xs={5} md={2}>
                <label>Genre: {this.state.genre}</label>
              </Row>
              <Row xs={5} md={1}>
                <label>Release Date: {this.state.date}</label>
              </Row>
              <Row xs={5} md={2}>
                <Col><button type="button" class="btn btn-dark"
                  variant="primary"
                  onClick={this.addList.bind(this)}>
                  Add to Watch List
                </button></Col>
                <Col>
                  <Link to={"/book/" + this.state.id}>
                    <button type="button" class="btn btn-dark">Book Tickets</button>
                  </Link></Col>

              </Row>
            </Col>
            <Col>
              <iframe width="600"
                height="350"
                style={{ "border": "7px solid black", "padding": "5px" }}
                src={this.state.trailor}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              {/* <iframe></iframe> */}
            </Col>
          </Row>
          <table class="table table-striped">
            <thead>
              <tr>
                <th style={{ "font-size": "30px", "font-weight": "bold" }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ "backgroundColor": "#ccccd2", "border": "3px solid black", "font-size": "20px" }}>{this.state.description}</td>
              </tr>
            </tbody>
          </table>



          <table class="table table-striped">
            <thead>
              <tr>
                <th style={{ "font-size": "30px", "font-weight": "bold" }}>Reviews</th>
              </tr>
              <tr>
                <p>Write a Review:</p>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <form method="post">
                    <fieldset>
                      <textarea
                        class="form-control"
                        type="text"
                        id="review"
                        placeholder="Please write your review here"
                      />
                    </fieldset>

                    <button type="button" class="btn btn-dark"
                    style={{"margin-top":"10px"}}
                      onClick={this.submitReview.bind(this)}
                      id="submit"
                      value="submit" >
                      Submit
                    </button>
                  </form>
                </td>
              </tr>




            </tbody>
            <tbody>
              {
                this.state.reviews.size <= 0 ?
                  <tr>Be the First one to add review</tr>
                  :
                  this.state.reviews.map((r, index) => {
                    return (
                      <tr>
                        <td>{r.email}</td>
                        <td>{r.review}</td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
        </Container>
      </div>
    );
  }
}
