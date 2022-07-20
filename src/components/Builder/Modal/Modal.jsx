import React from 'react'

const Modal = () => {
  return (
    <div class="modal">
    <div class="backdrop"></div>
    <div class="modalBody">
      <div class="formcontainer">
        <h3>Complete the form below and hit submit</h3>
        <form class="form_box" action="">
          <ul>
            {/* <li><input type="text" class="alignLeft" placeholder="Name"> <input type="number" class="alignRight"
                placeholder="Phone no"></li>
            <li><input class="email" type="email" placeholder="Email"></li>
            <li><textarea class="textarea" placeholder="Address"></textarea></li>
            <li><input type="submit" class="add_btn subBtn" value="Submit Order"></li> */}
          </ul>

        </form>
      </div>
    </div>
  </div>
  )
}

export default Modal