import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";
import updateTotal from "./total";

const reducer = (state, action) => {
    return {
        total: updateTotal(state, action),
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action),
    };
};

export default reducer;
