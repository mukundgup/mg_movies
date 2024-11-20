import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/homee';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
         
          {/* Add more routes here if needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
