import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "./postsSlice";
import { selectAllAuthors} from "../authors/authorsSlice";

const FormPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [authorId, setAuthorId] = useState("");
  const dispatch=useDispatch()
  
  const authors=useSelector(selectAllAuthors)
  console.log(authors)
  const handleSubmit=(e)=>{
    if(title && description){

        dispatch(
            addPosts(title,description,authorId)
        )
        setTitle('')
        setDescription('')
        e.preventDefault();
    }
  }

  const authorOptions=authors.map(author => (
    <option key={author.id}>{author.name}</option>
  ))
  return (
    <div>
        <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Post Author</label>
        <select
          type="text"
          name="author"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
        >
            <option>Select an author</option>
           {authorOptions}
            </select>

        <label htmlFor="postDesc">Description</label>
        <input
          type="text"
          name="postDesc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button 
        onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default FormPost;
