import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import DealerHand from './DealerHand'
import PlayerHand from './PlayerHand'

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
  const [value] = useState([11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10])
  const [suits] = useState(['Spade', 'Heart', 'Clubs', 'Diamond'])
  const [deck] = useState([])
  const [playerHand] = useState([])
  const [dealerHand] = useState([])
  const [handWorth, setHandWorth] = useState()
 
  useEffect(() => {
    createDeck()
  }, [])

  const createDeck = () => {
    suits.map(suit => {
      return numbers.map((rank, index) => {
        const worth = value[index]
        return deck.push({ rank, suit, worth })
      })
    })
    shuffleDeck()
    deal(playerHand)
    deal(dealerHand)
    TotalHandValue()
    pHand()
    dHand()
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

  const pHand = () => {
    const element = (
    <PlayerHand playerHand={playerHand}/>
    )
    ReactDOM.render(element, document.getElementById('playerOne'))
  }

  const dHand = () => {
    const element = (
      <DealerHand dealerHand={dealerHand}/>
    )
    ReactDOM.render(element, document.getElementById('dealerHand'))
  }

  const hitMe = () => {
    const Card = deck.shift()
    playerHand.unshift(Card)
    pHand()
    TotalHandValue()
  }

  const TotalHandValue = () => {
    const v = playerHand.map(p => {
      return p.worth
    })
    const red = v.reduce((a, c) => {
      return a + c
    })
    setHandWorth(red)
  }

  return (
    <div>
      <div>
        <p>
          Player Hand
          <span>Total Hand Value:{handWorth}</span>
        </p>
        <div id="playerOne"></div>
        <button onClick={() => hitMe()}>Hit Me</button>
      </div>
      <div>
        <p>Dealer Hand</p>
        <div id="dealerHand"></div>
      </div>
    </div>
  )
}

export default DeckCreation
