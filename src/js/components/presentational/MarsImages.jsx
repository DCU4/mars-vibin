import React, { Component } from 'react';

export class MarsImages extends Component {
  constructor(props) {
      super(props);
      this.state = {
        images: []
      }
  }

  getData = async () => {

    const api_key = 'Kcscv2CEbTduu4JMlB5U5JHzNHBTQEGkPfZt0DWj';
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=MAST&api_key=${api_key}`;
    const call = await fetch(url);
    const data = await call.json();
    console.log('rover pics:',data);

    this.setState({
      images: data.photos
    })

  }

  


  componentDidMount () {
    if(this.props.cache.length == 0){
      this.getData();
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
      this.state.images.map((img, i) => <img loading="lazy" key={i} src={img.img_src} /> ) :
      this.props.cache.map((img, i) => <img loading="lazy" key={i} src={img.img_src} /> );
    

    return (
      <div className="wrapper">
        <div className="image-grid">
          {images}
        </div>
      </div>
    );
  }
}