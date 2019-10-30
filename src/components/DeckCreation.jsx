import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import DealerHand from './DealerHand'
import PlayerHand from './PlayerHand'
import FullDealerHand from './FullDealerHand'

import aceSpades from '../Images/ace_of_spades.svg'
import twoSpades from '../Images/2_of_spades.svg'
import threeSpades from '../Images/3_of_spades.svg'
import fourSpades from '../Images/4_of_spades.svg'
import fiveSpades from '../Images/5_of_clubs.svg'
import sixSpades from '../Images/6_of_spades.svg'
import sevenSpades from '../Images/7_of_spades.svg'
import eightSpades from '../Images/8_of_spades.svg'
import nineSpades from '../Images/9_of_spades.svg'
import tenSpades from '../Images/10_of_spades.svg'
import jackSpades from '../Images/jack_of_spades.svg'
import queenSpades from '../Images/queen_of_spades.svg'
import kingSpades from '../Images/king_of_spades.svg'
import aceHearts from '../Images/ace_of_hearts.svg'
import twoHearts from '../Images/2_of_hearts.svg'
import threeHearts from '../Images/3_of_hearts.svg'
import fourHearts from '../Images/4_of_hearts.svg'
import fiveHearts from '../Images/5_of_hearts.svg'
import sixHearts from '../Images/6_of_hearts.svg'
import sevenHearts from '../Images/7_of_hearts.svg'
import eightHearts from '../Images/8_of_hearts.svg'
import nineHearts from '../Images/9_of_hearts.svg'
import tenHearts from '../Images/10_of_hearts.svg'
import jackHearts from '../Images/jack_of_hearts.svg'
import queenHearts from '../Images/queen_of_hearts.svg'
import kingHearts from '../Images/king_of_hearts.svg'
import aceClubs from '../Images/ace_of_clubs.svg'
import twoClubs from '../Images/2_of_clubs.svg'
import threeClubs from '../Images/3_of_clubs.svg'
import fourClubs from '../Images/4_of_clubs.svg'
import fiveClubs from '../Images/5_of_clubs.svg'
import sixClubs from '../Images/6_of_clubs.svg'
import sevenClubs from '../Images/7_of_clubs.svg'
import eightClubs from '../Images/8_of_clubs.svg'
import nineClubs from '../Images/9_of_clubs.svg'
import tenClubs from '../Images/10_of_clubs.svg'
import jackClubs from '../Images/jack_of_clubs.svg'
import queenClubs from '../Images/queen_of_clubs.svg'
import kingClubs from '../Images/king_of_clubs.svg'
import aceDiamonds from '../Images/ace_of_diamonds.svg'
import twoDiamonds from '../Images/2_of_diamonds.svg'
import threeDiamonds from '../Images/3_of_diamonds.svg'
import fourDiamonds from '../Images/4_of_diamonds.svg'
import fiveDiamonds from '../Images/5_of_diamonds.svg'
import sixDiamonds from '../Images/6_of_diamonds.svg'
import sevenDiamonds from '../Images/7_of_diamonds.svg'
import eightDiamonds from '../Images/8_of_diamonds.svg'
import nineDiamonds from '../Images/9_of_diamonds.svg'
import tenDiamonds from '../Images/10_of_diamonds.svg'
import jackDiamonds from '../Images/jack_of_diamonds.svg'
import queenDiamonds from '../Images/queen_of_diamonds.svg'
import kingDiamonds from '../Images/king_of_diamonds.svg'

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
    aceSpades,
    twoSpades,
    threeSpades,
    fourSpades,
    fiveSpades,
    sixSpades,
    sevenSpades,
    eightSpades,
    nineSpades,
    tenSpades,
    jackSpades,
    queenSpades,
    kingSpades,
    aceHearts,
    twoHearts,
    threeHearts,
    fourHearts,
    fiveHearts,
    sixHearts,
    sevenHearts,
    eightHearts,
    nineHearts,
    tenHearts,
    jackHearts,
    queenHearts,
    kingHearts,
    aceClubs,
    twoClubs,
    threeClubs,
    fourClubs,
    fiveClubs,
    sixClubs,
    sevenClubs,
    eightClubs,
    nineClubs,
    tenClubs,
    jackClubs,
    queenClubs,
    kingClubs,
    aceDiamonds,
    twoDiamonds,
    threeDiamonds,
    fourDiamonds,
    fiveDiamonds,
    sixDiamonds,
    sevenDiamonds,
    eightDiamonds,
    nineDiamonds,
    tenDiamonds,
    jackDiamonds,
    queenDiamonds,
    kingDiamonds
  ])
  const [value] = useState([11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10])
  const [suits] = useState(['Spade', 'Heart', 'Clubs', 'Diamond'])
  const [preDeck] = useState([])
  const [deck, setDeck] = useState([])
  const [prePHand] = useState([])
  const [playerHand, setPlayerHand] = useState([])
  const [preDHand] = useState([])
  const [dealerHand, setDealerHand] = useState([])
  const [handWorth, setHandWorth] = useState()
  const [evaluatedOne, setEvaluatedOne] = useState(false)
  const [evaluatedTwo, setEvaluatedTwo] = useState(false)
  const [evaluatedThree, setEvaluatedThree] = useState(false)
  const [gameEnd, setGameEnd] = useState(false)

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
    console.log(deck)
  }

  const shuffleDeck = () => {
    setDeck(prev => {
      for (let i = prev.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = prev[j]
        prev[j] = prev[i]
        prev[i] = temp
      }
      return [...prev]
    })
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

  const hit = key => {
    const Card = deck.shift()
    key.unshift(Card)
  }

  const hitMe = () => {
    hit(prePHand)
    setPlayerHand(prePHand)
    TotalHandValue()
  }

  const TotalHandValue = () => {
    const v = prePHand.map(p => {
      return p.item.worth
    })
    const red = v.reduce((a, c) => {
      return a + c
    })
    setHandWorth(red)
    if (red === 21) {
      setEvaluatedOne(true)
      setGameEnd(true)
    } else if (red > 21) {
      setEvaluatedTwo(true)
      setGameEnd(true)
    }
  }

  const stay = () => {
    const v = dealerHand.map(p => {
      return p.item.worth
    })
    const red = v.reduce((a, c) => {
      return a + c
    })
    if (red < 16) {
      hit(preDHand)
      setDealerHand(preDHand)
      reEval()
    } else if (red === 16) {
      hit(preDHand)
      setDealerHand(preDHand)
      reEval()
    } else if (red > 16) {
      reEval()
    }
  }

  const reEval = () => {
    const v = dealerHand.map(p => {
      return p.item.worth
    })
    const red = v.reduce((a, c) => {
      return a + c
    })
    if (red > 21) {
      setEvaluatedOne(true)
      setGameEnd(true)
    }
    if (red === 21) {
      setEvaluatedTwo(true)
      setGameEnd(true)
    } else if (red === 16 && red < handWorth) {
      setEvaluatedOne(true)
      setGameEnd(true)
    } else if (red === 21 && red > handWorth) {
      setEvaluatedTwo(true)
      setGameEnd(true)
    } else if (red < 16 && red < handWorth) {
      setEvaluatedOne(true)
      setGameEnd(true)
    } else if (red < 16 && red > handWorth) {
      setEvaluatedTwo(true)
      setGameEnd(true)
    } else if (red > 16 && red < 21 && red < handWorth) {
      setEvaluatedOne(true)
      setGameEnd(true)
    } else if (red > 16 && red < 21 && red > handWorth) {
      setEvaluatedTwo(true)
      setGameEnd(true)
    } else if (red > 16 && red < 21 && red === handWorth) {
      setEvaluatedThree(true)
      setGameEnd(true)
    } else if (red < 16 && red === handWorth) {
      setEvaluatedThree(true)
      setGameEnd(true)
    }
  }

  const playAgain = () => {
    window.location.reload()
  }

  return (
    <div className="this-one">
      <div className="text-center">
        <header className="head">
          <h1>Player Hand</h1>
        </header>
        <PlayerHand playerHand={playerHand} />
        <h4 className="text-center">
          <span>Value of Player Hand: </span>
          {handWorth}
        </h4>
        <div className={evaluatedOne === false ? 'hide-one' : ''}>
          <h3>Player wins</h3>
          <button onClick={() => playAgain()}>Play again</button>
        </div>
        <div className={evaluatedTwo === false ? 'hide-two' : ''}>
          <h3>Bust! House Wins</h3>
          <button onClick={() => playAgain()}>Play again</button>
        </div>
        <div className={evaluatedThree === false ? 'hide-three' : ''}>
          <h3>Push!</h3>
          <button onClick={() => playAgain()}>Play again</button>
        </div>
        <div className="thing">
          <button onClick={() => hitMe()}>Hit Me</button>
          <button onClick={() => stay()}>Stay</button>
        </div>
      </div>
      <div className="text-center">
        <h1>Dealer Hand</h1>
        {gameEnd === false ? (
          <DealerHand dealerHand={dealerHand} />
        ) : (
          <FullDealerHand dealerHand={dealerHand} />
        )}
      </div>
    </div>
  )
}

export default DeckCreation
