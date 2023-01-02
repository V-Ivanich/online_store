const categoriesList = [
    {
        id: "1",
        name: "Квадроциклы",
        image: "./image/kvadrocikl.png",
        links: ""
    },
    { id: "2", name: "Гидроциклы", image: "image/gidrocikl.png", links: "" },
    { id: "3", name: "Катера", image: "image/katera.png", links: "" },
    { id: "4", name: "Снегоходы", image: "image/snego.png", links: "" },
    { id: "5", name: "Вездеходы", image: "image/vezdehod.png", links: "" },
    { id: "6", name: "Двигатели", image: "image/drive.png", links: "" }
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
        images: "image/gidrokos.png",
        rate: 33
    },
    {
        id: "2",
        name: "",
        price: 50000,
        likes: false,
        sale: false,
        basket: false,
        images: "image/mafon.png",
        rate: 11
    },
    {
        id: "3",
        name: "",
        price: 120400,
        likes: false,
        sale: false,
        basket: false,
        images: "image/verovka.png",
        rate: 2
    },
    {
        id: "4",
        name: "",
        price: 1000,
        likes: false,
        sale: false,
        basket: false,
        images: "image/binokl.png",
        rate: 7
    },
    {
        id: "5",
        name: "",
        price: 6900,
        likes: false,
        sale: false,
        basket: false,
        images: "image/jilet.png",
        rate: 20
    },
    {
        id: "6",
        name: "",
        price: 8150,
        likes: false,
        sale: false,
        basket: false,
        images: "image/rukzak.png",
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
