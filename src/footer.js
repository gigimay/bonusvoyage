import React, {Component} from 'react';
import location from '../photos/location.png';
import africavoyages from '../photos/africavoyages.png';
import group from '../photos/group.jpeg';
import plane from '../photos/plane.svg';
import hotel from '../photos/hotel.png';
import building from '../photos/building.jpeg';
import './myGrid.min.css';
import './footer.min.css';

class Footer extends Component {
    render() {
        return (
        <div className="grand-container">
          <div className="container">
            <div className="Footer space-around row">
              <div className="List over desk-2 mob-4">
                <a href=""><img src={africavoyages} alt=""/></a>
              </div>

                <div className="List desk-2 mob-4">
                  <a href="">
                        <img className="classList-image" src={location} alt=""/>
                        <span>454</span>
                        <span>AGENCES</span>
                    </a>
                </div>

                <div className="List desk-2 mob-4">
                   <a href="">
                        <img className="classList-image" src={group} alt=""/>
                        <span>454</span>
                        <span>AGENCES</span>
                  </a>
                </div>

                <div className="List desk-2 mob-4">
                     <a href="">
                        <img className="classList-image" src={building} alt=""/>
                        <span>454</span>
                        <span>AGENCES</span>
                      </a>
                </div>

                <div className="List desk-2 mob-4">
                    <a href="">
                        <img className="classList-image" src={hotel} alt=""/>
                        <span>454</span>
                        <span>AGENCES</span>
                     </a>
                </div>

                <div className="List desk-2 mob-4">
                      <a href="">
                        <img className="classList-image" src={plane} alt=""/>
                        <span>454</span>
                        <span>AGENCES</span>
                     </a>
                </div>
            </div>

            <div className="information">
              <div className="infocontent desk-4 mob-4">
                <h2>Bonus Voyage</h2><br/>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
              </div>
              <div className="infocontent desk-4 mob-4">
                <h2>Bonus Voyage</h2><br/>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
              </div>
              <div className="infocontent desk-4 mob-4">
                <h2>Bonus Voyage</h2><br/>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
              </div>
              <div className="infocontent desk-4 mob-4" >
                <h2>Bonus Voyage</h2><br/>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
                <p><a href="">Qui sommes nous</a></p>
              </div>
            </div>

            <div className="security-payment row">
              <div className="security desk-6 mob-12">
                <h1>SÉCURITÉ & CONFIDENTIALITÉ</h1>
                <div className="cover-security">
                  <img src={building} alt=""/>
                  <img src={building} alt=""/>
                  <img src={building} alt=""/>
                  <img src={building} alt=""/>
                </div>
              </div>

              <div className="payment desk-6 mob-8">
                <h1>MODES DE PAIEMENT ACCEPTÉS</h1>
                <div className="cover-payment">
                  <img src={plane} alt=""/>
                  <img src={plane} alt=""/>
                  <img src={plane} alt=""/>
                  <img src={plane} alt=""/>
                  <img src={plane} alt=""/>
                </div>
              </div>
            </div>

            <div className="paragraphe-p">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>


          </div>
        </div>
        );
    }
}

export default Footer;
