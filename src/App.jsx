import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper,
  Link,
  Box,
} from "@mui/material";

function RedirectComponent() {
  return null;
}

function TaskUpdate() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const tasks = [
    { sno: 1, month: "January", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=2&range=C4", remark: "Not Available" },
    { sno: 2, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=2&range=C4", remark: "In Progress" },
    // { sno: 3, month: "March", url: "https://example.com/task3", remark: "Pending" },
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
    <Container style={{ height: "100vh" }}>
      {!isAuthenticated ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Paper elevation={3} style={{ padding: "20px", width: "100%", maxWidth: "400px" }}>
            <Typography variant="h4" gutterBottom align="center">
              Login
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
                fullWidth
              >
                Login
              </Button>
            </form>
          </Paper>
        </Box>
      ) : (
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Task Update
          </Typography>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#f5f5f5" }}>
                <TableCell>S.No</TableCell>
                <TableCell>Month</TableCell>
                <TableCell>URL</TableCell>
                <TableCell>Remark</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.sno}>
                  <TableCell>{task.sno}</TableCell>
                  <TableCell>{task.month}</TableCell>
                  <TableCell>
                    <Link href={task.url} target="_blank" rel="noopener">
                      {task.url}
                    </Link>
                  </TableCell>
                  <TableCell>{task.remark}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Container>
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
