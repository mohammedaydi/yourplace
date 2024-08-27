import React, { useEffect, useState } from "react";
import UsersList from "../components/UsersList";
const API_URL = "http://localhost:5000/api/users";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();

      setUsers(data.users);
    };
    getUsers();
  }, []);
  return <UsersList items={users} />;
};

export default Users;
