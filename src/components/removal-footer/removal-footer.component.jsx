import React from "react";
import { Link } from "react-router-dom";

const RemovalFooter = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      padding: "20px 0",
      background: "black"
    }}
  >
    <Link to="/">Home</Link>
    <Link to="/signui-in">SignIn</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/learner-driver">Learner Driver</Link>
    <Link to="/driving-instructor">Driving Instructor</Link>
    <Link to="/how-it-works-learners">How It Works Learners</Link>
    <Link to="/how-it-works-instructor">How It Works Instructor</Link>
    <Link to="/check-out">Check Out</Link>
    <Link to="/book-your-lession">Book Your Lession</Link>
    <Link to="/privacy-policy">Privacy Policy</Link>
    <Link to="/terms">Terms or use</Link>
  </div>
);

export default RemovalFooter;
