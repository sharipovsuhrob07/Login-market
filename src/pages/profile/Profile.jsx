import React from "react";
import "./Profile.scss";
import { useAuth } from "../../authentication/Authentication";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="container">
      <h1 className="mb-3 text-center">Profile</h1>
      <div className="p-5 w-50 mx-auto">
        <h2 className="mb-3">Username: {user && user.username}</h2>
        <h3 className="mb-5">Password: {user && user.password}</h3>
        <button className="btn btn-outline-dark" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Profile;
