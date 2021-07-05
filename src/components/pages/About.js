import React from "react";

const About = () => {
  return (
    <div
      style={{
        background: "url(images/aboutus.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <h1 style={{ fontSize: "3rem ", color: "orange" }}>About Page</h1>
    </div>
  );
};

export default About;
