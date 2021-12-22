import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginModal from "../components/LoginModal";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;

  img {
    width: 100%;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  input {
    border: none;
    border-bottom: 1px solid #000;
    margin: 10px 0;
  }
`;

const LoginInput = styled.input`
  width: 80%;
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .line {
    height: 0.5px;
    width: 70%;
    background-color: lightgray;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
  }

  .or {
    border: 2px solid lightgray;
    border-radius: 50%;
    padding: 10px;
    color: gray;
    background-color: white;
    font-weight: bold;
  }
`;
const SocialLogin = styled.div`
  display: flex;
  padding: 20px;
  button {
    color: #fff;
    margin: 0 auto;
    width: 15vw;
    height: 15vw;
  }

  .facebook {
    background-image: url("./img/facebook.png");
    border: none;
    background-color: #fff;
  }

  .google {
    background-image: url("./img/google.png");
    border: none;
    background-color: #fff;
  }

  .naver {
    background-image: url("./img/naver.png");
    border: none;
    background-color: #fff;
  }

  .kakao {
    background-image: url("./img/kakaotalk.png");
    border: none;
    background-color: #fff;
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  padding: 10px 40px;
  width: 80%;
  text-align: center;
  margin: 10px;
  border: none;
  border-radius: 30px;
  background-color: #289ca4;
  color: #fff;
`;

const RegiLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpBtn = styled(Link)`
    color: #289CA4;
    font-weight: bold;
`

function Login({ loginCheck, setLoginCheck }) {
  const naver = () => {
    window.open("http://localhost:3000/auth/naver", "_self");
  };
  const google = () => {
    window.open("http://localhost:3000/auth/google", "_self");
  };
  const kakao = () => {
    window.open("http://localhost:3000/auth/kakao", "_self");
  };
  const facebook = () => {
    window.open("http://localhost:3000/auth/facebook", "_self");
  };

  return (
    <Container>
      {loginCheck === false ? (
        <LoginModal></LoginModal>
      ) : (
        <>
          <img src="./img/loginImage.png" alt="" />
          <LoginForm>
            <LoginInput type="text" placeholder="user@email.com" />
            <LoginInput type="text" placeholder="password" />
            <StyleLink to="/home" onClick={() => setLoginCheck(true)}>
              로그인
            </StyleLink>
          </LoginForm>
          <Line>
            <div className="line"></div>
            <div className="or">또는</div>
          </Line>
          <SocialLogin>
            <button className="naver" onClick={naver}></button>
            <button className="google" onClick={google}></button>
            <button className="kakao" onClick={kakao}></button>
            <button className="facebook" onClick={facebook}></button>
          </SocialLogin>
          <RegiLinkBox>
            <p>줌인키즈 계정이 없으신가요?</p>
            <SignUpBtn to="/signup">계정 만들기</SignUpBtn>
          </RegiLinkBox>
        </>
      )}
    </Container>
  );
}

export default Login;
