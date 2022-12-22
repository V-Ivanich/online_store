import React from "react";
import jetSky from "../../../../image/jet_ski_PNG90 1.png";
import styles from "./cardItem.module.scss";
import PropTypes from "prop-types";

export const CardItem = ({ itemCategories }) => {
    const nameCategori = itemCategories;
    return (
        <>
            <div className={styles.body_card_item}>
                <div className={styles.text_title}>
                    <div>
                        <h3>{nameCategori}</h3>
                    </div>
                    <div>
                        <a href="!#">Подробее &gt;</a>
                    </div>
                </div>
                <div className={styles.images}>
                    <img src={jetSky} alt="no photos" />
                </div>
            </div>
        </>
    );
};
CardItem.propTypes = {
    itemCategories: PropTypes.string.isRequired
};
