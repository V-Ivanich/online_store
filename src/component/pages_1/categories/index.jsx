import React from "react";
import { Container } from "react-bootstrap";
import { CardItem } from "./cardItem";
import styles from "./categories.module.scss";
import PropTypes from "prop-types";

export const Categories = ({ catalogs }) => {
    return (
        <>
            <Container className={styles.body_categories}>
                {catalogs.map((itemCategori) => (
                    <CardItem
                        key={itemCategori.id}
                        itemCategories={itemCategori}
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
