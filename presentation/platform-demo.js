import React from 'react'
import Radium from 'radium'

import { Text, Image } from 'spectacle'

const PlatformDemo = ({ platform, src }) => (
  <div style={styles.container}>
    <Text padding='0 0 2vw 0' textSize='5vw' textColor='primary'>{platform}</Text>
    <Image
      height='65vh'
      style={styles.gif}
      src={src} />
  </div>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  gif: {
    margin: '0 auto',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
  }
}

export default Radium(PlatformDemo)
