import { Product } from "../../models/product"

export const TOGGLE_WISHLIST_ITEM = 'TOGGLE_WISHLIST_ITEM'

export const toggleWishlist = (product: Product) => {
    return {
        type: TOGGLE_WISHLIST_ITEM,
        payload: product
    }
}