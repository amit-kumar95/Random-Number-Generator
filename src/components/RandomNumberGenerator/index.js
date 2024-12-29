import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickRandomButton = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bgRandomContainer">
        <div className="randomContainer">
          <h1 className="heading">Random Number</h1>
          <p className="paraStl">
            Generate a random number in the
            <br /> range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.onClickRandomButton}
            className="btnStl"
          >
            Generate
          </button>
          <p className="countSlt">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
