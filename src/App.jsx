import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function RedirectComponent() {
  useEffect(() => {
    window.location.href = "https://skoegle.in/";
  }, []);

  return null; // No need to render anything
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<RedirectComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
