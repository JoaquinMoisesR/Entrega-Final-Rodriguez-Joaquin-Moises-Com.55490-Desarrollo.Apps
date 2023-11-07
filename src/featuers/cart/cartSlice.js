import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "userLogged",
    updatedAt: Date.now().toLocaleString(),
    items: [],
    total: 0,
    orders: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const products = state.items
            const productRepeated = products.find (
                item => item.id === action.payload.id
            )
            if (!productRepeated) 
            return {
                 ...state,
                 items: [...state.items, action.payload],
                 total : state.total + action.payload.price,
                 updatedAt: new Date ().toLocaleString(),
                }
                
                const itemsUpdated = products.map(item => {
                    if (item.id === action.payload.id) {
                        return Object.assign({}, item, {
                            quantity: item.quantity + action.payload.quantity,
                        })
                    }
                    return item
                })
                return {
                    ...state,
                    items: itemsUpdated,
                    total: state.total + action.payload.price,
                    updatedAt: new Date().toLocaleString(),
                }
            },
            removeItem: (state, action) => {
                const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
            state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            state.updatedAt = new Date().toLocaleString();
            },
            createOrder: (state) => {
                const newOrder = {
                    items: state.items,
                    total: state.total,
                    date: new Date().toLocaleString(),
                };
                state.orders.push(newOrder);
                state.items = [];
                state.total = 0;
                state.updatedAt = new Date().toLocaleString();
            },
            clearOrders: (state) => {
                state.orders = [];
            },
        }, 
})

export const { addItem, removeItem, createOrder, clearOrders } = cartSlice.actions

export default cartSlice.reducer