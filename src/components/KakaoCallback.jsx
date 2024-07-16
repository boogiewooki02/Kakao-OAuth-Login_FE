import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoCallback = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (code) {
      // 인가 코드(code)를 Django 서버로 전송
      axios
        .post("http://localhost:8000/auth/kakao/register/", {
          access_code: code,
          description: '소개하는글입니다.',
        })
        .then((response) => {
          console.log(response.data);
          const accessCode = response.data.access_code;
          localStorage.setItem("access_code", accessCode);

          // axios
          //   .get("http://localhost:8000/auth/verify/", {
          //     headers: {
          //       Authorization: `Bearer ${accessCode}`,
          //     },
          //   })
          //   .then((response) => {
          //     setUser(response.data);
          //     navigate("/profile");
          //   });
        })
        .catch((error) => {
          console.log("Registration Error: ", error);
        });
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default KakaoCallback;
