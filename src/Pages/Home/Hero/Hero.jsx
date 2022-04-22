import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Hero = () => {
  return (
    <HeroContainer>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span>Read and make of yourself wiser.</span>
            <h1>
              Reading Habit <span className="colorize">Best Habit</span>
            </h1>
            <p>
              If you wanna make of your knowledge wider then other you should
              definently read the much books which one make of your knowledge
              wider
            </p>
            <Link to="/blogs" className="btn btn-primary">
              Read Articles
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="https://miro.medium.com/max/1023/1*W1EErwVwItUrSuU9y1D4Rg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};
const HeroContainer = styled.div`
  position: relative;
  padding: 10rem;
  @media (max-width: 668px) {
    padding: 2rem 1rem;
  }
  .hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    position: relative;
    @media (max-width: 668px) {
      flex-direction: column;
    }
    .hero-text {
      width: 46%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
      @media (max-width: 668px) {
        width: 100%;
      }
      h1 {
        font-size: 4rem;
        line-height: 1.2;
        @media (max-width: 668px) {
          font-size: 2rem;
        }
      }
      p {
        color: #666;
        line-height: 1.6;
        margin: 0.4rem 0rem;
      }
    }
    .hero-image {
      width: 50%;
      @media (max-width: 668px) {
        width: 100%;
      }
      img {
        /* width: 100%; */
      }
    }
  }
`;
export default Hero;
