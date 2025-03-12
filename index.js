import React from "react";
import ReactDOM from "react-dom/client"; // Ensure 'client' is imported
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./styles.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
