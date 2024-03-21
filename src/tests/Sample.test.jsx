import React from 'react'
import renderer from 'react-test-renderer'
import Heading from '../components/Heading'

import { expect, test } from 'vitest'

// tools used
// react-test-renderer happy-dom jsdom 

// function toJson(component) {
//   const result = component.toJSON()
//   expect(result).toBeDefined()
//   expect(result).not.toBeInstanceOf(Array)
//   return result
// }
test('Checks for heading component and makes sure that it is displayed correctly', () => {

  const component = renderer.create(<Heading title="Adi" />);
  let tree = component.toJSON()
  console.log("to json", tree)
  expect(tree).toMatchSnapshot();


  // If you need to test different states or props, you can add more test cases here.
});

