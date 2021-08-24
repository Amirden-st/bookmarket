import React from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ShopHeader = ({ itemsNum, total }) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">Market</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {itemsNum ? itemsNum : 0} items (${total ? total : 0})
                </div>
            </Link>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        total: state.total.total,
        itemsNum: state.total.itemsNum,
    };
};

export default connect(mapStateToProps)(ShopHeader);
