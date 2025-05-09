'use client';

import { motion } from 'framer-motion';

const highlights = [
  {
    id: 1,
    title: 'World-Class Infrastructure',
    description: 'Modern classrooms, laboratories, and research facilities spread across a sprawling campus.',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stats: '1200+ acres'
  },
  {
    id: 2,
    title: 'Library & Learning Centers',
    description: 'Extensive collection of books, journals, and digital resources with 24/7 access.',
    image: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stats: '1M+ books'
  },
  {
    id: 3,
    title: 'Sports Facilities',
    description: 'State-of-the-art sports complexes, indoor stadiums, swimming pools, and fitness centers.',
    image: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stats: '50+ sports'
  },
  {
    id: 4,
    title: 'Innovation Centers',
    description: 'Dedicated spaces for startups, innovation labs, and entrepreneurship development.',
    image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stats: '100+ startups'
  }
];

const CampusHighlights = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block">Campus Highlights</h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Experience our world-class facilities designed to provide an optimal learning environment
            for academic excellence and personal growth.
          </p>
        </motion.div>
        
        <div className="space-y-24">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 relative">
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#FF5C00] text-white px-4 py-2 rounded-full font-medium">
                    {highlight.stats}
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#FF5C00] opacity-10 rounded-lg -z-10"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-black opacity-5 rounded-lg -z-10"></div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-semibold mb-4">{highlight.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{highlight.description}</p>
                <ul className="space-y-3">
                  {Array(3).fill(0).map((_, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-[#FF5C00] rounded-full mr-2"></div>
                      <span className="text-gray-700">
                        {index === 0 
                          ? ['Modern classrooms', 'Advanced laboratories', 'Outdoor learning spaces'][i]
                          : index === 1
                          ? ['Digital repositories', '24/7 study areas', 'Research databases'][i]
                          : index === 2
                          ? ['Olympic-sized pool', 'Indoor stadiums', 'Fitness centers'][i]
                          : ['Incubation center', 'Prototype labs', 'Collaboration spaces'][i]
                        }
                      </span>
                    </li>
                  ))}
                </ul>
                <a href={`/campus/${highlight.id}`} className="inline-block mt-6 text-[#FF5C00] font-medium">
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusHighlights;