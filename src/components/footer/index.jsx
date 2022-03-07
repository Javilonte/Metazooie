import React from 'react';
import "./footer.scss"

export default function Footer() {
  return  <footer>
  <div className="container">
      <div className="left section">
      <img
            src="http://metazooie.com/img/logo_white.png"
            alt=""
          />
          <div className="content">
              <p class="FooterDescription"> Metazooie is a metaverse society building an ecosystem of virtual worlds with thriving communities and player-owned economies using blockchain technology.</p>
          
          </div>
      </div>
{/* 
      <div className="center section">
          <h2>Contact Us</h2>
          <div className="content">
              <div className="place">
                  <span className="fas fa-map-marker-alt"></span>
                  <span className="text"> Monterrey, México.</span>
              </div>
              <div className="phone">
                  <span className="fas fa-phone-alt"></span>
                  <span className="text"> +52 1 81 1255 1457</span>
              </div>
              <div className="email">
                  <span className="fas fa-envelope"></span>
                  <span className="text" href="https://t.me/metazooie">  https://t.me/metazooie</span>
              </div>
          </div>
      </div> */}

      <div className="right section">
          <button className="submit">JOIN US</button>
          <img className="discord" src="https://img.icons8.com/color/48/000000/discord-logo.png"/>
      </div>
  </div>

  <div className="footer-bottom">
      <center>
          <div><span>Powered By <a href="https://multiwebpress.com">© 2021 | All Rights Reserved | Made By Metazooie</a></span></div>
      </center>
      
  </div>
</footer>
}
