import React, { Component } from "react";
import axios from "axios";
import menuBurger from '../../assets/icons/menuBurger.png'
import deleteFilterIcon from '../../assets/icons/deleteFilterIcon.png'
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
    datasBesoins: [],
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

  /// remove element from filter CatObj
  removeFilterCatObj = (filtre) => {
    const filteredCat = this.state.catObjSelected.filter(elem => elem.id != filtre)
    this.setState({ catObjSelected: filteredCat })
  }
  /// remove element from filter CatInt
  removeFilterCatInt = (filtre) => {
    const filteredCat = this.state.catIntSelected.filter(elem => elem.id != filtre)
    this.setState({ catIntSelected: filteredCat })
  }
  /// remove element from filter Obj
  removeFilterObj = (filtre) => {
    const filteredCat = this.state.objSelected.filter(elem => elem.id != filtre)
    this.setState({ objSelected: filteredCat })
  }
  /// remove element from filter Besoin
  removeFilterBesoins = (filtre) => {
    const filteredCat = this.state.besoinsSelected.filter(elem => elem.id != filtre)
    this.setState({ besoinsSelected: filteredCat })
  }
  /// remove element from filter TypeAct
  removeFilterTypAct = (filtre) => {
    const filteredCat = this.state.typeActSelected.filter(elem => elem.id != filtre)
    this.setState({ typeActSelected: filteredCat })
  }

  ///// Fonction pour envoyer à Create Article les différents id (seulement l'id) de chaque filtre pour pouvoir faire la requête au back ensuite /////
  filtersId = () => {
    let newA = []
      this.state.catObjSelected.map(catObj => {
        newA.push(
          {
            type: "categories_objets",
            id: catObj.id
          })
        return newA
      })
    
    let newB = []
      this.state.catIntSelected.map(catInt => {
        newB.push(
          {
            type: "categories_intermediaires",
            id: catInt.id
          })
        return newB
      })

      let newC = []
      this.state.objSelected.map(obj => {
        newC.push(
          {
            type: "objets",
            id: obj.id
          })
        return newC
      })

      let newD = []
      this.state.besoinsSelected.map(besoins => {
        newD.push(
          {
            type: "besoins",
            id: besoins.id
          })
        return newD
      })

      let newE = []
      this.state.typeActSelected.map(typeAct => {
        newE.push(
          {
            type: "types_activites",
            id: typeAct.id
          })
        return newE
      })




    this.props.filteredItems(newA, newB, newC, newD, newE, true)

  }
  handleClickFilter = (id, categorie, filter) => {
    switch (`${filter}`) {
      case "catObjSelected":
        const newFilterA = [...this.state.catObjSelected, {id: id, name: categorie}]
        this.setState({catObjSelected: newFilterA, isVisibleObjets: !this.state.isVisibleObjets})
        break;
      case "catIntSelected":
        const newFilterB = [...this.state.catIntSelected, {id: id, name: categorie}]
        this.setState({catIntSelected: newFilterB, isVisibleObjets: !this.state.isVisibleObjets})
        break;
      case "objSelected":
        const newFilterC = [...this.state.objSelected, {id: id, name: categorie}]
        this.setState({objSelected: newFilterC, isVisibleObjets: !this.state.isVisibleObjets})
        break;
      case "besoinsSelected":
        const newFilterD = [...this.state.besoinsSelected, {id: id, name: categorie}]
        this.setState({besoinsSelected: newFilterD, isVisibleBesoins: !this.state.isVisibleBesoins})
        break;
      case "typeActSelected":
        const newFilterE = [...this.state.typeActSelected, {id: id, name: categorie}]
        this.setState({typeActSelected: newFilterE, isVisibleBesoins: !this.state.isVisibleBesoins})
        break;
    }
  }
  //////////// render //////////
  render() {
 
    return (
      <div className="Filtres_container">
        <div className="Filtres_Objets-title" onClick={this.displayObjet}>
          <img src={menuBurger} alt='menuBurger'></img><p>Objets</p>
        </div>

        <div className={this.state.isVisibleObjets ? "Filtres-frame-objet" : "Filtres-frame-objet2"}>
          {this.state.isVisibleObjets
            ? this.state.datasObjets[0].results.map(categ => {
              const filterByCategory = this.state.datasObjets[1].results.filter(
                sousCateg => sousCateg.categories_objets_id === categ.id
              );

              return (
                <div className="Filtres_one-Categorie-objet">
                  <p
                    className="Filtres_sousCat"
                    onClick={() => {
                        this.handleClickFilter(categ.id, categ.categorie, "catObjSelected")
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
                              onClick={() => {
                                  this.handleClickFilter(sCateg.id, sCateg.name, "catIntSelected")
                                }}
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
                                      {
                                        this.handleClickFilter(objet.id, objet.name, "objSelected")
                                    }}
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

        <div className={this.state.isVisibleBesoins ? "Filtres_frame-besoins" : "Filtres_frame-besoins2"}>
          {this.state.isVisibleBesoins
            ? this.state.datasBesoins[0].results.map(categ => {
              const filterByCategory = this.state.datasBesoins[1].results.filter(
                sousCateg => sousCateg.besoins_id === categ.id
              );

              return (
                <div className="Filtres_BesoinsColumns">
                  <p
                    className="Filtres_BesoinsFont"
                    onClick={() =>
                        {
                          this.handleClickFilter(categ.id, categ.besoins, "besoinsSelected")
                        }}
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
                              {
                                this.handleClickFilter(sCateg.id, sCateg.types_activites, "typeActSelected")
                              }}
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



        <button onClick={this.filtersId}>
          Rechercher
          </button>

        <div className='Filtres_selectFilters'>
            
          <p>

            {this.state.catObjSelected.map((catObj, index) => {
              return <div><p>{catObj.name}</p>
                <img src={deleteFilterIcon} key={index} alt='deleteFilterIcon' onClick={() => this.removeFilterCatObj(catObj.id)} />

              </div>
            })}
          </p>
          <p>
            {this.state.catIntSelected.map((catInt, index) => {
              return <div><p>{catInt.name}</p>
                <img src={deleteFilterIcon} key={index} alt='deleteFilterIcon' onClick={() => this.removeFilterCatInt(catInt.id)} />

              </div>
            })}
          </p>
          <p>
            {this.state.objSelected.map((obj, index) => {
              return <div><p>{obj.name}</p>
                <img src={deleteFilterIcon} key={index} alt='deleteFilterIcon' onClick={() => this.removeFilterObj(obj.id)} />

              </div>
            })}
          </p>
          <p>
            {this.state.besoinsSelected.map((besoins, index) => {
              return <div><p>{besoins.name}</p>
              <img src={deleteFilterIcon} key={index} alt='deleteFilterIcon' onClick={() => this.removeFilterBesoins(besoins.id)} />

            </div>
            })}
          </p>
          <p>
            {this.state.typeActSelected.map((typeAct, index) => {
              return <div><p>{typeAct.name}</p>
              <img src={deleteFilterIcon} key={index} alt='deleteFilterIcon' onClick={() => this.removeFilterTypAct(typeAct.id)} />

            </div>
            })}
          </p>
        </div>
      </div>

    )
  }
}


export default FiltresAdmin;
