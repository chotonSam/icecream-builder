import React from 'react'
import Builder from '../components/Builder/Builder'
import IceCream from '../components/IceCream/IceCream'

const IceCreamBuilder = () => {
  return (
    <div class="container grid">
      <IceCream/>
      <Builder/>
    </div>
  )
}

export default IceCreamBuilder