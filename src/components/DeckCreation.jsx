import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'

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
  // const [card, setCard] = useState({})
  const [playerHand] = useState([])
  const [dealerHand] = useState([])

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
    pHand()
    dHand()
  }

  const pHand = () => {
    const element = (
      <div>
        <div>Card 1</div>
        <p>
          Suit of Card:
          <span>{playerHand[0].suit}</span>
        </p>
        <p>
          Rank of Card:
          <span>{playerHand[0].rank}</span>
        </p>
        <p>
          Value of Card:
          <span>{playerHand[0].worth}</span>
        </p>
        <div>Card 2</div>
        <p>
          Suit of Card:
          <span>{playerHand[1].suit}</span>
        </p>
        <p>
          Rank of Card:
          <span>{playerHand[1].rank}</span>
        </p>
        <p>
          Worth of Card:
          <span>{playerHand[1].worth}</span>
        </p>
      </div>
    )
    ReactDOM.render(element, document.getElementById('playerOne'))
  }

  const dHand = () => {
    const element = (
      <div>
        <div>Card 1</div>
        <p>
          Rank of Card:
          <span>{dealerHand[0].rank}</span>
        </p>
        <p>
          Suit of Card:
          <span>{dealerHand[0].suit}</span>
        </p>
        <p>
          Value of Card:
          <span>{dealerHand[0].worth}</span>
        </p>
      </div>
    )
    ReactDOM.render(element, document.getElementById('dealerHand'))
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
    console.log(deck, 'manipulated')
  }

  useEffect(() => {
    createDeck()
  }, [])

  return (
    <div>
      <div>
        <p>Player Hand</p>
        <div id="playerOne"></div>
      </div>
      <div>
        <p>Dealer Hand</p>
        <div id="dealerHand"></div>
      </div>
    </div>
  )
}

export default DeckCreation
