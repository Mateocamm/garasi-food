import React from "react";
import styled from "styled-components";
import Image from "next/image";
import imageAbout from "../../../public/images/about-garasi-food.webp";

const About = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 6rem 0;
  gap: 2rem;
  overflow: hidden;

  @media (min-width: 992px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 0px auto;
    width: 900px;
    padding: 6rem 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 400px;

  &:before {
    content: "";
    width: 300px;
    height: 300px;
    background: #f0c847;
    position: absolute;
    left: -1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ImageAbout = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  padding: 2rem 1rem;
  font-weight: 300;
  line-height: 2;
  letter-spacing: 0.2px;
  text-align: center;
  margin: 0 1rem;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    transform: initial;
    flex: 1;
    background: initial;
    font-size: 1.2rem;
    text-align: right;
    margin-bottom: 0;
  }
`;

const StrongText = styled.span`
  font-weight: 600;
`;

function index() {
  return (
    <About>
      <ImageWrapper className={"wow fadeInUp"}>
        <ImageAbout
          src={imageAbout}
          alt="About GarasiFood"
          title="About GarasiFood"
          layout="fill"
          quality={70}
        />
      </ImageWrapper>
      <Content className={"wow fadeInUp"}>
        <StrongText>GarasiFood</StrongText> adalah foodcourt online yang
        menyediakan berbagai makanan dengan kualitas terbaik dan rasa yang
        lezat. Dengan strategi pemasaran yang tepat, GarasiFood memberikan
        solusi bagi para UMKM F&B ataupun pengusaha makanan untuk melakukan
        ekspansi bisnis ke <StrongText>food delivery online</StrongText> dan
        membantu meningkatkan penjualan serta menjangkau lebih banyak pelanggan.
      </Content>
    </About>
  );
}

export default index;
