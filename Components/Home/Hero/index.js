import react from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Hero = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 992px) {
    min-height: calc(100vh - 6rem);
    margin: 0px auto;
    width: 860px;
  }
`;

const slideInUp = keyframes`
from {
  transform: translate3d(0,100%,0);
}

to {
  transform: translateZ(0);  
}
`;

const slideInDown = keyframes`
  from {
    transform: translate3d(0,-100%,0);
    
  }

  to {
    transform: translateZ(0);
    
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 450px;
  animation: ${slideInDown} 1s;

  &:before {
    content: "";
    width: 300px;
    height: 300px;
    background: #f0c847;
    position: absolute;
    left: -1rem;
    top: 1rem;
  }

  @media (min-width: 992px) {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
  }
`;

const ImageHero = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  top: 3rem;
  left: 1rem;
  animation: ${slideInUp} 1s;

  @media (min-width: 992px) {
    position: initial;
    top: initial;
    left: initial;
  }
`;

const Title = styled.h1`
  background: #f0c847;
  max-width: 22rem;
  font-size: 1.6rem;
  font-weight: 300;
  padding: 0.5rem;
  line-height: 1.3;
  @media (min-width: 992px) {
    max-width: 35rem;
    font-size: 2.5rem;
    background: #fff;
  }
`;

const CTA = styled.a`
  background: #fafafa;
  color: #222;
  padding: 0.7rem 2rem;
  text-decoration: none;
  transition: 1s;

  @media (min-width: 992px) {
    background: #f0c847;
  }

  &:hover {
    background: #f0c847;
    opacity: 0.8;
    color: #222;
  }
`;

function index() {
  return (
    <Hero>
      <ImageWrapper>
        <ImageHero
          src="/images/hero-garasi-food.webp"
          alt="Join to GarasiFood"
          title="GarasiFood - Join Us"
          layout="fill"
          priority="true"
          quality={70}
        />
      </ImageWrapper>
      <Content>
        <Title>Kembangkan Bisnis Anda Bersama Garasi Food!</Title>
        <Link passHref href="partnership">
          <CTA>Join Us!</CTA>
        </Link>
      </Content>
    </Hero>
  );
}

export default index;
