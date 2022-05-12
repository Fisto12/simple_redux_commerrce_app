import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemsList:[],  // when no item was thereid: 1 name: "MacBook" price: 25 quantity: 1 totalPrice: 25
        totalQuantity:0,
        showCart:false
    },
    reducers:{
        addToCart(state,action){
    const newItem= action.payload; //const newItem={id:1,name:'lenovo',price:'20', quantity:1,totalproce:null}
           
              //check if item is there 
              const existingItem= state.itemsList.find((item)=>item.id===newItem.id);
              if (existingItem){
                  existingItem.quantity++;
                  existingItem.totalPrice+=newItem.price
              }
              else{
                  state.itemsList.push({
                      id:newItem.id,
                      price:newItem.price,
                      quantity:1,
                      totalPrice:newItem.price,
                      name:newItem.name
                  })
                  state.totalQuantity++
              }
        },
        removeFromCart(state,action){
            const id=action.payload;
            const existingItem=state.itemsList.find((item)=>item.id===id);
            if(existingItem.quantity===1){ 
                state.itemsList=state.itemsList.filter((item)=>item.id!==id)
                state.totalQuantity--
            }
            else{
                existingItem.quantity--
                existingItem.totalPrice-=existingItem.price
            }
        },
        setShowCart(state){
            state.showCart=!state.showCart
        }
    }
})
export const cartActions= cartSlice.actions;
export default cartSlice