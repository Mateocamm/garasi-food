import React from "react";
import styled from "styled-components";

const FooterPage = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function index() {
  return <FooterPage><a href="http://kenken.vercel.app/" target="_blank">Design by Kenken Studio</a></FooterPage>;
}

export default React.memo(index);
