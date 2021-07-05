import React from "react";
import "./HeroSection.css";
const HeroSection = ({
  topText,
  mainText,
  subText,
  contentImg,
  reverseComponent,
  btnText,
  bgImg,
  textAlign,
  colorBg,
  height,
}) => {
  return (
    <>
      <div
        className="heroBanner"
        style={{
          background: bgImg ? `url(${bgImg})` : colorBg,
          height,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={reverseComponent ? "container section-4" : "container"}>
          <div
            className={contentImg ? "row content-text-md" : "row"}
            style={{
              flexDirection: reverseComponent ? "row-reverse" : "row",
            }}
          >
            <div
              className={
                textAlign === "center"
                  ? "content-container right"
                  : "content-container"
              }
              style={{ textAlign: textAlign }}
            >
              <h3 className="topText">{topText}</h3>
              <div className="underline"></div>

              <h1 className="mainText">{mainText}</h1>
              <p className="subText">{subText}</p>
              <button className="btnText" type="button">
                {btnText}
              </button>
            </div>
            {contentImg && (
              <div
                className="img-container"
                style={{ textAlign: reverseComponent ? "left" : "right" }}
              >
                <img src={contentImg} alt="img" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
