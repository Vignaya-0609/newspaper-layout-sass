import React from 'react'

function Header() {
  return (
    <header>
        <div className='news-link'>
            <p>www.news.com</p>
        </div>
        <hr className='hr'/>
        <h1><span>NEWS</span>PAPER</h1>
        <p className='ad'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className='details'>
            <h5 className='date'>May 5, 2024</h5>
            <h5 className='edition'>Edition: 01234</h5>
        </div>
        <hr className='hr'/>
    </header>
  )
}

export default Header