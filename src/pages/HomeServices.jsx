import TextFalling from '../helper/TextFalling';

const HomeServices = () => {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-[30px] w-full py-45 flex items-center justify-center px-8 relative">
      {/* Centered Title */}
      <h1
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[250%] z-[2] pointer-events-none"
        style={{
          fontFamily: 'Unbounded, "Unbounded Placeholder", sans-serif',
          fontSize: "45px",
          fontWeight: 400,
          lineHeight: "45px",
          color: "#f0c417",
        }}
      >
        SERVICES OFFERED
      </h1>

      <div className="w-full max-w-6xl h-[45vh] relative z-[1] pointer-events-none">
        <TextFalling
          text={`We provide comprehensive digital Website development marketing solutions to boost your brand visibility and growth through strategic campaigns.`}
          highlightWords={["digital", "marketing", "Website development", "brand", "growth", "strategic"]}
          highlightClass="highlighted"
          trigger="scroll"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.8}
          fontSize="1.8rem"
          mouseConstraintStiffness={0.7}
        />
      </div>
    </div>
  );
};

export default HomeServices;
