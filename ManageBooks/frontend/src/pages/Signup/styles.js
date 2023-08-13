import styled from "styled-components";

export const ContainerSignup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
`;

export const InputSignup = styled.input`
  color: #000;
  font-size: 16px;
  margin: 4px 0;
  padding: 2px 8px;
`;

export const TitleSignup = styled.h1`
  color: #000;
  font-size: 16px;
  width:100%;
  text-align:center;
`;

export const ButtonSubmitSignup = styled.button`
  background-color: #fdc544;
  color: #fff;
  border-radius: 16px;
  border: none;
  padding: 8px 20px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    opacity: 100%;
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
  }
`;
