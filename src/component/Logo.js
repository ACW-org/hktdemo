import React from "react";
import { useNavigate } from "react-router-dom";
const LogoImg = ({ src, bgColor }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/")} className={`bg-${bgColor} flex md:w-[250px] lg:w-[250px]`}>
        <img className="object-fill cursor:pointer" src={src} />
      </div>
    </div>
  );
};

export default LogoImg;
