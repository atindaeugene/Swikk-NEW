import { motion } from 'motion/react';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">About Us</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your local tech experts dedicated to empowering Mavoko's community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    Swikk Domains Computers was founded with a simple goal: to bring reliable, high-quality, and affordable technology solutions to the businesses and residents of Mavoko Sub County.
                  </p>
                  <p>
                    We noticed a gap in the local market for professional IT support, dependable POS systems for growing retail businesses, and trustworthy security installations. Since our inception, we have grown into a trusted partner for numerous local enterprises.
                  </p>
                  <p>
                    Our team consists of passionate tech professionals who understand the unique needs of our community. We pride ourselves not just on the products we sell, but on the lasting relationships and ongoing support we provide to every customer.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.img 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Team working together" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To provide reliable, affordable, and innovative tech solutions that enhance business operations and secure homes in our community.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To become the leading and most trusted technology supplier and IT support partner in Mavoko and the surrounding regions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
