import { Routes, Route } from 'react-router-dom'
import KakaoLoginButton from './components/KakaoLogin';
import KakaoCallback from './components/KakaoCallback';


function App() {
  return (
    <div className="App">
      <h1>Kakao OAuth Login</h1>
        <Routes>
          <Route path="/" element={<KakaoLoginButton />} />
          <Route path="/auth/kakao" element={<KakaoCallback />} />
        </Routes>
    </div>
  );
}

export default App;
