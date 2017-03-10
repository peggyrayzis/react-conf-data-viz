import React, { Component } from 'react'
import Radium from 'radium'

import Legend from './legend'
import SegmentedControl from './segmented-control'
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

  render () {
    const { shotsToggle } = this.state
    const { game } = this.props

    const homeShots = getShotsStatsByPeriod(game.home.clubStats, shotsToggle)
    const awayShots = getShotsStatsByPeriod(game.away.clubStats, shotsToggle)

    const homeColorScheme = ['#01162d', '#032959', '#084a9c']
    const awayColorScheme = ['#65021b', '#ca0a37', '#fc5e86']

    return (
      <div style={styles.container}>
        <SegmentedControl
          onShotsToggle={this.onShotsToggle}
          shotsToggle={shotsToggle} />
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
  }
}
