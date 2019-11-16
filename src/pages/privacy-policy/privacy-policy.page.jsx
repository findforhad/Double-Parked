import React from "react";
import { Container, Table } from "react-bootstrap";

import Header from "../../components/header/header.component";

import "./privacy-policy.styles.scss";
const PrivacyPolicy = () => (
  <div className="privacy__policy">
    <Header pageTitle="Privacy Policy" />
    <div className="wrapper">
      <Container>
        <div className="text__layer">
          <h3>Privacy Policy</h3>
          <p>
            This privacy policy is for this website doubleparked.co.uk and
            served by prontoetech services ltd and governs the privacy of its
            users who choose to use it. The policy sets out the different areas
            where user privacy is concerned and outlines the obligations &
            requirements of the users, the website and website owners.
            Furthermore the way this website processes, stores and protects user
            data and information will also be detailed within this policy.
          </p>
        </div>

        <div className="text__layer">
          <h3>The Website</h3>
          <p>
            This website and its owners take a proactive approach to user
            privacy and ensure the necessary steps are taken to protect the
            privacy of its users throughout their visiting experience. This
            website complies to all UK national laws and requirements for user
            privacy.
          </p>
        </div>

        <div className="text__layer">
          <h3>Cookie Policy</h3>
          <p>
            This website uses cookies to better the users experience while
            visiting the website. Where applicable this website uses a cookie
            control system allowing the user on their first visit to the website
            to allow or disallow the use of cookies on their computer / device.
            This complies with recent legislation requirements for websites to
            obtain explicit consent from users before leaving behind or reading
            files such as cookies on a user’s computer / device.
          </p>
        </div>

        <div className="ggl__anal">
          <h5>
            The cookies in use to deliver Google Analytics service are described
            in the table below.
          </h5>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>__utma</td>
                <td>Google Analytics</td>
                <td>
                  These cookies are used to store information, such as what time
                  your current visit occurred, whether you have been to the site
                  before, and what site referred you to the web page. These
                  cookies contain no personally identifiable information but
                  they will use your computer’s IP address to know from where in
                  the world you are accessing the Internet.
                </td>
              </tr>
              <tr>
                <td>__utmb</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>__utmc</td>
                <td></td>
                <td>
                  Google stores the information collected by these cookies on
                  servers in the United States. Google may transfer this
                  information to third-parties where required to do so by law,
                  or where such third-parties process the information on
                  Google’s behalf.
                </td>
              </tr>
              <tr>
                <td>__utmv</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>__utmz</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="text__layer">
          <h3>Opt-out</h3>
          <p>
            In order to provide website visitors with more choice on how data is
            collected by Google Analytics, Google has developed the Google
            Analytics Opt-out Browser Add-on. The add-on communicates with the
            Google Analytics JavaScript (ga.js) to stop data being sent to
            Google Analytics. The Google Analytics Opt-out Browser Add-on does
            not affect usage of the website in any other way. A link to further
            information on the Google Analytics Opt-out Browser Add-on is
            provided below for your convenience.
          </p>
          <a href="http://tools.google.com/dlpage/gaoptout?hl=None">
            http://tools.google.com/dlpage/gaoptout?hl=None
          </a>
          <br />
          <p className="mt-3">
            For more information on the usage of cookies by Google Analytics
            please see the Google website. A link to the privacy advice for this
            product is provided below for your convenience.
          </p>
          <a href="http://www.google.com/analytics/learn/privacy.html">
            http://www.google.com/analytics/learn/privacy.html
          </a>
        </div>

        <div className="text__layer">
          <h3>Disabling Cookies</h3>
          <p>
            If you would like to restrict the use of cookies you can control
            this in your Internet browser. Links to advice on how to do this for
            the most popular Internet browsers are provided below for
            convenience and will be available for the Internet browser of your
            choice either online or via the software help (normally available
            via key F1).
          </p>

          <ul>
            <li>
              <a href="http://windows.microsoft.com/en-GB/windows7/Block-enable-or-allow-cookies">
                <h6>Internet Explorer</h6>
              </a>
            </li>
            <li>
              <a href="https://support.google.com/chrome/bin/answer.py?hl=en-GB&answer=95647&p=cpn_cookies">
                <h6>Google Chrome</h6>
              </a>
            </li>
            <li>
              <a href="http://support.mozilla.org/en-US/kb/Blocking%20cookies">
                <h6>Mozilla Firefox</h6>
              </a>
            </li>
            <li>
              <a href="http://docs.info.apple.com/article.html?artnum=32467">
                <h6>Apple Safari</h6>
              </a>
            </li>
          </ul>
        </div>

        <div className="text__layer">
          <h3>Contact & Communication</h3>
          <p>
            Users contacting this website and/or its owners do so at their own
            discretion and provide any such personal details requested at their
            own risk. Your personal information is kept private and stored
            securely until a time it is no longer required or has no use, as
            detailed in the Data Protection Act 1998. Every effort has been made
            to ensure a safe and secure form to email submission process but
            advise users using such form to email processes that they do so at
            their own risk.
          </p>
          <p className="pt-2">
            This website and its owners use any information submitted to provide
            you with further information about the products / services they
            offer or to assist you in answering any questions or queries you may
            have submitted. This includes using your details to subscribe you to
            any email newsletter program the website operates but only if this
            was made clear to you and your express permission was granted when
            submitting any form to email process. Or whereby you the consumer
            have previously purchased from or enquired about purchasing from the
            company a product or service that the email newsletter relates to.
            This is by no means an entire list of your user rights in regard to
            receiving email marketing material. Your details are not passed on
            to any third parties.
          </p>
        </div>

        <div className="text__layer">
          <h3>Email Newsletter</h3>
          <p>
            This website operates an email newsletter program, used to inform
            subscribers about products and services supplied by this website.
            Users can subscribe through an online automated process should they
            wish to do so but do so at their own discretion. Some subscriptions
            may be manually processed through prior written agreement with the
            user.
          </p>
          <p className="pt-2">
            Subscriptions are taken in compliance with UK Spam Laws detailed in
            the Privacy and Electronic Communications Regulations 2003. All
            personal details relating to subscriptions are held securely and in
            accordance with the Data Protection Act 1998. No personal details
            are passed on to third parties nor shared with companies / people
            outside of the company that operates this website. Under the Data
            Protection Act 1998 you may request a copy of personal information
            held about you by this website’s email newsletter program. A small
            fee will be payable. If you would like a copy of the information
            held on you please write to the business address at the bottom of
            this policy.
          </p>
          <p className="pt-2">
            Email marketing campaigns published by this website or its owners
            may contain tracking facilities within the actual email. Subscriber
            activity is tracked and stored in a database for future analysis and
            evaluation. Such tracked activity may include; the opening of
            emails, forwarding of emails, the clicking of links within the email
            content, times, dates and frequency of activity [this is by no far a
            comprehensive list].
          </p>
          <p className="pt-2">
            This information is used to refine future email campaigns and supply
            the user with more relevant content based around their activity.
          </p>
          <p className="pt-2">
            In compliance with UK Spam Laws and the Privacy and Electronic
            Communications Regulations 2003 subscribers are given the
            opportunity to un-subscribe at any time through an automated system.
            This process is detailed at the footer of each email campaign. If an
            automated un-subscription system is unavailable clear instructions
            on how to un-subscribe will by detailed instead.
          </p>
        </div>

        <div className="text__layer">
          <h3>External Links</h3>
          <p>
            Although this website only looks to include quality, safe and
            relevant external links, users are advised adopt a policy of caution
            before clicking any external web links mentioned throughout this
            website. (External links are clickable text / banner / image links
            to other websites <br />
            The owners of this website cannot guarantee or verify the contents
            of any externally linked website despite their best efforts. Users
            should therefore note they click on external links at their own risk
            and this website and its owners cannot be held liable for any
            damages or implications caused by visiting any external links
            mentioned.
          </p>
        </div>
        <div className="text__layer">
          <h3>Social Media Platforms</h3>
          <p>
            Communication, engagement and actions taken through external social
            media platforms that this website and its owners participate on are
            custom to the terms and conditions as well as the privacy policies
            held with each social media platform respectively.
          </p>
          <p className="pt-2">
            Users are advised to use social media platforms wisely and
            communicate / engage upon them with due care and caution in regard
            to their own privacy and personal details. This website nor its
            owners will ever ask for personal or sensitive information through
            social media platforms and encourage users wishing to discuss
            sensitive details to contact them through primary communication
            channels such as by telephone or email.
          </p>
          <p className="pt-2">
            This website may use social sharing buttons which help share web
            content directly from web pages to the social media platform in
            question. Users are advised before using such social sharing buttons
            that they do so at their own discretion and note that the social
            media platform may track and save your request to share a web page
            respectively through your social media platform account.
          </p>
        </div>

        <div className="text__layer">
          <h3>Shortened Links in Social Media</h3>
          <p>
            This website and its owners through their social media platform
            accounts may share web links to relevant web pages. By default some
            social media platforms shorten lengthy urls [web addresses] (this is
            an example: <a href="http://bit.ly/zyVUBo">http://bit.ly/zyVUBo</a>
            ).
          </p>
          <p className="pt-2">
            Users are advised to take caution and good judgement before clicking
            any shortened urls published on social media platforms by this
            website and its owners. Despite the best efforts to ensure only
            genuine urls are published many social media platforms are prone to
            spam and hacking and therefore this website and its owners cannot be
            held liable for any damages or implications caused by visiting any
            shortened links.
          </p>
        </div>

        <div className="text__layer">
          <h3>Resources & Further Information</h3>
          <ul>
            <li>
              <a href="http://www.legislation.gov.uk/ukpga/1998/29/contents">
                Data Protection Act 1998
              </a>
            </li>
            <li>
              <a href="http://www.legislation.gov.uk/uksi/2003/2426/contents/made">
                Privacy and Electronic Communications Regulations 2003
              </a>
            </li>
            <li>
              <a href="https://ico.org.uk/for-organisations/guide-to-pecr/">
                Privacy and Electronic Communications Regulations 2003 – The
                Guide
              </a>
            </li>
            <li>
              <a href="https://twitter.com/en/privacy">
                Twitter Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/about/privacy/">
                Facebook Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/privacy">
                Google Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://mailchimp.com/legal/privacy/">
                Mailchimp Privacy Policy
              </a>
            </li>
          </ul>

          <p className="pt-3">
            January 2018 Edited & customised by: Pronto etech services ltd
            Company Registration Number <bold>09143233 </bold>
            (England and Wales). Registered office address: 205 kings road,
            fairgate house B112AA
          </p>
        </div>
      </Container>
    </div>
  </div>
);

export default PrivacyPolicy;
