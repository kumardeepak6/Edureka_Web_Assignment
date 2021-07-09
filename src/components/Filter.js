import React, { Component } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

class Genre extends Component {
  render() {
    return (
      <div>
        <label>Genre</label>
        <ul>
          <button type="button" class="btn btn-dark">Horror</button>

          <br />
          <br />
          <button type="button" class="btn btn-dark">Sports</button>
          <br />
          <br />
          <button type="button" class="btn btn-dark">Comedy</button>
          <br />
          <br />
          <button type="button" class="btn btn-dark">Science Fiction</button>
          <br />
          <br />
          <button type="button" class="btn btn-dark">Action</button>
          <br />
          <br />
          <button type="button" class="btn btn-dark">Animation</button>
          <br />
          <br />
          <button type="button" class="btn btn-dark">Others</button>
          <br />
        </ul>
      </div>
    );
  }
}
class SortBy extends Component {
  render() {
    return (
      <div>
        <label>SortBy</label>
        <ul>
          <button type="button" class="btn btn-dark">Date</button>
          <br />
          <br />
          <button type="button" class="btn btn-dark">Popularity</button>
          <br />
          <br />
          <button type="button" class="btn btn-dark">Rating</button>
          <br />
        </ul>
      </div>
    );
  }
}
class Language extends Component {
  render() {
    return (
      <div>
        <label>Language</label>
        <ul>
          <button type="button" class="btn btn-dark">English</button>
        </ul>
      </div>
    );
  }
}
class Mode2D3D4DX extends Component {
  render() {
    return (
      <div>
        <label>Mode2D3D4DX</label>
        <ul>
          <button type="button" class="btn btn-dark">2D</button>
          <br />
          <br />
          <button type="button" class="btn btn-dark">3D</button>
          <br />
          <br />
          <button type="button" class="btn btn-dark">4DX</button>
          <br />
        </ul>
      </div>
    );
  }
}

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGenreSwitch: false,
      showLanguageSwitch: false,
      showSortBySwitch: false,
      show2D3D4DXSwitch: false,
    };
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <div>
              <Row>
                <Col sm={6}>
                  <Row>
                    <button type="button" class="btn btn-dark"
                      variant="outline-primary"
                      onClick={() =>
                        this.setState({
                          showGenreSwitch: true,
                          show2D3D4DXSwitch: false,
                          showLanguageSwitch: false,
                          showSortBySwitch: false,
                        })
                      }
                    >
                      Genre
                    </button>
                  </Row>
                  <br />
                  <Row>
                    <button type="button" class="btn btn-dark"
                      variant="outline-primary"
                      onClick={() =>
                        this.setState({
                          showSortBySwitch: true,
                          show2D3D4DXSwitch: false,
                          showLanguageSwitch: false,
                          showGenreSwitch: false,
                        })
                      }
                    >
                      SortBy
                    </button>
                  </Row>
                  <br />
                  <Row>
                    <button type="button" class="btn btn-dark"
                      variant="outline-primary"
                      onClick={() =>
                        this.setState({
                          showLanguageSwitch: true,
                          show2D3D4DXSwitch: false,
                          showGenreSwitch: false,
                          showSortBySwitch: false,
                        })
                      }
                    >
                      Language
                    </button>
                  </Row>
                  <br />
                  <Row>
                    <button type="button" class="btn btn-dark"
                      variant="outline-primary"
                      onClick={() =>
                        this.setState({
                          show2D3D4DXSwitch: true,
                          showGenreSwitch: false,
                          showLanguageSwitch: false,
                          showSortBySwitch: false,
                        })
                      }
                    >
                      2D/3D/4DX
                    </button>
                  </Row>
                </Col>
                <Col sm={4}>
                  <div class="container">
                    {this.state.showGenreSwitch ? <Genre /> : null}
                    {this.state.showSortBySwitch ? <SortBy /> : null}
                    {this.state.showLanguageSwitch ? <Language /> : null}
                    {this.state.show2D3D4DXSwitch ? <Mode2D3D4DX /> : null}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn btn-dark" onClick={this.props.onHide}>Apply</button>
        </Modal.Footer>
      </Modal>
    );
  }
}
