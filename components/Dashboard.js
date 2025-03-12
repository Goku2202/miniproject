import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/user/scores")
            .then((res) => setScores(res.data))
            .catch((err) => console.error("Error fetching scores:", err.response ? err.response.data : err.message));
    }, []);

    const data = {
        labels: scores.map(score => new Date(score.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Survey Scores',
                data: scores.map(score => score.totalScore),
                fill: false,
                backgroundColor: 'black',
                borderColor: 'black',
            },
        ],
    };

    return (
        <div className="container mt-5">
            <h2>User Dashboard</h2>
            <div className="card p-4 border-light">
                <h3>Survey Scores Over Time</h3>
                <Line data={data} />
                <ul className="list-group mt-4">
                    {scores.map((score, index) => (
                        <li key={index} className="list-group-item">
                            Date: {new Date(score.date).toLocaleDateString()}, Score: {score.totalScore}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;