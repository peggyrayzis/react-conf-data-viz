import React from 'react'
import Radium from 'radium'

import { VictoryAnimation } from 'victory'

const Logo = ({ logo, style, faded, larger, onClick }) => {
  console.log('faded', faded)
  console.log('larger', larger)
  return (
    <VictoryAnimation
      data={{
        opacity: faded ? 0.3 : 1,
        width: larger ? '130' : '100'
      }}
      duration={400}
      easing='quadInOut' >
      {({ opacity, width }) => (
        <div
          onClick={onClick}
          style={[styles.logoContainer, ...style]}>
          <img style={{ width: `${width}%`, opacity }} src={logo.replace('{{width}}', '200').replace('{{height}}', '200')} />
        </div>
      )}
    </VictoryAnimation>
  )
}

const styles = {
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '25px',
    width: '25px'
  }
}

export default Radium(Logo)
