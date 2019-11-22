import React from "react";
import { Link } from "react-router-dom";

const RemovalFooter = () => (
  <ul style={{ background: "black" }}>
    <Link to="/" style={{ margin: "5px" }}>
      Home
    </Link>
    <Link to="/signui-in" style={{ margin: "5px" }}>
      SignIn
    </Link>
    <Link to="/blog" style={{ margin: "5px" }}>
      Blog
    </Link>
    <Link to="/learner-driver" style={{ margin: "5px" }}>
      Learner Driver
    </Link>
    <Link to="/driving-instructor" style={{ margin: "5px" }}>
      Driving Instructor
    </Link>
    <Link to="/how-it-works-learners" style={{ margin: "5px" }}>
      How It Works Learners
    </Link>
    <Link to="/how-it-works-instructor" style={{ margin: "5px" }}>
      How It Works Instructor
    </Link>
    <Link to="/check-out" style={{ margin: "5px" }}>
      Check Out
    </Link>
    <Link to="/book-your-lession" style={{ margin: "5px" }}>
      Book Your Lession
    </Link>
    <Link to="/privacy-policy" style={{ margin: "5px" }}>
      Privacy Policy
    </Link>
    <Link to="/terms" style={{ margin: "5px" }}>
      Terms or use
    </Link>
    <Link to="/about-us" style={{ margin: "5px" }}>
      About Us
    </Link>
  </ul>
);

export default RemovalFooter;
