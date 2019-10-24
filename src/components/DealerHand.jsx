import React, { Component } from 'react';

export class DealerHand extends Component {
    render() {
        return (
        <div>
            <div>Card 1</div>
            <p>
              Rank of Card:
              <span>{this.props.dealerHand[0].rank}</span>
            </p>
            <p>
              Suit of Card:
              <span>{this.props.dealerHand[0].suit}</span>
            </p>
            <p>
              Value of Card:
              <span>{this.props.dealerHand[0].worth}</span>
            </p>
        </div>
        );
    }
}

export default DealerHand;
