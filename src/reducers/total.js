const initialState = {
    total: 0,
    itemsNum: 0,
};

const updateTotal = (state = initialState, action) => {
    switch (action.type) {
        case "CART_UPDATED":
            const cartItems = state.shoppingCart.cartItems;
            const total = cartItems.reduce((accumulator, item) => {
                return accumulator + item.total;
            }, 0);
            return {
                ...state,
                itemsNum: cartItems.length,
                total,
            };

        default:
            return state.total;
    }
};

export default updateTotal;
