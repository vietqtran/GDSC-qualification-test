import { cartReducer } from "./cartReducer";
import { combineReducers } from "redux";
import { wishlistReducer } from "./wishlistReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;