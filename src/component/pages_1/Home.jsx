import React from "react";
import { Slider } from "./caruselBaner";
import { Search } from "./search";
import { Categories } from "./categories";
import { PopularGoods } from "./popularGoods";
import { Banner } from "./banner";
import { WhatBay } from "./whatTheyBuy";
import goods from "../../dataBase/goods";
// import PropTypes from "prop-types";

const Home = () => {
    const goodsSale = goods.filter((item) => item.mark === true);
    return (
        <>
            <Slider sale={goodsSale} />
            <Search />
            <Categories />
            <PopularGoods />
            <Banner />
            <WhatBay />
        </>
    );
};
// Home.propTypes = {
//     sale: PropTypes.array.isRequired
// };

export default Home;
