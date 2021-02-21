import React, { Component } from 'react';

export class MarsImages extends Component {
  constructor(props) {
      super(props);
      this.state = {
        images: [],
        rover: 'curiosity'
      }
  }

  getData = async (rover) => {

    const api_key = 'Kcscv2CEbTduu4JMlB5U5JHzNHBTQEGkPfZt0DWj';
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=888&api_key=${api_key}`;
    const call = await fetch(url);
    const data = await call.json();
    console.log('rover pics:',data);

    this.setState({
      images: data.photos
    });

  }

  handleRoverChange = (e) => {
    this.setState({
      rover: e.target.value
    }, () => {
      this.getData(this.state.rover);
    });
  }

  delayAnimation = (i,e) => {
    e.target.style.animationDelay = .25*i+'s'; 
  }


  componentDidMount () {
    console.log('mount')
    if(this.props.cache.length == 0){
      this.getData(this.state.rover);
    }
  }

  componentWillUnmount() {
    if(this.state.images.length != 0){
      this.props.handleCache(this.state.images);
    }
  }

  render() {
    


    if (this.state.images.length == 0 && this.props.cache == 0) {
      return <div id="spinner">Loading Data...<span></span></div>;
    } 
    
    let images = this.props.cache.length == 0 ? 
      this.state.images.map((img, i) => <img onLoad={(e) => this.delayAnimation(i,e)} loading="lazy" key={i} src={img.img_src} /> ) :
      this.props.cache.map((img, i) => <img onLoad={(e) => this.delayAnimation(i,e)}  loading="lazy" key={i} src={img.img_src} /> );
    

    return (
      <div className="wrapper">
          <select id="rovers" onChange={this.handleRoverChange}>
            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
          </select>
        <div className="image-grid">
          {images}
        </div>
      </div>
    );
  }
}