import React from "react";
import Container from "./container";
import LinkButton from "./link";
import Title from "./title";

// import Container from "./Container"; // Ensure this component is properly imported

export default function HeroSection() {
  return (
    <div className="relative" id="home">
      <Container>
        <div className="relative pt-10 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <Title
              className="text-5xl md:text-6xl xl:text-7xl"
              heading={
                <>
                  How can we help you <br />
                  <span className="text-primary dark:text-white">
                    immigrate to Canada?
                  </span>
                </>
              }
              subtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum."
              level="h2"
            />
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <LinkButton href="#" variant="primary">
                Get started
              </LinkButton>
              <LinkButton href="#" variant="secondary">
                Learn more
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
