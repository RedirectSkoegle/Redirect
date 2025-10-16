import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
  Box,
  Link,
  Toolbar,
  AppBar,
} from "@mui/material";

function RedirectComponent() {
  const location = useLocation();
  useEffect(() => {
    const newUrl = `https://skoegle.com${location.pathname}${location.search}${location.hash}`;
    window.location.href = newUrl;
  }, [location]);

  return null;
}

function TaskUpdate() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedAuth = sessionStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Skoegle2025" && password === "Skoegle2025") {
      setIsAuthenticated(true);
      sessionStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("isAuthenticated");
  };

  const checkZohoLogin = (url) => {
    const userConfirmed = window.confirm("Please ensure you're logged into Zoho Mail. Do you want to proceed?");
    if (userConfirmed) {
      window.open(url, "_blank");
    }
  };

  const employeeTasks = {
    Jithin: [
      { sno: 1, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=2&range=C4", remark: "In Progress" },
    ],
    Manoj: [
  
      { sno: 1, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=3&range=A1", remark: "In Progress" },
    ],
    Harini: [
   
      { sno: 1, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=4&range=A1", remark: "In Progress" },
    ],
    Raghu: [
      { sno: 1, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=5&range=A1", remark: "In Progress" },
    ],
    Gayathari: [
      { sno: 1, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=6&range=A1", remark: "In Progress" },
    ],
    Divya: [
      { sno: 1, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=7&range=A1", remark: "In Progress" },
    ],
    Bhargav: [
      { sno: 1, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=8&range=A1", remark: "In Progress" },
    ],
    Saurabh: [
      { sno: 1, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=9&range=A1", remark: "In Progress" },
    ],
    Nethra: [
      { sno: 1, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=10&range=A1", remark: "In Progress" },
    ],
    Prajwal: [
      { sno: 1, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=11&range=A1", remark: "In Progress" },
    ],
      Harsha: [
      { sno: 1, month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a?sheetid=12&range=A1", remark: "In Progress" },
    ],
  };
  const filteredEmployees = Object.keys(employeeTasks).filter((employee) =>
    employee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container style={{ height: "100vh" }}>
      {!isAuthenticated ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
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
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: "10px" }} fullWidth>
                Login
              </Button>
            </form>
          </Paper>
        </Box>
      ) : (
        <>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Task Update Portal
              </Typography>
              <Button color="inherit" onClick={() => window.open("https://mail.zoho.in", "_blank")}>
                Login to Zoho Mail
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="h4" gutterBottom>
              Task Update
            </Typography>
            <TextField
              fullWidth
              label="Search Employee"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              margin="normal"
            />
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <Box key={employee} style={{ marginTop: "20px" }}>
                  <Typography variant="h6" gutterBottom style={{ color: "#1976d2" }}>
                    {employee}
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
                      {employeeTasks[employee].map((task) => (
                        <TableRow key={task.sno}>
                          <TableCell>{task.sno}</TableCell>
                          <TableCell>{task.month}</TableCell>
                          <TableCell>
                            <Link
                              href="#"
                              onClick={() => checkZohoLogin(task.url)}
                              style={{ cursor: "pointer", color: "#1976d2" }}
                            >
                              {task.url}
                            </Link>
                          </TableCell>
                          <TableCell>{task.remark}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              ))
            ) : (
              <Typography variant="body1" style={{ marginTop: "20px" }}>
                No employees found.
              </Typography>
            )}
          </Paper>
        </>
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
