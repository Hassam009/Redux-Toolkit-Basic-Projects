import { useSelector } from "react-redux"
import styled from "styled-components"

const DisplayUser = () => {
    const data = useSelector((state) => {
      return state.user;
    });
  
    return (
      <Wrapper>
        {data && data.map((user, id) => {
          return (
            <li key={id}>
              {user}
            </li>
          );
        })}
      </Wrapper>
    );
  };

const Wrapper = styled.section`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin-bottom: 20px;
`;


export default DisplayUser
