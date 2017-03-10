import React, { Component } from 'react'
import Radium from 'radium'

import Legend from './legend'
import ShotsPie from '../../charts/shots-pie-demo.js'

function getShotsStatsByPeriod (stats, period) {
  let periodValue = 'statValue'

  if (period === 'first-half') {
    periodValue = 'statFH'
  } else if (period === 'second-half') {
    periodValue = 'statSH'
  }

  return {
    blockedShots: stats.blocked_scoring_att[periodValue],
    offTargetShots: stats.shot_off_target[periodValue],
    onTargetShots: stats.ontarget_scoring_att[periodValue],
    totalShots: stats.total_scoring_att[periodValue]
  }
}

@Radium
export default class ShotsView extends Component {
  constructor () {
    super(...arguments)

    this.state = {
      shotsToggle: 'total'
    }

    this.onShotsToggle = this.onShotsToggle.bind(this)
  }

  onShotsToggle (shotsToggle) {
    this.setState({ shotsToggle })
  }

  renderSegmentedControl () {
    const { shotsToggle } = this.state
    const {
      leftButton,
      rightButton,
      toggleButton,
      selectedStyle,
      selectedButtonText,
      buttonText,
      buttonRow
    } = styles.segmentedControl

    return (
      <div style={buttonRow}>
        <div
          style={[toggleButton, leftButton, shotsToggle === 'total' && selectedStyle]}
          onClick={() => this.onShotsToggle('total')}>
            <p style={[buttonText, shotsToggle === 'total' && selectedButtonText]}>Total</p>
        </div>
        <div
          style={[toggleButton, shotsToggle === 'first-half' && selectedStyle]}
          onClick={() => this.onShotsToggle('first-half')}>
            <p style={[buttonText, shotsToggle === 'first-half' && selectedButtonText]}>1st Half</p>
        </div>
        <div
          style={[toggleButton, rightButton, shotsToggle === 'second-half' && selectedStyle]}
          onClick={() => this.onShotsToggle('second-half')}>
            <p style={[buttonText, shotsToggle === 'second-half' && selectedButtonText]}>2nd Half</p>
        </div>
      </div>
    )
  }

  render () {
    const { shotsToggle } = this.state
    const { game } = this.props

    const homeShots = getShotsStatsByPeriod(game.home.clubStats, shotsToggle)
    const awayShots = getShotsStatsByPeriod(game.away.clubStats, shotsToggle)

    const homeColorScheme = ['#01162d', '#032959', '#084a9c']
    const awayColorScheme = ['#65021b', '#ca0a37', '#fc5e86']

    return (
      <div style={styles.container}>
        {this.renderSegmentedControl()}
        <div style={styles.charts}>
          <div style={styles.chartContainer}>
            <ShotsPie
            stats={homeShots}
            style={styles.chart}
            colorScheme={homeColorScheme}
            />
            <Legend colorScheme={homeColorScheme} />
          </div>
          <div style={styles.chartContainer}>
            <ShotsPie
            stats={awayShots}
            style={styles.chart}
            colorScheme={awayColorScheme}
            />
            <Legend colorScheme={awayColorScheme} />
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  chart: {
    alignSelf: 'flex-start'
  },
  charts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '4.5vw',
    marginTop: '4.5vw'
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    textSize: '2vw',
    color: '#651747',
    margin: '2vw'
  },
  segmentedControl: {
    buttonRow: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row'
    },
    leftButton: {
      borderBottomLeftRadius: '0.8vw',
      borderRightWidth: '0px',
      borderTopLeftRadius: '0.8vw'
    },
    rightButton: {
      borderBottomRightRadius: '0.8vw',
      borderLeftWidth: '0px',
      borderTopRightRadius: '0.8vw'
    },
    selectedStyle: {
      backgroundColor: '#651747'
    },
    buttonText: {
      color: '#651747',
      textAlign: 'center',
      margin: '0 auto',
      fontSize: '1.5vw'
    },
    selectedButtonText: {
      color: '#FDFEFE'
    },
    toggleButton: {
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      height: '3vw',
      width: '8vw',
      border: '1px solid #651747'
    }
  }
}
