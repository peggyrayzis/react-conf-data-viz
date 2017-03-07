import React from 'react'
import {
  VictoryPie,
  VictoryTransition,
  VictoryContainer,
  VictoryLabel
} from 'victory'

const ShotsPie = ({ colorScheme, stats }) => {
  const { totalShots, onTargetShots, offTargetShots, blockedShots } = stats

  return (
    <svg width={300} height={280}>
      <VictoryTransition animationWhitelist={['data']}>
        <VictoryPie
          animate={{ duration: 1000 }}
          width={300}
          height={300}
          standalone={false}
          containerComponent={<VictoryContainer height={300} style={{marginTop: 10}} />}
          data={[
            { x: 2, y: onTargetShots || 0 },
            { x: 3, y: offTargetShots || 0 },
            { x: 4, y: blockedShots || 0 }
          ].filter(d => d.y > 0)}
          labels={(d) => Math.round(d.y)}
          innerRadius={60}
          labelRadius={74}
          padAngle={3}
          colorScale={colorScheme}
          style={{
            data: {
              width: 60
            },
            labels: {
              fill: '#FDFEFE',
              fontSize: 20
            }
          }} />
      </VictoryTransition>
      <VictoryLabel
        textAnchor='middle'
        verticalAnchor='middle'
        x={150}
        y={150}
        style={{fontSize: 50, fontFamily: 'Roboto Condensed', fill: '#651747'}}
        text={totalShots} />
    </svg>
  )
}

export default ShotsPie
