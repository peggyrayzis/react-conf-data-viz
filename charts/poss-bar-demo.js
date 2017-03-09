import React from 'react'
import { VictoryAnimation, VictoryBar, Bar } from 'victory'

const PossessionBar = ({ colorScheme, data, faded, onClick }) => (
  <VictoryAnimation
    data={{ opacity: faded ? 0.1 : 1 }}
    duration={500}
    easing='quadInOut' >
    {(animatedStyles) => (
      <VictoryBar
        height={306}
        width={130}
        events={[{
          target: 'data',
          eventHandlers: { onClick }
        }]}
        domain={{x: [0, 2], y: [30, 70]}}
        domainPadding={7}
        style={{
          data: {
            fill: d => colorScheme[d.x],
            width: d => d.x === 1 ? 11.5 : 12.5,
            ...animatedStyles
          }
        }}
        data={data}
      />
    )}
  </VictoryAnimation>
)

export default PossessionBar
