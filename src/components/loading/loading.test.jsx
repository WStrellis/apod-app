import React from 'react'
import { render, fireEvent, cleanup, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Theme from '../theme_provider/theme'
import AppWrapper from '../app_wrapper/app_wrapper'
import Loading from './loading'

afterEach(cleanup)

describe('Loading Component Tests', () => {
  test('Loading... should be in the document', () => {
    const { getByText } = render(
      <Theme>
        <AppWrapper>
          <Loading></Loading>
        </AppWrapper>
      </Theme>
    )
    expect(getByText(/loading.../i)).toBeInTheDocument()
  })
})
