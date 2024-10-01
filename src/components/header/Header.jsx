import React, {useState} from "react";
import "./Header.css";
import {BiMenuAltRight} from 'react-icons/bi'
import OutSideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  const getMenuStyles=(menuOpen)=>{
    if(document.documentElement.clientWidth <=800){
      return {right : !menuOpen && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" width={100} />

        <OutSideClickHandler onOutsideClick={()=>setMenuOpen(false)}>

        <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        </OutSideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpen((prev)=>!prev)}>
        <BiMenuAltRight size={30} />
      </div>
      </div>
      
    </section>
  );
};

export default Header;
