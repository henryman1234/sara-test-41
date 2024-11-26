import React, { useState } from "react";
import PostItem from "../Components/PostItem";
import { DUMMY_POSTS } from "../data";

const AuthorPosts = function () {
    const [posts, setPosts] = useState(DUMMY_POSTS)
    return (
        <section className=" posts ">
            {posts.length > 0 ? <div className="container posts_container">
                {posts.map(function({description, id, thumbnail, authorID,
                    category, title
                }){
                    return <PostItem key={id} description={description} id={id} authorID={authorID} thumbnail={thumbnail} title={title} category={category}/>
                })}
            </div> : <h2>Aucun poste trouvé</h2>}
        </section>
    )
}

export default AuthorPosts