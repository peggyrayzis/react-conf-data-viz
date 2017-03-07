import React, { Component } from 'react'
import { VictoryBar } from 'victory'
import Color from 'color'
import Radium from 'radium'

import Logo from '../presentation/poss-demo/logo'
const soccer = require('../assets/soccer.svg')

function generateColorScheme (shade) {
  const color = new Color(shade)
  return color.light()
    ? [color.string(), color.lighten(0.1).string(), color.darken(0.5).string()]
    : [color.string(), color.lighten(0.7).string(), color.darken(0.7).string()]
}

function generateTheta (numCharts) {
  const frags = 360 / numCharts
  return Array.from(new Array(numCharts)).map((_, i) => {
    return (frags / 180) * i * Math.PI
  })
}

const theta = generateTheta(20)

function getTeamDataObj ({ logo, colors, clubStats }, matchId) {
  return {
    matchId,
    logo,
    colors,
    possTtl: clubStats.possession_percentage.statValue,
    possFH: clubStats.possession_percentage.statFH,
    possSH: clubStats.possession_percentage.statSH,
  }
}

@Radium
export default class PossessionBarDemo extends Component {
  static defaultProps = {
    logosContainerHeight: 195,
    chartsContainerHeight: 365
  }

  constructor () {
    super(...arguments)

    this.state = {
      matchHovered: false,
      activeMatch: null,
    }

    this.onLogoHover = this.onLogoHover.bind(this)
    this.onLogoExit = this.onLogoExit.bind(this)
    this.renderCircle = this.renderCircle.bind(this)
    this.renderBar = this.renderBar.bind(this)
  }

  componentDidMount () {
    const parentDiv = this.container.closest('.spectacle-content')
    parentDiv.style.height = '100%'
  }

  onLogoHover (matchId) {
    this.setState({ matchHovered: true, activeMatch: matchId })
    console.log('hi')
  }

  onLogoExit (matchId) {
    this.setState({ matchHovered: false, activeMatch: null })
  }

  renderBar ({ possTtl, possFH, possSH, logo }, i, colorScheme) {
    const { chartsContainerHeight } = this.props

    const factor = theta[i]
    const radius = chartsContainerHeight / 2

    const top = (chartsContainerHeight / 2 - 65) - parseInt(Math.round(radius * (Math.cos(factor)))) + 'px'
    const left = (chartsContainerHeight / 2 - 65) + parseInt(Math.round(radius * (Math.sin(factor)))) + 'px'

    return (
      <div key={`bar-${i}`} style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute',
        top: top,
        left: left,
        height: '130px',
        width: '130px',
        transform: `rotate(${(360/20*i)}deg)`
      }}>
        <VictoryBar
          height={306}
          width={131}
          domain={{x: [0, 2], y: [30, 70]}}
          domainPadding={8}
          style={{
            data: {
              fill: (d) => colorScheme[d.x],
              width: (d) => d.x === 1 ? 13 : 14,
              transformOrigin: 'right',
              transform: d => `rotate(${d.x}deg)`
            }
          }}
          data={[
            { x: 0, y: possTtl },
            { x: 1, y: possFH },
            { x: 2, y: possSH }
          ]}
        />
      </div>
    )
  }

  renderCircle ({ logo, matchId }, i) {
    const { logosContainerHeight } = this.props
    const { matchHovered, activeMatch } = this.state

    const factor = theta[i]
    const radius = logosContainerHeight / 2

    const top = (logosContainerHeight / 2 - 12.5) - parseInt(Math.round(radius * (Math.cos(factor-.06)))) + 'px'
    const left = (logosContainerHeight / 2 - 12.5) + parseInt(Math.round(radius * (Math.sin(factor-.06)))) + 'px'

    return (
      <Logo
        key={`logo-${i}`}
        logo={logo}
        faded={activeMatch && matchId !== activeMatch}
        onClick={() => this.onLogoHover(matchId)}
        style={{ top, left }} />
    )
  }

  render () {
    const { data } = this.props
    const { matchHovered, activeMatch } = this.state

    let homeTeams = []
    let awayTeams = []

    data.forEach(({ home, away, matchId }) => {
      let homeObj = getTeamDataObj(home, matchId)
      homeTeams.push(homeObj)

      let awayObj = getTeamDataObj(away, matchId)
      awayTeams.push(awayObj)
    })

    const teams = homeTeams.concat(awayTeams)

    return (
      <div ref={(ref) => this.container = ref} style={styles.container}>
        <div style={styles.chartsContainer} ref={ref => { this.chartsContainer = ref }}>
          { teams.map((team, i) => this.renderBar(team, i, generateColorScheme(team.colors[0]))) }
        </div>
        <img style={[styles.soccerBall, matchHovered && styles.soccerBallShrink]} src={soccer} />
        <div style={styles.circleContainer} />
        <div style={styles.logosContainer} ref={ref => { this.logosContainer = ref }}>
          { teams.map((team, i) => this.renderCircle(team, i)) }
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circleContainer: {
    position: 'absolute',
    width: '245px',
    height: '245px',
    borderRadius: '50%',
    backgroundColor: '#FDFEFE'
  },
  logosContainer: {
    position: 'absolute',
    width: '195px',
    height: '195px'
  },
  chartsContainer: {
    position: 'absolute',
    width: '365px',
    height: '365px'
  },
  soccerBall: {
    width: 140,
    height: 140,
    zIndex: 1000,
    transition: '.6s ease-in-out'
  },
  soccerBallShrink: {
    transform: 'scale(0)'
  }
}
