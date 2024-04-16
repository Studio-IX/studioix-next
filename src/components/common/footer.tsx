import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AnimatedNavLink from "./animated-nav-link";
import AnimatedLink from "./animated-link";
import MenuSvg from "./menu-svg";
import { FooterText } from "./footer-text";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <div className="w-full h-screen relative max-h-screen overflow-hidden">
      <div className="flex flex-col items-center w-full h-screen justify-between pt-20 pb-10">
        <div className="z-[2147483004] flex flex-col items-start gap-0 w-full">
          <div className="w-full flex justify-between items-start px-20">
            <div className="w-1/2">
              <Image
                width={40}
                height={40}
                src="/logo/icon.png"
                alt="Logo icon"
              />
              <div className="flex flex-col items-start w-[55%] mt-4">
                <h3 className=" font-archivo text-white font-medium text-lg">
                  Want to make sure we&apos;re the right fit? Book a discovery
                  call!
                </h3>

                <h3 className=" font-archivo text-white/80 font-normal text-lg mt-4">
                  Find out how we can help you design and build your web app now
                </h3>
              </div>

              <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group mt-4">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#000_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-base font-archivo font-medium text-white backdrop-blur-3xl">
                  Book Call Now{" "}
                  <ArrowRight className="ml-2 group-hover:-rotate-45 transition-all ease-in-out duration-500" />
                </span>
              </div>
            </div>
            <div className="flex flex-row items-start w-full justify-between">
              <div className="w-full">
                <MenuSvg />
                <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                  Navigation
                </h3>
                <div className="flex flex-col items-start gap-1.5 mt-3">
                  <AnimatedLink link="" text="Agency" />
                  <AnimatedLink link="" text="Portfolio" />

                  <AnimatedLink link="" text="Pricing" />
                  <AnimatedLink link="" text="Services" />
                  <AnimatedLink link="" text="FAQs" />
                </div>
              </div>
              <div className="w-full">
                <MenuSvg />
                <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                  Legal Info
                </h3>
                <div className="flex flex-col items-start gap-1.5 mt-3">
                  <AnimatedLink link="" text="Terms & Conditions" />
                  <AnimatedLink link="" text="Privacy Policy" />
                  <AnimatedLink link="" text="Cookie Policy" />
                </div>
              </div>
              <div className="w-full">
                <MenuSvg />
                <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                  Contact Us
                </h3>
                <div className="flex flex-col items-start gap-1.5 mt-3">
                  <AnimatedLink link="" text="hey@studioix.agency" />
                </div>
              </div>
              <div className="w-full">
                <MenuSvg />
                <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                  Resources
                </h3>
                <div className="flex flex-col items-start gap-1.5 mt-3">
                  <AnimatedLink link="" text="Download Company Deck" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Part */}
        <div className="z-[50] w-full flex items-center justify-center -mt-60">
          <video
            autoPlay
            muted
            loop
            className="w-[55%] rounded-full object-cover"
          >
            <source src="/videos/footer.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Bottom Part */}
        <div className="flex flex-col items-start w-full h-fit">
          <FooterText />
        </div>

        <div className="z-[2147483002] w-full px-32">
          <Separator className="-mt-20" />
          <div className="w-full flex items-center justify-between mt-10">
            <h4 className=" font-archivo text-white/80 text-base">
              © Studio IX 2024, All rights reserved.
            </h4>
            <h4 className=" font-archivo text-white/80 text-base">
              1:28 AM GMT
            </h4>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-[1] -mt-80 rotate-180 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#455CE9_100%)]"></div>
    </div>
  );
};

export default Footer;
