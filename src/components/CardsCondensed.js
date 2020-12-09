import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import { Button } from './Button'

function CardsCondensed() {
  return (
    <div className='cards'>
      <h1>Check out these AWESOME 3d Models!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mortal by sara phinn.png'
              text='Mortal by Sara Phinn'
              label='Sep 4, 2020'
              path='/'
            />
            <CardItem
              src='images/a walk in the woods by Sarah Bradshaw.png'
              text='A Walk in the Woods by Sarah Bradshaw'
              label='Oct 16, 2020'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mimic by Vas Pupin.png'
              text='Mimic by Vas Pupin'
              label='Nov 4, 2020'
              path='/'
            />
            <CardItem
              src='images/20200910 by Ayako Hirayama.png'
              text='20200910 by Ayako Hirayama'
              label='Sep 10, 2020'
              path='/'
            />
            <CardItem
              src='images/unfinished melody by veronica lakewood.png'
              text='Unfinished Melody by Veronica Lakewood'
              label='Oct 24, 2020'
              path='/'
            />
          </ul>
          <div className='view__more'>
            <Button buttonStyle='btn--primary2' use='gallery'> View More </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsCondensed