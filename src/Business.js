/*
Each Business component should display an image, name, address, city, state, zipcode, category, rating, and review count.
*/
import React from 'react';

function Business(props) {
    const { business } = props;
    return (
        <div>
            <img src="" alt=""/>
            <div>{business.name}</div>
            <div>123 Fake St</div>
            <div>Fakeville</div>
            <div>OH</div>
            <div>55555</div>
            <div>Pizza</div>
            <div>4.5</div>
            <div>200</div>
        </div>
    );
}

export default Business;
