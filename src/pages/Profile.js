import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-around">
        <div>First Name</div>
        <div>{user?.firstname ? user.firstname : ""}</div>
      </div>

      <div className="flex flex-row justify-around">
        <div>Last Name</div>
        <div>{user?.lastname ? user.lastname : ""}</div>
      </div>

      <div className="flex flex-row justify-around">
        <div>Emali</div>
        <div>{user?.email ? user.email : ""}</div>
      </div>

      <div className="flex flex-row justify-around">
        <div>Phone</div>
        <div>{user?.phone ? user.phone : ""}</div>
      </div>
    </div>
  );
};

export default Profile;
