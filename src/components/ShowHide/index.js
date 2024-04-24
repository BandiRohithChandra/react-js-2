// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstcard: false, lastCard: false}

  firstName = () => {
    this.setState = prevState => ({firstcard: !prevState.firstcard})
  }

  lastName = () => {
    this.setState = prevState => ({lastCard: !prevState.lastCard})
  }

  render() {
    const {firstcard, lastCard} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div className="cards">
          <div className="card-container">
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide Firstname 
            </button>
            {!firstcard && <p className="name-card">Joe</p>}
          </div>
          <div className="card-container">
            <button type="button" className="button" onClick={this.lastname}>
              Show/Hide Lastname
            </button>
            {lastCard ? '' : <p className="name-card">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
