import React from 'react'
import { Routes as Routess, Route } from 'react-router-dom'
import Calculator from './Calculator'
import Footer from './Footer'
import Nav from './Nav'


function Routes() {



  return (
    <div>
        <nav>
            <Nav/>
        </nav>
        <Routess>
<Route  path='/' element={<Calculator/>}></Route>

</Routess>

<footer>
    <Footer/>
</footer>
    </div>
  )
}

export default Routes