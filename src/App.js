import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Sales from "./components/Sales";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                       <Home/>
                    </Route>
                    <Route exact path="/products">
                        <Products/>
                    </Route>
                    <Route path='/products/:id'>
                        <Product/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/sales">
                        <Sales/>
                    </Route>

                </Switch>

            </Router>
        </>
    );
}

export default App;
