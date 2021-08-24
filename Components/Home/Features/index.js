import React from "react";
import { FeaturesData } from "./Data";
import styled from "styled-components";

const FeaturesSection = styled.section`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (min-width: 992px) {
    padding: 0;
    margin: 0px auto;
    width: 900px;
  }
`;

const TitleSection = styled.h2`
  font-size: 1.7rem;
  font-weight: 300;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:before {
    content: "";
    width: 5rem;
    height: 5px;
    background: #f0c847;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 5rem;
  }
  @media (min-width: 540px) {
    &:before {
      top: 3rem;

    }
  }

  @media (min-width: 992px) {
    font-size: 2.2rem;
    margin-bottom: 4rem;

    
  }
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
const FeatureItem = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 2rem;
  min-height: 240px;
  max-width: 500px;

  margin-bottom: 2rem;

  @media (min-width: 992px) {
    max-width: 420px;
    min-height: 310px;
  }
`;

const Title = styled.h3`
  font-weight: 400;
`;
const Description = styled.p`
  line-height: 2;
  font-weight: 300;
`;

function index() {
  return (
    <FeaturesSection>
      <TitleSection>Ekspansi Ke Food Delivery Online </TitleSection>
      <FeatureList>
        {FeaturesData.map((feature, index) => (
          <FeatureItem key={index} className={"wow fadeInUp"}>
            <Title>{feature.name}</Title>
            <Description>{feature.description}</Description>
          </FeatureItem>
        ))}
      </FeatureList>
    </FeaturesSection>
  );
}

export default index;
