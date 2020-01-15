import React, { Component } from 'react'
import './CSS/ArticleContent.css'
import pictoFb from "../../assets/icons/facebook.png"
import pictoIns from "../../assets/icons/instagram.png"
import pictoTwit from "../../assets/icons/twitter.png"
import ListInitiatives from './ListInitiatives.js'
import economieCirculaire from '../../assets/icons/LOGOeconomiecirculaire.png'
import fabricationFrancaise from '../../assets/icons/LOGOfabricationfrancaise.png'
import insertionSociale from '../../assets/icons/LOGOinsertionsociale.png'
import fabricationEuropeenne from '../../assets/icons/LOGOfabricationeuropeenne.png'
import matieresEcologiques from '../../assets/icons/LOGOmatieresecologiques.png'
import artisanat from '../../assets/icons/LOGOartisanat.png'
import logoVestiaireCollective from '../../assets/icons/LOGOvestiaire.png'
import logoImparfaite from '../../assets/icons/LOGOimparfaite.png'
import logoBackMarket from '../../assets/icons/LOGObackmarket.png'
import pictoclock from "../../assets/pictures/alarm-clock.png"

class ArticleContent extends Component {
    state =
        {
            titre: 'Défis écologiques et sociaux du textile',
            image: 'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/9/1/d/91d619f85c_114490_06-996.jpg',
            date: '10 Janvier 2019', // à mettre en 10 janvier
            minutes_lecture: '10',
            photo_auteur: 'https://lafabriqueaviva.imgix.net/uploaded-files/a/4/f/a4f1838cf8ed7892eac579c46eef76a9.jpeg?auto=format%2Ccompression&ixlib=php-2.3.0&s=c164483caaaf545727b71769d09e3952',
            auteur: 'Delphine',
            contenu: '',
            associatedIniatives: [
                {
                    name: 'Vestiaire collective',
                    logo: logoVestiaireCollective,
                    description: "Plateforme en ligne de mode et luxe d’occasion",
                    url: 'https://fr.vestiairecollective.com/',
                    date: '',
                    adresses: ['33 bld du General Martial Valin, 75015 Paris', '41 Rue Censier, 75005 Paris'],
                    engagements: [
                        {
                            logo: economieCirculaire,
                            name: 'Économie circulaire'
                        },
                        {
                            logo: fabricationFrancaise,
                            name: 'Fabrication française'
                        }
                    ]
                },
                {
                    name: 'Imparfaite Paris',
                    logo: logoImparfaite,
                    description: 'De belles pièces vintage en ligne',
                    url: 'https://www.imparfaiteparis.com/',
                    date: 'Du 12 Novembre 2019 au 22 Mai 2020',
                    adresses: [],
                    engagements: [
                        {
                            logo: insertionSociale,
                            name: 'Insertion sociale'
                        },
                        {
                            logo: matieresEcologiques,
                            name: 'Matières écologiques'
                        }
                    ]
                },
                {
                    name: 'Backmarket',
                    logo: logoBackMarket,
                    description: 'Le super-marché du reconditionné',
                    url: 'https://www.backmarket.fr/',
                    date: '',
                    adresses: [],
                    engagements: [
                        {
                            logo: artisanat,
                            name: 'Artisanat'
                        },
                        {
                            logo: fabricationEuropeenne,
                            name: 'Fabrication européenne'
                        }
                    ]
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
            ],
            isTop: true,
        }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true)
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 300
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <div className='articlecontent'>
                <header>
                    <div className="articlecontent-header-banner" style={{ backgroundImage: `url(${this.state.image})` }}>
                        <h1>{(this.state.titre).toUpperCase()}</h1>
                    </div>
                    <nav className={this.state.isTop ? null : 'articlecontent-fixed-header'}>
                        <div className={this.state.isTop ? 'articlecontent-invisible-title' : 'articlecontent-visible-title'}>{(this.state.titre).toUpperCase()}</div>
                    </nav>
                </header>

                <section class="articlecontent-content">
                    <article>
                        <div className='articlecontent-timecontainer'>
                            <img className='articlecontent-pictoclock' src={pictoclock} />
                            <p className='articlecontent-time'>{this.state.minutes_lecture} minutes</p>
                        </div>
                        <p>Le {this.state.date}</p>
                        <div className='articlecontent-authorcontainer'>
                            <img className='articlecontent-authorpic' src={this.state.photo_auteur} alt={this.state.auteur} />
                            <p className='articlecontent-author'>Par {this.state.auteur}</p>
                        </div>
                        {/* <p>{this.state.contenu}</p> */}
                        <h2>
                            Plusieurs grands défis écologiques
                    </h2>
                        <p>
                            Du côté de la production, de nombreux produits chimiques à risque sont utilisés, à titre d'exemple : environ 25% des pesticides mondiaux servent à la culture du coton, certains sont cancérigènes, les teintures et apprêts ou encore le chrome pour le tannage du cuir sont particulièrement nocifs s'ils sont rejetés dans l'eau par les usines. Le secteur textile est ainsi responsable d'environ 20% de la pollution des eaux dans le monde et de nombreux dommages sur la biodiversité, la santé des travailleurs et des habitants autour des usines. Le secteur textile est aussi très gourmand en eau. En particulier la culture du coton requiert de grandes quantités d'eau dans des zones déjà concernées par le stress hydriques. Par exemple, la production d’un jean requiert en moyenne environ l’équivalent de 285 douches. Selon les études, le secteur du textile est responsable de 3 à 10% des émissions mondiales de CO2, soit plus que le secteur aérien (2%). Du côté de l'entretien, à chaque lavage d'un vêtement synthétique, de nombreuses microfibres plastiques sont rejetées dans l'eau et terminent leur course dans les océans.
                    </p>
                        <h2>
                            Des conditions de travail indignes
                    </h2>
                        <p>
                            Les articles vestimentaires sont encore régulièrement produits loin de leur point de vente, dans des conditions sociales indignes (sécurité des locaux, salaires, horaires...). Le salaire minimal légal souvent pratiqué au Bangladesh équivaut à un quart du salaire vital nécessaire pour vivre décemment dans le pays. En Europe, en parallèle, les savoir-faire se perdent petit à petit.
                    </p>
                        <h2>
                            Les utilisateurs renforcent ces effets
                    </h2>
                        <p>
                            Les clients, souvent peu conscients de ces défis, se sont habitués à des produits dont le prix bas ne reflète pas les réels coûts environnementaux et sociaux. Ces prix bas, la mauvaise qualité des articles et les phénomènes de mode contribuent à l'augmentation totale de la quantité produite et de leurs effets nocifs.
                    </p>
                    </article>
                    <article className={this.state.associatedIniatives.length >= 1 ? 'articlecontent-visibleinitiatives' : 'articlecontent-hiddeninitiatives'}>
                        <div className='articlecontent-associatedinitiatives'>
                            <h2 className='articlecontent-titleinitiatives'>INITIATIVES ASSOCIÉES</h2>
                            {this.state.associatedIniatives
                                .map(
                                    (initiative, index) => (
                                        <ListInitiatives {...initiative} />
                                    ))}
                        </div>
                    </article>
                    <div className='articlecontent-sharedlinks'>
                        <p className='articlecontent-share'>
                            Partager l'article sur :
                    </p>
                        {this.state.shareLinks
                            .map(
                                (shareLink, index) => (
                                    <div>
                                        <a href={shareLink.url}>
                                            <img className='articlecontent-sharelink' src={shareLink.logo} alt={shareLink.name} />
                                        </a>
                                    </div>
                                ))}
                    </div>
                </section>
            </div>
        )
    }
}

export default ArticleContent
