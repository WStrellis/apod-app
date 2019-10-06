import React from 'react'
import styled from 'styled-components'

const ExpDiv = styled.div`
  padding: 15px 1rem;
  background-color: ${props => props.theme.colors.primaryBlueTransparent};
  border: 1px solid ${props => props.theme.colors.primaryBlue};
  ${props => props.theme.type.muli};
  width: 100%;
  line-height: 3rem;

  p:nth-of-type(2) {
    margin-top: 2rem;
  }

  @media screen and (${props => props.theme.mediaBP.large}) {
    overflow: hidden scroll;
    flex-grow: 1;
    height: 500px;
  }
`
const CopyrightLabel = styled.span`
  font-weight: 700;
  font-style: italic;
`
export default function Explanation(props) {
  return (
    <ExpDiv>
      <p>{props.explanation}</p>
      {props.copyright && (
        <p>
          <CopyrightLabel>Image Credit:&emsp;</CopyrightLabel>
          {props.copyright}
        </p>
      )}
    </ExpDiv>
  )
}
