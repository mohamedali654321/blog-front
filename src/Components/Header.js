import React, { useState, useRef } from 'react'

import MegMenu from './MegaMenu'
import './Header.css'
import { Link } from 'react-router-dom'
import Language from './Language'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScroll: false,
      locales: localStorage.getItem("locale")
      // checked: false
     
    }

    // this.handleChange = this.handleChange.bind(this)

  }

  // setLocale() {
  //  const locale=  localStorage.getItem("locale");
  // //  this.state.locales =locale;
  //  this.setState({locales : localStorage.getItem("locale")})
  //  console.log(this.state.locales)
    
  // }
  // handleChange(checked){
  //   this.setState({checked})
  //   console.log(checked)
    
  // }
  
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    // this.setLocale()
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.setState({ hasScroll: true })
    }
    else {
      this.setState({ hasScroll: false })
    }

  }  

 

  
  

  

  render() {


    return (
      <div className={this.state.hasScroll ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <a href="/"><img src="/images/strapi-logo-dark.svg" src={this.state.hasScroll || document.location.pathname.length === 1 ? '/images/strapi-logo-light.svg' : '/images/strapi-logo-dark.svg'} className="logo" /></a>

          <div className="panelBackgroundWrapper">
            <div className="panelBackgroundContainer">
              <div className="panelBackground">
                <div className="panelBackgroundGradient">
                </div>
              </div>
            </div>
          </div>

          <ul className="links">
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}>
              <a href="/our-clients" className="cool">عملاؤنا</a> </li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}  ><a href="/our-partners" className="cool">شركاؤنا</a></li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/services" className="cool">خدماتنا </a></li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/products" className="cool">منتجاتنا </a></li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/blog" className="cool">المدونه</a></li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/sys-solutions" className="cool">نظم وحلول</a></li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/" className="cool">الرئيسية</a></li>


          </ul>

          {/* <div className="switch-container"> */}
            {/* <input
              type="checkbox"
              id='switch'
              checked={this.state.checked}
              onChange={this.handleChange}


            /> */}
            <Language/>
            {/* <Switch
              
              checked={this.state.checked}
              onChange={this.handleChange}
              onColor={"#6514a0"}
              uncheckedIcon={
                <div style={switchText}>AR</div>
              }
              checkedIcon={
                <div style={switchText}>EN</div>
              }
              boxShadow="0px 1px 5px rgba(0,0,0,0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0,0,0,0.2)"
              handleDiameter={30}
              offHandleColor={"#6514a0"}
              offColor={"#8c4bff"}
              
              
              
              
            /> */}
            {/* <div className="switch-color"></div> */}

            {/* <label for="switch" /> */}


          {/* </div> */}

          {/* <p>{this.state.checked ? "ar":"en"}</p> */}

          {/* <div className="ToggleContainer">
          
            <input type="checkbox" className="check" />
            
          </div> */}




        </div>
      </div>
    )

  }

}




export default Header


