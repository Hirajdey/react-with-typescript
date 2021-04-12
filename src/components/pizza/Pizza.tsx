import React from 'react';
import Styles from './Pizza.module.scss';

interface Pizza {
    id:number;
    name:string;
    description:string;
    price:number;
}

interface Props {
    pizza:Pizza;
}

const Pizza: React.FC<Props> = ({pizza}) => {
    return (
        <div className={Styles.pizzaCard}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <span>{pizza.price}</span>
        </div>
    )
}

export default Pizza