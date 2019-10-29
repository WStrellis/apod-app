import React from 'react'
import Styled from 'styled-components'
import Loading from './Loading'

const LoadingWrap = Styled.div`
  overflow: hidden;
  display: grid;
  grid-template-rows:  1fr;
  grid-template-columns: 1fr;
  min-height: 100vh; 
  width: 100%;
`

export default function LoadingWrapper(props) {
  return (
    <LoadingWrap>
      <Loading />
    </LoadingWrap>
  )
}
