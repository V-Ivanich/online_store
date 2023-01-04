import kvadro from "../../image/kvadrocikl.png";
import gidrocikl from "../../image/gidrocikl.png";
import katera from "../../image/katera.png";
import snego from "../../image/snego.png";
import vezdehod from "../../image/vezdehod.png";
import drive from "../../image/drive.png";

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

const fetchCategories = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categoriesList);
        }, 1000);
    });

export default { fetchCategories };
