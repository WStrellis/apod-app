import React, { Component } from 'react'
import Styled from "styled-components";

const ExpDiv = Styled.div`
  padding: 15px;
`;

export default function Explanation(props){
  return(
    <ExpDiv>
     <p>{props.explanation}</p> 
    </ExpDiv>
  )
}
