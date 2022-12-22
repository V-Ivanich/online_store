import React from "react";
import { Slider } from "./caruselBaner";
import { Search } from "./search";
import { Categories } from "./categories";
import { PopularGoods } from "./popularGoods";
import { Banner } from "./banner";
import { WhatBay } from "./whatTheyBuy";

const Home = () => {
    return (
        <>
            <Slider />
            <Search />
            <Categories />
            <PopularGoods />
            <Banner />
            <WhatBay />
        </>
    );
};

export default Home;
