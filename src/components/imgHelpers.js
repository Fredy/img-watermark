import React, { Component } from 'react';

function ImgPreview(props) {
  return (
    props.imgSrc.length ?
      <img src={props.imgSrc} /> :
      null
  );
}

function ImgDownload(props) {
  return (
    <a href={props.imgSrc}
      download={props.imgName} >
      Download
    </a>
  );
}

export {ImgPreview, ImgDownload};