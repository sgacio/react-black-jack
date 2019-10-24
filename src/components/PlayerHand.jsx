import React, { Component } from 'react';

export class PlayerHand extends Component {
    render() {
        return (
        <div>
            <div>Card 1</div>
            <p>
                Suit of Card:
                <span>{this.props.playerHand[0].suit}</span>
            </p>
            <p>
                Rank of Card:
                <span>{this.props.playerHand[0].rank}</span>
            </p>
            <p>
                Value of Card:
                <span>{this.props.playerHand[0].worth}</span>
            </p>
            <div>Card 2</div>
            <p>
                Suit of Card:
                <span>{this.props.playerHand[1].suit}</span>
            </p>
            <p>
                Rank of Card:
                <span>{this.props.playerHand[1].rank}</span>
            </p>
            <p>
                Worth of Card:
                <span>{this.props.playerHand[1].worth}</span>
            </p>
        </div>
        );
    }
}

export default PlayerHand;
