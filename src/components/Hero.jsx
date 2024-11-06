import Image from "../assets/images/emmy.jpg";
const Hero = () => {
  return (
    <div className="flex h-[100vh] bg-black/80 text-white py-5">
      <div className="w-screen py-20 lg:py-14">
        <img src={Image} alt="/" className="w-[200px] h- rounded-full m-auto" />

        <div>
          <h2 className="text-white text-center lg:w-[30rem] px-5 lg:m-auto md:text-5xl pt-2 text-3xl">
            Hi, I'm Adoche,
          </h2>
          <p className="text-center text-2xl mx-10">
            an Experienced{" "}
            <span className="font-medium">Web and Mobile App Developer</span>
          </p>
          <p className="text-center text-xl mx-10">
            I'm good at building things for the Web, and giving you the <br />
            best mobile experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
