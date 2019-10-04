import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Theme from '../theme_provider/theme'
import AppTitle from './app_title'

describe('AppTitle Tests', () => {
  test('renders an h1 with the the text " Astronomy Photo of The Day"', () => {
    // render the component
    const { getByText } = render(
      <Theme>
        <AppTitle />
      </Theme>
    )
    // console.log(wrapper.debug());
    // try to find the component by its text content
    const result = getByText(/astronomy photo of the day/i)
    expect(result).toBeTruthy()
  })
})
