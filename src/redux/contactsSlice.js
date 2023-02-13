import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
export const contactSelector = contactAdaptor.getSelectors((state) => state.contacts);
const initialState = contactAdaptor.getInitialState();


const contactsSlice = createSlice({
    name : "contacts",
    initialState,
    reducers:{
        addContact : contactAdaptor.addOne,
        deleteContact : contactAdaptor.removeOne,
        removeAllContacts : contactAdaptor.removeAll,
    }
})

export const { addContact, deleteContact, removeAllContacts } = contactsSlice.actions;
export default contactsSlice.reducer