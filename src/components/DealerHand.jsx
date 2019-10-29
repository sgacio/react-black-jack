import React, { Component } from 'react'

export class DealerHand extends Component {
  render() {
    return (
      <div className="col d-flex justify-content-center">
        <div className="card text-center m-3 text-white bg-dark w-50">
          <img src={this.props.dealerHand.card} />
          <p className="card-text">
            Rank of Card:
            <span>{this.props.dealerHand[0].item.rank}</span>
          </p>
          <p className="card-text">
            Suit of Card:
            <span>{this.props.dealerHand[0].item.suit}</span>
          </p>
          <p className="card-text">
            Value of Card:
            <span>{this.props.dealerHand[0].item.worth}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default DealerHand
