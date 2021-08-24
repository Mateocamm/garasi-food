import React from "react";
import Layout from "../../Components/UI/Layout";
import styled from "styled-components";

const garasiDigitalSection = styled.section`
  padding: 1rem;

  @media (min-width: 992px) {
    padding: 0;
    padding-top: 2rem;
    margin: 0px auto;
    margin-bottom: 4rem;
    width: 900px;
  }
`;

const ImageServices = styled.img`
  width: 100%;
`;

function index() {
  return (
    <Layout pageTitle="Garasi Digtal - Garasi Food">
      <garasiDigitalSection>
        <ImageServices src="images/garasi-digital-services.jpeg" />
      </garasiDigitalSection>
    </Layout>
  );
}

export default index;
