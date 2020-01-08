import React, { Component } from 'react';
class Objets extends Component {
    state = {
        datas: [
            {
                "type": "objets",
                "results": [
                    {
                        "id": 1,
                        "objets": "Pour s'habiller"
                    },
                    {
                        "id": 2,
                        "objets": "Dans la maison"
                    }
                   
                ]
            },
            {
                "type": "sous_objets",
                "results": [
                    {
                        "id": 1,
                        "sous_objets": "Short",
                        "objets_id": 1
                    },
                    {
                        "id": 2,
                        "sous objets": "Bottes",
                        "objets_id": 1
                    },
                    {
                        "id": 3,
                        "sous_objets": "Jupes",
                        "objets_id": 1
                    },
                    {
                        "id": 4,
                        "sous_objets": "Chaussures",
                        "objets_id": 1
                    },
                    {
                        "id": 5,
                        "sous_objets": "Decoration",
                        "objets_id": 2
                    },
                    {
                        "id": 6,
                        "sous_objets": "Lave linge",
                        "objets_id": 2
                    },
                    {
                        "id": 7,
                        "sous_objets": "Cuisiniere",
                        "objets_id": 2
                    },
                    {
                        "id": 8,
                        "sous_objets": "Télévision",
                        "objets_id": 2
                    },
                    {
                        "id": 9,
                        "sous_objets": "réparation",
                        "objets_id": 1
                    },
                    {
                        "id": 10,
                        "sous_objets": "objets occasion",
                        "objets_id": 2
                    },
                    {
                        "id": 11,
                        "sous_objets": "Chemises",
                        "objets_id": 1
                    },
                    {
                        "id": 12,
                        "sous_objets": "Pantalons",
                        "objets_id": 1
                    },
                    {
                        "id": 13,
                        "sous_objets": "Meubles",
                        "objets_id": 2
                    },
                    {
                        "id": 14,
                        "sous_objets": "Robes",
                        "objets_id": 1
                    },
                    {
                        "id": 15,
                        "sous_objets": "Capapé",
                        "objets_id": 2
                    }
                ]
            }
        ],
        isVisible: false
    }
    
    displayObjet = () => {
        this.setState({isVisible: !this.state.isVisible})
    }
    render() {
        return (
            <div>
                   <p onClick={this.displayObjet}>{this.state.datas[0].type}</p> 
                   {this.state.isVisible ? this.state.datas[0].results.map(elt => {
                       const test = this.state.datas[1].results.filter(elt2 => elt2.objets_id ===elt.id).map(elt =>elt.sous_objets)
                       return (
                           <div>
                           <p> {elt.objets} </p>
                       {test.map(elt => <p>{elt}</p>)}
                            </div>
                       )
                      
                       }):""}
                   
                   
                   
                
            </div>
        )
    }
}
export default Objets;