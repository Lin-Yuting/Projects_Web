import React from 'react';

export const Card = ({ id, name, title = [], sprites = [] }) => {
    return (
        <section style={{ height: 200 }}>
            <h2 className="text-capitalize">
                #{id} - {name}
            </h2>
            
            <h3 className="text-capitalize">
                {title.length > 0 ? title.join(", ") : "No title available"}
            </h3>

            <div>
                {sprites.length > 0 ? (
                    sprites.map((sprite, index) => (
                        <img src={sprite} key={index} alt={name} style={{ width: 100, height: 100 }} />
                    ))
                ) : (
                    <p> </p>
                )}
            </div>
        </section>
    );
};
