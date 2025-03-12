import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styles2.css'; // Import the custom CSS file

const ToDoList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { level } = location.state || { level: "Unknown" };
    const toDoLists = {
        "Low Addiction": [
            "Continue balancing gaming with other activities.",
            "Maintain a healthy lifestyle with regular exercise.",
            "Stay socially active and engage in offline hobbies."
        ],
        "Moderate Addiction": [
            "Set time limits for gaming sessions.",
            "Take regular breaks during gaming.",
            "Engage in physical activities and other hobbies.",
            "Monitor your gaming habits and adjust as needed."
        ],
        "High Addiction": [
            "Reduce screen time gradually.",
            "Find alternative hobbies and activities.",
            "Talk to friends or family about your gaming habits.",
            "Seek support from a counselor if needed."
        ],
        "Severe Addiction": [
            "Seek professional help for gaming addiction.",
            "Follow a structured plan to reduce gaming time.",
            "Engage in therapy sessions with a specialist.",
            "Join support groups for gaming addiction."
        ]
    };

    const toDoList = toDoLists[level] || ["No specific to-do list available. Please consult a professional for personalized advice."];
    const [checkedItems, setCheckedItems] = useState(new Array(toDoList.length).fill(false));

    const handleCheckboxChange = (index) => {
        const updatedCheckedItems = checkedItems.map((item, i) => (i === index ? !item : item));
        setCheckedItems(updatedCheckedItems);
    };

    const completedTasks = checkedItems.filter(item => item).length;
    const progress = (completedTasks / toDoList.length) * 100;

    return (
        <div className="container text-center mt-5">
            <div className="card p-4 border-light">
                <h3>To-Do List for {level}:</h3>
                <div className="progress mb-3">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated progress-bar-custom"
                        role="progressbar"
                        style={{ width: `${progress}%` }}
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        {Math.round(progress)}%
                    </div>
                </div>
                <ul className="list-group">
                    {toDoList.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{item}</span>
                            <input
                                type="checkbox"
                                checked={checkedItems[index]}
                                onChange={() => handleCheckboxChange(index)}
                            />
                        </li>
                    ))}
                </ul>
                <button className="btn btn-custom btn-sm mt-3" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ToDoList;