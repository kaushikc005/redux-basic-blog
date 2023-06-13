import { createSlice } from "@reduxjs/toolkit";


const initialState=[
    {id:'0',name:'Bob The Builder'},
    {id:'1',name:'Tom & Jerry'},
    {id:'2',name:'Noddy'}
]

const authorsSlice= createSlice({
    name:"authors",
    initialState,
    reducers:{
    }
})

export const selectAllAuthors=(state)=> state.authors
export default authorsSlice.reducer