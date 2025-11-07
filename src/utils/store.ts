import { ActionType, CartType } from "@/types/types"
import { create } from "zustand"

const INITIAL_STATE = {
    product: [],
    totalItems: 0,
    totalPrice: 0,
}

export const useCartStore = create<CartType & ActionType>(get, set)