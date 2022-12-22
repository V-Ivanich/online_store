import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CardItem } from "./cardItem";
import styles from "./categories.module.scss";
import categories from "../../../dataBase/catalog";
import PropTypes from "prop-types";

export const Categories = () => {
    console.log(categories.categoriesList);
    const [catalog, setCatalog] = useState();
    useEffect(() => {
        categories.fetchCategories().then((data) => setCatalog(data));
    }, []);
    if (!catalog) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Загрузка...</span>
                </div>
            </div>
        );
    }
    return (
        <>
            <Container className={styles.body_categories}>
                {catalog.map((itemCategori) => (
                    <CardItem
                        key={itemCategori.name}
                        itemCategories={itemCategori.name}
                    />
                ))}
            </Container>
        </>
    );
};
Categories.propTypes = {
    catalog: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
