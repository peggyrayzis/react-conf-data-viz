import React, { Component } from 'react'

import CodeSlide from 'spectacle-code-slide'

const defaultCode = `import React from 'react'
import { VictoryPie } from 'victory-native'
import { Svg as svg } from 'react-native-svg'

const Pie = () => (
  <VictoryPie />
)

export default Pie
`

export default class VictoryCodeSlide extends Component {
  render () {
    const { code = defaultCode } = this.props
    return (
      <CodeSlide
        bgColor='#05416B'
        transition={[]}
        lang='js'
        code={code}
        ranges={[
          { loc: [0, 1], title: 'Change your import' },
          { loc: [1, 2], title: 'Import from react-native-svg & alias' },
        ]}
      />
    )
  }
}
