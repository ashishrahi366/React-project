// import React from 'react'
// import 'index.css'

const Card = ({className, children}) => {
    return (
        <article className={`card${ className }`}>
            {children}
        </article>
    )
}

export default Card
