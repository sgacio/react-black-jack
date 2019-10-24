import React, { Component } from 'react';

export class DealerHand extends Component {
    render() {
        return (
        <div className='card text-center m-sm-2'>
            <p className='card-text'>
              Rank of Card:
              <span>{this.props.dealerHand[0].rank}</span>
            </p>
            <p className='card-text'>
              Suit of Card:
              <span>{this.props.dealerHand[0].suit}</span>
            </p>
            <p className='card-text'>
              Value of Card:
              <span>{this.props.dealerHand[0].worth}</span>
            </p>
        </div>
        );
    }
}

export default DealerHand;
