const AdminHomeTableReducer = (state = 'Table', action) => {
    switch (action.type) {
        case 'ARTICLE':
            return 'Article informatif'
        case 'INITIATIVE':
            return 'Initiative responsable'
        case 'ENGAGEMENT':
            return 'Engagement'
        case 'OBJET':
            return 'Objet'
        case 'BESOIN':
            return 'Besoin'
        default:
            return state
    }
}

export default AdminHomeTableReducer