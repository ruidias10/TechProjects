import styled from "styled-components";

export const ButtonDeleteBook = styled.button`
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

export const ButtonUpdateBook = styled.button`
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

export const ContainerBook = styled.div`
  padding: 20px;
  padding-bottom: 0;
  width: fit-content;
`;


export const ContainerBookImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const ImageBook = styled.img`
  margin: 8px;
  max-width: 60%;
  width: 300px;
  height: 225px;
`;

export const ButtonBack = styled.button`
  background-color: #fff;
  color: blue;
  border: none;
  padding: 8px 20px;
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    opacity: 100%;
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
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

export const TitleBook = styled.p`
  text-align: center;
  margin-bottom: 0;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;