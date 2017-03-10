import React from 'react'
import Radium from 'radium'

import { VictoryAnimation } from 'victory'

const soccer = require('../../assets/soccer.svg')

const SoccerBall = ({ shrink }) => (
  <VictoryAnimation
    data={{ width: shrink ? '0' : '140' }}
    duration={500}
    easing='cubicInOut' >
    {({ width }) => (
      <img
        style={{ width: `${width}px`, zIndex: 1000 }}
        src={soccer} />
    )}
  </VictoryAnimation>
)


export default Radium(SoccerBall)
