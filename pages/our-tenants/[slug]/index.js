import React from "react";
import styled from "styled-components";
import { Tenants } from "../../../Data/TenantsData";
import Layout from "../../../Components/UI/Layout";
import Link from "next/link";
import Image from "next/image";

const TenantSection = styled.section`
  padding: 1rem;
  min-height: calc(100vh - 200px);

  @media (min-width: 992px) {
    padding: 0;
    padding-top: 2rem;
    margin: 0px auto;
    margin-bottom: 4rem;
    width: 900px;
  }
`;

const TenantWrapper = styled.div`
  background-image: radial-gradient(
    circle,
    #707070,
    #656565,
    #5a5a5a,
    #4f4f4f,
    #444444,
    #3d3d3d,
    #363636,
    #2f2f2f,
    #2a2a2a,
    #252525,
    #212121,
    #1c1c1c
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  min-height: 200px;
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-weight: 600;
  background: #f0c847;
  padding: 1rem;
  box-shadow: 2px 0 10px rgba(100, 100, 100, 0.3);
  font-size: 18px;
  color: #fff;
  text-shadow: 2px 2px #aaa;
  border-radius: 20px;
  @media (min-width: 992px) {
    font-size: 22px;
  }
`;

const CategoryLabel = styled.span`
  background: #00877c;
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  border-radius: 10px;
  padding: 0.5rem 1rem;
`;

const LinksOjol = styled.div`
  margin: 20px 0;
  display: flex;


  a{
    display: flex;
    justify-content:center;
    color: #fff;
    padding: 1rem;
    margin-right: 1rem;
    background: #439435;
    min-width: 9rem;
    border-radius:10px;
    font-weight: 600;
    transition: all 0.5s;
    opacity: 0.9;

    &:last-child{
      background: #fff;
    }

    &:first-child{
      background: #439435;
    }

    &:hover{
      opacity: 1;
    }

  }
`;


function index({ tenant }) {
  return (
    <Layout pageTitle={tenant.name}>
      <TenantSection>
        <TenantWrapper>
          <Title>{tenant.name}</Title>
          <CategoryLabel>{tenant.category}</CategoryLabel>
          <LinksOjol>
            {tenant.grab && <a href={tenant.grab} target="_blank"><Image src="/images/logo-grabfood.svg" width={200} height={20} /></a>}
            {tenant.gojek && <a href={tenant.gojek} target="_blank"><Image src="/images/logo-gofood.svg" width={200} height={20} /></a>}
          </LinksOjol>
        </TenantWrapper>
        <Link href="/our-tenants">
          <span>{"<< "}See All</span>
        </Link>
      </TenantSection>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const tenants = Tenants;
  const tenant = tenants.find((item) => item.slug === params.slug);

  return {
    props: { tenant },
  };
}

export async function getStaticPaths() {
  const tenants = Tenants;

  // Get the paths we want to pre-render based on posts
  const paths = tenants.map((item) => ({
    params: { slug: item.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export default index;
