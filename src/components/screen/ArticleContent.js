import React, { Component } from 'react'
import pictoFb from "../../assets/icons/facebook.png"
import pictoIns from "../../assets/icons/instagram.png"
import pictoTwit from "../../assets/icons/twitter.png"
import ListInitiatives from './ListInitiatives'

class ArticleContent extends Component {
    state =
        {
            title: 'Défis écologiques et sociaux du textile', // à mettre automatiquement en majuscules
            image: 'http://www.auserviceduvivant.info/wp-content/uploads/2017/07/Textiles.jpg',
            date: '10/11/2019', // à mettre en 10 janvier...
            authorpic: 'https://lafabriqueaviva.imgix.net/uploaded-files/a/4/f/a4f1838cf8ed7892eac579c46eef76a9.jpeg?auto=format%2Ccompression&ixlib=php-2.3.0&s=c164483caaaf545727b71769d09e3952',
            author: 'Delphine',
            intro: "En quelques décennies, l'industrie textile a été très largement délocalisée sur d'autres continents. Avec le grand déménagement des usines, nous avons progressivement perdu de vue les conditions de fabrication de nos vêtements. Souvent risquées, ces dernières nous donnent aujourd'hui beaucoup de fil à retordre !",
            content: [
                {
                    subtitle: 'Plusieurs grands défis écologiques', // à mettre automatiquement en majuscules
                    text: "Du côté de la production, de nombreux produits chimiques à risque sont utilisés, à titre d'exemple : environ 25% des pesticides mondiaux servent à la culture du coton, certains sont cancérigènes, les teintures et apprêts ou encore le chrome pour le tannage du cuir sont particulièrement nocifs s'ils sont rejetés dans l'eau par les usines. Le secteur textile est ainsi responsable d'environ 20% de la pollution des eaux dans le monde et de nombreux dommages sur la biodiversité, la santé des travailleurs et des habitants autour des usines. Le secteur textile est aussi très gourmand en eau. En particulier la culture du coton requiert de grandes quantités d'eau dans des zones déjà concernées par le stress hydriques. Par exemple, la production d’un jean requiert en moyenne environ l’équivalent de 285 douches. Selon les études, le secteur du textile est responsable de 3 à 10% des émissions mondiales de CO2, soit plus que le secteur aérien (2%). Du côté de l'entretien, à chaque lavage d'un vêtement synthétique, de nombreuses microfibres plastiques sont rejetées dans l'eau et terminent leur course dans les océans.",
                },
                {
                    subtitle: 'Des conditions de travail indignes', // à mettre automatiquement en majuscules
                    text: "Les articles vestimentaires sont encore régulièrement produits loin de leur point de vente, dans des conditions sociales indignes (sécurité des locaux, salaires, horaires...). Le salaire minimal légal souvent pratiqué au Bangladesh équivaut à un quart du salaire vital nécessaire pour vivre décemment dans le pays. En Europe, en parallèle, les savoir-faire se perdent petit à petit.",
                },
                {
                    subtitle: 'Les utilisateurs renforcent ces effets', // à mettre automatiquement en majuscules
                    text: "Les clients, souvent peu conscients de ces défis, se sont habitués à des produits dont le prix bas ne reflète pas les réels coûts environnementaux et sociaux. Ces prix bas, la mauvaise qualité des articles et les phénomènes de mode contribuent à l'augmentation totale de la quantité produite et de leurs effets nocifs.",
                }
            ],
            associatedIniatives: [
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
                }
            ],
            shareLinks: [
                {
                    name: 'Facebook',
                    logo: pictoFb,
                    url: 'https://www.facebook.com/'
                },
                {
                    name: 'Twitter',
                    logo: pictoTwit,
                    url: 'https://twitter.com/'
                },
                {
                    name: 'Instagram',
                    logo: pictoIns,
                    url: 'https://www.instagram.com/'
                }
            ]
        }

    render() {
        return (
            <div className='articlecontent'>
                <h1 className='articlecontent-title'>{this.state.title}</h1>
                <img className='articlecontent-image' src={this.state.image} alt={this.state.title} />
                <p className='articlecontent-date'>{this.state.date}</p>
                <div>
                    <img className='articlecontent-authorpic' src={this.state.authorpic} alt={this.state.author} />
                    <p className='articlecontent-author'>{this.state.author}</p>
                </div>
                <p className='articlecontent-intro'>{this.state.intro}</p>
                <div className='articlecontent-content'>
                    {this.state.content.map((paragraph, index) => (
                        <span className='articlecontent-paragraph'>
                            <h2 className='articlecontent-subtitle'>
                                {paragraph.subtitle}
                            </h2>
                            <p className='articlecontent-text'>
                                {paragraph.text}
                            </p>
                        </span>
                    ))}
                </div>
                <div className='articlecontent-Container'>
                    <div className='articlecontent-Gallery'>
                        {this.state.associatedIniatives
                            .map(
                                (initiative, index) => (
                                    <ListInitiatives {...initiative} />
                                ))}
                    </div>
                </div>


            </div>
        )
    }
}

export default ArticleContent