import React from 'react'


import './Header.css'



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
          
          
          <a href="/courses" className="cool">عملاؤنا</a>    
         <div> <a href="/downloads" className="cool">شركاؤنا</a></div>
         <div> <a href="/workshops" className="cool">خدماتنا </a></div>
         <div> <a href="/buy" className="cool">المنتدي </a></div>
         <div> <a href="/workshops" className="cool">المدونه</a></div>
         <div> <a href="/downloads" className="cool">نظم وحلول</a></div>
         <div> <a href="/courses" className="cool">الرئيسية</a></div>
         

          <iframe src="https://ghbtns.com/github-btn.html?user=strapi&repo=strapi&type=star&count=true" frameborder="0" scrolling="0" height="20" width="114" title="Star Strapi on GitHub" />
          <div className="btn">

            <span className="shadow"></span>
            <div className="background">
              <div className="hover">


              </div>

            </div>
            <a href=""  className="btnLink">Get Started</a>

          </div>


        </div>
      </div>
    )

  }

}




export default Header


