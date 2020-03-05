import React from 'react'
import { shallow } from 'enzyme'
import { render } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('check if app link exists', () => {
    expect(wrapper.find('.App-link').exists()).toBe(true)
    // console.log(wrapper.debug())
  })

  it('check if paragraph exists', () => {
    expect(wrapper.find('p').length).toBe(1)
  })

  it('should contain a ul element with a class my-list-elements', () => {
    expect(wrapper.find('ul').hasClass('my-list-elements')).toBe(true)
  })

  it('should contain a ul element with 3 children', () => {
    expect(wrapper.find('ul').children().length).toBe(3)
  })

  it('should contain a h1 element with a text "Welcome to React"', () => {
    expect(wrapper.find('h1').text()).toBe('Welcome to React')
  })
})

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
