import React, { Component } from "react";
import "./ProjectImageGallery.css";

// React Class Component

class ProjectImageGalleryEthiopia extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleImgOneClick = (e) => {
    e.preventDefault();
    let pPageImgOne = document.querySelector(".pPageImgOne");
    pPageImgOne.classList.remove("pPageNonDisplay");
    let pPageImgTwo = document.querySelector(".pPageImgTwo");
    pPageImgTwo.classList.remove("pPageDisplay");
    let pPageImgThree = document.querySelector(".pPageImgThree");
    pPageImgThree.classList.remove("pPageDisplay");
    let gBOne = document.querySelector(".gBOne");
    gBOne.classList.add("selectedGalleryImg");
    let gBTwo = document.querySelector(".gBTwo");
    gBTwo.classList.remove("selectedGalleryImg");
    let gBThree = document.querySelector(".gBThree");
    gBThree.classList.remove("selectedGalleryImg");
  };
  handleImgTwoClick = (e) => {
    e.preventDefault();
    let pPageImgOne = document.querySelector(".pPageImgOne");
    pPageImgOne.classList.add("pPageNonDisplay");
    let pPageImgTwo = document.querySelector(".pPageImgTwo");
    pPageImgTwo.classList.add("pPageDisplay");
    let pPageImgThree = document.querySelector(".pPageImgThree");
    pPageImgThree.classList.remove("pPageDisplay");
    let gBOne = document.querySelector(".gBOne");
    gBOne.classList.remove("selectedGalleryImg");
    let gBTwo = document.querySelector(".gBTwo");
    gBTwo.classList.add("selectedGalleryImg");
    let gBThree = document.querySelector(".gBThree");
    gBThree.classList.remove("selectedGalleryImg");
  };
  handleImgThreeClick = (e) => {
    e.preventDefault();
    let pPageImgOne = document.querySelector(".pPageImgOne");
    pPageImgOne.classList.add("pPageNonDisplay");
    let pPageImgTwo = document.querySelector(".pPageImgTwo");
    pPageImgTwo.classList.remove("pPageDisplay");
    let pPageImgThree = document.querySelector(".pPageImgThree");
    pPageImgThree.classList.add("pPageDisplay");
    let gBOne = document.querySelector(".gBOne");
    gBOne.classList.remove("selectedGalleryImg");
    let gBTwo = document.querySelector(".gBTwo");
    gBTwo.classList.remove("selectedGalleryImg");
    let gBThree = document.querySelector(".gBThree");
    gBThree.classList.add("selectedGalleryImg");
  };

  render() {
    return (
      <div className="pictureGalleryDiv">
        <div className="pPageImgOne ethiopiaOne"></div>
        <div className="pPageImgTwo ethiopiaTwo"></div>
        <div className="pPageImgThree ethiopiaThree"></div>

        <div className="galleryBtnsDiv">
          <div
            className="galleryImageBtn gBOne"
            onClick={this.handleImgOneClick}
          ></div>
          <div
            onClick={this.handleImgTwoClick}
            className="galleryImageBtn gBTwo"
          ></div>
          <div
            onClick={this.handleImgThreeClick}
            className="galleryImageBtn gBThree"
          ></div>
        </div>
      </div>
    );
  }
}

export default ProjectImageGalleryEthiopia;