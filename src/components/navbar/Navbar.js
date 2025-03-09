import React from "react";
import styled, { css } from "styled-components";

import Header from "../header/Header";
import Logo, { LogoGreen } from '../assets/images/logo.png';
import { StyledNavLinks } from "../../UI";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch, BsPerson } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { navData } from "../index";

const Nav = styled.section`
  position: sticky;
  top: 0;
  z-index: 10;
`;
const NavbarSection = styled.nav`
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.lightGray};
  padding: 0.7rem 0;
`;
const NavContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  font-size: ${({ theme }) => theme.fontSizes.xxmedium};
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    grid-template-columns: auto 1fr auto;
  }
`;
const SharedNavStyles = css`
  display: flex;
`;
const NavLeft = styled.div``;
const NavLLeft = styled.div`
  ${SharedNavStyles}
  gap: 1.5rem;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    display: none;
  }
`;
const NavLRight = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    display: block;
  }
`;
const NavCenter = styled.div`
  ${SharedNavStyles}
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    justify-content: flex-start;
  }
`;
const NavCLeft = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    display: none;
  }
`;
const NavList = styled.ul`
  display: none;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-transform: capitalize;
  margin-left: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    ${SharedNavStyles}
    gap: 1.7rem;
  }
`;

const NavRight = styled.div`
  ${SharedNavStyles}
  gap: 1rem;
  justify-self: flex-end;
  align-self: center;
`;
const NavRLeft = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.tablet640}) {
    ${SharedNavStyles}
    gap: 1.5rem;
  }
`;
const NavRRight = styled.div`
  ${SharedNavStyles}
  gap: 1rem;
  align-items: center;
`;
const CartNum = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryGreen};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  border-radius: 0.2rem;
  padding: 0.35rem 0.5rem;
  display: grid;
  place-content: center;
  &:hover {
    cursor: pointer;
  }
`;
const NavRLSearch = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    display: block;
  }
`;
const Navbar = ({ openCheckoutSummary, checkoutList, openSideNav }) => {
  return (
    <Nav>
      <Header />
      <NavbarSection>
        <NavContainer>
          <NavLeft>
            <NavLLeft>
              <GiHamburgerMenu className="hoverPointer" onClick={openSideNav} />
            </NavLLeft>
            <NavLRight>
              <LogoGreen />
            </NavLRight>
          </NavLeft>
          <NavCenter>
            <NavCLeft>
              <Logo />
            </NavCLeft>

            <NavList>
              {navData.map((navItem, index) => {
                const { to, title } = navItem;
                return (
                  <li key={index}>
                    <StyledNavLinks to={to}>{title}</StyledNavLinks>
                  </li>
                );
              })}
            </NavList>
          </NavCenter>
          <NavRight>
            <NavRRight>
              <HiOutlineShoppingCart
                className="hoverPointerGrey"
                onClick={openCheckoutSummary}
              />
              <CartNum onClick={openCheckoutSummary}>
                {checkoutList.length}
              </CartNum>
            </NavRRight>
          </NavRight>
        </NavContainer>
      </NavbarSection>
    </Nav>
  );
};

export default Navbar;
