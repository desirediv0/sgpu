'use client';

import { motion } from 'framer-motion';

const recruiters = [
  {
    id: 1,
    name: 'Microsoft',
    logo: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 2,
    name: 'Google',
    logo: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 3,
    name: 'Amazon',
    logo: 'https://images.pexels.com/photos/973505/pexels-photo-973505.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 4,
    name: 'IBM',
    logo: 'https://images.pexels.com/photos/1181343/pexels-photo-1181343.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 5,
    name: 'Tata',
    logo: 'https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 6,
    name: 'Infosys',
    logo: 'https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 7,
    name: 'PwC',
    logo: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 8,
    name: 'Deloitte',
    logo: 'https://images.pexels.com/photos/1181444/pexels-photo-1181444.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

const stats = [
  { id: 1, value: '1000+', label: 'Recruiters', icon: '👔' },
  { id: 2, value: '99%', label: 'Placement Rate', icon: '📈' },
  { id: 3, value: '40 LPA', label: 'Highest Package', icon: '💰' },
  { id: 4, value: '200+', label: 'Global Companies', icon: '🌍' }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const TopRecruiters = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block">Top Recruiters</h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Our graduates are sought after by leading organizations worldwide, 
            with exceptional placement records across industries.
          </p>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#FF5C00]">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Recruiters */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {recruiters.map((recruiter) => (
            <motion.div
              key={recruiter.id}
              variants={item}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-28"
            >
              <img
                src={recruiter.logo}
                alt={recruiter.name}
                className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="/placements" className="btn-primary">View Placement Records</a>
        </motion.div>
      </div>
    </section>
  );
};

export default TopRecruiters;