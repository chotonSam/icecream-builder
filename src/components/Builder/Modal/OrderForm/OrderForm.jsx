import React from 'react'

const OrderForm = () => {
  return (
    <div class="formcontainer">
    <h3>Complete the form below and hit submit</h3>
    <form class="form_box" action="">
      <ul>
       
        <li><input value={null} class="email" type="email" placeholder="Email"></li>
        
      </ul>

    </form>
  </div>
  )
}

export default OrderForm