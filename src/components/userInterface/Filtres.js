import React, { Component } from "react";
import axios from "axios";
import menuBurger from "../../assets/icons/menuBurger.png";
import deleteFilterIcon from "../../assets/icons/deleteFilterIcon.png";
import DisplayArticlesAdmin from "../adminInterface/DisplayArticleAdmin";
import DisplayArticles from "../screen/DisplayArticles";
import DisplayInitiativesAdmin from "../adminInterface/DisplayInitiativesAdmin";
import MoteurRecherche from '../screen/MoteurRecherche'
import "./Filtres.css"

let pathApi = process.env.REACT_APP_PATH_API_DEV
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD
    }

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
    },
    recherche: ''
  };

  setRecherche = (submitRecherche) => {
    this.setState({ recherche: submitRecherche })
  }

  componentDidMount() {
    this.getObjets();
    this.getBesoins();
  }

  handleModify = (e) => {

    this.props.modify(e)
  }

  

  getObjets = () => {
    axios
      .get(`${pathApi}/user/objets`)
      .then(response => response.data)
      .then(data => {
       console.log('blala', data)

        this.setState({
          datasObjets: data
        });
        console.log('bnojour', this.state.datasObjets)

      });
  };

  getBesoins = () => {
    axios
      .get(`${pathApi}/user/besoins`)
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

  jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    console.log('dataobjets',this.state.datasObjet)

    return (
      <>
        <div>
          {this.props.front === "user" ? <MoteurRecherche setRechercheParent={this.setRecherche} /> : null}
          <div className="Filtres_container">
            <div className="Filtres_Objets-title" onClick={this.displayObjet}>
              <img src={menuBurger} alt="menuBurger"></img>
              <p>Objets</p>
            </div>
            <div
              className={
                this.state.isVisibleObjets ? "Filtres-frame-objet" : "Filtres-frame-objet2"
              }
            >
              {this.state.isVisibleObjets
                ? this.state.datasObjets[0].results.map(categ => {
                  console.log('categ', categ)
                  const filterByCategory = this.state.datasObjets[1].results.filter(
                    sousCateg => sousCateg.categories_objets_id === categ.id
                  ); return (
                    <div className="Filtres_one-Categorie-objet">
                      <p
                        className="Filtres_sousCat"
                        onClick={() =>
                          this.setState(
                            {
                              objetsSelected: {
                                id: categ.id,
                                name: categ.categorie.replace,
                                type: "categories_objets"
                              },
                              isVisibleObjets: !this.state.isVisibleObjets
                            },
                            () => this.state
                          )
                        }
                      >
                        {this.jsUcfirst(categ.categorie.replace(/_/g, " "))}
                      </p>
                      <div className="Filtres_allCatIntermediaires">
                        {filterByCategory.map(sCateg => {
                                            console.log('Scateg', sCateg)

                          const filterBySousCateg = this.state.datasObjets[2].results.filter(
                            objet =>
                              objet.categories_intermediaires_id === sCateg.id
                          );
                          return (
                            <div className="Filtres_eachCatIntermediaires">
                              <nav>
                                <ul>
                                  <li
                                    className="Filtres_CatInterFont"
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
                                    {this.jsUcfirst(sCateg.name.replace(/_/g, " "))}
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
                                        {this.jsUcfirst(objet.name.replace(/_/g, " "))}
                                      </li>
                                    </ul>
                                  );
                                })}
                              </nav>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
                : ""}
            </div>            {/* besoins */}
            <div
              className="Filtres_Besoins-title"
              onClick={this.displayBesoins}
            >
              <img src={menuBurger} alt="menuBurger"></img>
              <p>Besoins</p>
            </div>            <div
              className={
                this.state.isVisibleBesoins ? "Filtres_frame-besoins" : "Filtres_frame-besoins2"
              }
            >
              {this.state.isVisibleBesoins
                ? this.state.datasBesoins[0].results.map(categ => {
                  const filterByCategory = this.state.datasBesoins[1].results.filter(
                    sousCateg => sousCateg.besoins_id === categ.id
                  ); return (
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
                          {this.jsUcfirst(categ.besoins.replace(/_/g, " "))}
                        </p>
                        <hr />
                      </div>                        {filterByCategory.map(sCateg => {
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
                                {this.jsUcfirst(sCateg.types_activites.replace(/_/g, " "))}
                              </li>
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
                : ""}
            </div>            {/* <div className='Filtres_searchEngine'> Moteur de recherche </div>
        <button onClick={this.getArticlesBySousCategSelected}>
          Rechercher
          </button> */}            <div className="Filtres_selectFilters">
              <p>
                {this.state.objetsSelected.id !== 0 ? (
                  <div>
                    <p>{this.state.objetsSelected.name}</p>
                    <img
                      src={deleteFilterIcon}
                      alt="deleteFilterIcon"
                      onClick={() =>
                        this.setState({
                          objetsSelected: {
                            id: 0,
                            name: ""
                          }
                        })
                      }
                    />
                  </div>
                ) : (
                    ""
                  )}
              </p>              {this.state.besoinsSelected.id !== 0 ? (
                <div>
                  <p>{this.state.besoinsSelected.name}</p>
                  <img
                    src={deleteFilterIcon}
                    alt="deleteFilterIcon"
                    onClick={() =>
                      this.setState({
                        besoinsSelected: {
                          id: 0,
                          name: ""
                        }
                      })
                    }
                  />
                </div>
              ) : (
                  ""
                )}
            </div>
          </div>





          {this.props.front === "admin_articles" ?
            <DisplayArticlesAdmin
              besoin={this.state.besoinsSelected}
              objet={this.state.objetsSelected}
              modify={(e) => this.handleModify(e)}
            />
            : this.props.front === "admin_initiatives" ?
              <DisplayInitiativesAdmin
                besoin={this.state.besoinsSelected}
                objet={this.state.objetsSelected}

              />
              : <DisplayArticles
                besoin={this.state.besoinsSelected}
                objet={this.state.objetsSelected}
                recherche={this.state.recherche}
              />
          }
        </div>



        {/* <DisplayArticlesAdmin besoin={this.state.besoinsSelected} objet={this.state.objetsSelected} modify={(e) => this.handleModify(e)} /> */}
      </>
    );
  }
}
export default Filtres;
