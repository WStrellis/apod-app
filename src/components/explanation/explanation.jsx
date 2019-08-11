import React from 'react'
import Styled from "styled-components";

const ExpDiv = Styled.div`
  padding: 15px;
  flex-grow: 0;
  background-color: ${ props => props.theme.colors.primaryBlueTransparent };
  border-top: 1px solid ${ props => props.theme.colors.primaryBlue };
  ${ props => props.theme.type.muli };
`;

export default function Explanation(props){
  return(
    <ExpDiv>
     <p>{props.explanation}</p> 
    </ExpDiv>
  )
}
