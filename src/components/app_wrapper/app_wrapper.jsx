import React from 'react'
import Styled from 'styled-components'

const AppWrap = Styled.div`
  overflow: hidden;
  display: grid;
  grid-template-rows: ' auto auto 1fr';
  grid-template-columns: 1fr;
  grid-gap: 2rem
  background: rgba(0,0,0,1);
  min-height: 100vh; 
  width: 100%;
  color: #fff;
  /* background-color: #0c001e; */
  /* background: -moz-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(32,24,54,1) 70%, rgba(43,32,72,1) 90%, rgba(43,32,72,1) 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,0,0,1)), color-stop(70%, rgba(32,24,54,1)), color-stop(90%, rgba(43,32,72,1)), color-stop(100%, rgba(43,32,72,1)));
  background: -webkit-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(32,24,54,1) 70%, rgba(43,32,72,1) 90%, rgba(43,32,72,1) 100%);
  background: -o-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(32,24,54,1) 70%, rgba(43,32,72,1) 90%, rgba(43,32,72,1) 100%);
  background: -ms-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(32,24,54,1) 70%, rgba(43,32,72,1) 90%, rgba(43,32,72,1) 100%);
  background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(32,24,54,1) 70%, rgba(43,32,72,1) 90%, rgba(43,32,72,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#2b2048', GradientType=0 );
  */
`

export default function AppWrapper(props) {
  return <AppWrap>{props.children}</AppWrap>
}
