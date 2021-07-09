import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import register_photo from './photos/register_photo.jpg';
export default class Footer extends React.Component {

  render() {
    return (
      <MDBFooter style={{ backgroundColor: "#1e1e20" }} class="page-footer font-small pt-0" >

        <MDBContainer class="mt-4 mb-3 text-center text-md-left">
          <MDBRow class="mt-3" >
            <MDBCol md="3" lg="4" xl="3" class="mb-4">
              <h6 class="text-uppercase font-weight-bold">
                <strong style={{ color: "white", font:"calibiri" }}><u>eCube Movies</u></strong>
              </h6>
              
              <img src={register_photo} alt ="movie" height="150" width="200"/>
              <p style={{ color: "white" }}>
                  </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" class="mb-4">
              <h6 class="text-uppercase font-weight-bold">
                <strong style={{ color: "white" }}><u>Products</u></strong>
              </h6>

              <p>
                <a href="#!" style={{ color: "white" }}><u></u>Movies</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}><u></u>Shows</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}><u></u>Live Events</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}><u></u>Latest Articles</a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" class="mb-4">
              <h6 class="text-uppercase font-weight-bold">
                <strong style={{ color: "white" }}><u>Useful links</u></strong>
              </h6>
 
              <p>
                <a href="#!" style={{ color: "white" }}>Your Account</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}>Become a member</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}>Promotions</a>
              </p>
              <p>
                <a href="#!" style={{ color: "white" }}>Help</a>
              </p>
            </MDBCol>
            <MDBCol md="10" lg="3" xl="3" class="mb-5">
              <h6 class="text-uppercase font-weight-bold">
                <strong style={{ color: "white" }}><u>Contact</u></strong>
              </h6>
 
              <p style={{ color: "white" }}>
                <i class="fa fa-home mr-3" />Customer Service, 
                  </p>
                  <p style={{ color: "white" }}>
                <i class="fa fa-home mr-3" />eCube Movies, USA
                  </p>
              <p style={{ color: "white" }}>
                <i class="fa fa-envelope mr-3" /> <u>info@ecubemovies.com</u>
                  </p>
              <p style={{ color: "white" }}>
                <i class="fa fa-phone mr-3" /> +1 (999) 999-9999
                  </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    )
  }
}