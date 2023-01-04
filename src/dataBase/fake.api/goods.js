import gidrokos from "../../image/gidrokos.png";
import mafon from "../../image/mafon.png";
import verovka from "../../image/verovka.png";
import binokl from "../../image/binokl.png";
import jilet from "../../image/jilet.png";
import rukzak from "../../image/rukzak.png";
import drive from "../../image/motor.png";

const goods = [
    {
        id: "1",
        name: "Мужской костюм 3мм",
        price: 7000,
        likes: false,
        sale: 0,
        mark: false,
        basket: false,
        images: gidrokos,
        rate: 33
    },
    {
        id: "2",
        name: "BRP Audio-портативная система",
        price: 0,
        likes: false,
        sale: 0,
        mark: false,
        basket: false,
        images: mafon,
        rate: 11
    },
    {
        id: "3",
        name: "Спасательное снаряжение",
        price: 0,
        likes: false,
        sale: 0,
        mark: false,
        basket: false,
        images: verovka,
        rate: 2
    },
    {
        id: "4",
        name: "BRP Audio-Premium System",
        price: 68000,
        likes: false,
        sale: 0,
        mark: false,
        basket: false,
        images: binokl,
        rate: 7
    },
    {
        id: "5",
        name: "Спасательный жилет BRP Men's Airflow PFD",
        price: 6900,
        likes: false,
        sale: 0,
        mark: false,
        basket: false,
        images: jilet,
        rate: 20
    },
    {
        id: "6",
        name: "Водонепроницаемый Рюкзак",
        price: 9800,
        likes: false,
        sale: 0,
        mark: false,
        basket: false,
        images: rukzak,
        rate: 25
    },
    {
        id: "7",
        name: "Лодочный мотор",
        brand: "Suzuki DF9.9BRS",
        price: 225000,
        likes: false,
        sale: 15.6,
        mark: true,
        basket: false,
        images: drive,
        rate: 25
    }
];
const fetchGoods = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(goods);
        }, 2000);
    });

export default { fetchGoods };
