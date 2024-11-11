import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase-config"

export const addNewContact = createAsyncThunk("contacts/addNewContact", async (contact) => {
    const docRef = await addDoc(collection(db, "contacts"), contact)
    return {...contact, id: docRef.id }
})

export const getContacts = createAsyncThunk("contacts/getContacts", async () => {
    const contactsSnapshot = await getDocs(collection(db, "contacts"))
    return contactsSnapshot.docs.map((doc) => {
        return {
            id: doc.id,
          ...doc.data()
        }
    })
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
    await deleteDoc(doc(db, "contacts", id))
    return id
})

export const editContact = createAsyncThunk("contacts/editContact", async (contact) => {
    await updateDoc(doc(db, "contacts", contact.id), contact.changes)
    return contact
})

const contactsAdapter = createEntityAdapter()

const initialState = contactsAdapter.getInitialState()

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: {
            reducer: contactsAdapter.addOne,
            prepare(firstname, lastname, phone, email){
                return {
                    payload: {
                        id: Date.now(),
                        firstname,
                        lastname,
                        phone,
                        email,
                    }
                }
            }
        },
        removeContact: contactsAdapter.removeOne,
        updateContact: contactsAdapter.updateOne,
    },
    extraReducers(builder){
        builder.addCase(addNewContact.fulfilled, (state, action) => {
            contactsAdapter.addOne(state, action.payload)
        }),
        builder.addCase(getContacts.fulfilled, (state, action) => {
            contactsAdapter.setAll(state, action.payload)
        }),
        builder.addCase(deleteContact.fulfilled, (state, action) => {
            contactsAdapter.removeOne(state, action.payload)
        }),
        builder.addCase(editContact.fulfilled, (state, action) => {
            contactsAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.changes
            })
        })
    }
})


export default contactsSlice.reducer

export const { addContact, removeContact, updateContact } = contactsSlice.actions

export const { selectAll: selectContacts } = contactsAdapter.getSelectors(
    (state) => state.contacts
)
