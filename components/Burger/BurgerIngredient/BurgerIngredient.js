import React, {Component} from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {
        let item = null;

        switch (this.props.type){
            case ('bread-bottom'):
                item = <div className={classes.BreadBottom}></div>;
            break;

            case ('bread-top'):
                item = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
            );
            break;

            case ('tomato'):
            item = (
                <div className={classes.Tomato}>
                    <div className={classes.TomatoS1}></div>
                    <div className={classes.TomatoS2}></div>
                </div>
            );
            break;
            
            case ('beef'):
                item = (
                    <div className={classes.Beef}>
                        <div className={classes.Beef1}></div>
                        <div className={classes.Beef2}></div>
                    </div>
                );
            break;

            case ('cheese'):
                item = <div className={classes.Cheese}></div>;
            break;

            case ('lettuce'):
                item = (
                <div className={classes.Lettuce}>
                     <div className={classes.LettuceLine}></div>
                </div>);
            break;

            case ('bacon'):
                item = ( 
                <div className={classes.Bacon}>
                    <div className={classes.BaconLine}></div>
                </div>
                );
            break;

            case ('baconBurger'):
                item = ( 
                <div className={classes.BaconBurger}>
                    <p>BACON BURGER (490 kcals) Crispy bacon into a beef patty with pepper jack cheese, tomatoes, and onions</p>
                </div>
                );
            break;

            case ('jalapenoBurger'):
                item = ( 
                    <div className={classes.JalapenoBurger}>
                    <p>JALAPENO BURGER (460 kcals) 100% pure beef patty, with peppers, jack cheese, plenty of jalapenos, and tomatoes </p>
                </div>
                );
            break;

            case ('cheeseBurger'):
                item = ( 
                    <div className={classes.CheeseBurger}>
                    <p>CHEESE BURGER (480 kcals) Melted cheedar cheese into a pure beef patty, with lettuce and tomatoes </p>
                </div>
                );   
            break;

            case ('doubleBurger'):
                item = ( 
                    <div className={classes.DoubleBurger}>
                    <p>DOUBLE BURGER (495 kcals) Double 100% pure beef patty topped with cheedar cheese, lettuce, and tomatoes </p>
                </div>
                );   
            break;

            case ('chips'):
                item = ( 
                    <div className={classes.Chips}>
                    <p>CHIPS 200g (250 kcals) Tasty, fresh and crispy potato chips </p>
                </div>
                );   
            break;

            case ('water'):
                item = ( 
                    <div className={classes.Water}>
                    <h3>Still Water - 500ml </h3>
                </div>
                );   
            break;

            case ('coke'):
            item = ( 
                <div className={classes.Coke}>
                <h3> Coke 330ml (139 kcals) </h3>
            </div>
            );   
        break;

            default:
                item = null; 

        }
        return item;
    }

};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;