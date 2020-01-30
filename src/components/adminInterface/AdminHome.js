
// import React, { useState, useEffect } from "react"
// import axios from 'axios'
// import './CSS/AdminHome.css'

// const AdminHome = () => {
//     // state that get all tables
//     const [tables, setTables] = useState()

//     // state for the actions and type of category
//     const [action, setAction] = useState('Action')
//     const [category, setCategory] = useState()

//     //validation button
//     const [isChosen, setChosen] = useState(false)



//     useEffect(() => {
//         const axiosData = async url => {
//             const res = await axios.get(url)
//             setTables(res.data)
//         }
//         axiosData('http://localhost:4000/admin/')
//     }, [])

//     return (
//         <div className='adminhome'>
//             <nav id="adminhome_nav_wrap">
//                 <ul>
//                     <li><span>{action}</span>
//                         <ul>
//                             <li><span onClick={() => setAction('Créer')}>Créer</span></li>
//                             <li><span onClick={() => setAction('Afficher')}>Afficher</span></li>
//                         </ul>
//                     </li>

//                     {tables ?
//                         <select onChange={(e) => setCategory(e.target.value)}>
//                             <option value="">Catégorie</option>
//                             {tables.map(item => (
//                                 <option value={item.table_name}>{item.table_name}</option>))}
//                         </select> : console.log("stop")}



                  



//                     <li><span>{action.AdminHomeTableReducer}</span>
//                         <ul>






//                             <li><span onClick={handleArticle}>Article informatif</span></li>
//                             <li><span onClick={handleInitiative}>Initiative responsable</span></li>
//                             <li><span onClick={handleEngagement}>Engagement</span></li>
//                             <li><span onClick={handleObjet}>Objet</span></li>
//                             <li><span onClick={handleBesoin}>Besoin</span></li>
//                         </ul>
//                     </li>
//                     <li>
//                         <span>Valider</span>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

// export default AdminHome

