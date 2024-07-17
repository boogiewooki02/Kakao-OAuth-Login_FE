import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const url = new URL(window.location.href);
      const code = url.searchParams.get("code");

      if (code) {
        try {
          // 인가 코드(code)를 Django 서버로 전송
          const response = await axios.post(
            "http://localhost:8000/auth/kakao/login",
            { access_code: code }
          );

          if (response.status === 200) {
            console.log(response.data);
            const accessToken = response.data.access_token;
            const refreshToken = response.data.refresh_token;
            localStorage.setItem("access_token", accessToken);
            localStorage.setItem("refresh_token", refreshToken);
            navigate("/profile");
          }
        } catch (error) {
          console.error("Login Error: ", error);
          // 존재하지 않는 사용자 경우 회원가입 진행
          if (error.response && error.response.status === 404) {
            try {
              const response = await axios.post(
                "http://localhost:8000/auth/kakao/register",
                {
                  access_code: code,
                  description: "",
                }
              );

              if (response.status === 200) {
                console.log(response.data);
                const accessToken = response.data.access_token;
                const refreshToken = response.data.refresh_token;
                localStorage.setItem("access_token", accessToken);
                localStorage.setItem("refresh_token", refreshToken);
                navigate("/profile");
              }
            } catch (registerError) {
              console.error("Registration Error: ", registerError);
            }
          } else {
            console.error("Unexpected Error: ", error);
            alert("사용자 인증이 실패하였습니다.");
          }
        }
      }
    };

    fetchData();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default KakaoCallback;
