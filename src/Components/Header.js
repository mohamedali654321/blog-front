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
          <a href="/"><img src="/images/strapi-logo-dark.svg" src={this.state.hasScroll ? '/images/strapi-logo-light.svg' : '/images/strapi-logo-dark.svg'} className="logo" /></a>
          
           <div className="panelBackgroundWrapper">
              <div className="panelBackgroundContainer">
                <div className="panelBackground">
                      <div className="panelBackgroundGradient">
                      </div>
                </div>
              </div>
           </div>

           <ul className="links">
           <li className="NavigationLabel">
           <Link to="/our-clients" className="cool">عملاؤنا</Link> </li>          
           <li className="NavigationLabel"><Link to="/our-partners" className="cool">شركاؤنا</Link></li>
           <li className="NavigationLabel"><Link to="/services" className="cool">خدماتنا </Link></li>
           <li className="NavigationLabel"><Link to="/forum" className="cool">المنتدي </Link></li>
           <li className="NavigationLabel"><Link to="/blog" className="cool">المدونه</Link></li>
           <li className="NavigationLabel"><Link to="/sys-solutions" className="cool">نظم وحلول</Link></li>
           <li className="NavigationLabel"><Link to="/" className="cool">الرئيسية</Link></li>
           

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


