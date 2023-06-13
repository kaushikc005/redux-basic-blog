import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState=[
    {
        id:"1",title:"post 1",description:"This is a sample post"
    },
    {
        id:"2",title:"post 2",description:"This is the second sample post"
    },
]
 

export const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPosts:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,description,authorId){
                return {
                    payload:{
                        id: nanoid(),
                        title,
                        description,
                        authorId
                    }
                }
            }
        }
    }
})


export const {addPosts} = postsSlice.actions
export const selectAllPost=(state)=> state.posts
export default postsSlice.reducer