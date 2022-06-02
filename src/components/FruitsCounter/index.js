import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananaCount: 0}

  onEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoesCount, bananaCount} = this.state
    return (
      <div className="fruit-counter-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoesCount}</span> Mangoes
            <span className="count"> {bananaCount}</span> Bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
