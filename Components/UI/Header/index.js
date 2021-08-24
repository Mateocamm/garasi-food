import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  transition: "background" 0.45s ease 0s;
  padding: 0px 1rem;
  background: #fff;
  z-index: 100;
  box-shadow: ${({ isScroll }) =>
    isScroll ? "2px 0 10px rgba(100, 100, 100, 0.3)" : "initial"};

  @media (min-width: 992px) {
    padding: 0px 3rem;
  }
  @media (min-width: 1100px) {
    padding: 0px 14rem;
  }
`;

const NavBarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -1rem;
  right: ${({ showMenu }) => (showMenu ? "0" : "100vw")};
  height: 100vh;
  width: 100vw;
  background: #bbb;
  color: #fafafa;

  padding: 3rem 0;
  transition: 1s right;
  z-index: 200;

  @media (min-width: 992px) {
    position: initial;
    background: initial;
    color: initial;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    list-style: none;
    top: initial;
    right: initial;
    height: initial;
    width: initial;
  }
`;

const NavBarItem = styled.li`
  position: relative;
  height: 5rem;
  padding: 0px;
  display: flex;
  align-items: center;

  @media (min-width: 992px) {
    margin-left: 2rem;
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 1.2rem;
    content: "";
    display: block;
    height: 4px;
    left: 50%;
    position: absolute;
    background: #f0c847;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const LinkNav = styled(Link)`
 
`;

const LogoNavBar = styled.li`
  list-style: none;
  cursor: pointer;
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    display: none;
  }
`;

const CloseNavBar = styled.li`
  list-style: none;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 4rem;
  color: #444;

  @media (min-width: 992px) {
    display: none;
  }
`;

const IconHamburger = styled.img`
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`;

function index() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setIsScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <HeaderStyled isScroll={isScroll}>
      <Link href="/">
        <Image
          src="/images/garasi-food-logo.png"
          width="150"
          height="55"
          priority="true"
          quality={70}
        />
      </Link>
      <NavBarMenu showMenu={showMenu}>
        <LogoNavBar>
          <Link href="/">
            <Image src="/images/garasi-food-logo.png" width="140" height="50" />
          </Link>
        </LogoNavBar>
        <NavBarItem>
          <LinkNav href="/partnership">Partnership</LinkNav>
        </NavBarItem>
        <NavBarItem>
          <LinkNav href="/our-tenants">Our Tenants</LinkNav>
        </NavBarItem>
        {/* <NavBarItem>
          <LinkNav href="/garasi-digital">Garasi Digital</LinkNav>
        </NavBarItem> */}
        <CloseNavBar onClick={() => setShowMenu(false)}>X Close</CloseNavBar>
      </NavBarMenu>

      <IconHamburger
        src="/images/menu.svg"
        width="30"
        height="30"
        onClick={() => setShowMenu(!showMenu)}
      />
    </HeaderStyled>
  );
}

export default React.memo(index);


