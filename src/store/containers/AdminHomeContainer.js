import React from 'react'

import { connect } from 'react-redux';
import AdminHome from '../../components/adminInterface/AdminHome';

const mapStateToProps = state => {
    return {
        action: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleCreer: () => dispatch({ type: 'CREER' }),
        handleAfficher: () => dispatch({ type: 'AFFICHER' }),
        handleArticle: () => dispatch({ type: 'ARTICLE' }),
        handleInitiative: () => dispatch({ type: 'INITIATIVE' }),
        handleEngagement: () => dispatch({ type: 'ENGAGEMENT' }),
        handleObjet: () => dispatch({ type: 'OBJET' }),
        handleBesoin: () => dispatch({ type: 'BESOIN' })
    }
}

const AdminHomeContainer = (props) => {
    return <AdminHome {...props} />
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHomeContainer) 