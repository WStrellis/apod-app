import React from 'react'
import Styled from "styled-components";

  
const ExpDiv= Styled.div`
  padding: 15px 1rem;
  background-color: ${ props => props.theme.colors.primaryBlueTransparent };
  border-top: 1px solid ${ props => props.theme.colors.primaryBlue };
   flex-grow: 0;
  ${ props => props.theme.type.muli };

  @media screen and (${props => props.theme.mediaBP.medium}) {
    margin-top: 40px;
  padding: 15px 3rem;
`;

export default function Explanation(props){
  return(
    <ExpDiv>
     <p>{props.explanation}</p> 
    </ExpDiv>
  )
}
