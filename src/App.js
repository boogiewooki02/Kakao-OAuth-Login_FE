import { Routes, Route } from 'react-router-dom'
import KakaoLoginButton from './components/KakaoLogin';
import KakaoCallback from './components/KakaoCallback';
import { useState } from 'react';
import Profile from './components/Profile';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <h1>Kakao OAuth Login</h1>
        <Routes>
          <Route path="/" element={<KakaoLoginButton />} />
          <Route path="/auth/kakao" element={<KakaoCallback setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
    </div>
  );
}

export default App;
