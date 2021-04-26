import React, { useState, useEffect } from "react";

const sampleUsers = ["Brandon", "Jared", "Terry", "dawit"];
function Users() {
  const [user, setUser] = useState(sampleUsers);
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          className="test"
          placeholder="Search for users"
          onChange={(e) => {
            const test = user.filter((user) => {
              return user.toLowerCase().includes(e.target.value.toLowerCase());
            });
            console.log(test);
            setRes(test);
            if (e.target.value === "") setRes([]);
          }}
        />
      </form>
      <div>
        {user.map((sampleUsers) => {
          <p>{setUser}</p>;
        })}
      </div>
    </div>
  );
}

export default Users;
