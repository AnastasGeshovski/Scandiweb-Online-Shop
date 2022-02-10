import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import CategoryList from './CategoryList';
import Header from "./Header";


const client = new ApolloClient({uri: 'http://localhost:4000/graphql'});



class App extends Component {
  render() {
  return (
    <div className="App">
        <Header/>
      <ApolloProvider client={client}>
        <CategoryList/>
      </ApolloProvider>
    </div>
    );
  }
}

export default App;
