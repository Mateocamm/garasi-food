import React from "react";
import styled from "styled-components";
import Image from "next/image";

const TestimonialSection = styled.section`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    padding: 2rem 0;
    margin: 0px auto;
    width: 900px;
  }
`;

const TestimonialList = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

const TestimonialItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  flex-basis: 50%;
  text-align: center;
  line-height: 2;
  font-style: italic;
`;

const StrongText = styled.span`
  font-weight: 400;
`;

function index() {
  return (
    <TestimonialSection>
      <Title>Testimonials</Title>
      <TestimonialList>
        <TestimonialItem>
          <Image
            src="/images/testimonial-garasifood-1.png"
            width="100"
            height="100"
            alt="testimonial 1 GarasiFood"
            title="Testimonial from our tenants"
            quality={70}
          />
          <p>
            "Jangan pernah takut untuk memulai menjadi wirausaha, tidak ada
            batas untuk memulai bisnis sendiri. Saya mendirikan bisnis kuliner
            yang diawali dengan dapur rumahan penjualan online saya dibantu dan{" "}
            <StrongText>dipermudah oleh GarasiFood</StrongText> sehingga saya
            bisa membuka beberapa cabang bisnis kuliner"
          </p>
        </TestimonialItem>
        <TestimonialItem>
          <Image
            src="/images/testimonial-garasifood-2.png"
            width="100"
            height="100"
            alt="testimonial 2 GarasiFood"
            title="Testimonial from our tenants"
            quality={70}
          />
          <p>
            "Kesan saya sejak bergabung di GarasiFood sangat luar biasa dan
            tidak bisa diragukan lagi, menghadapi masa sulit ditengah pendemi
            covid-19 ini saya bisa bertahan berkat GarasiFood.{" "}
            <StrongText>GarasiFood Is The Best!</StrongText>"
          </p>
        </TestimonialItem>
      </TestimonialList>
    </TestimonialSection>
  );
}

export default index;
