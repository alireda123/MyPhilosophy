import axios from "axios";

interface Props {
  users: object[];
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsone = await response.json();

  return {
    props: {
      users: jsone,
    },
  };
};

const Users = ({ users }) => {
  return (
    <div>
      {users.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Users;
