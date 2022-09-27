import React from "react";
import styled from "styled-components";
import MainLogo from "../../UI/Logo/Logo";
import coffeeImage from "../../assets/images/introCoffeeImage.JPG";
const IntroSection = styled.section`
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    display: flex;
  }
`;
const IntroLeft = styled.div`
  padding: 4.5rem 0;
  width: 100%;
  display: grid;
  place-content: center;
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop768}) {
    min-height: 85vh;
  }
`;

const IntroRight = styled.div`
  background-image: linear-gradient(#1f1f1fb3, #202020ab), url(${coffeeImage});
  background-position: center;
  background-size: cover;
  min-height: 15rem;
  width: 100%;
  display: grid;
  place-content: center;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.tablet640}) {
    min-height: 20rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    min-height: 85vh;
  }
`;
const IntroRightBanner = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  width: 90%;
  h2 {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.xbig};
    font-weight: 900;
    font-family: ${({ theme }) => theme.fonts[3]};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 2rem;
    @media screen and (min-width: ${({ theme }) =>
        theme.mediaScreen.xlgLaptop}) {
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
      line-height: 4rem;
    }
  }
  p {
    font-family: ${({ theme }) => theme.fonts[1]};
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.darkerGray};
    line-height: 1.7rem;
    @media screen and (min-width: ${({ theme }) =>
        theme.mediaScreen.xlgLaptop}) {
      font-size: ${({ theme }) => theme.fontSizes.xmedium};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    width: 80%;
  }
`;

const Intro = () => {
  return (
    <>
      <IntroSection>
        <IntroLeft>
          <MainLogo />
        </IntroLeft>
        <IntroRight>
          <IntroRightBanner>
            <h2>Coffee made with military precision.</h2>
            <p>
              We are an Australian, veteran-backed business roasting delicious
              coffee blends for like-minded companies.
            </p>
          </IntroRightBanner>
        </IntroRight>
      </IntroSection>
    </>
  );
};

export default Intro;
