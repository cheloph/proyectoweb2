import React from 'react'

export default function Contactos() {
  return (
      <div>
        <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="chelophererra@gmail.com"/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
      </div>
  )
}
