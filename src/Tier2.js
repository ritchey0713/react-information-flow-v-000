import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }
  componentWillRecieveProps(nextProps) {
    this.setState({
      ...this.state,
      color: nextProps.color,
      childColor: getReducedColor(nextProps.color)
    })
  }
   handleClick = (e) => {
    let newColor = getRandomColor()
    this.setState({
      ...this.state,
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }
   handleChildClick = (e) => {
    this.setState({
      ...this.state,
      childColor: getRandomColor()
    })
  }


  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={"#0F0"} />
        <Tier3 color={"#F00"} />
      </div>
    )
  }
}
