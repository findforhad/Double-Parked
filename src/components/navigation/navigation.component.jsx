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
          {this.state.toggle ? (
            <input type="checkbox" id="check" checked />
          ) : (
            <input type="checkbox" id="check" />
          )}

          <button
            className={
              this.state.toggle
                ? "hamburger hamburger--collapse is-active checkbtn"
                : "hamburger checkbtn"
            }
            type="button"
            onClick={this.handleToggle}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <label className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </label>

          {this.state.toggle ? (
            <ul>
              {this.state.toggle ? (
                <li>
                  <label className="logo">
                    <Link to="/">
                      <img src={Logo} alt="Logo" className="img-fluid" />
                    </Link>
                  </label>
                </li>
              ) : null}

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
                <Link
                  to="/signui-in"
                  className={this.state.toggle ? "" : "signin__btn"}
                >
                  Sign in
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/how-it-works-instructor">How it works</Link>
              </li>
              <li>
                <Link
                  to="/signui-in"
                  className={this.state.toggle ? "" : "signin__btn"}
                >
                  Sign in
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    );
  }
}

export default Navigation;
