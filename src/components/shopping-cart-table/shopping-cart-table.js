import React from "react";
import "./shopping-cart-table.css";

import { connect } from "react-redux";
import {
    bookRemoveFromCart,
    bookAddedToCart,
    allBookRemoveFromCart,
    cartUpdated,
} from "../../actions";

const ShoppingCartTable = ({
    items,
    total,
    onIncrease,
    onDecrease,
    onDelete,
}) => {
    const generatetableRaw = (item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>{item.total}$</td>
                <td>
                    <button
                        onClick={() => onDelete(item.id)}
                        className="btn btn-outline-danger btn-sm float-right"
                    >
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        onClick={() => onIncrease(item.id)}
                        className="btn btn-outline-success btn-sm float-right"
                    >
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(item.id)}
                        className="btn btn-outline-warning btn-sm float-right"
                    >
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>{items.map((item) => generatetableRaw(item))}</tbody>
            </table>

            <div className="total">Total: {total}$</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.cartItems,
        total: state.shoppingCart.total,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => {
            dispatch(bookAddedToCart(id));
            dispatch(cartUpdated());
        },
        onDecrease: (id) => {
            dispatch(bookRemoveFromCart(id));
            dispatch(cartUpdated());
        },
        onDelete: (id) => {
            dispatch(allBookRemoveFromCart(id));
            dispatch(cartUpdated());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
