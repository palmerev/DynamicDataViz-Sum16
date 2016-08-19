import React from 'react'

const Base = ({ view, trbl, children }) => {
  return (
    <svg width={view[0]} height={view[1]} viewBox={`0 0 ${view[0]} ${view[1]}`}>
      <g transform={`translate(${trbl[0]}, ${trbl[3]})`}>
        {children}
      </g>
    </svg>
  )
}

export default Base
