import React from "react";
import ReactDOM from "react-dom";

import AnchorLink from 'react-anchor-link-smooth-scroll'



// css
import '../styles/first.sass';
import '../styles/card.sass';
import '../styles/hamburger.sass';

export default class LandingPage extends React.Component {
  render() {

    const NavData = [
      { title: 'Menu' , href: '#menu' },
      { title: 'Location' , href: '#location' },
      { title: 'About Us' , href: '#about' },


    ]
    return(
      <div className="container">
        <div className="flex-container" >
          <div className="flex-components">
            
            <div className="flex-navbar-container">
              <a href="#" className="flex-navbar-logo"> LOGO </a>
                
                <div className="flex-navbar-items">
                  <ul className="flex-navbar-ul">
                    {
                      NavData.map((item, index) => {
                        return (
                          <li className="flex-navbar-item-each">
                            
                            <AnchorLink href={item.href}>     
                              <a key={index} href={item.href} className="flex-navbar-ancor">
                                { item.title }
                              </a>
                            </AnchorLink> 
                          </li>
                        )
                      })
                    }
                  </ul> 
                </div> 
            
            </div>


            <div className="body">
              <a href="#"className="body-header">
                THE RESTURENT
              </a>

                <div className="body-sub-header">
                    We Cook, You Eat...
                </div>
                <div className="body">

                  <div className="row">
                    <div className="col">
                      <div className="card">
                        <a className="card_side card_side--front" href="#">
                          <img className="card-img" src="https://www.ballparkbrand.com/sites/default/files/Hero_Dog_0.png"></img>
                        </a>
                        <div className="card_side card_side--back">
                            <h1 className="header-item"> Hot Dogs </h1>
                            <p className="body-item"> Beef Suasage with Your Choice of Whole or White Buns </p>                            
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>


            <div className="flex-navbar-hamburger-container">
              <div className="navigation" >
                <input type="checkbox" className="navigation_checkbox" id="nav_toggle"></input>
                
                <label for="nav_toggle" className="navigation_button" >
                
                <img className="ham" src="https://images.vexels.com/media/users/3/143047/isolated/preview/b0c9678466af11dd45a62163bdcf03fe-fast-food-hamburger-flat-icon-by-vexels.png"></img>
                
                </label>     
                <div className="navigation_background" >{'\u00A0'}</div>

                <nav className="navigation_nav">
                    <ul className="navigation_list">
                      <li className="navigation_item">
                        <a href="#" className="navigation_link"> Stores </a>
                      </li>
                      <li className="navigation_item">
                        <a href="#" className="navigation_link"> Contact </a>
                      </li>
                      <li className="navigation_item">
                        <a href="#" className="navigation_link"> Rating </a>
                      </li>
                    </ul>
                </nav>

              </div> 
            
            </div>

          </div>
        </div>


        
      </div>
    )
  }
}
