import kvadro from "../image/kvadrocikl.png";
import gidrocikl from "../image/gidrocikl.png";
import katera from "../image/katera.png";
import snego from "../image/snego.png";
import vezdehod from "../image/vezdehod.png";
import drive from "../image/drive.png";
import gidrokos from "../image/gidrokos.png";
import mafon from "../image/mafon.png";
import verovka from "../image/verovka.png";
import binokl from "../image/binokl.png";
import jilet from "../image/jilet.png";
import rukzak from "../image/rukzak.png";

const categoriesList = [
    {
        id: "1",
        name: "Квадроциклы",
        image: kvadro,
        links: ""
    },
    {
        id: "2",
        name: "Гидроциклы",
        image: gidrocikl,
        links: ""
    },
    {
        id: "3",
        name: "Катера",
        image: katera,
        links: ""
    },
    {
        id: "4",
        name: "Снегоходы",
        image: snego,
        links: ""
    },
    {
        id: "5",
        name: "Вездеходы",
        image: vezdehod,
        links: ""
    },
    {
        id: "6",
        name: "Двигатели",
        image: drive,
        links: ""
    }
];
// const description = [{ id: "1", marks: "toyota" }];
const goods = [
    {
        id: "1",
        name: "",
        price: 170000,
        likes: false,
        sale: false,
        basket: false,
        images: gidrokos,
        rate: 33
    },
    {
        id: "2",
        name: "",
        price: 50000,
        likes: false,
        sale: false,
        basket: false,
        images: mafon,
        rate: 11
    },
    {
        id: "3",
        name: "",
        price: 120400,
        likes: false,
        sale: false,
        basket: false,
        images: verovka,
        rate: 2
    },
    {
        id: "4",
        name: "",
        price: 1000,
        likes: false,
        sale: false,
        basket: false,
        images: binokl,
        rate: 7
    },
    {
        id: "5",
        name: "",
        price: 6900,
        likes: false,
        sale: false,
        basket: false,
        images: jilet,
        rate: 20
    },
    {
        id: "6",
        name: "",
        price: 8150,
        likes: false,
        sale: false,
        basket: false,
        images: rukzak,
        rate: 25
    }
];
const fetchCategories = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categoriesList);
        }, 2000);
    });

export default { fetchCategories };
