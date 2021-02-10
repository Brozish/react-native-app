/**
 * @flow
 */
import { StyleSheet } from 'react-native'

import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

export default (StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}): {
  container: ViewStyleProp
})
