import React from "react";
import styles from "./cardItem.module.scss";
import PropTypes from "prop-types";

export const CardItem = ({ itemCategories }) => {
    console.log("CardItem-", itemCategories.image);
    return (
        <>
            <div className={styles.body_card_item}>
                <div className={styles.text_title}>
                    <div>
                        <h3>{itemCategories.name}</h3>
                    </div>
                    <div>
                        <a href="!#">Подробее &gt;</a>
                    </div>
                </div>
                <div className={styles.images}>
                    <img src={itemCategories.image} alt="no photos" />
                </div>
            </div>
        </>
    );
};
CardItem.propTypes = {
    itemCategories: PropTypes.object.isRequired
};
