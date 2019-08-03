import React from 'react';
import styled from "styled-components";

const ConstellationDiv = styled.div`
  /* prevent constellation from scrolling */
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export default function Constellation(){
  return(
    <ConstellationDiv/>
  )
};
