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
    <div className="flex items-center mx-auto w-full px-6 py-4 mt-6 justify-center bg-white shadow-md sm:max-w-md sm:rounded-lg">
      <form className="w-full">
        <div>
          <label htmlFor="firstname" className=" text-sm font-medium text-gray-700 undefined">
            First Name
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              defaultValue={user?.firstname ? user.firstname : ""}
              name="firstname"
              className=" w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="lastname" className=" text-sm font-medium text-gray-700 undefined">
            Last Name
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              defaultValue={user?.lastname ? user.lastname : ""}
              name="lastname"
              className=" w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className=" text-sm font-medium text-gray-700 undefined">
            Email
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              defaultValue={user?.email ? user.email : ""}
              name="email"
              className=" w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="phone" className=" text-sm font-medium text-gray-700 undefined">
            Phone
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              defaultValue={user?.phone ? user.phone : ""}
              name="phone"
              className=" w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
