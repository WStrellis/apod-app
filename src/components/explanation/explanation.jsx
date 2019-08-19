import React from 'react'
import Styled from "styled-components";

const ExpDiv = Styled.div`
  padding: 15px;
  flex-grow: 0;
  background-color: ${ props => props.theme.colors.primaryBlueTransparent };
  border-top: 1px solid ${ props => props.theme.colors.primaryBlue };
  ${ props => props.theme.type.muli };
  clip-path: polygon(20% 0%, 80% 0%, 100% 15px, 100% 100%, 0 100%, 0 15px);
`;

export default function Explanation(props){
  return(
    <ExpDiv>
     <p>{props.explanation}</p> 
    </ExpDiv>
  )
}
