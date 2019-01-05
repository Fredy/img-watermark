import React, { Component, Fragment } from 'react';

class InputImgs extends Component {
  constructor(props) {
    super(props);
    this.sourceImg = React.createRef();
    this.watermarkImg = React.createRef();
    this.acceptedImgTypes = 'image/png, image/jpeg';

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const source = this.sourceImg.current.files[0];
    const watermark = this.watermarkImg.current.files[0];
    if (source && watermark) {
      this.props.setImgs(source, watermark);
    }
  }

  render() {
    return (
      <Fragment>
        <input type="file"
          id="source"
          name="source"
          accept={this.acceptedImgTypes}
          onChange={this.handleChange}
          ref={this.sourceImg}
        />
        <input type="file"
          id="watermark"
          name="watermark"
          accept={this.acceptedImgTypes}
          onChange={this.handleChange}
          ref={this.watermarkImg}
        />
      </Fragment>
    );
  }
}

export default InputImgs;