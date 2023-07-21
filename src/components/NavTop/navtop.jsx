import React, { useEffect, useState } from 'react'
import "./navtop.css"
import { BsCart2, BsXLg, BsList, BsPerson, BsSearch}  from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'

export const Navtop = () => {

  // search
  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearchButtonClick = () => {
    setSearchOpen(true);
  };
  const handleCloseSearch = () => {
    setSearchOpen(false);
  };

  // navbar
  const [navOpen, setNavOpen] = useState(false);
  const handleNavButtonClick = () => {
    setNavOpen(true);
  };
  const handleCloseNav = () => {
    setNavOpen(false);
  }


  return (
    <div className={`navtop container ${searchOpen ? 'search-open' : ''} ${navOpen ? 'nav-open' : ''}`}>

      {searchOpen && (
        <div className='overlay' onClick={handleCloseSearch}></div>
      )}
      {navOpen && (
        <div className='overlayNav' oncClick={handleCloseNav}></div>
      )}

        <div className='navtopStart'>
            <div className='langs'>
              <span className='langAz'>Az</span>
              <span className='langEn'>En</span>
              <span className='langRu'>Ru</span>
            </div>
            <button className='searchBtn' onClick={handleSearchButtonClick}><BsSearch/></button>
        </div>

        {searchOpen && (
        <div className='searchBox'>
          <input type='text' className='searchInput' placeholder='SEARCH OUR STORE'/>
          <button className='closeBtn' onClick={handleCloseSearch}><BsXLg/></button>
        </div>
      )}

          {navOpen && (
            <div className='navBox'>
              <div>
                <div className='navBoxTop'>
                  <Link to="/shopping-cart"><button className='cartBtnMob'><BsCart2/></button></Link>
                  <Link to="/auth/login"><button className='personBtnMob'><BsPerson/></button></Link>
                </div>
                <button className='closeNavBtn' onClick={handleCloseNav}><BsXLg/></button>
                <nav className='navbarMob'>
                  <NavLink className={({isActive}) => isActive?'active_link': ''} to="/">Home</NavLink>
                  <NavLink className={({isActive}) => isActive?'active_link': ''} to="/about">About</NavLink>
                  <NavLink className={({isActive}) => isActive?'active_link': ''} to="/products">Products</NavLink>
                  <NavLink className={({isActive}) => isActive?'active_link': ''} to="/collections">Collections</NavLink>
                  <NavLink className={({isActive}) => isActive?'active_link': ''} to="/sale">Sale</NavLink>
                  <NavLink className={({isActive}) => isActive?'active_link': ''} to="/contact">Contact</NavLink>
                </nav>
                <div className='navBoxLangs'>
                  <span>Az</span>
                  <span>En</span>
                  <span>Ru</span>
                </div>
              </div>
            </div>
          )}

        <div className='navtopTitle'>
            <p>HomeDecor</p>
        </div>

        <div className='navtopEnd'>
            <Link to="/shopping-cart"><button className='cartBtn'><BsCart2/></button></Link>
            <Link to="/auth/login"><button className='personBtn'><BsPerson/></button></Link>
            <button className='searchBtnMob' onClick={handleSearchButtonClick}><BsSearch/></button>
            <button className='hamburgerBtnMob' onClick={handleNavButtonClick}><BsList/></button>
        </div>

    </div>
  )
}


