import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Recommendation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { level } = location.state || { level: "Unknown" };
    const recommendations = {
        "Low Addiction": {
            advice: "Keep enjoying games in a balanced way!",
            details: "You have a healthy relationship with gaming. Continue to enjoy your games while balancing other aspects of your life such as work, social activities, and physical exercise.",
            youtube: "https://www.youtube.com/watch?v=example1",
            doctor: "Dr. John Doe, Phone: (123) 456-7890, Email: john.doe@example.com"
        },
        "Moderate Addiction": {
            advice: "Consider taking regular breaks.",
            details: "You might be spending a bit too much time gaming. Try to take regular breaks and engage in other activities. Set time limits for your gaming sessions and stick to them.",
            youtube: "https://www.youtube.com/watch?v=example2",
            doctor: "Dr. Jane Smith, Phone: (987) 654-3210, Email: jane.smith@example.com"
        },
        "High Addiction": {
            advice: "Try reducing screen time and engaging in other hobbies.",
            details: "Your gaming habits are starting to interfere with other aspects of your life. It's important to reduce your screen time and find other hobbies or activities that you enjoy. Consider talking to a friend or family member about your gaming habits.",
            youtube: "https://www.youtube.com/watch?v=example3",
            doctor: "Dr. Emily Johnson, Phone: (555) 123-4567, Email: emily.johnson@example.com"
        },
        "Severe Addiction": {
            advice: "Seek professional help for gaming addiction.",
            details: "Your gaming habits are significantly impacting your life. It's crucial to seek professional help to address your gaming addiction. Reach out to a mental health professional who specializes in addiction.",
            youtube: "https://www.youtube.com/watch?v=example4",
            doctor: "Dr. Michael Brown, Phone: (444) 987-6543, Email: michael.brown@example.com"
        }
    };

    const recommendation = recommendations[level] || {
        advice: "No specific recommendation available.",
        details: "We couldn't determine a specific recommendation for your level of addiction. Please consult a professional for personalized advice.",
        youtube: "",
        doctor: ""
    };

    return (
        <div className="container text-center mt-5">
            <div className="card p-4 border-light">
                <h3>Recommendation for {level}:</h3>
                <p className="fw-bold">{recommendation.advice}</p>
                <p>{recommendation.details}</p>
                {recommendation.youtube && (
                    <div>
                        <h5>Helpful Video:</h5>
                        <a href={recommendation.youtube} target="_blank" rel="noopener noreferrer">
                            Watch on YouTube
                        </a>
                    </div>
                )}
                {recommendation.doctor && (
                    <div>
                        <h5>Contact a Specialist:</h5>
                        <p>{recommendation.doctor}</p>
                    </div>
                )}
                <button className="btn btn-primary mt-3" onClick={() => navigate("/todo", { state: { level } })}>
                    View To-Do List
                </button>
                <button className="btn btn-secondary mt-3" onClick={() => window.history.back()}>
                    Go Back
                </button>
                <button className="btn btn-info mt-3" onClick={() => navigate("/dashboard")}>
                    View Dashboard
                </button>
            </div>
        </div>
    );
};

export default Recommendation;