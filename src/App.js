import { Routes, Route } from "react-router-dom";
import KakaoCallback from "./components/KakaoCallback";
import { useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  // const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth/kakao"
          element={<KakaoCallback />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
