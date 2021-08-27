import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const OurTenantsSection = styled.section`
  padding: 1rem;
  position: relative;

  @media (min-width: 992px) {
    padding: 0;
    padding-top: 2rem;
    margin: 0px auto;
    margin-bottom: 4rem;
    width: 900px;
  }
`;

const OurTenantsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`;

const OurTenantsItem = styled.div`
  position: relative;
  background: #fafafa;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: 1s;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0rem;

  img {
    max-width:100%;
  }
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  width: 100%;
  padding: 1rem;
`;

const TitleItem = styled.h3`
  margin: 0;
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  @media (min-width: 992px) {
    font-size: initial;
  }
`;

const CategoryLabel = styled.span`
  background: #00877c;
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  padding: 0.5rem 1rem;
  text-shadow: 1px 1px #888;
`;

const FilterBox = styled.input`
  margin-bottom: 1rem;
  width: 100%;
  padding: 1rem;
  font-size: 16px;
  background: #fafafa;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media (min-width: 992px) {
    width: 280px;
  }
`;
function OurTenants({ tenants }) {
  const [result, setResult] = useState(tenants ?? []);
  return (
    <OurTenantsSection>
      <h2>Our Tenants</h2>
      <FilterBox
        placeholder="Input a filter"
        onChange={(event) =>
          setResult(
            tenants.filter((item) =>
              item.name.toLowerCase().includes(event.target.value)
            )
          )
        }
      />
      <OurTenantsList>
        {result.map((item, index) => (
          <Link key={index} href={`/our-tenants/${item.slug}`}>
            <OurTenantsItem className={"wow slideInUp"}>
              <ImageWrapper>
                <img
                  src="/images/back-tenant-gf.jpeg"
                  loading="lazy"
                />
              </ImageWrapper>
              <ContentItem>
                <TitleItem>{item.slug}</TitleItem>
                <CategoryLabel>{item.category}</CategoryLabel>
              </ContentItem>
            </OurTenantsItem>
          </Link>
        ))}
      </OurTenantsList>
    </OurTenantsSection>
  );
}

export default OurTenants;
