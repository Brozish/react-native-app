/**
 * @flow
 */

import { AppRegistry } from 'react-native'

const points = ['App']

Promise.all([import('./js/app.js')])
  .then(components => {
    components.forEach((registerComponent, index) => {
      AppRegistry.registerComponent(
        points[index],
        () => registerComponent.default
      )
    })
  })
  .catch(() => {})
