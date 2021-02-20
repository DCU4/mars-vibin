import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { MarsImages } from "../presentational/MarsImages.jsx";
import { MarsWeather } from "../presentational/MarsWeather.jsx";
import { Header } from "../presentational/Header.jsx";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataShowing: 'images',
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
    console.log(this.state.cache)
    return (
      <main>
        <Header 
          dataShowing={dataShowing}
          handleDataChange={this.handleDataChange}
        />
        {dataShowing == 'images' ? (
            <MarsImages 
              cache={this.state.cache}
              handleCache={this.handleCache}
            />
        ) : (
            <MarsWeather />
          )}

      </main>

    );
  }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;

