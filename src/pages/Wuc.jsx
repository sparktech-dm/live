import React from "react";

const Wuc = () => {
  return (
    
    <div className="relative w-full mt-15 min-h-screen bg-red-700 flex items-center justify-center p-10 overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translatey(-10px); }
        }
        .float {
          animation: float 1s ease-in-out infinite;
        }
        
      `}</style>

      {/* Central Text */}
      <h1 className="text-white/50 text-5xl md:text-9xl font-extrabold text-center leading-none z-10">
        Why <br /> Choose <br /> Us?
      </h1>

      {/* Cards */}
     <div className="absolute top-18 left-1  md:top-50 md:left-90 rounded-2xl bg-red-500 text-white p-4 w-44 text-center rotate-[10deg] shadow-lg z-0 float  ">
  Data before drama:- <br />
  <span className="text-[12px] md:text-[15px]">
    Our ideas are creative but are never random. We dig deep & analyse smart
  </span>
</div>

      <div className="absolute top-55 right-4 rounded-2xl md:top-50 md:right-90 bg-red-500 text-white p-4 w-44 text-center rotate-[20deg] shadow-lg z-0 float">
        Stories with spine:- <br /> <span className="text-[12px] md:text-[15px]">Our ideas are creative but are never random. We dig deep & analyse smart</span>
      </div>

      <div className="absolute top-90 left-1 rounded-2xl md:top-90 md:left-60 bg-red-500 text-white p-4 w-44 text-center rotate-[-30deg] shadow-lg z-0 float">
        No jargon. Just results:-
        <br /> <span className="text-[12px] md:text-[15px]">Our ideas are creative but are never random. We dig deep & analyse smart</span>
      </div>

      <div className="absolute bottom-5 left-2 rounded-2xl text-xl md:bottom-10 md:left-62 bg-red-500 text-white p-4 w-44 text-center rotate-[-10deg] shadow-lg z-0 float">
        We’re new; not naive:- <br />        <span className="text-[12px] md:text-[15px]">Our ideas are creative but are never random. We dig deep & analyse smart</span>

      </div>

      <div className="absolute bottom-125  right-2 rounded-2xl md:bottom-8 md:right-62 md:rotate-[-15deg] bg-red-500 text-white p-4 w-44 text-center rotate-[-30deg] shadow-lg z-0 float">
        Not afraid to say no:- <br /> <span className="text-[12px] md:text-[15px]">Our ideas are creative but are never random. We dig deep & analyse smart</span>
      </div>

      <div className="absolute top-115 right-0  rounded-2xl md:top-1/2 md:right-60 bg-red-500 text-white p-4 w-44 text-center rotate-[-30deg] shadow-lg z-0 float">
      We test, tweak, and get things right:- <br /> <span className="text-[12px] md:text-[15px]">Our ideas are creative but are never random. We dig deep & analyse smart</span>

      </div>

    </div>
  );
};

export default Wuc;