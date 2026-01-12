import React from 'react'
import CatogaryPage from '../../CatogaryPage/CatogaryPage'
import BgFruits from '../../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
       <CatogaryPage title="Fruits & Veggies" bgImage={BgFruits} Catogaries={['Fruits', 'Vegetables']}/>
    </div>
  )
}

export default Fruits
