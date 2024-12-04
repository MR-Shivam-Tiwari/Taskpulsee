// src/components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-black p-4 text-white text-center">
      <div className="flex flex-col md:flex-row text-start gap-7 px-4 md:px-20">
        <div className="mb-6 md:mb-0">
          <img
            src="https://www.taskpulse.in/images/demo-logo.png"
            className="img-fluid rounded-top h-[80px] w-[120px] object-cover"
            alt="Logo"
          />
          <div className="w-full md:w-[90vh]">
            The TaskPulse empowers SMBs with tailored solutions and expert services to drive success and innovation.
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="font-bold mb-6 text-xl md:text-2xl">CONTACT US</h3>
          <div className="mb-5 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <span>2nd floor, NS Complex, Nelamangala Bangalore - 562123</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <span>support@taskpules.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
