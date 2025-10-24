
import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <div>
      <AboutContainer>
        <StyledImage src={codingSvg} />

        <HeaderContainer>
          <h1>
            About Software Developer <span>Imren Rahbay</span>
          </h1>
        </HeaderContainer>
        <InfoContainer>
          <h2>Hi, I'am Imren</h2>
          <h3>I’m currently working as Full-Stack Developer.</h3>
          <h4>
            I've already known JS,TS,ReactJS, NodeJS, MongoDB,SQL,
            Java, SpringBoot, AWS Services.
          </h4>
          <h2>
            <a href="mailto:imrenrahbay@gmail.com">Send email</a> :
            imrenrahbay@gmail.com
          </h2>
         
        </InfoContainer>
      </AboutContainer>
    </div>
  );
};

export default About;