import React, { Component, PropTypes } from 'react'

{ func, string, array } = PropTypes
class HorizontalAxis extends Component {
  static propTypes = {
    scale: func.isRequired,
    labelFn: func,
    tickValues: array,
    view: array,
    trbl: array,
  }

  static orientation = {

  }

  buildTicks(tickValues, scale, orientation, labelFn, view, trbl) {
    tickValues.map((tickValue, index) => {
      const xPos = scale(tickValue)
      const y2 = view[1]
      const y1 = y2 - 6 // 6px tick size
      return (
        <g key={index} transform={`translate(${xPos}, ${})`}>
          <line {...{y1,y2}}
            x1={0}
            x2={0}
            stroke='tomato'
          ></line>
          <text
            dy='0.71em'
            x={0}
            y={0}
            textAnchor='middle'>
            {labelFn(tickValue, index)}
          </text>
        </g>
      )
    })
  }

  render() {
    const { scale, view, trbl, labelFn, tickValues, orientation } = this.props
    const [ width, height ] = view
    let y1 = 0
    if (orientation === HorizontalAxis.orientation.TOP) {
      y1 = view[1]
    }
    const y2 = y1
    return (
      <g>
        <line
          stroke='#000'
          x1={0}
          y1={0}
          x2={view[0]}
          y2={0}
        ></line>
        {this.buildTicks(tickValues, scale, orientation, labelFn, view, trbl)}
      </g>
    )
  }
}
