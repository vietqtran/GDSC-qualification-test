import { Product } from "../../models/product"

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM'
export const INCREASE_CART_ITEM_QUANTITY = 'INCREASE_CART_ITEM_QUANTITY'
export const DECREASE_CART_ITEM_QUANTITY = 'DECREASE_CART_ITEM_QUANTITY'


export const addItemToCart = (product: Product) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: product
    }
}

export const deleteCartItem = (productId: string) => {
    return {
        type: DELETE_CART_ITEM,
        payload: productId
    }
}

export const increaseCartItemQuantity = (productId: string) => {
    return {
        type: INCREASE_CART_ITEM_QUANTITY,
        payload: productId
    }
}

export const decreaseCartItemQuantity = (productId: string) => {
    return {
        type: DECREASE_CART_ITEM_QUANTITY,
        payload: productId
    }
}