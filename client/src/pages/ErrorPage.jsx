import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = function () {
    return (
        <section>
            <div className="error-page">
                <div className="center">
                    <Link to="/" className="btn primary">Retour à l'acceuil</Link>
                    <h1>Page Non Trouvée</h1>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage