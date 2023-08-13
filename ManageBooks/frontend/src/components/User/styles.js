import styled from "styled-components";

export const ButtonView = styled.button`
  background-color: #fdc544;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-family: "Anton", sans-serif;
  font-size: 18px;
  padding: 8px 20px;
  margin: 8px;
  transition: 0.3s;
`;

export const ButtonDelete = styled.button`
  background-color: #FF0000;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-family: "Anton", sans-serif;
  font-size: 18px;
  padding: 8px 20px;
  margin: 8px;
  transition: 0.3s;
`;

export const ContainerUser = styled.div`
  padding: 20px;
  padding-bottom: 10;
  width: 100%;
  border-bottom:1px solid silver;
`;

export const NameUser = styled.h3`
  text-align: center;
  margin-bottom: 0;
`;

export const EmailUser = styled.p`
  text-align: center;
  margin-bottom: 0;
`;


export const ContainerImage = styled.div`
  padding: 20px;
  padding-bottom: 10;
  width: 100%;
  text-align: center;
`;

export const ImgUser = styled.img`
  border:1px solid silver;
`;
