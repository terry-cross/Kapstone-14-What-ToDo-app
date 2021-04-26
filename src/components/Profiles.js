import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProfile } from "../fetchRequests";

const Profiles = () => {
  const [user, setUser] = useState({});
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getProfile(userId).then((data) => setUser(data));
  }, []);
  return (
    <div id="main" style={{ backgroundColor: "black", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space around",
          margin: "180px 0px",
          borderBottom: "1px solid grey ",
          color: "white",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <h4>{user.username}</h4>
          <Link to="/editprofile">
            <p>Edit profile</p>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "115%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h5>Todos Completed:</h5>
              <h5 style={{ position: "relative", top: "76px", right: "105px" }}>
                Todos on List:
                <ul>
                  {user.todos &&
                    user.todos.map((todo) => (
                      <li key={todo.id}>
                        <p>{todo.title}</p>
                      </li>
                    ))}
                </ul>
              </h5>
              <h5
                style={{ position: "relative", top: "156px", right: "185px" }}
              >
                Todos not Completed:
                <ul>
                  {user.todos &&
                    user.todos
                      .filter((todo) => !todo.completed)
                      .map((todo) => (
                        <li key={todo.id}>
                          <p>{todo.title}</p>
                        </li>
                      ))}
                </ul>
              </h5>
            </div>
          </div>
        </div>
        <div>
          <img
            style={{ position: "relative", right: "1100px" }}
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdGl2aXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>
    </div>
  );
};

export default Profiles;
