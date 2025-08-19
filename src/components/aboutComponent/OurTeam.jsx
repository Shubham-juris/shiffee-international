import React from 'react'
import { motion } from "framer-motion";
const OurTeam = () => {
  return (
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Roshan Singh",
              role: "Founder & CEO",
              img: "https://via.placeholder.com/400x400",
            },
            {
              name: "Priya Sharma",
              role: "Head of Design",
              img: "https://via.placeholder.com/400x400",
            },
            {
              name: "Amit Verma",
              role: "Marketing Director",
              img: "https://via.placeholder.com/400x400",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  )
}

export default OurTeam