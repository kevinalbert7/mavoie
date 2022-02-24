import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import { GiShop } from 'react-icons/gi'

const Nav = styled.div`
  height: 60px;
  width: 100vw;
  padding: 0 40px;
  display: flex;
  align-items: center;
  background-color: #85E533;
  h1 {
    margin-left: 100px;
  }
`
const Body = styled.div`
  margin-top: 60px;
`
const App = () => {
  return (
    <div>
      <header>
        <Nav>
          <GiShop />
          <h1>Green Shop</h1>
        </Nav>
      </header>

      <Body>
        <div className='container'>
          <div className='row'>
            <div className='col'>Milk</div>
            <div className='col'>Out of Stock</div>
            <div className='col'>3.5 MAD</div>
          </div>
          <div className='row'>
            <div className='col'>Bread</div>
            <div className='col'></div>
            <div className='col'></div>
          </div>
          <div className='row'>
            <div className='col'>Orange Juice</div>
            <div className='col'></div>
            <div className='col'></div>
          </div>
        </div>
      </Body>
      
    </div>
  )
}

export default App