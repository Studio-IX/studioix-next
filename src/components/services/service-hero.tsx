"use client";

import CompanyLogos from "../common/company-logos";
import PrimaryButtonLight from "../common/primary-button-light";
import SliderText from "../common/slider-text";
import Wrapper from "../wrapper/wrapper";
import ArrowOne from "./arrow-one";
import ArrowThree from "./arrow-three";
import ArrowTwo from "./arrow-two";
import ProjectSlider from "./mobile-project-slider";
import ServiceFeatureCard from "./service-feature-card";
import ServiceFeatureCardSmall from "./service-feature-card-small";
import WebDevelopmentGallery from "./web-development-gallery";

const ServiceHero = () => {
  return (
    <div className="w-full">
      <Wrapper className="py-20">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="hidden md:block">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center gap-2.5">
                <ArrowOne />{" "}
                <p className=" text-lg text-black font-archivo font-medium">
                  CRO
                </p>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <ArrowTwo />{" "}
                <p className=" text-lg text-black font-archivo font-medium uppercase">
                  Website Content
                </p>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <ArrowThree />{" "}
                <p className=" text-lg text-black font-archivo font-medium uppercase">
                  Web + Interaction Design
                </p>
              </div>
            </div>
          </div>
          <h1 className="font-cabinetGrotesk font-bold text-5xl lg:text-[6.8rem] text-black">
            Evolve your website.
          </h1>
        </div>
        <h1 className="font-cabinetGrotesk font-bold text-5xl lg:text-[6.8rem] text-black">
          Stay engraved in user&apos;s minds.
        </h1>

        <div className="flex flex-col md:flex-row mt-6 md:mt-8 gap-6 md:gap-20 items-start">
          <p className=" font-archivo text-black/60 text-xl font-normal max-w-prose">
            We rebrand your business and website with a new visual identity that
            makes your competitors jealous.{" "}
            <span className=" font-medium text-black">Outcome</span> ---
            scalable, easy-to-manage & trackable website with a solid brand that
            imprints in user&apos;s minds.
          </p>

          <div>
            <PrimaryButtonLight text="Start a project" link="/contact" />
          </div>
        </div>
      </Wrapper>
      <ProjectSlider />
      <WebDevelopmentGallery />
      <CompanyLogos />

      <div className="bg-[#121212] flex flex-col w-full py-40">
        <div className="pb-[25rem] hidden lg:block">
          <SliderText text="Our Web Development Stack" />
        </div>
        <Wrapper className="flex flex-col gap-5 lg:gap-10 mt-10">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            <ServiceFeatureCard
              title="Tech Stack"
              description="Post directly or import your works (designs, articles, illustrations, git repositories, etc) from other platforms to Tabulio."
              src="/images/stack.webp"
              alt="Stack"
            />
            <ServiceFeatureCard
              title="Web Development Team"
              description="Post directly or import your works (designs, articles, illustrations, git repositories, etc) from other platforms to Tabulio."
              src="/images/team.png"
              alt="Team"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            <ServiceFeatureCardSmall
              title="Experience"
              description="Combined team experience of 8+ years."
              src="/images/experience.webp"
              alt="Experience"
            />
            <ServiceFeatureCardSmall
              title="Community"
              description="We treat clients like partners."
              src="/images/community.webp"
              alt="Community"
            />
            <ServiceFeatureCardSmall
              title="Collaboration"
              description="We work well together for max efficiency."
              src="/images/collaborate.webp"
              alt="Collaboration"
            />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default ServiceHero;
