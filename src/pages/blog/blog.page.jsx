import React from "react";
import { Container, Row } from "react-bootstrap";
import blogs from "../../utils/blog.data";

import Header from "../../components/header/header.component";
import BlogCard from "../../components/blog-card/blog-card.component";

import "./blog.styles.scss";

const Blog = () => (
  <div className="blog__container">
    <Header pageTitle="Latest News" />
    <div className="blog__items_wrapper">
      <Container>
        <Row>
          {blogs.map(blog => (
            <BlogCard {...blog} key={blog.id} />
          ))}
        </Row>
      </Container>
    </div>
  </div>
);

export default Blog;
