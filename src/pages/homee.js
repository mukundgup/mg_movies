import React, { useState, useEffect } from "react";
import Navbar from "../components/navbars";
import "./homee.css";
import axios from "axios";

function Home() {
    const [selectedYear, setSelectedYear] = useState("2024");
    const [movies, setMovies] = useState([]);
    const [message, setMessage] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const fetchMovies = async (year) => {
        setMessage("");
        setMovies([]);

        try {
            const response = await axios.get(`https://omdbapi.com/?apikey=4e9e8ed7&s=series&y=${year}`);
            if (response.data && response.data.Search) {
                setMovies(response.data.Search);
                setMessage(`Movies from the year ${year} fetched successfully!`);
            } else {
                setMessage(`No movies found for the year ${year}.`);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
            setMessage("An error occurred while fetching movies. Check the API key or network.");
        }
    };

    useEffect(() => {
        fetchMovies(selectedYear);
    }, [selectedYear]);

    const handleImageClick = (movie) => {
        setSelectedMovie(movie); 
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false); 
        setSelectedMovie(null); 
    };

    return (
        <>
            <Navbar />

            <div className="homee-background">
                <div>
                    <h1 style={{ margin: "0", padding: "0px", marginRight: "50%", color: "white" }}>
                        Movies Released in {selectedYear}
                    </h1>
                </div>

                <div style={{ margin: "0", padding: "0px", marginRight: "60%", color: "white" }}>
                    <h1>
                        <label>Select Year</label>
                    </h1>
                    <select
                        className="year-dropdown"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                    </select>
                </div>

                {message && <p style={{ color: "white" }}>{message}</p>}

                <div className="card-container">
                    {movies.map((movie, index) => (
                        <div className="card" key={index}>
                            <img
                                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                                alt={movie.Title}
                                className="movie-poster"
                                onClick={() => handleImageClick(movie)} // Handle image click
                            />
                            <h4>{movie.Title}</h4>
                            {/* <p><strong>Year:</strong> {movie.Year}</p>
                            <p><strong>Type:</strong> {movie.Type}</p> */}
                        </div>
                    ))}
                </div>

                {isModalOpen && selectedMovie && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-button" onClick={closeModal}>
                                &times;
                            </span>
                            <img
                                src={selectedMovie.Poster !== "N/A" ? selectedMovie.Poster : "https://via.placeholder.com/300"}
                                alt={selectedMovie.Title}
                                className="modal-poster"
                            />
                            <h2>{selectedMovie.Title}</h2>
                            <p><strong>Year:</strong> {selectedMovie.Year}</p>
                            <p><strong>Type:</strong> {selectedMovie.Type}</p>
                        </div>
                    </div>
                )}<br></br>
            </div>
        </>
    );
}

export default Home;
