import React from 'react';
import cardStyles from './css/Card.module.css';

function Card({ content }) {
    return (
        <div className={cardStyles.card}>
            {content}
        </div>
    );
}

export default Card;