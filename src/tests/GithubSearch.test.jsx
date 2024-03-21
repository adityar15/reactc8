import React from 'react'
import renderer from 'react-test-renderer'


import { expect, test } from 'vitest'
import GithubSearchProvider from '../pages/GithubSearch';

// tools used
// react-test-renderer happy-dom jsdom 

// function toJson(component) {
//   const result = component.toJSON()
//   expect(result).toBeDefined()
//   expect(result).not.toBeInstanceOf(Array)
//   return result
// }
test('Github search component', () => {

  const component = renderer.create(<GithubSearchProvider title="Adi" />);
  let tree = component.toJSON()
  console.log("to json", tree)
  expect(tree).toMatchSnapshot();


  // If you need to test different states or props, you can add more test cases here.
});