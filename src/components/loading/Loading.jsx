import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from { 
  transform: rotate(0deg);
}

to { 
  transform: rotate(360deg);
}
`

const LoadingDiv = styled.div`
  justify-self: center;
  align-self: center;
  width: max-content;
  height: max-content;

  h3 {
    font-size: 4rem;
    text-align: center;
    margin: 3rem auto;
    color: ${props => props.theme.colors.primaryBlue};
  }

  .circlesContainer {
    width: 280px;
    height: 280px;

  @media screen and (${props => props.theme.mediaBP.large}) {
    width: 500px;
    height: 500px;
  } 
  }

  .circleLg {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    border-left: 10px solid ${props => props.theme.colors.primaryBlue};
    border-top: 10px solid ${props => props.theme.colors.primaryBlue};
    border-bottom: 10px solid ${props => props.theme.colors.primaryBlue};
    border-right: 10px solid transparent;
    animation: ${rotate} 2s linear infinite;
    /* animation: ${rotate} 300s linear infinite; */
  }

  .circleMd {
    display: flex;
    margin: auto;
    height: 75%;
    width: 75%;
    border-radius: 50%;
    border-left: 10px solid transparent;
    border-top: 10px solid ${props => props.theme.colors.primaryBlue};
    border-bottom: 10px solid ${props => props.theme.colors.primaryBlue};
    border-right: 10px solid ${props => props.theme.colors.primaryBlue};
    animation: ${rotate} 1.7s linear infinite;
    /* animation: ${rotate} 200s linear infinite; */
  }

  .circleSm {
    margin: auto;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    border-left: 10px solid ${props => props.theme.colors.primaryBlue};
    border-top: 10px solid ${props => props.theme.colors.primaryBlue};
    border-bottom: 10px solid transparent;
    border-right: 10px solid ${props => props.theme.colors.primaryBlue};
 animation: ${rotate} 1.5s linear infinite;
 /* animation: ${rotate} 1000s linear infinite; */
  }
`
// <h3>Loading...</h3>
export default class Loading extends Component {
  render() {
    return (
      <LoadingDiv>
        <div className='circlesContainer'>
          <div className='circleLg'>
            <div className='circleMd'>
              <div className='circleSm'></div>
            </div>
          </div>
        </div>
      </LoadingDiv>
    )
  }
}
