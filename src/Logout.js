import React from "react";
import './index.css';
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="button" onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};