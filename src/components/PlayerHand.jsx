import React, { Component } from 'react';

export class PlayerHand extends Component {
    render() {
        return (
        <div>
            {this.props.playerHand.map((v, i) => {
                return( 
                <div key={i}>
                    <p>
                        Rank of Card:
                        <span>{v.rank}</span>
                    </p>
                    <p>
                        Suit of Card:
                        <span>{v.suit}</span>
                    </p>
                    <p>
                        Value of Card:
                        <span>{v.worth}</span>
                    </p>
                </div>
            )})}
        </div>
        );
    }
}

export default PlayerHand;
