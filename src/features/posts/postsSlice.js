import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
  {
    id: "1",
    title: "post 1",
    description: "This is a sample post",
    createdAt: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions:{
        thumbsUp:2,
        wow:0,
        heart:5,
        coffee:0,
        rocket:0,
    }
  },
  {
    id: "2",
    title: "post 2",
    description: "This is the second sample post",
    createdAt: sub(new Date(), { minutes: 20 }).toISOString(),
    reactions:{
        thumbsUp:0,
        wow:1,
        heart:2,
        coffee:3,
        rocket:0,
    }
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, description, authorId) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            authorId,
            createdAt: new Date().toISOString(),
          },
        };
      },
    },
    addReactions:(state,action)=>{
        const {postId,reaction}=action.payload

        const post=state.find((post)=> post.id===postId)
        if(post){
            post.reactions[reaction] +=1
        }

    }
  },
});

export const { addPosts,addReactions } = postsSlice.actions;
export const selectAllPost = (state) => state.posts;
export default postsSlice.reducer;
