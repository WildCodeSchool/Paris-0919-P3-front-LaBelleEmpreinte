import React, { Component } from 'react';

class Besoins extends Component {
    state = {
        datas: [
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
    }
    render() {
        return (
            <div>
                
                {this.state.results.map(elem=>(
                   <p>{elem}</p> ))} 
            </div>
        )
    }
}

export default Besoins;