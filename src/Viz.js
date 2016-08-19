import React, { Component } from 'react'
import Base from './Base'
import './Viz.css'

const generateData = size => {
  const data = []
  for (let i = 0; i < size; i++) {
    data.push({index: i, value: Math.random() * 900 + 100 })
  }
  return data
}
console.log(generateData(5))
class Viz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: generateData(10)
    }
    this.addData = this.addData.bind(this)
  }

  addData(value) {
    const data = this.state.data.slice(0)
    const index = data[data.length - 1].index + 1
    data.push(({index, value}))
    data.shift()
    this.setState({
      data
    })
    console.log(data, index)
  }

  // line, domain, range, x-axis, y-axis, scale, width, height, margins, svg
  componentDidMount() {
    this.addData()
  }

  render() {
    const trbl = [20, 0, 0, 30]
    const view = [400, 600]
    return (
      <div>
        {JSON.stringify(this.state.data)}
        <Base view={view} trbl={trbl} />
      </div>
    )
  }
}

export default Viz
