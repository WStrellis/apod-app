import React, { Component } from 'react'
import styled from 'styled-components'

import BtnContainer from './imgCtlBtn.jsx'
import HexIcon from '../icons/hexagon.jsx'
import ArrowIcon from '../icons/arrow.jsx'
import RandomIcon from '../icons/random.jsx'
import ExpandIcon from '../icons/expand.jsx'
import CompressIcon from '../icons/compress.jsx'
import HDIcon from '../icons/hd.jsx'

import { nextDay, prevDay, randomDayBetween } from '../../js/date_funcs.js'
import { isSameDay } from 'date-fns'

import { AppContext } from '../../context/AppContext'

const ImgControlsDiv = styled.div`
  position: relative;
  top: 1.5rem;

  @media screen and (${props => props.theme.mediaBP.large}) {
    top: 3rem;
  }
`

const TopRow = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`

const BottomRow = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  top: -25px;
`

export default class ImgControls extends Component {
  constructor(props) {
    super(props)
    this.currentDate = new Date()
    this.earliestDate = new Date(1995, 5, 16)

    this.prevDay = prevDay
    this.nextDay = nextDay
  }

  render() {
    let {
      pod,
      isModalOpen,
      useHD,
      selectedDate,
      setHD,
      setModalState,
      changeDate
    } = this.context

    //  selectedDate === earliestDate set to "disabled", else activate
    let prevStatus = isSameDay(selectedDate, this.earliestDate)
      ? 'disable'
      : 'activate'

    //  selectedDate === currentDate set to "disabled", else activate
    let nextStatus = isSameDay(selectedDate, this.currentDate)
      ? 'disable'
      : 'activate'

    let hdStatus =
      pod.url !== pod.hdurl && pod.hdurl !== null && pod.media_type !== 'video'
        ? 'activate'
        : 'disable'

    let isVideo = pod.media_type === 'video' ? 'disable' : 'activate'

    return (
      <ImgControlsDiv>
        <TopRow>
          <BtnContainer
            status={prevStatus}
            clickHandler={() => changeDate(prevDay(selectedDate))}
          >
            <HexIcon status={prevStatus} />
            <ArrowIcon direction={'left'} status={prevStatus} />
          </BtnContainer>

          <BtnContainer
            status={'activate'}
            clickHandler={() => {
              changeDate(randomDayBetween(this.currentDate, this.earliestDate))
            }}
          >
            <HexIcon status={'activate'} />
            <RandomIcon />
          </BtnContainer>

          <BtnContainer
            status={nextStatus}
            clickHandler={() => changeDate(nextDay(selectedDate))}
          >
            <HexIcon status={nextStatus} />
            <ArrowIcon direction={'right'} status={nextStatus} />
          </BtnContainer>
        </TopRow>

        <BottomRow>
          <BtnContainer status={isVideo} clickHandler={() => setModalState()}>
            <HexIcon status={isVideo} />
            {isModalOpen && pod.media_type !== 'video' && (
              <CompressIcon status={isVideo} />
            )}
            {(!isModalOpen || pod.media_type === 'video') && (
              <ExpandIcon status={isVideo} />
            )}
          </BtnContainer>

          <BtnContainer status={hdStatus} clickHandler={() => setHD()}>
            <HexIcon status={hdStatus} />
            <HDIcon status={hdStatus} useHD={useHD} />
          </BtnContainer>
        </BottomRow>
      </ImgControlsDiv>
    )
  }
}

// Assign context object
ImgControls.contextType = AppContext
