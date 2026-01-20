import React from "react";
import Header from "../components/general/Header";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="w-[90%] sm:w-[80%] mx-auto">

        {/* Section Header */}
        <Header title="My Projects" />

        {/* Responsive layout */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 gap-8
            lg:flex lg:flex-wrap lg:justify-center
          "
        >

          <div className="w-full sm:w-auto lg:w-[320px]">
            <ProjectCard
              image="/images/p2.png"
              title="Car Rental Website"
              description="A full-stack Car Rental Application built with the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to provide a seamless experience for customers, owners, and admins. Customers can browse, search, and book cars with secure payments via Stripe and PayPal (sandbox mode, USD only)...."
              techStack={["MERN", "Stripe", "PayPal", "Tailwind", "Redux", "JWT", "Cloudinary", "NodeMailer", "Express", "MongoDB", "React", "Node.js", "REST API", "Vercel", "GitHub"]}
              liveDemoLink="https://car-rental-website-blond.vercel.app/"
              sourceCodeLink="https://github.com/arghya078/car-rental-website"
            />
          </div>

          <div className="w-full sm:w-auto lg:w-[320px]">
            <ProjectCard
              image="/images/p3.png"
              title="Doctor Appointment Booking Website"
              description="I built a Doctor Appointment Booking Website using the MERN stack, featuring three roles – Patient, Doctor, and Admin – with role-based dashboards. Patients can register, manage their profiles, search for doctors, book appointments, and pay either via cash or Razorpay online gateway."
              techStack={["MongoDB", "Express", "React", "Node.js", "Razorpay", "Tailwind", "JWT", "Cloudinary", "NodeMailer", "REST API", "Vercel", "GitHub", "Context API", "React Router"]}
              liveDemoLink="https://doctor-appointment-booking-website-eight.vercel.app/"
              sourceCodeLink="https://github.com/arghya078/Doctor-appointment-booking-website"
            />
          </div>

          <div className="w-full sm:w-auto lg:w-[320px]">
            <ProjectCard
              image="/projects/project3.png"
              title="E-commerce Store"
              description="A responsive e-commerce UI with cart, filtering and product pages."
              techStack={["React", "Redux", "Tailwind"]}
              liveDemoLink="https://your-site.com"
              sourceCodeLink="https://github.com/yourusername/ecommerce"
            />
          </div>

          <div className="w-full sm:w-auto lg:w-[320px]">
            <ProjectCard
              image="/images/p4.png"
              title="AI-Resume-Builder"
              description="The AI Resume Builder is a full-stack web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) that lets users easily create, edit, and manage professional resumes online. It features a clean and responsive UI built with Tailwind CSS, live resume preview, multiple templates, and shareable online resume links.Powered by Google Gemini AI"
              techStack={["MERN", "Tailwind", "JWT", "Cloudinary", "NodeMailer", "REST API", "Vercel", "GitHub", "Google Gemini AI", "ImageIO Kit", "React Router", "Context API"]}
              liveDemoLink="https://ai-resume-builder-five-ashy.vercel.app"
              sourceCodeLink="https://github.com/arghya078/AI-resume-builder/tree/main"
            />
          </div>

          <div className="w-full sm:w-auto lg:w-[320px]">
            <ProjectCard
              image="/images/p1.png"
              title="QuickGpt"
              description="I developed a Full-Stack AI-Powered Chat & Image Generation Application using the MERN stack (MongoDB, Express.js, React.js, Node.js), integrated with the Google Gemini API to deliver real-time conversational AI and creative text generation. Users can register, log in, chat with AI, and generate images seamlessly via ImageIO Kit."
              techStack={["MERN", "Google Gemini API", "ImageIO Kit", "Tailwind", "JWT", "Cloudinary", "NodeMailer", "REST API", "Vercel", "GitHub", "React Router", "Context API"]}
              liveDemoLink="https://quickgpt-mu.vercel.app/"
              sourceCodeLink="https://github.com/arghya078/Quickgpt"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
