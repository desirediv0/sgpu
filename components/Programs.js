"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Engineering & Technology",
    description:
      "Pioneering programs in Computer Science, Electronics, Mechanical and Civil Engineering.",
    icon: "🔧",
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: 2,
    title: "Business Management",
    description:
      "Innovative business programs with emphasis on entrepreneurship and global leadership.",
    icon: "📊",
    color: "bg-green-50 border-green-200",
  },
  {
    id: 3,
    title: "Arts & Humanities",
    description:
      "Creative programs developing critical thinking and cultural understanding.",
    icon: "🎭",
    color: "bg-purple-50 border-purple-200",
  },
  {
    id: 4,
    title: "Science & Mathematics",
    description:
      "Research-focused programs in Physics, Chemistry, Biology and Mathematics.",
    icon: "🔬",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    id: 5,
    title: "Health Sciences",
    description:
      "Medical and healthcare programs focusing on innovative patient care.",
    icon: "⚕️",
    color: "bg-red-50 border-red-200",
  },
  {
    id: 6,
    title: "Law",
    description:
      "Comprehensive legal education programs focusing on national and international law.",
    icon: "⚖️",
    color: "bg-indigo-50 border-indigo-200",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Programs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="section-heading inline-block">Our Programs</h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Discover a wide range of undergraduate, postgraduate, and doctoral
            programs designed to prepare you for a successful global career.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={item}
              className={`${program.color} border p-8 rounded-lg hover:shadow-lg transition-shadow group relative overflow-hidden`}
            >
              <div className="text-3xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <a
                href={`/programs/${program.id}`}
                className="inline-flex items-center text-[#FF5C00] font-medium"
              >
                Explore Programs{" "}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-white opacity-5 group-hover:opacity-10 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="/all-programs" className="btn-primary">
            View All Programs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
