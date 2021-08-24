import React from "react";
import styled from "styled-components";
import Image from "next/image";

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
`;

function index() {
  return (
    <ContactSection>
      <h2>BERGABUNGLAH DENGAN KAMI</h2>
      <div>
        <p>Kontak Person : 081237999901</p>
        <p>Email : Garasifood.official@gmail.com</p>
        <SocialLinks>
          <a href="https://www.instagram.com/garasifoodbali/" target="_blank">
            <Image
              src="/images/ig.png"
              alt="Instagram GarasiFood"
              title="Instagram GarasiFood"
              width="30"
              height="30"
              quality={70}
            />
          </a>
          <a
            href="https://web.facebook.com/garasifood.garasifood"
            target="_blank"
          >
            <Image
              src="/images/fb.png"
              alt="Facebook GarasiFood"
              title="Facebook GarasiFood"
              width="30"
              height="30"
              quality={70}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6282237999901"
            target="_blank"
          >
            <Image
              src="/images/wa.png"
              alt="Whatsapp GarasiFood"
              title="Whatsapp GarasiFood"
              width="30"
              height="30"
              quality={70}
            />
          </a>
        </SocialLinks>
      </div>
    </ContactSection>
  );
}

export default index;
