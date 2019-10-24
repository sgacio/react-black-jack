import React, { Component } from 'react';

export class FullDealerHand extends Component {
    render() {
        return (
        <div className='row'>
            {this.props.dealerHand.map((v, i) => {
                return( 
                <div className='col-sm-6' key={i}>
                    <div className='card text-center m-sm-2'>
                        <div>
                            <p className='card-text'>
                                Rank of Card:
                                <span>{v.rank}</span>
                            </p>
                            <p className='card-text'>
                                Suit of Card:
                                <span>{v.suit}</span>
                            </p>
                            <p className='card-text'>
                                Value of Card:
                                <span>{v.worth}</span>
                            </p>
                        </div>
                    </div>
                </div>
            )})}
            </div>
            );
        }
    }

export default FullDealerHand;
