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
    if(red === 21){
      pHand()
      const element = (
        <div>
          <h1>21 Player Win!</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('winOrBust'))
      } else if(red > 21){
        pHand()
        const element = (
          <div>
          <h1>Bust! House Wins</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('winOrBust'))
      } else{
        pHand()
      }
  }
    
    const stay = () => {
      const v = dealerHand.map(p => {
        return p.worth
      })
      const red = v.reduce((a, c) => {
        return a + c
      })
      console.log(red, "first time")
      if(red < 16){
        const Card = deck.shift()
        dealerHand.unshift(Card)
        reEval()
      }else if(red === 16){
        const Card = deck.shift()
        dealerHand.unshift(Card)
        reEval()
      }else if(red > 16){
        reEval()
      }
    }

    const reEval = () => {
      console.log(dealerHand, "in reEval")
      const v = dealerHand.map(p => {
        return p.worth
      })
      const red = v.reduce((a, c) => {
        return a + c
      })
      if(red > 21){
        const element = (
          <div>
          <h1>Player Wins!</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('dealerHand'))
      }if(red === 21){
        const element = (
          <div>
          <h1>House Wins!</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('dealerHand'))
      }else if(red === 16 && red < handWorth){
        const element = (
          <div>
          <h1>Player Wins!</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('dealerHand'))
      }else if(red === 21 && red > handWorth){
        const element = (
          <div>
          <h1>House Wins!</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('dealerHand'))
      }
      else if(red < 16 && red < handWorth){
        const element = (
          <div>
          <h1>Player Wins!</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('dealerHand'))
      }
      else if(red < 16 && red > handWorth){
        const element = (
          <div>
          <h1>House Wins!</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('dealerHand'))
      }
      else if(red > 16 && red < handWorth)
      {
        const element = (
          <div>
          <h1>Player Wins!</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('dealerHand'))
      }else if(red > 16 && red > handWorth)
      {
        const element = (
          <div>
          <h1>House Wins!</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('dealerHand'))
      }else if(red > 16 && red === handWorth)
      {
        const element = (
          <div>
          <h1>Push!</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('dealerHand'))
      }else if(red < 16 && red === handWorth)
      {
        const element = (
          <div>
          <h1>Push!</h1>
          <button onClick={() => playAgain()}>Play Again?</button>
        </div>
        )
        ReactDOM.render(element, document.getElementById('dealerHand'))
      }
    }

  const playAgain = () => {
    window.location.reload()
  }

  return (
    <div>
      <div>
        <p>
          Player Hand
          <span>Total Hand Value:{handWorth}</span>
          <span id='winOrBust'></span>
        </p>
        <div id="playerOne"></div>
        <div>
          <button onClick={() => hitMe()}>Hit Me</button>
          <button onClick={() => stay()}>Stay</button>
        </div>
      </div>
      <div>
        <p>Dealer Hand</p>
        <div id="dealerHand"></div>
      </div>
    </div>
  )
}

export default DeckCreation
