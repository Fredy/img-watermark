import React, { Component } from 'react';

function ImgPreview(props) {
  return (
    props.imgSrc.length ? (
      <div class="col-md-6 pb-3">
        <img src={props.imgSrc} class="img-fluid" />
      </div>
    ) :
      null
  );
}

function ImgDownload(props) {
  const isDisabled = (props.imgSrc.length === 0);
  return (
    <div className="col-md-6 offset-md-6 text-center">
      <a href={props.imgSrc}
        hidden={isDisabled}
        className={'btn btn-primary' + (isDisabled ? ' disabled' : '')}
        role="button"
        aria-disabled={isDisabled}
        download={props.imgName} >
        Download
    </a>

    </div>
  );
}

export { ImgPreview, ImgDownload };