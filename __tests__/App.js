import React from 'react'
import { Text } from 'react-native'

import { create } from 'react-test-renderer'

const testID = 'react_native_app_test_id'

describe('test React Native App', () => {
  test('React Native App', () => {
    const component = create(<Text testID={testID}>React Native template</Text>)

    const testInstance = component.root

    expect(testInstance.props.testID).toBe(testID)
  })
})
