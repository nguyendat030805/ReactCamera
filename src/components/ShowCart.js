import React from "react";

const ShowCart = ({ avatar, name }) => {
    return (
        <div className="product">
            <div className="p-img">
                <img src={avatar} width={200} height={200} />
            </div>
            <div className="text">
                <div className="p-cat">{name}</div>
                <div className="p-price">Please Call</div>
                <input type="button" className="button" name="add" defaultValue="Add to cart" />
            </div>
            <div className="clear" />
        </div>
    );
};

export default ShowCart;
