import React from "react";
import Footer from "./components/Footer/Footer";
import ResponsiveNavbar from "./components/Navbar/ResponsiveNavbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Container from "../src/components/Pagination/Container";
import Card from "./components/Card/Card";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Container/>
      <Footer />
    </div>

    </ApolloProvider>
  );
}

export default App;
