import React from "react";
import "./movie.css";

function Movie() {
    return (
        <div className="card">
            <img src="https://png.pngtree.com/thumb_back/fw800/background/20231120/pngtree-clipart-a-compelling-movie-poster-background-image_14645888.jpg" className="card-img-top" alt="Movie Poster" />
            <div className="card-body">
                <h5 className="card-title">A Compelling Movie</h5>
                <p className="card-text">Browse the most popular movies right now and see where you can watch them.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Movie;
