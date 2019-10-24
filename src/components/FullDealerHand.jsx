import React, { Component } from 'react';

export class FullDealerHand extends Component {
    render() {
        return (
        <div className='row this-one'>
            {this.props.dealerHand.map((v, i) => {
                return( 
                <div className='col d-flex justify-content-center' key={i}>
                    <div className='card text-center m-sm-2 w-50 text-white bg-dark'>
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
