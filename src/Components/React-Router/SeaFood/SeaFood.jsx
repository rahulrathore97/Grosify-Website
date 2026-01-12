import React from 'react'
import Banner from '../../Banner/Banner'
import CatogaryPage from '../../CatogaryPage/CatogaryPage'
import BgSeaFood from '../../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
   <CatogaryPage title="Meat & SeaFood" bgImage={BgSeaFood}  Catogaries={['Meat', 'SeaFood']}/>

    </div>
  )
}

export default SeaFood
