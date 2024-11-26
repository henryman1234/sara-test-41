import React from "react";
import App from "../App";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar5.jpg"

const PostAuthor = function () {
    return (
        <Link to = {`posts/users/sdfsdf`} className="post_author">
            <div className="post_author-avatar">
                <img src={Avatar} alt="" />
            </div>
            <div className="post_author-details">
                <h5>Par: Henry Euloge</h5>
                <small>A l'instant</small>
            </div>

        </Link>
    )
}

export default PostAuthor