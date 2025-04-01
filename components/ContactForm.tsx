import React from "react";

const ContactForm = () => {
  return (
    <form action="https://formsubmit.co/aayush.saini4141@gmail.com" method="POST">
      <h2 className="text-2xl font-bold mb-5 text-white md:text-start text-center">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
        required
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="flex md:justify-start justify-center">
  <button
  type="submit"
  className="px-6 mb-10 py-3 rounded-full text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-violet-600 hover:bg-violet-400 flex items-center">
    Send a message
  </button>
</div>
    </form>
  );
};

export default ContactForm;
