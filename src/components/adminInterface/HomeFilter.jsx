import React, { useState, useEffect } from "react"

export default function HomeFilter() {

    const [action, setAction] = useState(false)

    useEffect(() => {
        console.log(action)
    })

    return (
        <form>
            <select onChange={(e) => setAction(e.target.value)}>
                <option value="default">Actions</option>
                <option value="creer">Créer</option>
                <option value="modifier">Modifier/Supprimer</option>
                <option value="afficher">Afficher</option>
            </select>
            <select>
            
            </select>
        </form>

    )
}