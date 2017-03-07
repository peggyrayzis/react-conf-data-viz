import React, { Component } from 'react'
import Radium from 'radium'

import { VictoryAnimation } from 'victory'

@Radium
export default class Logo extends Component {
  render () {
    const { logo, style, faded, onClick } = this.props

    return (
      <VictoryAnimation
        data={{ opacity: faded ? 0.4 : 1 }}
        duration={.4}
        easing='quadInOut'>
        {(animatedStyles) => (
          <div
            onClick={onClick}
            style={[styles.logoContainer, ...style, animatedStyles]}>
            <img style={styles.logo} src={logo.replace('{{width}}', '200').replace('{{height}}', '200')} />
          </div>
        )}
      </VictoryAnimation>
    )
  }

}

const styles = {
  logo: {
    width: '100%'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '25px',
    width: '25px'
  }
  // logoHover: {
  //   transform: 'scale(1.5)'
  // },
}
