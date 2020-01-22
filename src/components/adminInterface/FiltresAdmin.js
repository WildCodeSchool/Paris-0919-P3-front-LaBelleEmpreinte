import React, { Component } from "react";
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
      this.state.catObjSelected.map(catObj => {
        newA.push(
          {
            type: "categories_objets",
            id: catObj.id
          })
        // console.log(catObj, 'newa')
        return newA
      })
    
    // console.log("--------------------NewA ---------------",newA)
    // console.log("state catObj 6546469464194489", this.state.catObjSelected)

    let newB = []
      this.state.catIntSelected.map(catInt => {
        newB.push(
          {
            type: "categories_intermediaires",
            id: catInt.id
          })
        // console.log(catInt, 'newa')
        return newB
      })

      let newC = []
      this.state.objSelected.map(obj => {
        newC.push(
          {
            type: "objets",
            id: obj.id
          })
        // console.log(obj, 'newa')
        return newC
      })

      let newD = []
      this.state.besoinsSelected.map(besoins => {
        newD.push(
          {
            type: "besoins",
            id: besoins.id
          })
        // console.log(besoins, 'newD')
        return newD
      })

      let newE = []
      this.state.typeActSelected.map(typeAct => {
        newE.push(
          {
            type: "types_activites",
            id: typeAct.id
          })
        // console.log(typeAct, 'newE')
        return newE
      })

      
    

    this.props.filteredItems(newA, newB, newC, newD, newE, true)

  }
  handleClickFilter = (id, categorie, filter) => {
    switch (`${filter}`) {
      case "catObjSelected":
        const newFilterA = [...this.state.catObjSelected, {id: id, name: categorie}]
        this.setState({catObjSelected: newFilterA, isVisibleObjets: !this.state.isVisibleObjets})
        // console.log('times times times A: ', newFilterA )
        // console.log('times times times A filter: ', filter )
        break;
      case "catIntSelected":
        const newFilterB = [...this.state.catIntSelected, {id: id, name: categorie}]
        this.setState({catIntSelected: newFilterB, isVisibleObjets: !this.state.isVisibleObjets})
        // console.log('times times times B: ', newFilterB )
        // console.log('times times times B filter: ', filter )
        break;
      case "objSelected":
        const newFilterC = [...this.state.objSelected, {id: id, name: categorie}]
        this.setState({objSelected: newFilterC, isVisibleObjets: !this.state.isVisibleObjets})
        // console.log('times times times C: ', newFilterC )
        break;
      case "besoinsSelected":
        const newFilterD = [...this.state.besoinsSelected, {id: id, name: categorie}]
        this.setState({besoinsSelected: newFilterD, isVisibleBesoins: !this.state.isVisibleBesoins})
        // console.log('times times times D: ', newFilterD )
        break;
      case "typeActSelected":
        const newFilterE = [...this.state.typeActSelected, {id: id, name: categorie}]
        this.setState({typeActSelected: newFilterE, isVisibleBesoins: !this.state.isVisibleBesoins})
        // console.log('times times times E: ', newFilterE )
        break;
    }
  }
  //////////// render //////////
  render() {
    console.log("catObjSelected",this.state.catObjSelected)
    console.log("catIntSelected",this.state.catIntSelected)
    console.log("objSelected",this.state.objSelected)
    console.log("besoinsSelected",this.state.besoinsSelected)
    console.log("typeActSelected",this.state.typeActSelected)
    
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
