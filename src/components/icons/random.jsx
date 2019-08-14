import React, { Component } from 'react'
import Styled from "styled-components";

const SvgWrap = Styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid ${ props => props.theme.colors.primaryBlue};

  &:hover svg{
  filter: drop-shadow(0px 0px 3px ${ props => props.theme.colors.primaryBlueTransparent});
  }

  svg {
  fill: ${ props => props.theme.colors.primaryBlueTransparent };
 stroke: ${ props => props.theme.colors.primaryBlue};
 stroke-width: 0.15px;
 }
`;

export default class RandomBtn extends Component {
  render() {
    return (
      <SvgWrap>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 9.567 7.374">
        <g id="q3">
        <path d="M4.233 0v1.08h3.281c.656 0 .942.328.942.814 0 .487-.254.847-.825.847h-.688c-.858 0-1.186.434-1.186 1.249v.836h.963v-.603c0-.307.149-.498.508-.498h.614c1.207 0 1.725-.857 1.725-1.883C9.567.752 8.985 0 7.514 0zm1.408 5.905v1.44c1.406.13 1.206-.151 1.206-1.44z" />
        </g>
        <g id="q2">
        <path d="M2.117 0v1.08h3.28c.657 0 .942.328.942.814 0 .487-.254.847-.825.847h-.688c-.857 0-1.185.434-1.185 1.249v.836h.963v-.603c0-.307.148-.498.508-.498h.614c1.206 0 1.725-.857 1.725-1.883C7.45.752 6.869 0 5.397 0zm1.407 5.905v1.44c1.406.13 1.207-.151 1.207-1.44z"/>
        </g>
        <g id="q1">
        <path d="M0 0v1.08h3.28c.657 0 .943.328.943.814 0 .487-.254.847-.826.847H2.71c-.857 0-1.185.434-1.185 1.249v.836h.963v-.603c0-.307.148-.498.508-.498h.614c1.206 0 1.725-.857 1.725-1.883C5.334.752 4.752 0 3.281 0zm1.408 5.905v1.44c1.405.13 1.206-.151 1.206-1.44z"/>
        </g>
        </svg>
      </SvgWrap>
    )
  }
}
