import React from "react";
import "./Banner.css";

function Banner(props) {
  const { keyword, content, slide, background, handleClick } = props;
  const slide_Style = {
    backgroundImage: `url(${require(`../../images/${slide}/${slide}.png`)})`,
    backgroundSize: "cover",
  };

  const banner_Style = {
    backgroundImage: `url('${require(`../../images/${slide}/${background}`)}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };

  return (
    <div className="banner" style={banner_Style}>
      <div className="content">
        <h2>
          <span>{keyword}</span>
        </h2>
        <p>{content}</p>
        <a className="play" onClick={handleClick}>
          <img src={require("../../icons/play.png")} alt="play" />
          Watch Trailer
        </a>
        <div className="slide" style={slide_Style}></div>
        <ul className="sci">
          <li>
            <a href="#">
              <img
                src={require("../../icons/facebook.png")}
                alt="facebook_icon"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={require("../../icons/twitter.png")}
                alt="twitter_icon"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={require("../../icons/instagram.png")}
                alt="insta_icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
