
import React from "react";
import "../components/css/SeatSelectionCSS.css";
import BookingData from "./BookingData";
import Header from "./Header";

export class SeatSelectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: BookingData.getName(),
      date: BookingData.getDate(),
      time: BookingData.getTime(),
      theater: BookingData.getTheater(),
    };
    this.seatSelected = this.seatSelected.bind(this);
  }

  seatSelected(event) {
    event.preventDefault();
    var choices = document.getElementsByName("seat");
    var seats = [];
    for (var i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        seats.push(choices[i].value);
      }
    }
    BookingData.setSelectedSeats(JSON.stringify(seats));
    window.location.href = "/payment";
  }

  render() {
    const arr = [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
      "A11",
      "A12",
      "B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "B7",
      "B8",
      "B9",
      "B10",
      "B11",
      "B12",
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "C6",
      "C7",
      "C8",
      "C9",
      "C10",
      "C11",
      "C12",
      "D1",
      "D2",
      "D3",
      "D4",
      "D5",
      "D6",
      "D7",
      "D8",
      "D9",
      "D10",
      "D11",
      "D12",
    ];

    const booked = [
      "E1",
      "E2",
      "E3",
      "E4",
      "E5",
      "E6",
      "E7",
      "E8",
      "E9",
      "E10",
      "E11",
      "E12",
    ];
    return (
      <div>
        <Header isUserLoggedIn="true" />

        <div class="container" id="main-div">
          <div>
            <div class={"row"}>
              <div class={"col-md-3"}>
                <div class="box gray">Available Seats</div>
              </div>
              <div class={"col-md-3"}>
                <div class="box black">Not Available Seats</div>
              </div>
              <div class={"col-md-3"}>
                <div class="box blue">Your Seats</div>
              </div>
            </div>
          </div>
          <form id="reservation">
            <div class="container">
              <div class={"row"}>
                {arr.map((item, index) => (
                  <div class="col-md-1">
                    <input
                      id={index}
                      class="seat-select"
                      type="checkbox"
                      value={item}
                      name="seat"
                    />
                    <label htmlFor={index} class="seat">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
              <div class={"row"}>
                {booked.map((item, index) => (
                  <div class="col-md-1">
                    <input id={index + "seat"} class="seat-select" />
                    <label htmlFor={index + "seat"} class="seat-booked">
                      {item}
                    </label>
                  </div>
                ))}
              </div>

              <div class="box screen">Screen this Way</div>
            </div>
          </form>
          <div class="row">
            <div class={"col-md-12 mt-3"}>
              <button
                type="button" class="btn btn-dark"
                onClick={this.seatSelected}
                id={"submit"}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
