import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    
    let transformedItems = Object.keys( props.items )
        .map( igKey => {
            return [...Array( props.items[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedItems.length === 0) {
        transformedItems = <p><i>Start to build your order</i></p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedItems}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;