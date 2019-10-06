import React from 'react'
import { render, fireEvent, cleanup, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App.jsx'
import Theme from '../theme_provider/theme'

afterEach(() => cleanup())

test('renders without crashing', () => {
  render(
    <Theme>
      <App />
    </Theme>
  )
})
