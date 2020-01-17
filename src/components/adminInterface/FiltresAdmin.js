import React, { Component, useState } from "react";
import axios from "axios";

import "../userInterface/Filtres.css";

class FiltresAdmin extends Component {
  state = {
    datasObjets: [""],

    isVisibleObjets: false,

    catObjSelected: [''],

    catIntSelected: [''],
    objSelected: [
      ''
    ],
    besoinsSelected: [
      ''
    ],
    typeActSelected: [
      ''
    ],
    datasBesoins: [""],
    isVisibleBesoins: false,
    // besoinsSelected: {
    //   id: 0,
    //   name: ""
    // }
    // objetsFormCateg: []
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

  render() {
    console.log("catobj", this.state.catObjSelected);
    // console.log("besoin selec", this.state.besoinsSelected);

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
                            catObjSelected : {
                              id : categ.id,
                              name : categ.categorie

                            },
                            

                            isVisibleObjets: !this.state.isVisibleObjets
                          },
                          () => this.state
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
                                      objetsSelected: {
                                        id: sCateg.id,
                                        name: sCateg.name
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
                                            name: objet.name
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
                            besoinsSelected: {
                              id: categ.id,
                              name: categ.besoins
                            },
                            isVisibleBesoins: !this.state.isVisibleBesoins
                          },
                          () => this.state
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
                                    besoinsSelected: {
                                      id: sCateg.id,
                                      name: sCateg.types_activites
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
        </div>

        <div className='Filtres_selectFilters'>
          {/* <p>
            {this.state.objetsSelected.id !== 0
              ? this.state.objetsSelected.name
              : ""}
          </p>
          <p>
            {this.state.besoinsSelected.id !== 0
              ? this.state.besoinsSelected.name
              : ""}
          </p> */}
        </div>

        <button onClick={this.getArticlesBySousCategSelected}>
          Rechercher
          </button>
      </div>
    );
  }
}
export default FiltresAdmin;
