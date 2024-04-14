import SectionTitle from "../common/section-title";

const PricingHeader = () => {
  return (
    <div className="w-full flex flex-col items-center mb-20 mt-10">
      <SectionTitle text="PRICING" />
      <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-7xl text-white text-center mt-6">
        Membership Plans
      </h2>
      <p className="text-white/70 text-lg font-archivo w-full text-center">
        Design, Development, or both - Whatever you need we&apos;ve got you
        covered!
      </p>
    </div>
  );
};

export default PricingHeader;
