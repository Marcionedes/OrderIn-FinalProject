import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const arr = [
    { label: 'Bacon Burger', type: 'baconBurger' },
    { label: 'Cheese Burger', type: 'cheeseBurger' },
    { label: 'Double Burger', type: 'doubleBurger' },
    { label: 'Jalapeno Burger', type: 'jalapenoBurger' }
];

const arr2 = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Tomato', type: 'tomato' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Beef', type: 'beef' }
];

const arr3 = [
    { label: 'Chips', type: 'chips' },
    { label: 'Coke', type: 'coke' },
    { label: 'Water', type: 'water' }
];

const buildControls = ( props ) => (
    <div className={classes.BuildControls}>
        <h3>Current Price: <strong>{props.price.toFixed( 2 )}</strong></h3>
        <strong><p> FAVORITES</p> </strong>
        {arr.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.itemAdded( ctrl.type )}
                removed={() => props.itemRemoved( ctrl.type )}
                disabled={props.disabled[ctrl.type]} />
        ) )}
        <strong><p>MAKE YOUR OWN BURGER </p></strong>
        {arr2.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.itemAdded( ctrl.type )}
                removed={() => props.itemRemoved( ctrl.type )}
                disabled={props.disabled[ctrl.type]} />
        ) )}
        <strong><p>EXTRAS</p></strong>
        {arr3.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.itemAdded( ctrl.type )}
                removed={() => props.itemRemoved( ctrl.type )}
                disabled={props.disabled[ctrl.type]} />
        ) )}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'LOGIN TO ORDER'}</button>
    </div>
);

export default buildControls;