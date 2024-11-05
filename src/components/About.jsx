import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import jsimg from "../assets/images/js.png";
import reactimg from "../assets/images/react.png";
import reduxImg from "../assets/images/redu.png";
import sass from "../assets/images/sass.png";
import tailwind from "../assets/images/tailwind.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import native from "../assets/images/native.png";

const About = () => {
  return (
    <div className="bg-black md:flex">
      <div className="md:w-[50%] flex justify-center items-center h-[90vh]">
        <div className="m-auto py-5">
          <h2 className="text-3xl text-white text-center lg:text-left m-auto md:w-[30rem]">
            Hi, I am Adoche
          </h2>
          <h2 className="text-3xl text-white text-center lg:text-left m-auto md:w-[30rem]">
            Welcome to my Room.
          </h2>
          <p className="text-white text-center lg:text-left w-[20rem] m-auto lg:w-[30rem] pt-5 text-[19px]">
            I am Emmanuel Ochaje Adoche, A Frontend Developer,
          </p>
          <p className="text-white text-center lg:text-left w-[20rem] m-auto lg:w-[30rem] text-[19px]">
            A frontend and mobile app developer with over three years of
            experience in creating intuitive, high-quality web and mobile
            applications. I specialize in crafting responsive and engaging user
            experiences.
          </p>
          {/* <p className="text-white w-[25rem] text-[19px]">
            Over The years, I have greatly Mastered
          </p> */}
        </div>
      </div>

      <div className="py-10 md:w-[50%]">
        <div className="">
          <h2 className="text-white text-4xl text-center">My Tech Stack</h2>
        </div>
        {/* stack */}
        <div className="md:m-auto flex justify-center items-center flex-wrap md:w-[75]">
          <div className="m-3">
            <img src={html} className="w-[75px] sm:w-[100px]" alt="" />
            <h3 className="text-center text-white">HTML</h3>
          </div>
          <div className="m-3">
            <img src={css} className="w-[75px] sm:w-[100px]" alt="" />
            <h3 className="text-center text-white">CSS</h3>
          </div>

          <div className="m-3">
            <img
              src={jsimg}
              className="w-[75px] sm:w-[100px] h-[75px] sm:h-[100px]"
              alt=""
            />
            <h3 className="text-center text-white">JS</h3>
          </div>
          <div className="m-3">
            <img
              src={reactimg}
              className="w-[75px] sm:w-[100px] h-[75px] sm:h-[100px]"
              alt=""
            />
            <h3 className="text-center text-white">REACT</h3>
          </div>
          <div className="m-3">
            <img
              src={reduxImg}
              className="w-[75px] sm:w-[100px] h-[75px] sm:h-[100px]"
              alt=""
            />
            <h3 className="text-center text-white">REDUX</h3>
          </div>
          <div className="m-3">
            <img
              src={sass}
              className="w-[75px] sm:w-[100px] h-[75px] sm:h-[100px]"
              alt=""
            />
            <h3 className="text-center text-white">SASS</h3>
          </div>
          <div className="m-3">
            <img
              src={tailwind}
              className="w-[75px] sm:w-[100px] h-[100px]"
              alt=""
            />
            <h3 className="text-center text-white">TAILWIND</h3>
          </div>
          <div className="m-3">
            <img src={git} className="w-[75px] sm:w-[100px] h-[100px]" alt="" />
            <h3 className="text-center text-white">GIT</h3>
          </div>
          <div className="m-3">
            <img
              src={github}
              className="w-[75px] sm:w-[100px] h-[100px]"
              alt=""
            />
            <h3 className="text-center text-white">GITHUB</h3>
          </div>
          <div className="m-3">
            <img
              src={native}
              className="w-[75px] sm:w-[120px] h-[100px]"
              alt=""
            />
            <h3 className="text-center text-white">React Native</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

/* 
I'm Emmanuel Ochaje Adoche, a frontend and mobile app developer with over three years of experience in creating intuitive, high-quality web and mobile applications. Proficient in HTML, CSS, JavaScript, React, React Native, and TypeScript, I specialize in crafting responsive and engaging user experiences. Currently studying chemical engineering at the Federal University of Technology, Minna, I combine technical expertise with a creative edge to build solutions that excel in both design and functionality across platforms.
*/
