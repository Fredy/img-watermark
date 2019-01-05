import React, { Component, Fragment } from 'react';
import watermark from 'watermarkjs';
import InputImgs from './inputImgs'
import { ImgPreview, ImgDownload } from './imgHelpers'

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
      );
  }

  render() {
    return (
      <div className="container pb-3">

        <div className="row items-center py-3">
          <div className="col">
            <h1 className="text-center">Watermark</h1>
          </div>
        </div>

        <div className="row justify-content-around">
          <InputImgs setImgs={this.setImgs} />
          <ImgPreview imgSrc={this.state.result} />
          <ImgDownload imgSrc={this.state.result} imgName={'img.png'} />
        </div>

      </div>
    );
  }
}

export default App;