import React from 'react';
import classes from './Order.css';

const order = ( props ) => {
    const items = [];

    for ( let itemName in props.items ) {
        items.push(
            {
                name: itemName,
                amount: props.items[itemName]
            }
        );
    }

    const itemOutput = items.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
                }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });

    return (
        <div className={classes.Order}>
            <p>Order description: {itemOutput}</p>
            <p>Price: <strong> EUR {Number.parseFloat( props.price ).toFixed( 2 )}</strong></p>
        </div>
    );
};

export default order;