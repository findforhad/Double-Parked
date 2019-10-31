import React from "react";
import { Row, Col } from "react-bootstrap";
import SearchIcon from "./search.png";
import LocationIcon from "./location.png";
import "./search.styles.scss";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      postCode: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    const { postCode } = this.state;
    e.preventDefault();

    if (postCode === "" || postCode.length < 2) {
      return this.setState({ postCode: "" });
    }

    console.log(this.state);
  };

  render() {
    return (
      <Row>
        <Col md={7} sm={12}>
          <div className="search-container">
            <h1>Book a driving lesson in 2 minutes!</h1>
            <p>Search, Book & Pay Online </p>
            <form onSubmit={this.handleSubmit}>
              <div className="search__wrapper">
                <div className="search__logo">
                  <img src={LocationIcon} alt="LocationIcon" />
                  <input
                    placeholder="Enter postcode..."
                    onChange={this.handleChange}
                    value={this.state.postCode}
                    name="postCode"
                    type="text"
                  />
                </div>
                <button type="submit">
                  <img src={SearchIcon} alt="SearchIcon" />
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Search;
