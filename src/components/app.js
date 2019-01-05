import React, { Component, Fragment } from 'react';
import watermark from 'watermarkjs';
import InputImgs from './inputImgs'
import {ImgPreview, ImgDownload} from './imgHelpers'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.setImgs = this.setImgs.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ value: value });

    const file = this.fileInput.current.files[0];
    console.log(file.name)
  }

  setImgs(sourceImg, watermarkImg) {
    watermark([sourceImg, watermarkImg])
      .image(watermark.image.lowerRight(0.5))
      .then(result => this.setState({ result: result.src })
        // let a = document.createElement("a");
        // // a.download = "img.png";
        // a.href = result.src;
        // a.text ="dl";
        // a.download = "img.png";
        // document.getElementById('preview').appendChild(a);
      );
  }

  render() {
    return (
      <Fragment>
        <h1>adasd</h1>
        <InputImgs setImgs={this.setImgs} />
        <ImgPreview imgSrc={this.state.result} />
        <ImgDownload imgSrc={this.state.result} imgName={'img.png'}/>
      </Fragment>
    );
  }
}

export default App;