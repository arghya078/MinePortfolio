"use client";

import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ContactSection = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "6e8d02aa-93ea-4495-b565-f50d8be24d7a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      form.reset();
    } else {
      setResult("Something went wrong ❌ Try again.");
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-purple-400 w-6 h-6" />,
      title: "Email",
      value: "jeetdutta078@gmail.com",
      link: "mailto:jeetdutta078@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="text-green-400 w-6 h-6" />,
      title: "Phone",
      value: "+91 8582995824",
      link: "tel:+918582995824",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-400 w-6 h-6" />,
      title: "Location",
      value: "Barrackpore, West Bengal",
      link: "https://www.google.com/maps",
    },
    {
      icon: <FaLinkedin className="text-blue-400 w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/arghyadeep-dutta",
      link: "https://www.linkedin.com/in/arghyadeep-dutta-b2511120a/",
    },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-purple-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="w-[90%] sm:w-[80%] mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Contact Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly hello 👋
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              variants={cardVariant}   // ✅ FIXED HERE
              whileHover={{ y: -6, scale: 1.02 }}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
            >
              {/* Glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-xl" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-black/40 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 break-all">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Send a Message
          </h3>

          <form onSubmit={onSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-5 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg cursor-pointer hover:from-purple-600 hover:to-cyan-600 transition"
            >
              Send Message
            </motion.button>

            {result && (
              <p className="text-center text-sm text-gray-400 pt-2">
                {result}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
