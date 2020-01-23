import React, { Component, useState } from "react";
import axios from "axios";
import menuBurger from '../../assets/icons/menuBurger.png'
import deleteFilterIcon from '../../assets/icons/deleteFilterIcon.png'

import "./Filtres.css";
import DisplayArticles from '../screen/DisplayArticles'

class Filtres extends Component {
  state = {
    datasObjets: [""],

    isVisibleObjets: false,
    objetsSelected: {
      id: 0,
      name: "",
      type: ""
    },
    datasBesoins: [""],
    isVisibleBesoins: false,
    besoinsSelected: {
      id: 0,
      name: "",
      type: ""
    }
  };

  componentDidMount() {
    this.getObjets();
    this.getBesoins();    
  }

  getObjets = () => {
    axios
      .get("http://localhost:4000/user/objets")
      .then(response => response.data)
      .then(data => {
        this.setState({
          datasObjets: data
        });
      });
  };

  getBesoins = () => {
    axios
      .get("http://localhost:4000/user/besoins")
      .then(response => response.data)
      .then(data => {
        this.setState({
          datasBesoins: data
        });
      });
  };

  displayObjet = () => {
    this.setState({
      isVisibleObjets: !this.state.isVisibleObjets,
      isVisibleBesoins: false
    });
  };

  displayBesoins = () => {
    this.setState({
      isVisibleBesoins: !this.state.isVisibleBesoins,
      isVisibleObjets: false
    });
  };

  render() {
    // console.log("besoin selec", this.state.besoinsSelected);
console.log("front", this.state.front)
console.log("front props", this.props.front)

    // console.log('objet selec', this.state.objetsSelected)
  

    return (
      <>
      <div className="Filtres_container">
        <div className="Filtres_Objets-title" onClick={this.displayObjet}>
          <img src={menuBurger} alt='menuBurger'></img><p>Objets</p>
        </div>

        <div className={this.state.isVisibleObjets ? 'Filtres-frame-objet' : ""}>
          {this.state.isVisibleObjets
            ? this.state.datasObjets[0].results.map(categ => {
              const filterByCategory = this.state.datasObjets[1].results.filter(
                sousCateg => sousCateg.categories_objets_id === categ.id
              );

              return (
                <div className="Filtres_one-Categorie-objet">
                  <p
                    className="Filtres_sousCat"
                    onClick={() =>
                                this.setState(
                                  {
                                    objetsSelected: {
                                      id: categ.id,
                                      name: categ.categorie,
                                      type: "categories_objets"
                                    },
                                    isVisibleObjets: !this.state
                                      .isVisibleObjets
                                  },
                                  () => this.state
                                )
                    }
                  >
                    {categ.categorie}
                  </p>
                  <div className="Filtres_allCatIntermediaires">
                    {filterByCategory.map(sCateg => {
                      const filterBySousCateg = this.state.datasObjets[2].results.filter(
                        objet =>
                          objet.categories_intermediaires_id === sCateg.id
                      );
                      return (
                        <div className="Filtres_eachCatIntermediaires">
                          <ul>
                            <li className="Filtres_CatInterFont"
                              key={sCateg.id}
                              onClick={() =>
                                this.setState(
                                  {
                                    objetsSelected: {
                                      id: sCateg.id,
                                      name: sCateg.name,
                                      type: "categories_intermediaires"
                                    },
                                    isVisibleObjets: !this.state
                                      .isVisibleObjets
                                  },
                                  () => this.state
                                )
                              }
                            >
                              {sCateg.name}
                            </li>
                          </ul>
                          <hr />
                          {filterBySousCateg.map(objet => {
                            return (
                              <ul>
                                <li
                                  className="filtres_objets"
                                  key={objet.id}
                                  onClick={() =>
                                    this.setState(
                                      {
                                        objetsSelected: {
                                          id: objet.id,
                                          name: objet.name,
                                          type: "objets"
                                        },
                                        isVisibleObjets: !this.state
                                          .isVisibleObjets
                                      },
                                      () => this.state
                                    )
                                  }
                                >
                                  {objet.name}
                                </li>
                              </ul>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
            : ""}
        </div>

        {/* besoins */}
        <div className="Filtres_Besoins-title" onClick={this.displayBesoins}>
          <img src={menuBurger} alt='menuBurger'></img><p>Besoins</p>
        </div>

        <div className={this.state.isVisibleBesoins ? "Filtres_frame-besoins" : ""}>
          {this.state.isVisibleBesoins
            ? this.state.datasBesoins[0].results.map(categ => {
              const filterByCategory = this.state.datasBesoins[1].results.filter(
                sousCateg => sousCateg.besoins_id === categ.id
              );

              return (
                <div className="Filtres_BesoinsColumns">
                  <div>
                  <p
                    className="Filtres_BesoinsFont"
                    onClick={() =>
                      this.setState(
                        {
                          besoinsSelected: {
                            id: categ.id,
                            name: categ.besoins,
                            type: "besoins"
                          },
                          isVisibleBesoins: !this.state.isVisibleBesoins
                        },
                        () => this.state
                      )
                    }
                  >
                    {categ.besoins}
                  </p>
                  <hr />
                  </div>
                  

                  {filterByCategory.map(sCateg => {
                    const filterBySousCateg = this.state.datasObjets[2].results.filter(
                      objet => objet.types_activites_id === sCateg.id
                    );
                    return (
                      <div>
                        <ul>
                          <li
                            className="filtres_objets"
                            key={sCateg.id}
                            onClick={() =>
                              this.setState(
                                {
                                  besoinsSelected: {
                                    id: sCateg.id,
                                    name: sCateg.types_activites,
                                    type: "types_activites"
                                  },
                                  isVisibleBesoins: !this.state
                                    .isVisibleBesoins
                                },
                                () => this.state
                              )
                            }
                          >
                            {sCateg.types_activites}
                          </li>
                          
                        </ul>
                        
                        
                      </div>
                    );
                  })}
                </div>
              );
            })
            : ""}
        </div>

        {/* <div className='Filtres_searchEngine'> Moteur de recherche </div>
        <button onClick={this.getArticlesBySousCategSelected}>
          Rechercher
          </button> */}

        <div className='Filtres_selectFilters'>
            <p>
              {this.state.objetsSelected.id !== 0
                ? <div><p>{this.state.objetsSelected.name}</p>
                  <img src={deleteFilterIcon} alt='deleteFilterIcon' onClick={() => this.setState({objetsSelected : { 
                  id: 0,
                  name: ''}})} />
                </div>
                : ""}

            </p>

          {this.state.besoinsSelected.id !== 0
            ? <div><p>{this.state.besoinsSelected.name}</p>
              <img src={deleteFilterIcon} alt='deleteFilterIcon'onClick={()=>this.setState({besoinsSelected : { 
              id: 0,
              name: ''}})} />
            </div>

            : ""}

        </div>

      </div>
      
      {this.props.front === "user" ? 
            <DisplayArticles besoin={this.state.besoinsSelected} objet={this.state.objetsSelected}/>
: 
''
////////// Pour les get articles et initiatives dans admin, il faut faire passer en props depuis le composant parent de Filtre(dans admin) la props "front = "admin", et appeler ici le composant qui va afficher les articles en fonction des filtres /////
          }
      </>
    );
  }
}
export default Filtres;
