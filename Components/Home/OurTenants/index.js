import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const OurTenantsSection = styled.div`
  background: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fafafa;
  padding: 4rem 2rem;
  text-align: center;
`;

const Logo = styled(Image)`
  filter: invert(0.5);
  opacity: 0.4;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  line-height: 1.5;
  font-weight: 300;
`;

const CTA = styled.a`
  background: #f0c847;
  color: #222;
  padding: 0.7rem 2rem;
  text-decoration: none;
  transition: 1s;

  &:hover {
    background: #fafafa;
    color: #f0c847;
  }
`;

function index() {
  return (
    <OurTenantsSection>
      <Logo
        src="/images/garasi-food-logo.png"
        alt="Our Tenants"
        title="View Our Tenants"
        width="200"
        height="80"
      />
      <Title>LEBIH DARI 100++ OUTLET MAKANAN</Title>
      <Description>
        Kami telah dipercaya mengelola lebih dari 100++ Outlet Makanan di Bali
        dan telah tersebar di berbagai lokasi.{" "}
      </Description>
      <CTA>
        <Link href="/our-tenants">View Our Tenants</Link>
      </CTA>
    </OurTenantsSection>
  );
}

export default index;
