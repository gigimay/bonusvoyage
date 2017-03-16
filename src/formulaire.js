import React, {Component} from 'react';
import './myGrid.min.css';
import './formulaire.min.css';

class Formulaire extends Component{
  render(){
    return(
      <div className="valise-container">
        <div className="container container-formulaire">
          <h1>CRÉER UN COMPTE</h1>
          <div className="mini-container">
            <div className="main-input">
              <div className="input-identifiant">
                <h1>MES IDENTIFIANTS</h1>
                <p>Adresse email <sup>*</sup></p>
                <input type="text" name="email"  data-required="true"/>
              </div>

              <div className="input-mot-de-passe row">
                <div className="mot-passe row-12">
                  <p>Mot de passe <sup>*</sup></p>
                  <input type="text"/>
                </div>
                <div className="confirmez-passe row-12">
                  <p>Confirmez le mot de passe<sup>*</sup></p>
                  <input type="text"/>
                </div>
              </div>
            </div>

            <div className="inf-perso">
              <h1>MES INFORMATIONS PERSONNELLES</h1>
              <div className="mes-info">
                <div className="titre">
                  <p>titre<sup>*</sup></p>
                  <select name="civility" id="civility">
                    <option value="00011a00005a6719">m.</option>
                    <option value="00011a00005a6719">mme</option>
                    <option value="00011a00005a6719">mlle</option>
                  </select>
                </div>

                <div className="nom">
                  <p>Nom<sup>*</sup></p>
                  <input type="text"/>
                </div>

                <div className="prenome">
                  <p>Prènome<sup>*</sup></p>
                  <input type="text"/>
                </div>

                <div className="date-de-naissance">
                  <p>Date de naissance (jj/mm/aa)<sup>*</sup></p>

                </div>

              </div>

                <div className="mes-info-deux">
                  <div className="telephone">
                    <p>Télèphone <sup>*</sup></p>
                    <input type="text"/>
                  </div>
                  <div className="telephone">
                    <p>Code Postal <sup>*</sup></p>
                    <input type="text"/>
                  </div>
                  <div className="telephone">
                    <p>ville <sup>*</sup></p>
                    <input type="text"/>
                  </div>
              </div>

              <label for="test">Test element used to proof </label>
              <label for="test">Test element used to proof </label>

              <h1>Je choisis mon agence favorite</h1>
              <div className="rig-dep-vil">
                <div className="valise-tout">
                  <input type="text" placeholder="Regions"/>
                </div>
                <div className="valise-tout">
                  <input type="text" placeholder="Departements"/>
                </div>
                <div className="valise-tout">
                  <input type="text" placeholder="Villes"/>
                </div>
              </div>
            </div>
         </div>
       </div>
      </div>
    )
  }
}
export default Formulaire;
