import React, { useState, useEffect } from "react";
import { getAllUsers } from "../fetchRequests";

function Users() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);

  useEffect(() => {
    getAllUsers().then((data) => (setUser(data), setRes(data)));
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (e.target.value !== "") {
      let test = user.filter((users) => {
        return (
          users.username.toLowerCase().includes(search.toLowerCase()) ||
          users.firstName.toLowerCase().includes(search.toLowerCase()) ||
          users.lastName.toLowerCase().includes(search.toLowerCase())
        );
      });
      setRes(test);
    }
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          className="test"
          placeholder="Search for users"
          onChange={(e) => handleInput(e)}
          value={search}
        />
      </form>
      <ul>
        {res.map((users) => {
          return (
            <li key={users.id}>
              <p>{users.username}</p>
              <p>
                {users.firstName} {users.lastName}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
