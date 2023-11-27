import { ADD_ITEM_TO_CART, DECREASE_CART_ITEM_QUANTITY, DELETE_CART_ITEM, INCREASE_CART_ITEM_QUANTITY } from "../actions/cartAction";

import { CartItem } from "../../models/cartItem";
import { showToast } from "../../utils/toast";

const initialState: CartItem[] = []

export const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            const cartItem = state.find((item) => item.product._id === action.payload._id)
            if (cartItem !== undefined) {
                showToast(`There’s an error while adding item to cart`, "bottom", false)
                return state
            }
            showToast("Item successfully added to cart", "bottom", true)
            return [ { product: action.payload, quantity: 1 }, ...state ]
        }
        case DELETE_CART_ITEM: {
            showToast("Item removed from cart", 'top', true)
            return state.filter((cartItem) => cartItem.product._id !== action.payload)
        }
        case INCREASE_CART_ITEM_QUANTITY: {
            return state.map((cartItem) => {
                if (cartItem.product._id === action.payload) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            })
        }
        case DECREASE_CART_ITEM_QUANTITY: {
            return state.map((cartItem) => {
                if (cartItem.product._id === action.payload) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 }
                }
                return cartItem
            })
        }
        default: {
            return state
        }
    }
}