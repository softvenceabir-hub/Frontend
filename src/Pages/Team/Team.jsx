import React from 'react';
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sulayman Ahmed",
      role: "Chief Pharmacist",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Dr. Fatima Noor",
      role: "Health Consultant",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Mr. John Doe",
      role: "Operations Manager",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Ms. Ayesha Khan",
      role: "Customer Support",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className='container'>
      <div className='lg:pt-40 w-full pt-50'>
        <section className="mt-10 lg:mt-20 px-4 lg:px-0">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Our Team
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Meet the experts who are committed to your health and wellness.
            </p>

            {/* Team Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer relative group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                    />
                    {/* Social Media Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xl hover:text-blue-600 transition-colors"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xl hover:text-sky-400 transition-colors"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xl hover:text-blue-500 transition-colors"
                      >
                        <FaLinkedinIn />
                      </a>
                    </motion.div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
