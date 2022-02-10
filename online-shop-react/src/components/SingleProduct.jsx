import React, { Component } from "react";
import "./SingleProduct.scss";
import AddToCart from "../assets/AddToCart"

class SingleProduct extends Component {

      render(){
          console.log("IN SINGLE PRODUCT", this.props)
    return (
        <>
            <div className="product">
            <h4>{this.props.product.prices.amount}</h4>
            <img className="product__image" src={this.props.product.gallery[0]} />
            <AddToCart className="add-to-cart-image"/>
            
            <h2>{this.props.product.name}</h2>
            <h3>{this.props.product.prices.map( price => {
                 return (<div key={this.props.product.id}>
                        {price.amount} {price.currency.symbol[0]}</div>)
            })}</h3>
            </div>
        </>
    );    
}
};


export default SingleProduct;