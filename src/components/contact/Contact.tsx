import Email from './Email';

const Contact = () => {
  return (
    <div id="contact" className="bg-pink-500/5 py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col gap-3 text-center mb-6">
          <h2 className="font-bold text-4xl">Get In Touch</h2>
          <p className="max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll get back to you as soon as
            possible!
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6 md:items-stretch">
          <div className="flex-1 w-full md:w-1/2 border-pink-500/50 p-4 rounded bg-white/10 backdrop-blur-2xl">
            <Email />
          </div>
          <div className="flex-1 w-full md:w-1/2 border-pink-500/50 p-4 rounded bg-white/10 backdrop-blur-2xl">
            <div className="mx-auto p-2">
              <div className="font-bold text-blue-600 text-2xl">
                Contact Information
              </div>
              <div className="flex items-center gap-2 text-md text-white mt-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 "
                  >
                    <path
                      fill="#0f61cc"
                      d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                    />
                  </svg>
                </div>

                <span className="flex flex-col">
                  <span className="font-bold">Phone:</span>
                  <span> +91 6360411313</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-md text-white mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 "
                >
                  <path
                    fill="#0f61cc"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  />
                </svg>

                <span className="flex flex-col">
                  <span className="font-bold">Email:</span>
                  <span> meghakarthikm@gmail.com</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-md text-white mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="w-6 h-6 "
                >
                  <path
                    fill="#0f61cc"
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  />
                </svg>

                <span className="flex flex-col">
                  <span className="font-bold">Location:</span>
                  <span> Bengaluru</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
