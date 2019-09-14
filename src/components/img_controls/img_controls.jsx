import React, { Component } from 'react';
import styled from "styled-components";

import BtnContainer from "./imgCtlBtn.jsx";
import HexIcon from "../icons/hexagon.jsx";
import ArrowIcon from "../icons/arrow.jsx";
import RandomIcon from "../icons/random.jsx";
import ExpandIcon from "../icons/expand.jsx";
import CompressIcon from "../icons/compress.jsx";
import HDIcon from "../icons/hd.jsx";

import { nextDay, prevDay, randomDayBetween } from "../../js/date_funcs.js";

import {  isSameDay } from 'date-fns';

const ImgControlsDiv = styled.div`
  position: relative;
  margin-top: 25px;
`;

const TopRow = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

const BottomRow = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  top : -25px;
`;

export default class ImgControls extends Component {
  constructor( props ){
    super( props );
    this.currentDate = new Date();
    this.earliestDate = new Date( 1995, 5, 16);

    this.prevDay = prevDay;
    this.nextDay = nextDay;
  }

  render() {
    let selected = this.props.appState.selectedDate;

    //  selected === earliestDate set to "disabled", else activate
    let prevStatus = ( isSameDay( selected, this.earliestDate))? "disable": "activate";

    //  selected === currentDate set to "disabled", else activate
    let nextStatus = ( isSameDay( selected, this.currentDate))? "disable": "activate";

    let hdStatus = ( this.props.hdOption === true)? "activate": "disable";

    let isVideo = ( this.props.appState.pod.media_type === 'video')? "disable": "activate";

    let hdToggle = (this.props.appState.useHD)? this.props.noHDcb : this.props.preferHDcb;

    return (
      <ImgControlsDiv>
        <TopRow>

          <BtnContainer status={ prevStatus} clickHandler={ ()=>this.props.dateCB( prevDay(selected)) }>
            <HexIcon status={ prevStatus}/>
            <ArrowIcon   direction={"left"} status={prevStatus}/>
          </BtnContainer>

          <BtnContainer status={"activate"}
            clickHandler={ () => {
              this.props.dateCB( randomDayBetween( this.currentDate, this.earliestDate) )
            }}
          >
            <HexIcon status={ "activate"}/>
            <RandomIcon/>
           </BtnContainer>

          <BtnContainer status={ nextStatus} clickHandler={ ()=>this.props.dateCB( nextDay( selected) ) }>
            <HexIcon status={ nextStatus}/>
            <ArrowIcon  direction={"right"} status={ nextStatus }/>
          </BtnContainer>

        </TopRow>

        <BottomRow>

            <BtnContainer  status={ isVideo } clickHandler={ ()=> this.props.setModalState() }>
            <HexIcon status={ isVideo }/>
            { this.props.appState.isModalOpen && this.props.appState.pod.media_type !== 'video' && <CompressIcon status={ isVideo }/>}
            { (!this.props.appState.isModalOpen || this.props.appState.pod.media_type === 'video' ) && <ExpandIcon status={ isVideo }/>}
          </BtnContainer>

          <BtnContainer status={ hdStatus} clickHandler={ ()=> hdToggle() }>
            <HexIcon status={ hdStatus}/>
            <HDIcon status={ hdStatus } useHD={ this.props.appState.useHD} />
          </BtnContainer>

        </BottomRow>
      </ImgControlsDiv>
    )
  }
}
