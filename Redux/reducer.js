const { createReducer } = require("@reduxjs/toolkit");

export const cartReducer = createReducer({
    cartItems: [],
    price: 0,
    qty: 0,
    id: "",
    tax: 0
},
    {
        addToCart: (state, action) => {
            let item = action.payload;
            const itemExist = state.cartItems.find((ele) => {
                ele.id === item.id
            })
            if (itemExist) {
                state.cartItems.forEach((ele) => {
                    if (ele.id === item.id) {
                        ele.qty += 1;
                    }
                })
            } else {
                state.cartItems.push(item)
            }
        },
        decrement: (state, action) => {
            
        },
        ClearCart: (state, action) => {
            state.cartItems = []
        },
        RemoveFromCart: (state, action) => {
            state.cartItems.filter((i) => i.id !== action.payload)

        },
        calculatePrice: (state) => {
            let sum = 0;
            state.cartItems.forEach((i) => sum += i.price * i.qty)
        }
    })