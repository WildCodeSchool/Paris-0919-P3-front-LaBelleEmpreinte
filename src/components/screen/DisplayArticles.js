import React, { Component } from 'react'
import ArticlesItem from './ArticlesItem'
import './CSS/DisplayArticles.css'

class DisplayArticles extends Component {
    state = {
        articleList: [
            {
                title:
                    'Défis écologique et sociaux du textile',
                image:
                    'http://www.auserviceduvivant.info/wp-content/uploads/2017/07/Textiles.jpg',
                date:
                    '22/05/2019',
                time:
                    '5 minutes'
            },
            {
                title:
                    'Acquérir des vêtements de seconde main',
                image:
                    'https://www.lafabriquecrepue.com/wp-content/uploads/2018/09/LEMAY_MARIKA.No1_.7Sept.2018-400x266.jpg',
                date:
                    '07/12/2019',
                time:
                    '10 minutes'
            },
            {
                title: 'Le top des entreprises responsables',
                image:
                    'http://blog.moovijob.com/wp-content/uploads/2016/05/Top-10-graph.png',
                date:
                    '02/01/2020',
                time:
                    '5 minutes'
            },
            {
                title:
                    'Les bonnes adresses parisiennes du mois',
                image:
                    'https://res.cloudinary.com/hzekpb1cg/image/upload/c_fill,h_410,w_800,f_auto/s3/public/prod/2019-02/Paris.jpg',
                date:
                    '23/01/2020',
                time:
                    '10 minutes'
            },
            {
                title:
                    'Où réparer mon meuble à Paris ?',
                image:
                    'http://www.pinet-restaurationmeubleancienparis.fr/images/restaurationmeublesanciensparis/reparation-meuble-fendu.jpg',
                date:
                    '11/02/2020',
                time:
                    '10 minutes'
            },
            {
                title:
                    'Entretien avec le PDG du Bon Coin',
                image:
                    'https://www.lsa-conso.fr/mediatheque/9/5/2/000191259_5.jpg',
                date:
                    '20/02/2020',
                time:
                    '5 minutes'
            },
        ]
    }

    render() {
        return (
            <div className='DisplayArticles-Container'>
                <div className='DisplayArticles-Gallery'>
                    {this.state.articleList
                        .map(
                            (article, index) => (
                                <ArticlesItem {...article} />
                            ))}
                </div>
            </div>
        )
    }
}

export default DisplayArticles
