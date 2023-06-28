import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import Search from "../pages/Search"
import Detail from "../pages/Detail"
import AddToCart from '../components/AddToCart'
import WishList from '../components/WishList'


const Path = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/addToCart' element={<AddToCart/>}/>
        <Route path='wishList' element={<WishList/>}/>
      </Routes>
    </div>
  )
}

export default Path