import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./slider.styles.scss";

class CardSlider extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="main__slide_wrap">
        <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <img alt="Icon" src={item.icon} className="img-fluid" />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
              <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Posted by <strong>{item.user}</strong>
                </span>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CardSlider;
