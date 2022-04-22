import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <p>
          &copy; Copyright by {new Date().getFullYear()} & Alright reserved by{" "}
          <span className="colorize">Ashik Mahmud</span>
        </p>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: relative;
  text-align: center;
  padding: 1rem;
  background: #f8f8f8;
  span {
    cursor: pointer;
  }
`;

export default Footer;
