import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer className='footer container'>
      <section className='footerTop'>
        <div className='footer1'>
          <h1>HomeDecor</h1>
        </div>
        <div className='footer2'>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui</p>
        </div>
        <div className='footer3'>
          <a href="">+994 50 555 55 55</a>
        </div>
        <div className='footer4'>
          <a href="">youremailhere@gmail.com</a>
        </div>
      </section>
      <p className='footerBottom'>©2022 All Right Reserved. Developed by Webcoder Agency</p>
    </footer>
  )
}

export default Footer