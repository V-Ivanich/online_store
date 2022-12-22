const categoriesList = [
    { name: "Квадроциклы", image: "", links: "" },
    { name: "Гидроциклы", image: "", links: "" },
    { name: "Катера", image: "", links: "" },
    { name: "Снегоходы", image: "", links: "" },
    { name: "Вездеходы", image: "", links: "" },
    { name: "Двигатели", image: "", links: "" }
];
const fetchCategories = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categoriesList);
        }, 2000);
    });

export default { fetchCategories };
