import { Product } from "../../models/product"
import { TOGGLE_WISHLIST_ITEM } from "../actions/wishlistAction"
import { showToast } from "../../utils/toast"

const initialState: Product[] = []


export const wishlistReducer = (state = initialState, action: { type: string, payload: Product }) => {
    switch (action.type) {
        case TOGGLE_WISHLIST_ITEM: {
            const IS_EXISTED_IN_WISHLIST = state.some((wishlistItem) => wishlistItem._id === action.payload._id)
            if (IS_EXISTED_IN_WISHLIST === true) {
                showToast("Item removed from wishlist", 'bottom', false)
                return state.filter((wishlistItem) => wishlistItem._id !== action.payload._id)
            } else {
                showToast("Item added to wishlist", 'bottom', true)
                return [ action.payload, ...state ]
            }
        }
        default: {
            return state
        }
    }
}
