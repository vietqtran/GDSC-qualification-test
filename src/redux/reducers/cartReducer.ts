import { ADD_ITEM_TO_CART, DECREASE_CART_ITEM_QUANTITY, DELETE_CART_ITEM, INCREASE_CART_ITEM_QUANTITY } from "../actions/cartAction";

import { CartItem } from "../../models/cartItem";

const initialState: CartItem[] = []

export const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            return [ ...state, action.payload ]
        }
        case DELETE_CART_ITEM: {
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