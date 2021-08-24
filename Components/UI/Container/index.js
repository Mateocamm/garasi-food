import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
position: relative;
  padding: 0px 1rem;
  
  @media (min-width: 992px) {
    margin: 0px auto;
    width: 1000px;
  }
`;

function index({ children }) {
  return <ContainerDiv>{children}</ContainerDiv>;
}

export default index;
