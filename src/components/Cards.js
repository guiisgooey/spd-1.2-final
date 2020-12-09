import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import { Button } from './Button'

function Cards() {
  return (
    <div className='cards'>
      <h1>User Models uploaded to sclpted:</h1>
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
            <CardItem
              src='images/mimic by Vas Pupin.png'
              text='Mimic by Vas Pupin'
              label='Nov 4, 2020'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
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
            <CardItem
              src='images/starry, starry night by Douglas Winters III.png'
              text='Starry, Starry Night by Douglas Winters III'
              label='Oct 16, 2020'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Ice Flower 【氷の華】 by Manami Igarashi.png'
              text='Ice Flower 【氷の華】 by Manami Igarashi'
              label='Nov 4, 2020'
              path='/'
            />
            <CardItem
              src='images/ground zero scheme by Yuzhen Zhang.png'
              text='Ground Zero Scheme by Yuzhen Zhang'
              label='Nov 3, 2020'
              path='/'
            />
            <CardItem
              src='images/Lowdown girl by 齋藤章生.png'
              text='Lowdown Girl by 齋藤章生'
              label='Aug 4, 2020'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Tree and Piper @dannybittman by Josh Egendorf.png'
              text='Tree and Piper @dannybittman by Josh Egendorf'
              label='Sep 19, 2020'
              path='/'
            />
            <CardItem
              src='images/蹲-tsukubai- by Aimi Sekiguchi.png'
              text='蹲-Tsukubai- by Aimi Sekiguchi'
              label='Oct 4, 2020'
              path='/'
            />
            <CardItem
              src='images/Chillout place by pixel boy.png'
              text='Chillout Place by Pixel Boy'
              label='Nov 2, 2020'
              path='/'
            />
          </ul>
          <div className='view__more'>
          <Button buttonStyle='btn--primary2'> View More </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
