import React, { useState } from "react";
import './navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert("Please enter a search term.");
      return;
    }

    setIsLoading(true);
    setSearchResults([]); 

    try {
      const response = await fetch(
        `https://omdbapi.com/?apikey=4e9e8ed7&s=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setSearchResults(data.Search); 
      } else {
        setSearchResults([]); 
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    } finally {
      setIsLoading(false);
      setIsModalOpen(true); 
    }
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie); 
    setIsModalOpen(true); 
  };

  return (
    <nav>
      {/* Hamburger Menu for Small Screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M1.5 3a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>

      <ul className={isMenuOpen ? "show-menu" : ""}>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <button type="button" className="primary">
          Notifications <span className="visually-hidden">Loading...</span>
          <i className="bi bi-bell-fill"></i><span className="primary">4</span>
        </button>
      </ul>

     
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>

            {isLoading ? (
              <p>Loading...</p>
            ) : selectedMovie ? (
              <>
               
                <img
                  src={selectedMovie.Poster !== "N/A" ? selectedMovie.Poster : "https://via.placeholder.com/300"}
                  alt={selectedMovie.Title}
                  className="modal-poster"
                />
                <h3>{selectedMovie.Title}</h3>
                <p><strong>Year:</strong> {selectedMovie.Year}</p>
                <p><strong>Type:</strong> {selectedMovie.Type}</p>
              </>
            ) : searchResults.length > 0 ? (
              searchResults.map((movie) => (
                <div
                  key={movie.imdbID}
                  className="movie-item"
                  onClick={() => handleSelectMovie(movie)} 
                  style={{ cursor: "pointer" }} 
                >
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
                    alt={movie.Title}
                    className="modal-poster"
                  />
                  <h3>{movie.Title}</h3>
                  <p><strong>Year:</strong> {movie.Year}</p>
                  <p><strong>Type:</strong> {movie.Type}</p>
                </div>
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
