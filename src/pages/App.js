import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./home/home.page";
import SignUp from "./signup/signup.page";
import HowItWork from "./how-it-work/how-it-work.page";
import Blog from "./blog/blog.page";
import IndividualBlog from "./blog/individual-blog/individual-blog.page";
import DrivingInstructor from "./driving-instructor/driving-instructor.page";

import Footer from "../components/footer/footer.component";
import "./default.styles.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Helmet
            titleTemplate="Double Parked | Book Driving Lesson"
            defaultTitle="Double Parked"
          >
            <meta charSet="utf-8" />
            <meta
              name="description"
              content="Book a driving lesson in 2 minutes!"
            />
            <meta
              name="keyword"
              content={`Book a driving lesson in 2 minutes!, Double Parked`}
            />
          </Helmet>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signui-in" component={SignUp} />
              <Route exact path="/how-it-works" component={HowItWork} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:id" component={IndividualBlog} />
              <Route
                exact
                path="/driving-instructor"
                component={DrivingInstructor}
              />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
