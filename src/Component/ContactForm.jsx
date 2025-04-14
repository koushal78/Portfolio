import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_6s9q30q",
        "template_tnotobb",
        form.current,
        "nsFMZFMKffSaqwZUu"
      );
      console.log("Message sent", result.text);
      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.log("Failed to send:", error.text);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 sm:px-6 md:px-10 py-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight sm:leading-snug">
          Let's Create<br />
          Something <span className="text-purple-500">Amazing</span>
        </h1>

        <div className="bg-zinc-900 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-5">
              <label htmlFor="name" className="block text-gray-300 mb-1 text-sm sm:text-base">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-zinc-700 text-white p-3 rounded-lg placeholder-zinc-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-300 mb-1 text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your@email.com"
                className="w-full bg-zinc-700 text-white p-3 rounded-lg placeholder-zinc-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-gray-300 mb-1 text-sm sm:text-base">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                className="w-full bg-zinc-700 text-white p-3 rounded-lg placeholder-zinc-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 text-sm sm:text-base"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
