import React, { Component } from "react";

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import SingleProduct from "./SingleProduct";
import "./CategoryList.scss";


const GET_CATEGORIES = gql`
query {
  category {
    name
    products {
      gallery
      description
      name
      id
      brand
      prices {
        currency {
        label
        symbol
        }
        amount
        
      }
    }
  }
}`



class CategoryList extends Component {

  render() {
  return (
      <Query query={GET_CATEGORIES}>
          {({ loading, error, data }) => {
              if (loading) {
                  return <div>Loading</div>
              }

              if (error) {
                  return <div>Error {error.toString()}</div>
              }

              console.log(data.category.products)
              data.category.products.forEach(product => {
                  console.log(product.name)
              });
            //   data.category.products.forEach(product => {
            //     console.log(product.gallery)
            // });
              
              return(
                <>
                <h1>Products</h1>
                  <div className="container">
                    <ul>
                        {
                            data.category.products.map(product => {
                                return <div 
                                key={product.id}>
                                {/* <h2>{product.name}</h2> */}
                                {/* <img src={product.gallery[0]} />
                                <div></div> */}
                                <SingleProduct key={product.id} product={product}/>
                                </div>
                            })
                        }
                    </ul>
                    </div>
                </>
            )
       }}
       </Query>
    );
  }
}

export default CategoryList;
