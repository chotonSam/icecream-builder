import React from 'react'
import Builder from '../components/Body/Builder/Builder'
import IceCream from '../components/Body/IceCream/IceCream'

const IceCreamBuilder = () => {
  return (
    <div class="container grid">
      <IceCream/>
      <Builder/>
    </div>
  )
}

export default IceCreamBuilder