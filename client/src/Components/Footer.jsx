import React from "react";
import { Link, Outlet } from "react-router-dom";

const Footer = function() {
    return(
        <div>
            <footer>
                <ul className="footer_categories">
                    <li><Link to="posts/categories/:category">Agriculture</Link></li>
                    <li><Link to="posts/categories/:category">Business</Link></li>
                    <li><Link to="posts/categories/:category">Education</Link></li>
                    <li><Link to="posts/categories/:category">Entertainment</Link></li>
                    <li><Link to="posts/categories/:category">Art</Link></li>
                    <li><Link to="posts/categories/:category">Investment</Link></li>
                    <li><Link to="posts/categories/:category">Uncategorized</Link></li>
                    <li><Link to="posts/categories/:category">Weather</Link></li>
                </ul>
                <div className="footer_copyright">
                    <small>Tous droits reservés &copy; Copyright Sara,crée et developpé par Henry Euloge</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer