import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = function ({postID, title, description, thumbnail, category, authorID}) {
    const shortDescription = description.length > 100 ? description.substr(0, 100) +"..." :description;
    const shortTitle = title.length > 30 ? title.substr(0, 30) +"..." : title;
    return (
        <article className="post">
            <div className="post_thumbnail">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="post_content">
                {/* ici on définit le posts/:id */}
                <Link to={`/posts/${postID}`}>
                    <h3>{shortTitle}</h3>
                </Link>
                <p>{shortDescription}</p>
                <div className="post_footer">
                    <PostAuthor/>
                    {/* ici on définit le posts/categories/:category */}
                    <Link to={`/posts/categories/${category}`} className="post_footer_category">{category}</Link>
                </div>
            </div>
        </article>
    )
}

export default PostItem