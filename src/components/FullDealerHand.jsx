import React, { Component } from 'react'

const FullDealerHand = props => {
  return (
    <div className="row this-one">
      {this.props.dealerHand.map((v, i) => {
        return (
          <div className="col d-flex justify-content-center" key={i}>
            <img src={v.card} />
          </div>
        )
      })}
    </div>
  )
}

export default FullDealerHand
