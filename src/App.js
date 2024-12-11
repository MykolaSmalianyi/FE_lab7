import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Task1 from './Task1';
import Task2 from './Task2';

function Home() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Виберіть завдання</h1>
            <div>
                <Link to="/FE_lab7/task1" style={linkStyle}>Перше завдання</Link>
                <Link to="/FE_lab7/task2" style={linkStyle}>Друге завдання</Link>
            </div>
        </div>
    );
}

const linkStyle = {
    display: "inline-block",
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px"
};

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/FE_lab7" element={<Home />} />
                <Route path="/FE_lab7/task1" element={<Task1 />} />
                <Route path="/FE_lab7/task2" element={<Task2 />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}