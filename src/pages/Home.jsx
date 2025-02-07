import React, { useState } from 'react'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'
import AppDownload from '../components/AppDownload'
import Header from './../components/Header';

const Home = () => {
  const [category, setCategory] = useState('All')

  return (
    <div>
        <Header />
        <div id="explore-menu">
            <ExploreMenu category={category} setCategory={setCategory}/>
        </div>
        <div id="food-display">
            <FoodDisplay category={category}/>
        </div>
        <div id="app-download">
            <AppDownload />
        </div>
    </div>
  )
}

export default Home
