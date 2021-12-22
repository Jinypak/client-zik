import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginModal from "../components/LoginModal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -1px;
  margin-bottom: 15px;
  background-color: #ccc;
`;

const UserInfo = styled.div``;
const KidsImage = styled.img`
  width: 80%;
  border-radius: 9999px;
  margin-top: 5px;
  margin-bottom: -10px;
`;

const KidTabBox = styled.div`
  display: flex;
`;

const KidTab = styled.div`
  background-color: #fff;
  width: 20%;
  height: 100px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center center;
`;
const UserDetail = styled.div`
  position: relative;
  background-color: #fff;
  margin-top: -1px;
  padding: 15px;
`;

const LastTest = styled.div`
  position: absolute;
  top: 15%;
  right: 5%;
`;

const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoTestBtn = styled(Link)`
  margin: 0 auto;
  padding: 10px 22%;
  border-radius: 9999px;
  text-align: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: blue;
  }
`;

function Home({ loginCheck, appIndex, setAppIndex }) {
  return (
    <div>
      <Container>
        {loginCheck === false ? (
          <UserInfo>
            <KidTabBox>
              <KidTab>
                <KidsImage
                  src="https://avatars.githubusercontent.com/u/79570234?v=4"
                  alt=""
                />
                <p>김인호</p>
              </KidTab>
            </KidTabBox>
            <UserDetail>
              <p>Login을 해주세요</p>
              <Link to="/login">로그인</Link>
            </UserDetail>
          </UserInfo>
        ) : (
          <UserInfo>
            <KidTabBox>
              <KidTab>
                <KidsImage
                  src="https://avatars.githubusercontent.com/u/79570234?v=4"
                  alt=""
                />
                <p>박인호</p>
              </KidTab>
              <KidTab>
                <KidsImage
                  src="https://avatars.githubusercontent.com/u/79570234?v=4"
                  alt=""
                />
                <p>박인호</p>
              </KidTab>
              <KidTab>
                <KidsImage
                  src="https://avatars.githubusercontent.com/u/79570234?v=4"
                  alt=""
                />
                <p>박인호</p>
              </KidTab>
            </KidTabBox>
            <UserDetail>
              <p>
                <h3>이미주님</h3> 안녕하세요!
              </p>
              <p>박인호 | </p>
              <p>이미주 님 | 양육자 | 33세 | 거주지 입력</p>
              <LastTest>최근 검사 후 121일 경과</LastTest>
            </UserDetail>
          </UserInfo>
        )}

        <HomeInfo>
          <Link to="/login">
            로그인
          </Link>
          <GoTestBtn to="/test">발달 테스트 하러가기</GoTestBtn>
        </HomeInfo>

        {/* <LoginModal></LoginModal> */}
      </Container>
    </div>
  );
}

export default Home;
