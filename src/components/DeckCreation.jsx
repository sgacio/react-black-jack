import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import DealerHand from './DealerHand'
import PlayerHand from './PlayerHand'
import FullDealerHand from './FullDealerHand'

const DeckCreation = () => {
  const [numbers] = useState([
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King'
  ])
  const [images] = useState([
    '../Images/ace_of_spades.svg',
    '../Images/2_of_spades.svg',
    '../Images/3_of_spades.svg',
    '../Images/4_of_spades.svg',
    '../Images/5_of_spades.svg',
    '../Images/6_of_spades.svg',
    '../Images/7_of_spades.svg',
    '../Images/8_of_spades.svg',
    '../Images/9_of_spades.svg',
    '../Images/10_of_spades.svg',
    '../Images/jack_of_spades.svg',
    '../Images/queen_of_spades.svg',
    '../Images/king_of_spades.svg',
    '../Images/ace_of_hearts.svg',
    '../Images/2_of_hearts.svg',
    '../Images/3_of_hearts.svg',
    '../Images/4_of_hearts.svg',
    '../Images/5_of_hearts.svg',
    '../Images/6_of_hearts.svg',
    '../Images/7_of_hearts.svg',
    '../Images/8_of_hearts.svg',
    '../Images/9_of_hearts.svg',
    '../Images/10_of_hearts.svg',
    '../Images/jack_of_hearts.svg',
    '../Images/queen_of_hearts.svg',
    '../Images/king_of_hearts.svg',
    '../Images/ace_of_clubs.svg',
    '../Images/2_of_clubs.svg',
    '../Images/3_of_clubs.svg',
    '../Images/4_of_clubs.svg',
    '../Images/5_of_clubs.svg',
    '../Images/6_of_clubs.svg',
    '../Images/7_of_clubs.svg/',
    '../Images/8_of_clubs.svg',
    '../Images/9_of_clubs.svg',
    '../Images/10_of_clubs.svg',
    '../Images/jack_of_clubs.svg',
    '../Images/queen_of_clubs.svg',
    '../Images/king_of_clubs.svg',
    '../Images/ace_of_diamonds.svg',
    '../Images/2_of_diamonds.svg',
    '../Images/3_of_diamonds.svg',
    '../Images/4_of_diamonds.svg',
    '../Images/5_of_diamonds.svg',
    '../Images/6_of_diamonds.svg',
    '../Images/7_of_diamonds.svg',
    '../Images/8_of_diamonds.svg',
    '../Images/9_of_diamonds.svg',
    '../Images/10_of_diamonds.svg',
    '../Images/jack_of_diamonds.svg',
    '../Images/queen_of_diamonds.svg',
    '../Images/king_of_diamonds.svg'
  ])
  const [value] = useState([11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10])
  const [suits] = useState(['Spade', 'Heart', 'Clubs', 'Diamond'])
  const [preDeck] = useState([])
  const [deck] = useState([])
  const [prePHand] = useState([])
  const [playerHand, setPlayerHand] = useState([])
  const [preDHand] = useState([])
  const [dealerHand, setDealerHand] = useState([])
  const [handWorth, setHandWorth] = useState()

  useEffect(() => {
    createDeck()
  }, [])

  const createDeck = () => {
    suits.map(suit => {
      return numbers.map((rank, index) => {
        const worth = value[index]
        return preDeck.push({ rank, suit, worth })
      })
    })
    console.log(preDeck)
    merge()
    shuffleDeck()
    deal(prePHand)
    deal(preDHand)
    handOut()
  }

  const merge = () => {
    preDeck.map((item, index) => {
      const card = images[index]
      return deck.push({ item, card })
    })
    console.log(deck, 'merge')
  }

  const shuffleDeck = () => {
    for (let i = deck.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = deck[j]
      deck[j] = deck[i]
      deck[i] = temp
    }
  }

  const deal = key => {
    for (let i = 0; i <= 1; i++) {
      const Card = deck.shift()
      key.unshift(Card)
    }
  }

  const handOut = () => {
    setPlayerHand(prePHand)
    setDealerHand(preDHand)
    TotalHandValue()
  }

  const TotalHandValue = () => {
    const v = prePHand.map(p => {
      return p.item.worth
    })
    console.log(v, 'v')
    const red = v.reduce((a, c) => {
      return a + c
    })
    setHandWorth(red)
  }

  // const playAgain = () => {
  //   window.location.reload()
  // }

  return (
    <div className="this-one">
      {console.log(playerHand, 'player', dealerHand, 'dealer')}
      <div className="text-center">
        <header className="head">
          <h1>Player Hand</h1>
        </header>
        <PlayerHand playerHand={playerHand} />
        <h4 className="text-center">
          <span>Value of Player Hand: </span>
          {handWorth}
        </h4>
      </div>
      <div className="text-center">
        <h1>Dealer Hand</h1>
        <FullDealerHand dealerHand={dealerHand} />
      </div>
    </div>
  )
}

export default DeckCreation
