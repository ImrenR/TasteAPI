import React, { useState } from 'react'
import Main from './NotFoundStyle'

const NotFound = () => {

  const [sayac, setsayac] = useState(5);

  return (
  <Main>
  <h3>Oops!... Something went wrong</h3>
  <p>Within <strong> {sayac} </strong> seconds you will be redirected to the home page!</p>
  </Main>
  )
}

export default NotFound