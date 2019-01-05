import React, { Component, Fragment } from 'react';

function FileInput(props) {
  const { desc, inputId, acceptedTypes, handleChange, reference, placeHolder } = props;
  const descId = inputId + 'Desc';
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id={descId}>{desc}</span>
      </div>
      <div className="custom-file">
        <input type="file"
          className="custom-file-input"
          id={inputId}
          aria-describedby={descId}
          accept={acceptedTypes}
          onChange={handleChange}
          ref={reference}
        />
        <label className="custom-file-label" for={inputId}>{placeHolder}</label>
      </div>
    </div>

  );
}

class InputImgs extends Component {
  constructor(props) {
    super(props);
    this.sourceImg = React.createRef();
    this.watermarkImg = React.createRef();
    this.acceptedImgTypes = 'image/png, image/jpeg';

    this.state = {
      sourceName: 'Choose file',
      watermarkName: 'Choose file'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const source = this.sourceImg.current.files[0];
    const watermark = this.watermarkImg.current.files[0];

    if (!source) {
      return;
    }
    this.setState({
      sourceName: source.name
    });

    if (!watermark) {
      return;
    }
    this.setState({
      watermarkName: watermark.name
    });

    this.props.setImgs(source, watermark);
  }

  render() {
    return (
      <div className="col-md-6">
        <FileInput
          desc='Source'
          inputId='source'
          acceptedTypes={this.acceptedImgTypes}
          handleChange={this.handleChange}
          reference={this.sourceImg}
          placeHolder={this.state.sourceName}
        />

        <FileInput
          desc='Watermark'
          inputId='watermark'
          acceptedTypes={this.acceptedImgTypes}
          handleChange={this.handleChange}
          reference={this.watermarkImg}
          placeHolder={this.state.watermarkName}
        />
      </div>
    );
  }
}

export default InputImgs;