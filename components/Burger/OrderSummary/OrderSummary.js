import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render () {
        const itemSummary = Object.keys( this.props.items )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.items[igKey]}
                    </li> );
            } );
        return (
            <div>
                <p><strong>Total Price: {this.props.price.toFixed( 2 )}</strong></p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </div>
        );
    }
}

export default OrderSummary;