import { Product } from "../../models/product"
import { TOGGLE_WISHLIST_ITEM } from "../actions/wishlistAction"

const initialState: Product[] = []


export const wishlistReducer = (state = initialState, action: { type: string, payload: Product }) => {
    switch (action.type) {
        case TOGGLE_WISHLIST_ITEM: {
            const IS_EXISTED_IN_WISHLIST = state.some((wishlistItem) => wishlistItem._id === action.payload._id)
            if (IS_EXISTED_IN_WISHLIST === true) {
                return state.filter((wishlistItem) => wishlistItem._id !== action.payload._id)
            } else {
                return [ ...state, action.payload ]
            }
        }
        default: {
            return state
        }
    }
}
