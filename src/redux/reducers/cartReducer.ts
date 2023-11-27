import { ADD_ITEM_TO_CART, DECREASE_CART_ITEM_QUANTITY, DELETE_CART_ITEM, INCREASE_CART_ITEM_QUANTITY } from "../actions/cartAction";

import { CartItem } from "../../models/cartItem";

const initialState: CartItem[] = []

export const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            const cartItem = state.find((item) => item.product._id === action.payload._id)
            if (cartItem !== undefined) {
                return state.map((item) => {
                    if (item.product._id === action.payload._id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            }
            return [ { product: action.payload, quantity: 1 }, ...state ]
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