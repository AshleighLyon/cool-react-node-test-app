import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  // Roles is provided in an array - but only 1 is there so 
  // getting the first instance - if there were more would need to loop
  console.log("role is", user["cool-app/roles"][0]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {/* <img src={user.picture} alt={user.name} /> */}
        <h3>Logged in as {user.name}</h3>
        <p>Email address is {user.email}</p>
        <p>User <b>role</b> is {user["cool-app/roles"][0]}</p>
      </div>
    )
  );
};

export default Profile;