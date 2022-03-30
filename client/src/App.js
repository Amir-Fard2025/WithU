import React, { useState } from "react";
import LoginModal from "./components/LoginModal/LoginModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.js";
import LandingPage from "./pages/LandingPage";
import FAQPage from "./pages/FAQPage";
import ResultsPage from "./pages/ResultsPage";
import DashboardPage from "./pages/DashboardPage";
import ResponsiveNavbar from "./components/Navbar/ResponsiveNavbar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Footer from "./components/Footer/Footer";
import ContactModal from "./components/ContactModal/ContactModal";
import AdminSidePage from "./pages/AdminSidePage";
import ResponsiveAppBarNew from "./components/Navbar/ResponsiveNavbarNew";
import { useMediaQuery } from "@mui/material";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [open, setOpen] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ApolloProvider client={client}>
      <div
        className="App"
        style={{
          background: "linear-gradient(#4285f49f, #ffff00b3)",
          height: "100vh",
          width: "auto",
        }}
        >
        <BrowserRouter>
        {isMobile ? (
          <ResponsiveAppBarNew
            setOpen={setOpen}
            setOpenContactForm={setOpenContactForm}
          />
        ) : (
          <ResponsiveNavbar
            setOpen={setOpen}
            setOpenContactForm={setOpenContactForm}
          />
        )}
        <LoginModal open={open} onClose={() => setOpen(false)} />
          <Routes>
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/results/:tags" element={<ResultsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/admin" element={<AdminSidePage />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        <ContactModal
          open={openContactForm}
          onClose={() => setOpenContactForm(false)}
        />
      </div>
    </ApolloProvider>
  );
}

export default App;
