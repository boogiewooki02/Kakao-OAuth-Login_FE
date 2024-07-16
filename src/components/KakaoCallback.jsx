import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const KakaoCallback =() => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');

    if (code) {
      // 인가 코드(code)를 Django 서버로 전송
      axios.post('http://localhost:8000/auth/kakao/login/', {
        code: code,
      })
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => {
        console.log("Error: ", error);
      }) 
    }
  }, [navigate]);

  return (
    <div>Loading...</div>
  )
}

export default KakaoCallback;