import React from 'react'
import Styled from "styled-components";

const ExpDiv= Styled.div`
  padding: 15px 1rem;
  background-color: ${ props => props.theme.colors.primaryBlueTransparent };
  border: 1px solid ${ props => props.theme.colors.primaryBlue };
  ${ props => props.theme.type.muli };
  width: 100%;

  @media screen and (${props => props.theme.mediaBP.large}) {
    overflow: hidden scroll;
    max-height: 75%;
  }
`;

export default function Explanation(props){
  return(
    <ExpDiv>
     <p>{props.explanation}</p> 
    </ExpDiv>
  )
}
