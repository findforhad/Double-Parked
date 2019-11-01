import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

import "./blog-card.styles.scss";

const BlogCard = ({ title, id, body, author, published, image }) => (
  <Col md={4}>
    <div className="blog__card__wrapper">
      <img alt="blog" src={image} className="img-fluid" />
      <div className="text__wrapper">
        <h6>
          <Link to={`/blog/${id}`}>{title}</Link>
        </h6>
        <p>{body}</p>
        <div className="author__info">
          <small>{author}</small>
          <small>{published}</small>
        </div>
      </div>
    </div>
  </Col>
);

export default BlogCard;
