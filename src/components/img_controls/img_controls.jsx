import React, { Component } from 'react';
import styled from "styled-components";
import HexIcon from "../icons/hexagon.jsx";
import ArrowIcon from "../icons/arrow.jsx";
import RandomIcon from "../icons/random.jsx";

const ImgControlsDiv = styled.div`
  position: relative;
  margin: 50px auto 0 auto;
`;

const ImgControls__topRow = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

const ImgControls__bottomRow = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  top : -25px;
`;

const Btn = styled.div`
  width: 50px;
  height: 50px;
  margin: 25px;
  position: relative
  z-index: 10;


  :hover .icon {
     filter: drop-shadow( 0px 0px 5px #49a499  );
  }
`;

  // border: 1px solid yellow;

const arrowLeft = {
  transform: "rotate(180deg)",
  left: "-5px",
}
const arrowRight = {
  transform: "none",
  left: "5px",
}

export default class ImgControls extends Component {

  render() {
    return (
      <ImgControlsDiv>
        <ImgControls__topRow>
          <Btn><HexIcon/>
            <ArrowIcon  svgStyle={ arrowLeft} />
          </Btn>
          <Btn><HexIcon/><RandomIcon/></Btn>
          <Btn><HexIcon/>
            <ArrowIcon   svgStyle={ arrowRight}/>
          </Btn>
        </ImgControls__topRow>

        <ImgControls__bottomRow>
          <Btn><HexIcon/><RandomIcon/></Btn>
          <Btn><HexIcon/><RandomIcon/></Btn>
        </ImgControls__bottomRow>
      </ImgControlsDiv>
    )
  }
}
