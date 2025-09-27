const TitleHeader = ({ title, eyebrow, description }) => {
  return (
    //   <div className="flex flex-col items-center gap-5">
    //     <div className="hero-badge">
    //       <p>{sub}</p>
    //     </div>
    //     <div>
    //       <h1 className="font-semibold md:text-5xl text-3xl text-center">
    //         {title}
    //       </h1>
    //     </div>
    //   </div>

    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default TitleHeader;
