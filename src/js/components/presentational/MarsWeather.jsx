import React, { Component } from 'react';

export class MarsWeather extends Component {
  constructor(props) {
      super(props);
      this.state = {
        weather: []
      }
  }

  getData = async () => {

    const api_key = 'Kcscv2CEbTduu4JMlB5U5JHzNHBTQEGkPfZt0DWj';
    const url = `https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`;
    const call = await fetch(url);
    const data = await call.json();
    console.log('mars weather:',data);

    if (this.state.weather.length == 0){
      this.setState({
        weather: data
      });
    }
  }

  componentDidMount () {
    this.getData();
  }

  render() {
    if (this.state.weather.length == 0) {
      return <div id="spinner">Loading Data...<span></span></div>;
    } 
    let sols = this.state.weather.sol_keys.map((sol, i) => {
      let s = this.state.weather[sol];
      let day = new Date(s.First_UTC).toDateString();
      console.log(s)
      return(
      <div className="sol" key={i}>
        <h4>Sol {sol}</h4>
        <p>{day}</p>
      </div>)
    });

    let season = this.state.weather.sol_keys.map((sol, i) => {
      let s = this.state.weather[sol];

      return(
        i == 0 &&
        <p className="season" key={i}>Season: {s.Season}</p>
      )
    });
    

    return (
      <div className="wrapper">
         {season}
        <div className="sols">
        {sols}
        </div>
       
      </div>
    );
  }
}