const Contact = (props) => {
  return (
    <div>
      <div className="bg-black py-10 text-white h-[90vh] flex justify-center items-center">
        <div className="">
          <h2 className="text-3xl md:text-5xl text-center">Contact Me</h2>
          <p className="text-[16px] sm:text-2xl text-center">
            Reach out to me via any of my Socials
          </p>
          <div className="text-white flex justify-center items-center">
            <a
              href="https://instagram.com/dj3rome_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl bxl-instagram"></i>
            </a>
            <a
              href="https://twitter.com/adocheee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl bxl-twitter"></i>
            </a>
            <a
              href="https://wa.me/2348154498483"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl bxl-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-ochaje-0563482a1/overlay/about-this-profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl bxl-linkedin"></i>
            </a>
            <a
              href="mailto:adocheofficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl bxl-gmail"></i>
            </a>
            <a
              href="https://github.com/EmmanuelOchaje"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl bxl-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
