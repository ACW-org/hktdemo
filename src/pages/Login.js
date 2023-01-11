import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import React, { useState } from "react";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Circles } from "react-loader-spinner";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [userObject, setUserObject] = useState({});
  const [loading, setLoading] = useState(false);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const proxy = "https://shiny-poetry-28e5.simonlkch.workers.dev/?";
    const url = "https://netsuitemiddleware.azurewebsites.net/api/contact?code=PDo7KwJu15pSQV21VQhoHXzwPbbnPlPRTwgpU_v-HaqKAzFu9H-4Uw%3D%3D";
    setLoading(true);
    await axios
      .get(proxy + url)
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data && res.data.data.length > 0) {
          const { email, contactid, entitytitle, phone, memberid } = res.data.data[0];
          const user = {
            email: email,
            contactid: contactid,
            firstname: entitytitle.split(" ")[0],
            lastname: entitytitle.split(" ")[1],
            phone: phone,
            memberid: memberid,
          };
          setUserObject(user);
          localStorage.setItem("user", JSON.stringify(user));
          setLoading(false);
          setAuth(user);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mx-auto w-full flex flex-col items-center">
      {loading ? (
        <div className="pt-10">
          <Circles height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass />
        </div>
      ) : (
        <form className="form w-full lg:w-[[60%]" style={{ display: "flex", flexDirection: "column" }} onSubmit={handleOnSubmit}>
          <TextField style={{ paddingTop: "1rem", paddingBottom: "1rem" }} id="username" type="text" />
          <TextField style={{ paddingTop: "1rem", paddingBottom: "1rem" }} id="password" type="password" />
          <Button type="submit" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
