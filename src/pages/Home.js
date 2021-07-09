import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NowPlaying from "../components/NowPlaying";
import UpComing from "../components/UpComing";
import "../components/css/home.css";
import Header from "../components/Header";
import MovieComponent from "../components/MovieComponent";

export default class Home extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      date: new Date(),
      nowPlaying: [],
      upComing: [],
      movieList: [],
    };
  }
  render() {
    return (
      <div>
        <Header />
        <MovieComponent id="carousal" />
        <NowPlaying />
        <UpComing />
      </div>
    );
  }
}

