import dcribs from "../assets/images/d-cribs.png";
const Projects = (props) => {
  return (
    <div className="bgblack py-10">
      <div>
        <h2 className="text-5xl text-black text-center">
          Projects I've Worked On So Far
        </h2>

        <div className="flex flex-wrap justify-center items-center m-auto">
          <div className="proj w-[400px] h-[200] rounded-xl m-5">
            <div className="bg-black/40 w-[400px] h-[200px] rounded-xl">
              <h3 className="text-white text-3xl font-medium text-center pt-20">
                D-cribs WebApp
              </h3>
              <p className="text-white font-normal text-2xl text-center ">
                Built with React, Sass
              </p>
            </div>
          </div>

          <div className="proj1 w-[400px] h-[200] rounded-xl m-5">
            <div className="bg-black/40 w-[400px] h-[200px] rounded-xl">
              <h3 className="text-white text-3xl font-medium text-center pt-20">
                Gift-Ease WebApp
              </h3>
              <p className="text-white font-normal text-2xl text-center ">
                Built with React, TailWind.css
              </p>
            </div>
          </div>

          <div className="proj2 w-[400px] h-[200] rounded-xl m-5">
            <div className="bg-black/50 w-[400px] h-[200px] rounded-xl">
              <h3 className="text-white text-3xl font-medium text-center pt-20">
                Foodies Website
              </h3>
              <p className="text-white font-normal text-2xl text-center ">
                Built with React, TailWind.css
              </p>
            </div>
          </div>

          <div className="proj3 w-[400px] h-[200] rounded-xl m-5">
            <div className="bg-black/50 w-[400px] h-[200px] rounded-xl">
              <h3 className="text-white text-3xl font-medium text-center pt-20">
                Weather App
              </h3>
              <p className="text-white font-normal text-2xl text-center ">
                Built with React, Traditional Css
              </p>
            </div>
          </div>

          <div className="proj4 w-[400px] h-[200] rounded-xl m-5">
            <div className="bg-black/50 w-[400px] h-[200px] rounded-xl">
              <h3 className="text-white text-3xl font-medium text-center pt-20">
                Image Gallery
              </h3>
              <p className="text-white font-normal text-2xl text-center ">
                Built with React, Traditional Css, LightBox
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
