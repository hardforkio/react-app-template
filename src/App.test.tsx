import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { assert } from 'chai'
import { mount } from 'enzyme'

test('renders learn react link', () => {
  const wrapper = mount(<App />)
  assert.equal(
    wrapper.find('.App-link').text(),
    'Learn React',
    'Link should say "Learn React"',
  )
  assert.equal(wrapper.find('.App-link').props().href, 'https://reactjs.org')
})
