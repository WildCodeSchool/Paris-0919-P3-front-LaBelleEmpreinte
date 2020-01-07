import React, { Component } from 'react';

class Besoins extends Component {
    state = {
        datas: [
            {
                "type": "besoins",
                "results": [
                    {
                        "id": 1,
                        "besoins": "comprendre_les_enjeux"
                    },
                    {
                        "id": 2,
                        "besoins": "fin_utilisation"
                    },
                    {
                        "id": 3,
                        "besoins": "réparation"
                    },
                    {
                        "id": 4,
                        "besoins": "occasion_location_DIY"
                    },
                    {
                        "id": 5,
                        "besoins": "marques_responsables"
                    }
                ]
            },
            {
                "type": "types_activites",
                "results": [
                    {
                        "id": 1,
                        "types_activites": "defis",
                        "besoins_id": 1
                    },
                    {
                        "id": 2,
                        "types_activites": "solutions",
                        "besoins_id": 1
                    },
                    {
                        "id": 3,
                        "types_activites": "5_gestes_simples",
                        "besoins_id": 1
                    },
                    {
                        "id": 4,
                        "types_activites": "labels",
                        "besoins_id": 1
                    },
                    {
                        "id": 5,
                        "types_activites": "deposer_et_donner",
                        "besoins_id": 2
                    },
                    {
                        "id": 6,
                        "types_activites": "vente_en_boutique",
                        "besoins_id": 2
                    },
                    {
                        "id": 7,
                        "types_activites": "vente_en_ligne",
                        "besoins_id": 2
                    },
                    {
                        "id": 8,
                        "types_activites": "location",
                        "besoins_id": 2
                    },
                    {
                        "id": 9,
                        "types_activites": "réparation",
                        "besoins_id": 3
                    },
                    {
                        "id": 10,
                        "types_activites": "objets_occasion",
                        "besoins_id": 4
                    },
                    {
                        "id": 11,
                        "types_activites": "location",
                        "besoins_id": 4
                    },
                    {
                        "id": 12,
                        "types_activites": "creation_diy",
                        "besoins_id": 4
                    },
                    {
                        "id": 13,
                        "types_activites": "objets_labellises",
                        "besoins_id": 5
                    },
                    {
                        "id": 14,
                        "types_activites": "marques_recommandes",
                        "besoins_id": 5
                    },
                    {
                        "id": 15,
                        "types_activites": "marketplace",
                        "besoins_id": 5
                    }
                ]
            }
        ]
    }
    render() {
        return (
            <div>
                
                {this.state.datas.map(elem=>(
                    <>
                   <p>{elem.type}</p> 
                   <br/>
                   
                   {elem.results.map(elt => <p>{elt.besoins} // id : {elt.id}</p> ) }
                   
                   
                   {elem.results.map(elt => <p>{elt.types_activites}</p> ) } 
                   
                   
                   </>
                   
                   
                   ))} 
            </div>
        )
    }
}

export default Besoins;