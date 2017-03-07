const SimplePieCodeBlock = `const SimplePie = ({ data }) => (
  <VictoryPie
    data={data}
    height={300}
    width={300}
    theme={VictoryTheme.material}
    labels={d => d.y}
  />
)

const myData = [
  { x: 1, y: 2 },
  { x: 2, y: 4 },
  { x: 3, y: 6 }
]

render(<SimplePie data={myData} />, mountNode)

`

export default SimplePieCodeBlock
