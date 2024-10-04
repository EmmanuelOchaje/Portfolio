const Contact = (props) => {
  return (
    <div>
      <div className="bg-black py-10 text-white h-[50vh]">
        <h2 className="text-5xl text-center">Contact Me</h2>
        <p className="text-2xl text-center">
          Reach out to me via any of my Socials
        </p>
        <div className="text-white flex justify-center items-center">
          <i class="bx bxl bxl-instagram"></i>
          <i class="bx bxl bxl-twitter"></i>
          <i class="bx bxl bxl-whatsapp"></i>
          <i class="bx bxl bxl-linkedin"></i>
          <i class="bx bxl bxl-gmail"></i>
          <i class="bx bxl bxl-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Contact;
