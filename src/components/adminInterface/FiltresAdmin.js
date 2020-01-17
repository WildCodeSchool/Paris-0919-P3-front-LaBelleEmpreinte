import React, { Component, useState } from "react";
import axios from "axios";

import "../userInterface/Filtres.css";

//////// Trouver un moyen de n'ajouter qu'une fois dans le state un même filtre //////
class FiltresAdmin extends Component {
  state = {
    datasObjets: [""],

    isVisibleObjets: false,

    catObjSelected: [],

    catIntSelected: [],
    objSelected: [],
    besoinsSelected: [],
    typeActSelected: [],
    datasBesoins: [""],
    isVisibleBesoins: false,
  
  };

  componentDidMount() {
    this.getObjets();
    this.getBesoins();
  }

  // componentDidUpdate() {
  //   this.props.
  // }

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

  ///// Fonction pour envoyer à Create Article les différents id (seulement l'id) de chaque filtre pour pouvoir faire la requête au back ensuite /////
  filtersId = () => {
    let newA = []
    let a = 
      this.state.catObjSelected.map(catObj => {
        newA.push(catObj.id)
        console.log(catObj, 'newa')
        return newA
      })
    
    console.log(newA)

    let newB = []
    let b = 
      this.state.catIntSelected.map(catInt => {
        newB.push(catInt.id)
        console.log(catInt, 'newa')
        return newB
      })

      let newC = []
    let c = 
      this.state.objSelected.map(obj => {
        newC.push(obj.id)
        console.log(obj, 'newa')
        return newC
      })

      let newD = []
    let d = 
      this.state.besoinsSelected.map(besoins => {
        newD.push(besoins.id)
        console.log(besoins, 'newD')
        return newD
      })

      let newE = []
    let e = 
      this.state.typeActSelected.map(typeAct => {
        newE.push(typeAct.id)
        console.log(typeAct, 'newE')
        return newE
      })

      
    

    this.props.filteredItems(newA, newB, newC, newD, newE)

  }

  //////////// render //////////
  render() {

    return (
      <div className="Filtres_container">
        <div className="Filtres_CatObjets">
          <div className="Filtres_title" onClick={this.displayObjet}>
            Objets
          </div>

          <div className={this.state.isVisibleObjets ? "Filtres_frame" : ""}>
            {this.state.isVisibleObjets
              ? this.state.datasObjets[0].results.map(categ => {
                const filterByCategory = this.state.datasObjets[1].results.filter(
                  sousCateg => sousCateg.categories_objets_id === categ.id
                );

                return (
                  <div className="Filtres_allCategories">
                    <p
                      className="Filtres_sousCat"
                      onClick={() => {
                    
                        this.setState(
                          {
                            catObjSelected : this.state.catObjSelected.concat({
                              id : categ.id,
                              name : categ.categorie

                            }),
                            

                            isVisibleObjets: !this.state.isVisibleObjets
                          },
                          
                        )
                      }}
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
                                      catIntSelected : this.state.catIntSelected.concat({
                                        id : sCateg.id,
                                        name : sCateg.name,
                                        
                                      }),
                            

                                      isVisibleObjets: !this.state.isVisibleObjets
                                    },
                                    
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
                                          objSelected : this.state.objSelected.concat({
                                            id : objet.id,
                                            name : objet.name,
                                            
                                          }),
                            

                                          isVisibleObjets: !this.state.isVisibleObjets
                                        },
                                        
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
        </div>

        {/* besoins */}
        <div className="Filtres_CatObjets">
          <div className="Filtres_title" onClick={this.displayBesoins}>
            Besoins
            </div>

          <div className={this.state.isVisibleBesoins ? "Filtres_frame" : ""}>
            {this.state.isVisibleBesoins
              ? this.state.datasBesoins[0].results.map(categ => {
                const filterByCategory = this.state.datasBesoins[1].results.filter(
                  sousCateg => sousCateg.besoins_id === categ.id
                );

                return (
                  <div className="Filtres_allCategories">
                    <p
                      className="Filtres_sousCat"
                      onClick={() =>
                        this.setState(
                          {
                            besoinsSelected : this.state.besoinsSelected.concat({
                              id : categ.id,
                              name : categ.besoins,
                            }),
                            

                            isVisibleBesoins: !this.state.isVisibleBesoins
                          },
                          
                        )
                      }
                    >
                      {categ.besoins}
                    </p>

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
                                    typeActSelected : this.state.typeActSelected.concat({
                                      id : sCateg.id,
                                      name : sCateg.types_activites,
                                    }),
                                    isVisibleBesoins: !this.state.isVisibleBesoins
                                  },
                                  
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
        </div>

        

        <button onClick={this.filtersId}>
          Valider
          </button>

          <div className='Filtres_selectFilters'>
          <div>
            {this.state.catObjSelected.map(catObj => {
              return <p> {catObj.name} </p>
            })}
          </div>
          <div>
            {this.state.catIntSelected.map(catInt => {
              return <p> {catInt.name} </p>
            })}
          </div>
          <div>
            {this.state.objSelected.map(obj => {
              return <p> {obj.name} </p>
            })}
          </div>
          <div>
            {this.state.besoinsSelected.map(besoins => {
              return <p> {besoins.name} </p>
            })}
          </div>
          <div>
            {this.state.typeActSelected.map(typeAct => {
              return <p> {typeAct.name} </p>
            })}
          </div>
        </div>

      </div>
    );
  }
}
export default FiltresAdmin;
