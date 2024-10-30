import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const style = {
    padding: "10px",
    border: "2px solid red",
    borderRadius: "16px",
  };
  const { name, email, phone, id } = user;
  const navigate = useNavigate();
  const handleShow = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div style={style}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <Link to={`/user/${id}`}>Show details</Link>
      <button onClick={handleShow}>Show</button>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
