import React from "react";
import { Link } from "react-router-dom";

import "./navigation.styles.scss";
import Logo from "./logo_invert.svg";

class Navigation extends React.Component {
  state = {
    toggle: false
  };

  handleToggle = e => this.setState({ toggle: !this.state.toggle });

  render() {
    return (
      <div className="navigation__wrapper">
        <nav>
          <input type="checkbox" id="check" />

          {this.state.toggle ? (
            <label
              htmlFor="check"
              className="checkbtn"
              onClick={this.handleToggle}
            >
              &#10005;
            </label>
          ) : (
            <label
              htmlFor="check"
              className="checkbtn"
              onClick={this.handleToggle}
            >
              &#9776;
            </label>
          )}

          <label className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </label>
          <ul>
            <li>
              <Link to="/how-it-works-instructor">How it works</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/driving-instructor">Driving Instructor</Link>
            </li>
            <li>
              <Link to="/check-out">Checkout</Link>
            </li>

            <li>
              <Link to="/signui-in" className="signin__btn">
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
