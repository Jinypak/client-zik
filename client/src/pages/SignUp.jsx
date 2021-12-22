import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

const Container = styled.div`
  position: sticky;
  top: 10;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: #fff;

  img {
    width: 100%;
  }
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  .radio-buttons {
    position: absolute;
    right: 10%;
    display: flex;
    align-items: center;
    text-align: center;
  }
  input {
    border: none;
    width: 70%;
    padding-top: 20px;
    border-bottom: 1px solid #000;
  }

  input:focus {
    outline: none;
  }

  input[name="name"] {
    width: 50%;
  }
  input[name="email"] {
  }
  input[name="pwd"] {
  }
  input[name="phone"] {
  }
  input[name="post"] {
  }

  .allow {
  }
`;

const SignUpBtn = styled.button`
  margin: 20px 20% 5px;
  width: 60%;
  padding: 5px;
  border-radius: 20px;
  background-color: #289ca4;
  color: #fff;
`;

const UserLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleLink = styled(Link)`
  padding-bottom: 20px;
`;

export default function SignUp() {
  const [post, setPost] = useState(false);
  const postCodeStyle = {
    display: "block",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "100",
    height: "100%",
    padding: "0",
  };

  return (
    <Container>
      <img src="/img/signImage.png" alt="" />
      <FormBox>
        <FormSection>
          <label>이름 *</label>
          <input type="text" name="name" />
          <div class="radio-buttons">
            <label>
              남<input type="radio" name="optradio" />
            </label>
            <label>
              여<input type="radio" name="optradio" />
            </label>
          </div>
        </FormSection>
        <FormSection>
          <label>이메일 *</label>
          <input type="text" name="email" placeholder="user@email.com" />
        </FormSection>
        <FormSection>
          <label>비밀번호 *</label>
          <input
            type="text"
            name="pwd"
            placeholder="영문, 숫자포함 8 ~ 16자리 사이"
          />
        </FormSection>
        <FormSection>
          <label>비밀번호 확인 *</label>
          <input type="text" name="confirmPwd" />
        </FormSection>
        <FormSection>
          <label>휴대폰번호 *</label>
          <input type="text" name="phone" placeholder="- 없이 입력" />
          <button
            style={{
              position: "absolute",
              width: "80px",
              height: "50px",
              top: "25%",
              right: "5%",
              bottom: "10%",
              backgroundColor: "#fff",
              border: "1px solid #289CA4",
              borderRadius: "30px",
            }}
          >
            인증하기
          </button>
        </FormSection>
        <FormSection>
          <label>주소 *</label>
          <input type="text" name="post" />
          <button
            style={{
              position: "absolute",
              width: "80px",
              height: "50px",
              top: "25%",
              right: "5%",
              bottom: "10%",
              backgroundColor: "#fff",
              border: "1px solid #289CA4",
              borderRadius: "30px",
            }}
            onClick={() => setPost(true)}
          >
            주소 검색
          </button>
          {post === true ? (
            <DaumPostcode
              onComplete={() => {
                setPost(false);
              }}
              style={postCodeStyle}
            />
          ) : (
            <></>
          )}
        </FormSection>
      </FormBox>
      <div
        style={{
          width: "95%",
          margin: "10px auto",
          borderBottom: "1px solid #000",
        }}
      ></div>
      <input type="radio" style={{ marginLeft: "20%", marginTop: "5%" }} />{" "}
      [필수] 개인정보 수집, 이용 동의
      <SignUpBtn>회원가입</SignUpBtn>
      <UserLink>
        <p>이미 줌인키즈 계정이 있으신가요?</p>
        <StyleLink to="/login" style={{ color: "#289CA4" }}>
          로그인하기
        </StyleLink>
      </UserLink>
    </Container>
  );
}
