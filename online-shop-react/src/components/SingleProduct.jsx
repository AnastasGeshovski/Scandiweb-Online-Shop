import React, { Component } from "react";
import "./SingleProduct.scss";
import AddToCart from "../assets/AddToCart"

class SingleProduct extends Component {
    // constructor(props) {
    //   super(props);
  
    //   this.state = {
    //     priceAmount: this.props.product.prices,
    //     priceSymbol: this.props.price.currency.symbol[0],
    //   };

    //   this.setState({price: this.state.priceAmount})
    // }

    

    

      render(){
          console.log("IN SINGLE PRODUCT", this.props)
    return (
        <>
            <div className="product">
            <h4>{this.props.product.prices.amount}</h4>
            <img className="product__image" src={this.props.product.gallery[0]} />
            <AddToCart className="add-to-cart-image"/>
            
            <h2>{this.props.product.name}</h2>
            <h3>Product price: {this.props.product.prices.map( price => {
                // console.log(price.amount);
                // console.log(price.currency.symbol[0]) 
                 return (<div key={this.props.product.id}>
                        {price.amount} {price.currency.symbol[0]}</div>)
            })}</h3>
            </div>
        </>
    );    
}
};


export default SingleProduct;