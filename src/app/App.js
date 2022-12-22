import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.module.scss";
import { Header } from "../component/navBar";
import { Footer } from "../component/footer";
import Home from "../component/pages_1/Home";
import PagesItems from "../component/pages_2";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Container />
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gidrocikle" component={PagesItems} />
            </Switch>
            <Footer />
            <Container />
        </>
    );
}

export default App;
