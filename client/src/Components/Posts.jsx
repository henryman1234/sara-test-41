import React, { useState } from "react";
import PostItem from "./PostItem";
import { DUMMY_POSTS } from "../data";



const Posts = function () {

    const [posts, setPosts] = useState(DUMMY_POSTS)

    return (
        <section className="posts">
            { posts.length > 0  ? <div className="container  posts_container">
                {posts.map(function({id, thumbnail, description, authorID, title, category}){
                    return <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
                    description={description} authorID={authorID}/>
                })}
            </div> : <h2 className="post-not-found">Aucun poste trouvé</h2>}
        </section>
    )
}

export default Posts