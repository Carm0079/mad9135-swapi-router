import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders film titles section', () => {
  const { getByText } = render(<App />)
  const heading = getByText(/film titles/i)
  expect(heading).toBeInTheDocument()
})
