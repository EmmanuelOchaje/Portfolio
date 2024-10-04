const Hero = () => {
  return (
    <div className="flex bg-black/50 text-white py-5">
      <div className="w-[50%] h-[100%]">
        <h2 className="md:text-5xl lg:w-[30rem] mt-[5rem] px-5 text-3xl">
          <i class="bx bxs-quote-alt-left"></i> Bringing your brand to life in
          the digiital world.
        </h2>

        <h2 className="md:text-5xl  lg:w-[30rem] mt-[5rem] px-5 text-3xl">
          Coding like poetry should be short and concise.
        </h2>
        {/* <h2 className="text-4xl">Hi, I am Adoche</h2>
        <h2>Welcome To my Room.</h2> */}
      </div>

      <div className="w-[50%]">
        <h2 className="text-white py-5 lg:w-[30rem] px-5 md:text-5xl text-3xl">
          Talk is cheap, let's Code!
        </h2>

        <h2 className="text-white mt-[10rem] lg:w-[30rem] px-5 md:text-5xl text-3xl">
          Code is like humor. When you have to explain it, it’s bad.{" "}
          <i class="bx bxs-quote-alt-right"></i>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
