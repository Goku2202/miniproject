import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Result.css'; // Import the custom CSS file

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { total_score, level } = location.state || { total_score: 0, level: "Unknown" };

    const getLevelDescription = (level) => {
        switch (level) {
            case "Low Addiction":
                return "You have a healthy relationship with gaming. Continue to enjoy your games while balancing other aspects of your life.";
            case "Moderate Addiction":
                return "You might be spending a bit too much time gaming. Try to take regular breaks and engage in other activities.";
            case "High Addiction":
                return "Your gaming habits are starting to interfere with other aspects of your life. It's important to reduce your screen time and find other hobbies.";
            case "Severe Addiction":
                return "Your gaming habits are significantly impacting your life. It's crucial to seek professional help to address your gaming addiction.";
            default:
                return "We couldn't determine a specific recommendation for your level of addiction. Please consult a professional for personalized advice.";
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="card text-center p-5 shadow-lg w-75 border-light animate__animated animate__fadeIn">
                <div className="card-body">
                    <h2 className="card-title mb-4 fw-bold">Your Assessment Result</h2>
                    <hr className="border-white opacity-50"/>
                    <div className="mb-4">
                        <h3 className="text-danger">Total Score: {total_score}</h3>
                        <h4 className="text-warning">Addiction Level: {level}</h4>
                        <p className="mt-3">{getLevelDescription(level)}</p>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button className="btn btn-custom me-md-2" onClick={() => navigate("/recommendation", { state: { level } })}>
                            View Recommendations
                        </button>
                        <button className="btn btn-custom" onClick={() => navigate("/")}>
                            Take Another Assessment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;