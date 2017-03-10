import React from 'react'
import Radium from 'radium'

const SegmentedControl = ({ shotsToggle, onShotsToggle }) => {
  const {
    leftButton,
    rightButton,
    toggleButton,
    selectedStyle,
    selectedButtonText,
    buttonText,
    buttonRow
  } = styles

  return (
    <div style={buttonRow}>
      <div
        style={[toggleButton, leftButton, shotsToggle === 'total' && selectedStyle]}
        onClick={() => onShotsToggle('total')}>
          <p style={[buttonText, shotsToggle === 'total' && selectedButtonText]}>Total</p>
      </div>
      <div
        style={[toggleButton, shotsToggle === 'first-half' && selectedStyle]}
        onClick={() => onShotsToggle('first-half')}>
          <p style={[buttonText, shotsToggle === 'first-half' && selectedButtonText]}>1st Half</p>
      </div>
      <div
        style={[toggleButton, rightButton, shotsToggle === 'second-half' && selectedStyle]}
        onClick={() => onShotsToggle('second-half')}>
          <p style={[buttonText, shotsToggle === 'second-half' && selectedButtonText]}>2nd Half</p>
      </div>
    </div>
  )
}

const styles = {
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

export default Radium(SegmentedControl)
