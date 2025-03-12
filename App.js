import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Recommendation from './components/Recommendation';
import ToDoList from './components/ToDoList'; // Import the ToDoList component
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import Home from './components/Home';
import SelectAgeGroup from './components/SelectAgeGroup';
import Survey from './components/Survey';
import Result from './components/Result';


const App = () => {
    const [ageGroup, setAgeGroup] = useState(null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home setAgeGroup={setAgeGroup} />} />
                <Route path="/select-age-group" element={<SelectAgeGroup setAgeGroup={setAgeGroup} />} />
                <Route path="/survey" element={<Survey ageGroup={ageGroup} />} />
                <Route path="/result" element={<Result />} />
                <Route path="/recommendation" element={<Recommendation />} />
                <Route path="/todo" element={<ToDoList />} />
                <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
            </Routes>
        </Router>
    );
};

export default App;
