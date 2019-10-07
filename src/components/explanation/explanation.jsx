import React from 'react'
import styled from 'styled-components'
import CustomScroll from 'react-custom-scroll'
import { AppContext } from '../../context/AppContext'

const ExpDiv = styled.div`
  background-color: ${props => props.theme.colors.primaryBlueTransparent};
  border: 1px solid ${props => props.theme.colors.primaryBlue};
  ${props => props.theme.type.muli};
  border-radius: ${props => props.theme.border.radiusMD};
  width: 100%;
  min-width: 0;
  min-height: 0;
  line-height: 3rem;

  p {
    padding: 1rem;
  }

  p:nth-of-type(2) {
    margin-top: 2rem;
  }

  @media screen and (${props => props.theme.mediaBP.large}) {
    flex: 1;
    height: 500px;
    p {
      padding: 1rem 1.5rem 1rem 1rem;
    }
  }
`
const CopyrightLabel = styled.span`
  font-style: italic;
`
export default function Explanation(props) {
  return (
    <AppContext.Consumer>
      {({ pod }) => (
        <ExpDiv>
          <CustomScroll heightRelativeToParent='100%' allowOuterScroll>
            <p>{pod.explanation}</p>
            {pod.copyright && (
              <p>
                <CopyrightLabel>Image Credit:</CopyrightLabel>
                &emsp;
                {pod.copyright}
              </p>
            )}
          </CustomScroll>
        </ExpDiv>
      )}
    </AppContext.Consumer>
  )
}
