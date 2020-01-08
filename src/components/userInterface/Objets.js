import React, { Component } from 'react';
class Besoins extends Component {
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
                "type": "sous objets",
                "results": [
                    {
                        "id": 1,
                        "sous objets": "defis",
                        "objets_id": 1
                    },
                    {
                        "id": 2,
                        "sous objets": "Bottes",
                        "objets_id": 1
                    },
                    {
                        "id": 3,
                        "sous objets": "Jupes",
                        "objets_id": 1
                    },
                    {
                        "id": 4,
                        "sous objets": "Chaussures",
                        "objets_id": 1
                    },
                    {
                        "id": 5,
                        "sous objets": "Decoration",
                        "objets_id": 2
                    },
                    {
                        "id": 6,
                        "sous objets": "Lave linge",
                        "objets_id": 2
                    },
                    {
                        "id": 7,
                        "sous objets": "Cuisiniere",
                        "objets_id": 2
                    },
                    {
                        "id": 8,
                        "sous objets": "Télévision",
                        "objets_id": 2
                    },
                    {
                        "id": 9,
                        "sous objets": "réparation",
                        "objets_id": 1
                    },
                    {
                        "id": 10,
                        "sous objets": "objets occasion",
                        "objets_id": 2
                    },
                    {
                        "id": 11,
                        "sous objets": "Chemises",
                        "objets_id": 1
                    },
                    {
                        "id": 12,
                        "sous objets": "Pantalons",
                        "objets_id": 1
                    },
                    {
                        "id": 13,
                        "sous objets": "Meubles",
                        "objets_id": 2
                    },
                    {
                        "id": 14,
                        "sous objets": "Robes",
                        "objets_id": 1
                    },
                    {
                        "id": 15,
                        "sous objets": "Capapé",
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
                   <p onClick={this.displayOabjet}>{this.state.datas[0].type}</p> 
                   {this.state.isVisible ? this.state.datas[0].results.map(elt => {
                       const test = this.state.datas[1].results.filter(elt2 => elt2.objets_id ===elt.id).map(elt =>elt.types_activites)
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