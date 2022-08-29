import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {/* <img src={user.picture} alt={user.name} /> */}
        <h3>Logged in as {user.name}</h3>
        <p>Email address is {user.email}</p>
        <p>User <b>role</b> is {user.app_metadata.role}</p>
      </div>
    )
  );
};

export default Profile;