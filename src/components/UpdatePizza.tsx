import React, { useState } from 'react';

const UpdatePizza: React.FC = () => {
    const [pizza, setPizza] = useState({
        name: 'King Arthur Supreme',
        toppings: ['Mushroom', 'Onions']
    });

    const handleClick = () => {
        setPizza((prevPizza) => ({
            ...prevPizza,
            toppings: [...prevPizza.toppings, 'Cheese'],
        }));
    };

    return (
        <div>
            <h1>{pizza.name}</h1>
            <p>Toppings: {pizza.toppings.join(', ')}</p>
            <button onClick={handleClick}>Add Cheese</button>
        </div>
    );
}

export default UpdatePizza;
