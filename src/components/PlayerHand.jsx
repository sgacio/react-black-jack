import React from 'react'

const PlayerHand = props => {
  return (
    <div className="row">
      {props.playerHand.map((v, i) => {
        return (
          <div className="col d-flex justify-content-center" key={i}>
            <img src={v.card} />
          </div>
        )
      })}
    </div>
  )
}

export default PlayerHand
