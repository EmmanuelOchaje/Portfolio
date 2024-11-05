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
            <i class="bx bxl bxl-instagram"></i>
            <i class="bx bxl bxl-twitter"></i>
            <i class="bx bxl bxl-whatsapp"></i>
            <i class="bx bxl bxl-linkedin"></i>
            <i class="bx bxl bxl-gmail"></i>
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
