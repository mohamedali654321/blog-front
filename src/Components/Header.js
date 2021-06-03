import React from 'react'

import MegMenu from './MegaMenu'
import './Header.css'
import {Link} from 'react-router-dom'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScroll: false
    }

  }



  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
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
          <a href="/"><img src="/images/strapi-logo-dark.svg" src={this.state.hasScroll || document.location.pathname.length === 1  ? '/images/strapi-logo-light.svg' : '/images/strapi-logo-dark.svg'} className="logo" /></a>
          
           <div className="panelBackgroundWrapper">
              <div className="panelBackgroundContainer">
                <div className="panelBackground">
                      <div className="panelBackgroundGradient">
                      </div>
                </div>
              </div>
           </div>

           <ul className="links">
           <li className={document.location.pathname.length === 1  ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}>
           <Link to="/our-clients" className="cool">عملاؤنا</Link> </li>          
           <li className= {document.location.pathname.length === 1  ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}  ><a href="/our-partners" className="cool">شركاؤنا</a></li>
           <li className={document.location.pathname.length === 1  ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/services" className="cool">خدماتنا </a></li>
           <li className={document.location.pathname.length === 1  ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/products" className="cool">منتجاتنا </a></li>
           <li className={document.location.pathname.length === 1  ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/blog" className="cool">المدونه</a></li>
           <li className={document.location.pathname.length === 1  ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/sys-solutions" className="cool">نظم وحلول</a></li>
           <li className={document.location.pathname.length === 1  ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/" className="cool">الرئيسية</a></li>
           

           </ul>

           <div className="switch-container">
           <input type="checkbox" id='switch'/>
          <div className="switch-color"></div>
  
           <label for="switch"/>
      

           </div>
    
          {/* <div className="ToggleContainer">
          
            <input type="checkbox" className="check" />
            
          </div> */}

          


        </div>
      </div>
    )

  }

}




export default Header


