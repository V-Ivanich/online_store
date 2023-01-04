import React from "react";
import { Container } from "react-bootstrap";
import { CardItem } from "./cardItem";
import styles from "./categories.module.scss";
import PropTypes from "prop-types";

export const Categories = ({ catalogs }) => {
    if (!catalogs) {
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
                {catalogs.map((itemCategori) => (
                    <CardItem
                        key={itemCategori.name}
                        itemCategorie={itemCategori}
                    />
                ))}
            </Container>
        </>
    );
};
Categories.propTypes = {
    catalogs: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    itemCategorie: PropTypes.object
};
