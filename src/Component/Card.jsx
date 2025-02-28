import React from 'react'

export const PokemonCard = ({id, name, title, sprites = []}) => {
    return (
        <section style = {{height:200}}>
            <h2 className="text-capitalize">#{id} - { name } </h2>
            <h2 className="text-capitalize">#{title} </h2>
            { /*imagenes */ }

            <div>{
                sprites.map( sprite => (
                    <img src={sprite} key={sprite} alt={name}/>
                ))
            }
            
            </div>
        </section>
    )
}