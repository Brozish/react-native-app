/**
 * @flow
 */

import React, { memo } from 'react'
import { View, Text } from 'react-native'

import type { AbstractComponent, Element as ReactElement } from 'react'

import styles from './styles'

type Props = {}

export default (memo<Props>(function App(): ReactElement<any> {
  return (
    <View style={styles.container}>
      <Text>React Native App</Text>
    </View>
  )
}): AbstractComponent<Props>)
