import React from "react";
import Layout from "../../Components/UI/Layout";
import {Tenants} from "../../Data/TenantsData";
import OurTenants from "../../Components/Pages/OurTenants";

function index({ tenants }) {
  return (
    <Layout pageTitle="Our Tenants - Garasi Food">
      <OurTenants tenants={tenants} />
    </Layout>
  );
}

export async function getStaticProps() {
  const tenants = Tenants;
  return {
    props: {
      tenants,
    },
  };
}

export default index;
