import React from "react";

function UserProfile() {
  const name = "Alex Rivera";
  const bio = "Frontend developer, coffee enthusiast, and avid traveler.";
  const profileImage = "https://images.unsplash.com/photo-1770126548552-c35de444a1c5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid #ddd",
    borderRadius: "12px",
    padding: "20px",
    maxWidth: "300px",
    margin: "20px auto",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  };

  const imageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "15px"
  };

  const nameStyle = {
    fontSize: "1.5rem",
    marginBottom: "10px"
  };

  const bioStyle = {
    fontSize: "1rem",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <img src={profileImage} alt={name} style={imageStyle} />
      <h1 style={nameStyle}>{name}</h1>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
}

export default UserProfile;