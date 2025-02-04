import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "https://skoegle.in/";
  }, []);

  return null; // No need to render anything since we're redirecting
}

export default App;