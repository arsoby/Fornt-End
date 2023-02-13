import React from 'react'
import { Routes as Routess, Route } from 'react-router-dom'
import Calculator from './Calculator'
import Companies from './Companies'
import Footer from './Footer'
import Nav from './Nav'


function Routes() {



  return (
  <>
  <Nav/>
<Routess>
        <Route  path='/' element={<Calculator/>}></Route>
        <Route  path='/companies' element={<Companies/>}></Route>
    </Routess>
    <Footer/>
  </>
  )
}

export default Routes