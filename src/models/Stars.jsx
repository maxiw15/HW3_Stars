import React from 'react';
import Star from "./Star";

const Stars = ({count}) => {
    const isCountCorrect = Boolean(String(count).match(/^[1-5]$/g))
    if (isCountCorrect)
        return (
            <ul className="card-body-stars">
                {Array(count).fill(true).map((_, i) => <Star key={i + count} />)}
            </ul>
        )
    return null;
};



export default Stars;
