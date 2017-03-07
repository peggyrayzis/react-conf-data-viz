import React from 'react'
import Radium from 'radium'

const StatsDetail = ({ activeMatch: { home, away } }) => (
  <div style={styles.main}>
    <div style={styles.container}>
      <p style={[styles.layout, {color: home.colors[0], margin: '0', fontSize: '22px'}]}>{home.name}</p>
      <p style={[styles.layout, styles.team]}>-</p>
      <p style={[styles.layout, {color: away.colors[0], margin: '0', fontSize: '22px'}]}>{away.name}</p>
    </div>
    <div style={styles.container}>
      <p style={[styles.layout, styles.team, {color: home.colors[0]}]}>{home.clubStats.possession_percentage.statValue}</p>
      <p style={[styles.layout, styles.team]}>TTL</p>
      <p style={[styles.layout, styles.team, {color: away.colors[0]}]}>{away.clubStats.possession_percentage.statValue}</p>
    </div>
    <div style={styles.container}>
      <p style={[styles.layout, styles.team, {color: home.colors[0]}]}>{home.clubStats.possession_percentage.statFH}</p>
      <p style={[styles.layout, styles.team]}>1ST</p>
      <p style={[styles.layout, styles.team, {color: away.colors[0]}]}>{away.clubStats.possession_percentage.statFH}</p>
    </div>
    <div style={styles.container}>
      <p style={[styles.layout, styles.team, {color: home.colors[0]}]}>{home.clubStats.possession_percentage.statSH}</p>
      <p style={[styles.layout, styles.team]}>2ND</p>
      <p style={[styles.layout, styles.team, {color: away.colors[0]}]}>{away.clubStats.possession_percentage.statSH}</p>
    </div>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    zIndex: 1000,
    width: '100%',
    // paddingRight: '0.5vw',
    // paddingLeft: '0.5vw',
    justifyContent: 'space-around'
  },
  team: {
    color: '#05416B',
    fontSize: '18px',
  },
  layout: {
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: `33.33%`
  },
  main: {
    height: '100%',
    paddingTop: '2px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Radium(StatsDetail)
