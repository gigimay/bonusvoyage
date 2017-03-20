import React, {Component} from 'react';
// import checkbox from 'react-checkbox';
import '../myGrid.min.css';
import './formulaire.min.css';


class Formulaire extends Component{
  render(){
    return(
      <div className="valise-container">
        <div className="container container-formulaire">
          <h1>CRÉER UN COMPTE</h1>

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
              <div className="mes-info row">
                <div className="titre mob-12">
                  <p>titre<sup>*</sup></p>
                  <select name="civility" className="civility">
                    <option value="00011a00005a6719">m.</option>
                    <option value="00011a00005a6719">mme</option>
                    <option value="00011a00005a6719">mlle</option>
                  </select>
                </div>

                <div className="nom mob-12">
                  <p>Nom<sup>*</sup></p>
                  <input type="text"/>
                </div>

                <div className="prenome mob-12">
                  <p>Prènome<sup>*</sup></p>
                  <input type="text"/>
                </div>

                <div className="date-de-naissance mob-12">
                  <p>Date de naissance (jj/mm/aa)<sup>*</sup></p>
                  <select name="days" className="select">
                    <option value="">monday</option>
                    <option value="">tuesday</option>
                    <option value="">wednesday</option>
                    <option value="">thersday</option>
                    <option value="">friday</option>
                    <option value="">satudrday</option>
                    <option value="">sunday</option>
                  </select>
                  <select name="month" className="select">
                    <option value="">january</option>
                    <option value="">february</option>
                    <option value="">march</option>
                    <option value="">april</option>
                    <option value="">may</option>
                    <option value="">june</option>
                    <option value="">july</option>
                    <option value="">august </option>
                    <option value="">september</option>
                    <option value="">october</option>
                    <option value="">november</option>
                    <option value="">december</option>
                  </select>
                  <select name="" className="select">
                    <option name="" id="">2017</option>
                    <option name="" id="">2016</option>
                    <option name="" id="">2015</option>
                    <option name="" id="">2014</option>
                    <option name="" id="">2013</option>
                    <option name="" id="">2012</option>
                    <option name="" id="">2011</option>
                  </select>

                </div>

              </div>

                <div className="mes-info-deux row">
                  <div className="telephone mob-12">
                    <p>Télèphone <sup>*</sup></p>
                    <input type="text"/>
                  </div>
                  <div className="telephone mob-12">
                    <p>Code Postal <sup>*</sup></p>
                    <input type="text"/>
                  </div>
                  <div className="telephone mob-12">
                    <p>ville <sup>*</sup></p>
                    <input type="text"/>
                  </div>
              </div>

              <div className="checkbox">
                  <input name="remember" type="checkbox" defaultChecked/>
                  <label for="test">Je souhaite m'inscrire à la newsletter bonus-voyages.fr </label><br/>
                  <input name="remember" type="checkbox" defaultChecked/>
                  <label for="test">Je souhaite recevoir les offres des partenaires bonus-voyages.fr</label>
              </div>

              <h1>Je choisis mon agence favorite</h1>
              <div className="rig-dep-vil row">
                <div className="valise-tout mob-12">
                  <input type="text" placeholder="Regions"/>
                </div>
                <div className="valise-tout mob-12">
                  <input type="text" placeholder="Departements"/>
                </div>
                <div className="valise-tout mob-12">
                  <input type="text" placeholder="Villes"/>
                </div>
                <div className="valise-tout mob-12">
                  <button>RECHERCHER</button>
                </div>
              </div>
         </div>
       </div>
      </div>
    )
  }
}
export default Formulaire;
