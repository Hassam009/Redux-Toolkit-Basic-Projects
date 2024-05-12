import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { removeUser } from "../Store/Slices/UserSlice";

const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  }

  return (
    <Wrapper>
      {data && data.map((user, id) => (
        <li key={id}>
          {user}
          <button className="btn-delete" onClick={() => deleteUser(id)}>
            <MdDeleteForever className="delete-icon" />
          </button>
        </li>
      ))}
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export default DisplayUser;
