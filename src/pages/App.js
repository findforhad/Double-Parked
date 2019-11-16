import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./home/home.page";
import SignUp from "./signup/signup.page";
import Blog from "./blog/blog.page";
import IndividualBlog from "./blog/individual-blog/individual-blog.page";
import DrivingInstructor from "./driving-instructor/driving-instructor.page";
import LearnerDriver from "./learner-driver/learner-driver.page";
import HowItWorkInstructor from "./how-it-works/instructor/how-it-work.page";
import HowItWorkLearner from "./how-it-works/learner/how-it-work-learner.page";
import PrivacyPolicy from "./privacy-policy/privacy-policy.page";
import TermsUse from "./terms-use/terms-use.page";

import Booking from "./booking/booking.page";
import CheckoutPage from "./booking/checkout/checkout.page";

import Footer from "../components/footer/footer.component";
import "./default.styles.scss";

import RemovalFooter from "../components/removal-footer/removal-footer.component";

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
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:id" component={IndividualBlog} />
              <Route exact path="/learner-driver" component={LearnerDriver} />
              <Route
                exact
                path="/driving-instructor"
                component={DrivingInstructor}
              />
              <Route
                exact
                path="/how-it-works-learners"
                component={HowItWorkLearner}
              />
              <Route
                exact
                path="/how-it-works-instructor"
                component={HowItWorkInstructor}
              />
              <Route exact path="/check-out" component={CheckoutPage} />
              <Route exact path="/book-your-lession" component={Booking} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route exact path="/terms" component={TermsUse} />
            </Switch>
            <Footer />
            <RemovalFooter />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
