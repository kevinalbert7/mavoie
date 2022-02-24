import React, { useState } from 'react'
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
          <div className='row mb-4 d-flex justify-content-between'>
            <div className='col-2 d-flex justify-content-center bg-primary rounded-3 fs-3 fw-bold text-light'>Milk</div>
            <div className='col-2 d-flex justify-content-center text-danger'>Out of Stock</div>
            <div className='col-2 d-flex justify-content-center'>3.5 MAD</div>
          </div>
          <div className='row mb-4 justify-content-between'>
            <div className='col-2 d-flex justify-content-center bg-primary rounded-3 fs-3 fw-bold text-light'>Bread</div>
            <div className='col-2 d-flex justify-content-center text-danger'></div>
            <div className='col-2 d-flex justify-content-center'></div>
          </div>
          <div className='row mb-4 justify-content-between'>
            <div className='col-2 d-flex justify-content-center bg-primary rounded-3 fs-3 fw-bold text-light'>Rice</div>
            <div className='col-2 d-flex justify-content-center text-danger'></div>
            <div className='col-2 d-flex justify-content-center'></div>
          </div>

          <div class="row d-flex justify-content-between">
            <div class="col-auto border border-secondary rounded-2">
              <label for="inputArticle" class="col-form-label">Article</label>
            </div>
            <div class="col-auto">
              <input class="form-control" placeholder="Name"/>
            </div>
            <div class="col-auto">
              <input class="form-control" placeholder="Quantity"/>
            </div>
            <div class="col-auto">
              <input class="form-control" placeholder="Price"/>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </Body>
      
    </div>
  )
}

export default App