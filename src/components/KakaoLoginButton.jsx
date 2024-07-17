import icon from "./카카오로그인.png"

const KakaoLoginButton = () => {
  const Rest_api_key = process.env.REACT_APP_KAKAO_API_KEY; //REST API KEY
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI; // Redirect URI

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${Rest_api_key}&redirect_uri=${redirect_uri}`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  }

  return (
    <>
      <img src={icon} alt="카카오 로그인" onClick={handleLogin} />
    </>
  )
};

export default KakaoLoginButton;