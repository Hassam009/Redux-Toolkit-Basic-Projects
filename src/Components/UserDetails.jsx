import DeleteAllUser from "./DeleteAllUser";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/Slices/UserSlice";
import DisplayUser from "./DisplayUser";

// Array of sample names
const names = [
  "John Smith",
  "Emma Johnson",
  "Michael Brown",
  "Sophia Miller",
  "William Wilson",
  "Olivia Jones",
  "James Davis",
  "Isabella Taylor",
  "Benjamin Martinez",
  "Amelia Thomas"
];

// Function to generate random fake user data
const FakeUserData = () => {
  // Get a random index from the names array
  const randomIndex = Math.floor(Math.random() * names.length);
  // Return the name at the random index
  return names[randomIndex];
};

const UserDetails = () => {
  const dispatch = useDispatch();

  const AddUserButton = () => {
    const handleAddUser = () => {
      const userData = FakeUserData(); // Generate fake user data
      dispatch(addUser(userData)); // Dispatch the user data to the Redux store
    };

    return (
      <button className="btn add-btn" onClick={handleAddUser}>
        Add User
      </button>
    );
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details </div>
          <AddUserButton />
        </div>
        <ul>
          <DisplayUser />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }

  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
