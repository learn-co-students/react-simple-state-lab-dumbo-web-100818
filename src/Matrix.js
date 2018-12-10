import React, { Component } from 'react';
import Cell from './Cell.js'
import pattern1 from './data.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

// Matrix.defaultProps = {
//   values: pattern1
// }



Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}

// the key 'values' points to a callback function where we set the variable 'defRow' to an array of 10 hexacode values.

// next we return an array by using an array constructor which can take an argument of length, here we want 10 because we're trying to create a 10x10 board

// .fill() allows us to fill the array with a static value
