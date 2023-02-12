import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter()
const initialState = contactAdaptor.getInitialState()

const contactsSlice = createSlice({
    name : "contacts",
    initialState,
    reducers:{
        addContact : contactAdaptor.addOne
    }
})

export const {addContact} = contactsSlice.actions
export default contactsSlice.reducer