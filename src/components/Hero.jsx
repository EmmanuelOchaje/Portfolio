const Hero = () => {
  return (
    <div className="flex bg-black/50 text-white py-5">
      <div className="w-[50%] h-[100%]">
        <h2 className="text-5xl w-[30rem] mt-[5rem] m-auto">
          <i class="bx bxs-quote-alt-left"></i> Bringing your brand to life in
          the digiital world.
        </h2>

        <h2 className="text-5xl w-[30rem] mt-[5rem] m-auto">
          Coding like poetry should be short and concise.
        </h2>
        {/* <h2 className="text-4xl">Hi, I am Adoche</h2>
        <h2>Welcome To my Room.</h2> */}
      </div>

      <div className="w-[50%]">
        <h2 className="text-white py-5 w-[30rem] m-auto text-5xl">
          Talk is cheap, let's Code!
        </h2>

        <h2 className="text-white mt-[10rem] w-[30rem] m-auto text-5xl">
          Code is like humor. When you have to explain it, it’s bad.{" "}
          <i class="bx bxs-quote-alt-right"></i>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
