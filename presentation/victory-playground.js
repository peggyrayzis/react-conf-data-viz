import React from 'react'
import ComponentPlayground from './component-playground'

import { VictoryPie, VictoryBar, VictoryTheme } from 'victory'

import SimplePie from '../charts/simple-pie'

const VictoryPlayground = (props) => (
  <ComponentPlayground
    code={SimplePie}
    theme='dark'
    scope={{ VictoryPie, VictoryBar, VictoryTheme }}
   />
)

export default VictoryPlayground
