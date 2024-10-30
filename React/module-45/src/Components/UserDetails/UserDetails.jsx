import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  const navigate = useNavigate();
  const navigation = useNavigation();
  console.log(navigation);
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Details about user : {name}</h2>
      <p>Website : {website}</p>
      {navigation.state === "loading" ? <p>Loading...</p> : <p>Done</p>}
      <button onClick={handleBack}>Go back</button>
    </div>
  );
};

export default UserDetails;
