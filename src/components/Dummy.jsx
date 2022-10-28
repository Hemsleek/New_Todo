import React, { useState } from "react";
import axios from "axios";

const baseUrl = "https://dummyapi.io/data/v1";

const Dummy = () => {
  const [users, setUsers] = useState([]);

  const loadDummyData = async (e) => {
    // then and catch

    // axios({
    //   method: "get",
    //   url: `${baseUrl}/user?limit=20`,
    //   headers: {
    //     "app-id": "635be87cc11e12f6087fe861",
    //   },
    //
    // })
    //   .then((res) => {
    //     console.log(res.data.data);
    //     setUsers(res.data.data);
    //   })
    //   .catch((err) => console.log(err));
    try {
      const { data } = await axios({
        url: `${baseUrl}/user?limit=20`,
        headers: {
          "app-id": "635be87cc11e12f6087fe861",
        },
      });
      console.log(data.data);
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={loadDummyData}>Load Dummy Data</button>
      <div>
        <h2>USERS</h2>
        {users.map((user, userIndex) => (
          <div key={userIndex}>{`${user.firstName} ${user.lastName}`}</div>
        ))}
      </div>
    </div>
  );
};

export default Dummy;
