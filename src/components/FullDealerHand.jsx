import React from 'react'

const FullDealerHand = props => {
  if (props.dealerHand) {
    return (
      <div className="row this-one">
        {props.dealerHand.map((v, i) => {
          return (
            <div className="col d-flex justify-content-center" key={i}>
              <img src={v.card} />
            </div>
          )
        })}
      </div>
    )
  } else {
    return <div></div>
  }
}

export default FullDealerHand
