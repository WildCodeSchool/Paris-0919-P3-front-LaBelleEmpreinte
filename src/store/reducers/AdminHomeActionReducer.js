const AdminHomeActionReducer = (state = 'Action', action) => {
  switch (action.type) {
    case 'CREER':
      return 'Créer'
    case 'AFFICHER':
      return 'Afficher'
    default:
      return state
  }
}

export default AdminHomeActionReducer