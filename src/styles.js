import styled from "styled-components";
import MainBackground from "./assets/main-background.svg";

export const Container = styled.div`
  background: url("${MainBackground}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 414px;
  height: 100vh;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px 0 36px;
`;

export const H1 = styled.h1`
  margin-bottom: 81px;
  color: #ffffff;
  font-size: 34px;
  line-height: 40px;
`;

export const InputLabel = styled.p`
  align-self: flex-start;
  color: #eeeeee;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-left: 25px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  margin-bottom: 34px;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  padding: 0 0 0 25px;
  color: #ffffff;
  outline: none;
`;

export const Button = styled.button`
  margin: 132px 0 0 0;
  width: 342px;
  height: 74px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  color: #ffffff;
  font-size: 17px;
  line-height: 28px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  gap: 52px;
  align-items: center;
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline:none;
  margin: 28px;
  list-style: none;

  p{
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
  }

  button{
    background: none;
    border:none;
    cursor:pointer;

  }
  
`;
