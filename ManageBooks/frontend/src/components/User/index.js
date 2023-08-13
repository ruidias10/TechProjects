import {
  ContainerUser,
  EmailUser,
  NameUser,
  ButtonView,
  ButtonDelete,
  ImgUser,
  ContainerImage,
} from "./styles";


const User = ({ id, name, email, profile_picture, updateUser, deleteUser, backToUsers, removeUser }) => {

  const isLoggedIn = true;

  function handleUpdateUser(id) {
    updateUser(id)
  }

  function handleDeleteUser(id) {
    deleteUser(id)
  }  

  function handleBackToUsers() {
    backToUsers()
  }

  function handleRemoveUser(id) {
    removeUser(id)
  }

  return (
    <>
      <ContainerUser>
        {profile_picture ? <ContainerImage><ImgUser src={profile_picture} alt="Profile" /></ContainerImage> : ''}

        <NameUser>{name}</NameUser>
        <EmailUser>{email}</EmailUser>
        
        <center>
          {isLoggedIn && (
            <>
              {backToUsers ? <ButtonView type="button" onClick={handleBackToUsers}>Back</ButtonView> : ''}
              {removeUser ? <ButtonDelete type="button" onClick={() => handleRemoveUser(id)}>Confirm to delete</ButtonDelete> : ''}
              {updateUser ? <ButtonView type="button" onClick={() => handleUpdateUser(id)}>Update</ButtonView> : ''}
              {deleteUser ? <ButtonDelete type="button" onClick={() => handleDeleteUser(id)}>Delete</ButtonDelete> : ''}
            </>
          )}
        </center>
      </ContainerUser>
    </>
  );
};

export default User;