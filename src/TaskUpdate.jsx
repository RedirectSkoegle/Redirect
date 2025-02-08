import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function RedirectComponent() {
  return null;
}

function TaskUpdate() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const tasks = [
    { sno: 1, month: "January", url: "https://example.com/task1", remark: "Completed" },
    { sno: 2, month: "February", url: "https://example.com/task2", remark: "In Progress" },
    { sno: 3, month: "March", url: "https://example.com/task3", remark: "Pending" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Skoegle2025" && password === "Skoegle2025") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {!isAuthenticated ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={{ marginTop: "10px" }}>
            Login
          </button>
        </form>
      ) : (
        <div>
          <h2>Task Update</h2>
          <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", textAlign: "left" }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Month</th>
                <th>URL</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.sno}>
                  <td>{task.sno}</td>
                  <td>{task.month}</td>
                  <td>
                    <a href={task.url} target="_blank" rel="noopener noreferrer">
                      {task.url}
                    </a>
                  </td>
                  <td>{task.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<RedirectComponent />} />
        <Route path="/taskupdate" element={<TaskUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
