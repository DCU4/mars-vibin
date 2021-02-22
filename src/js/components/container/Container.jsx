import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { MarsImages } from "../presentational/MarsImages.jsx";
import { MarsWeather } from "../presentational/MarsWeather.jsx";
import { MarsInfo } from "../presentational/MarsInfo.jsx";
import { Header } from "../presentational/Header.jsx";
// import Mars from "./src/img/mars-1024.jpg";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataShowing: 'info',
      cache: []
    }
  }

  handleDataChange = (e) => {
    console.log(e.target.value);
    this.setState({
      dataShowing: e.target.value
    })
  }

  handleCache = (images) => {
    this.setState({
      cache: images
    });
  }

  render() {
    let dataShowing = this.state.dataShowing;
    return (
      <main>
        <img id="mars" src="/mars-1024.png" />
        <Header
          dataShowing={dataShowing}
          handleDataChange={this.handleDataChange}
        />

        {
          dataShowing == 'images' &&
          <MarsImages
            cache={this.state.cache}
            handleCache={this.handleCache}
          />
        }
         {
          dataShowing == 'weather' &&
          <MarsWeather />
        }
         {
          dataShowing == 'info' &&
          <MarsInfo />
        }



      </main>

    );
  }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;

