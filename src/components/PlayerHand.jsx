import React, { Component } from 'react'

export class PlayerHand extends Component {
  render() {
    return (
      <div className="row">
        {this.props.playerHand.map((v, i) => {
          return (
            <div className="col d-flex justify-content-center" key={i}>
              <div className="card text-center m-3 w-50 text-white bg-dark">
                <div>
                  <img className="card-img-top" src={v.card} />
                  <p className="card-text">
                    Rank of Card:
                    <span>{v.item.rank}</span>
                  </p>
                  <p className="card-text">
                    Suit of Card:
                    <span>{v.item.suit}</span>
                  </p>
                  <p className="card-text">
                    Value of Card:
                    <span>{v.item.worth}</span>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default PlayerHand
