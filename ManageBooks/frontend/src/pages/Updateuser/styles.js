import styled from "styled-components";

export const ContainerUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 16px;
  width:100%;
  text-align:center;
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerInfosUser = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
`;

export const ContainerInputs = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InputEditUser = styled.input`
  color: #000;
  font-size: 16px;
  margin: 4px 0;
  padding: 2px 8px;
  width:250px;
`;

export const InputEditUserDescription = styled.textarea`
  color: #000;
  font-size: 16px;
  margin: 4px 0;
  padding: 2px 8px;
  height: 200px;
`;

export const ContainerButtonAdd = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonAddUser = styled.button`
  background-color: #fdc544;
  color: #fff;
  border-radius: 16px;
  border: none;
  padding: 8px 20px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0px 10px;

  &:hover {
    opacity: 100%;
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
  }
`;

export const ButtonUpdateUser = styled.button`
  background-color: #00b300;
  color: #fff;
  border-radius: 16px;
  border: none;
  padding: 8px 20px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0px 10px;

  &:hover {
    opacity: 100%;
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
  }
`;