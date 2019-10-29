import React from 'react'

const DealerHand = props => {
  if (props.dealerHand.length > 0) {
    return (
      <div className="col d-flex justify-content-center">
        <img src={props.dealerHand[0].card} />
      </div>
    )
  } else return <div></div>
}

export default DealerHand
