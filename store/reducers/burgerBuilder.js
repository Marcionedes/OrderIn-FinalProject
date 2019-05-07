import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    items: null,
    totalPrice: 0,
    error: false,
    building: false
};

const ITEM_PRICES = {
    baconBurger: 8.5,
    cheeseBurger: 8.3,
    doubleBurger: 8.9,
    jalapenoBurger: 8.3,
    lettuce: 0.5,
    cheese: 0.6,
    beef: 3,
    bacon: 0.7,
    tomato: 0.4,
    chips: 2,
    coke: 1,
    water: 1
};

const addItem = ( state, action ) => {
    const updatedItem = { [action.itemName]: state.items[action.itemName] + 1 }
    const updatedItems = updateObject( state.items, updatedItem);
    const updatedState = {
        items: updatedItems,
        totalPrice: state.totalPrice + ITEM_PRICES[action.itemName],
        building: true
    }
    return updateObject( state, updatedState );
};

const removeItem = (state, action) => {
    const updatedIng = { [action.itemName]: state.items[action.itemName] - 1 }
    const updatedIngs = updateObject( state.items, updatedIng );
    const updatedSt = {
        items: updatedIngs,
        totalPrice: state.totalPrice - ITEM_PRICES[action.itemName],
        building: true
    }
    return updateObject( state, updatedSt );
};

const setItems = (state, action) => {
    return updateObject( state, {
        items: {
            lettuce: action.items.lettuce,
            tomato: action.items.tomato,
            bacon: action.items.bacon,
            cheese: action.items.cheese,
            beef: action.items.beef,
            baconBurger: action.items.baconBurger,
            cheeseBurger: action.items.cheeseBurger,
            doubleBurger: action.items.doubleBurger,
            jalapenoBurger: action.items.jalapenoBurger,
            chips: action.items.chips,
            coke: action.items.coke,
            water: action.items.water
            
        },
        totalPrice: 0,
        error: false,
        building: false
    } );
};

const fetchItemsFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_ITEM: return addItem( state, action );
        case actionTypes.REMOVE_ITEM: return removeItem(state, action);
        case actionTypes.SET_ITEMS: return setItems(state, action);    
        case actionTypes.FETCH_ITEMS_FAILED: return fetchItemsFailed(state, action);
        default: return state;
    }
};

export default reducer;