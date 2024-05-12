import styled from "styled-components"
import { deleteUser } from "../Store/Slices/UserSlice" // Rename imported action
import { useDispatch } from "react-redux"

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearUsers = () => { // Rename the function
    dispatch(deleteUser()); // Dispatch the deleteUser action
  }

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={clearUsers}>Clear User</button>
    </Wrapper>  
  );
}

const Wrapper = styled.section`
  .clear-btn{
    text-transform:capitalize;
    background-color:#db338a;
    margin-top:3rem;
  }
`;

export default DeleteAllUser;
