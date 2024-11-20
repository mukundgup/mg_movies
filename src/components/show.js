// import React, { useState } from 'react';
// import axios from 'axios'; 
// import './show.css'; 

// function Button() {
//     const [formData, setFormData] = useState({
//         login: '',  
//     });

//     const [responseData, setResponseData] = useState(); 
//     const [responseMessage, setResponseMessage] = useState(''); 

//     const handleChange = (evt) => {
//         const { name, value } = evt.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,  
//         }));
//     };

//     const handleSubmit = async (evt) => {
//         evt.preventDefault();
//         try {
//             const { login } = formData; 
//             if (!login) {
//                 setResponseMessage('Please enter a GitHub login name.');
//                 return;
//             }

//             const response = await axios.get(`https://omdbapi.com/?apikey=4e9e8ed7&s=series/${login}`);  

//             console.log('API response:', response.data);
//             setResponseData(response.data); 
//             setResponseMessage('Data fetched successfully!');
//         } catch (error) {
//             console.error('Error fetching data from the API:', error);
//             setResponseMessage('Error fetching user data. User not found or other issue.');
//         }
//     };

//     return (
//         <div className="button-container">
//             <form onSubmit={handleSubmit} className="search-form">
//                 <div>
//                     <label htmlFor="login">Login:</label>
//                     <input
//                         type="text"
//                         id="login"
//                         name="login"
//                         value={formData.login}
//                         onChange={handleChange}
//                         required
//                         placeholder="Enter then login"
//                     /><br />
//                     <button type="submit" className="fetch-button">Fetch User</button>
//                 </div>
//             </form>

//             {responseMessage && <p className="message">{responseMessage}</p>}


//             {responseData && (
//                 <div className="user-data">
//                     <h3>Fetched User:</h3>
//                     <p><strong>Login:</strong> {responseData.login}</p>
//                     <p><strong>Name:</strong> {responseData.name || 'N/A'}</p>
//                     <p><strong>Profile URL:</strong> <a href={responseData.html_url} target="_blank" rel="noopener noreferrer">{responseData.html_url}</a></p>
//                     <p><strong>Public Repos:</strong> {responseData.public_repos}</p>
//                     <img src={responseData.avatar_url} alt={`${responseData.login}'s avatar`} className="avatar" />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Button;
