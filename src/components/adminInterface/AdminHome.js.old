import React, { Component } from 'react'
import './CSS/AdminHome.css'

class AdminHome extends Component {
    state = {
        action: 'Action',
        table: 'Table'
    }
    setCreer = (e) => {
        this.setState({
            action: 'Créer'
        })
    }
    setAfficher = (e) => {
        this.setState({
            action: 'Afficher'
        })
    }
    setArticle = (e) => {
        this.setState({
            table: 'Article informatif'
        })
    }
    setInitiative = (e) => {
        this.setState({
            table: 'Initiative responsable'
        })
    }
    setEngagement = (e) => {
        this.setState({
            table: 'Engagement'
        })
    }
    setObjet = (e) => {
        this.setState({
            table: 'Objet'
        })
    }
    setBesoin = (e) => {
        this.setState({
            table: 'Besoin'
        })
    }
    render() {
        return (
            <div className='adminhome'>
                <nav id="adminhome_nav_wrap">
                    <ul>
                        <li><span>{this.state.action}</span>
                            <ul>
                                <li><span onClick={(e) => this.setCreer()}>Créer</span></li>
                                <li><span onClick={(e) => this.setAfficher()}>Afficher</span></li>
                            </ul>
                        </li>
                        <li><span>{this.state.table}</span>
                            <ul>
                                <li><span onClick={(e) => this.setArticle()}>Article informatif</span></li>
                                <li><span onClick={(e) => this.setInitiative()}>Initiative responsable</span></li>
                                <li><span onClick={(e) => this.setEngagement()}>Engagement</span></li>
                                <li><span onClick={(e) => this.setObjet()}>Objet</span></li>
                                <li><span onClick={(e) => this.setBesoin()}>Besoin</span></li>
                            </ul>
                        </li>
                        <li>
                            <span>Valider</span>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default AdminHome
