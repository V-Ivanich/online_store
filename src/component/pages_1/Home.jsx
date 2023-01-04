import React, { useState, useEffect } from "react";
import { CaruselBaner } from "./caruselBaner";
import { Search } from "./search";
import { Categories } from "./categories";
import { PopularGoods } from "./popularGoods";
import { Banner } from "./banner";
import { WhatBay } from "./whatTheyBuy";
import api from "../../dataBase";

const Home = () => {
    const [goods, setGoods] = useState();
    const [catalog, setCatalog] = useState();

    useEffect(() => {
        api.goodsAll.fetchGoods().then((data) => setGoods(data));
    }, []);
    useEffect(() => {
        api.catalogAll.fetchCategories().then((data) => setCatalog(data));
        console.log("categories-", api.catalogAll.categoriesList);
    }, []);

    if (!goods) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Загрузка...</span>
                </div>
            </div>
        );
    }
    const goodsSale = goods.find((item) => item.mark === true);

    // if (!catalog) {
    //     return (
    //         <div className="d-flex justify-content-center">
    //             <div className="spinner-border text-info" role="status">
    //                 <span className="visually-hidden">Загрузка...</span>
    //             </div>
    //         </div>
    //     );
    // }
    return (
        <>
            <CaruselBaner sale={goodsSale} />
            <Search />
            <Categories catalogs={catalog} />
            <PopularGoods />
            <Banner />
            <WhatBay />
        </>
    );
};

export default Home;
