import React from 'react'
import Styled from 'styled-components'
import Loading from './Loading'
import StarBG from '../stars/star_bg'

const LoadingWrap = Styled.div`
  overflow: hidden;
  display: grid;
  grid-template-rows:  1fr;
  grid-template-columns: 1fr;
  background: rgba(0,0,0,1);
  min-height: 100vh; 
  width: 100%;
  background-color: #0c001e;

`

export default function LoadingWrapper(props) {
  return (
    <LoadingWrap>
      <StarBG />
      <Loading />
    </LoadingWrap>
  )
}
