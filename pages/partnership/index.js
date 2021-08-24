import React from "react";
import Layout from "../../Components/UI/Layout";
import styled from "styled-components";
import Image from "next/image";
import imagePartnership from "../../public/images/about-garasi-food.webp";

const PartnershipSection = styled.section`
  padding: 0 1rem;
  margin-bottom: 4rem;

  @media (min-width: 992px) {
    padding: 0;
    padding-top: 2rem;
    margin: 0px auto;
    margin-bottom: 4rem;
    width: 900px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 4rem;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ColumnOne = styled.div`
  flex: 1 0 50%;
`;

const Description = styled.div`
  font-weight: 300;
  line-height: 2;
  margin-bottom: 4rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 0 50%;
  position: relative;

  &:before {
    content: "";
    width: 360px;
    height: 300px;
    background: #f0c847;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;

const BenefitsList = styled.ul`
  list-style: none;
  font-weight: 300;
  position: relative;
  margin-bottom: 4rem;
`;
const BenefitItemt = styled.li`
  margin-bottom: 1.5rem;
  position: relative;

  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    background: #f0c847;
    position: absolute;
    left: -2rem;
    top: 0;
  }
`;

const LinkContact = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 1.4rem;
`;

function index() {
  return (
    <Layout pageTitle="Partnership - Garasi Food">
      <PartnershipSection>
        <Content className={"wow slideInUp"}>
          <ColumnOne>
            <Title>Partnership</Title>
            <Description>
              <p>
                Kembangkan bisnis anda ke delivery online food untuk menjangkau
                lebih banyak pelanggan dan mendapatkan profit lebih banyak.
              </p>
              <p>
                Bergabunglah menjadi bagian dari 100++ outlet kami dan meraih
                kesuksesan bersama kami. Garasifood membantu UMKM dan outlet F&B
                berkespansi ke ranah digital dan berkembang pesat secara mudah
                dengan investasi minimum.
              </p>
            </Description>
          </ColumnOne>
          <ImageWrapper>
            <Image
              src={imagePartnership}
              width="300"
              height="400"
              alt="Partnership GarasiFood"
              title="Join To GarasiFood"
              quality={70}
            />
          </ImageWrapper>
        </Content>

        <SubTitle className={"wow slideInUp"}>KEUNTUNGAN BERSAMA KAMI</SubTitle>

        <BenefitsList className={"wow slideInUp"}>
          <BenefitItemt>Bebas Ribet </BenefitItemt>
          <BenefitItemt>Bisnis Tumbuh Cepat </BenefitItemt>
          <BenefitItemt>Brand Awareness Terbaik</BenefitItemt>
          <BenefitItemt>Lebih Dekat Dengan Pelanggan</BenefitItemt>
        </BenefitsList>

        <SubTitle>JOIN WITH US</SubTitle>
        <p>Konsultasi, Pertanyaan, & Syarat Gabung </p>
        <LinkContact
          href="https://api.whatsapp.com/send?phone=6282237999901"
          target="_blank"
        >
          <Image src="/images/wa.png" width="30" height="30" />{" "}
          <span>+6282237999901</span>
        </LinkContact>
      </PartnershipSection>
    </Layout>
  );
}

export default index;
