import React from 'react'
import Radium from 'radium'

const Legend = ({ colorScheme }) => (
  <div style={styles.legend}>
    <div style={styles.legendRow}>
      <div style={[styles.legendBox, { backgroundColor: colorScheme[0] }]} />
      <p style={styles.legendText}>On Target</p>
    </div>
    <div style={styles.legendRow}>
      <div style={[styles.legendBox, { backgroundColor: colorScheme[1] }]} />
      <p style={styles.legendText}>Off Target</p>
    </div>
    <div style={styles.legendRow}>
      <div style={[styles.legendBox, { backgroundColor: colorScheme[2] }]} />
      <p style={styles.legendText}>Blocked</p>
    </div>
  </div>
)

const styles = {
  legend: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  legendRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  legendBox: {
    height: '1.7vw',
    width: '1.7vw',
    marginRight: '0.7vw'
  },
  legendText: {
    fontSize: '2vw',
    margin: '0 auto'
  }
}

export default Radium(Legend)
