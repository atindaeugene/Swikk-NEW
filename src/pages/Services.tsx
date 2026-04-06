import { motion } from 'motion/react';
import { Server, ShieldCheck, MonitorSmartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional tech solutions tailored for businesses and homes in Mavoko.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* POS Systems */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.img 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" 
                alt="POS System in use" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                  <Server className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">POS Systems</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Modernize your retail business with our comprehensive Point of Sale solutions. We supply, install, and support POS systems designed to streamline your operations, manage inventory, and improve customer checkout experiences.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect for:</h3>
                <ul className="space-y-3 mb-8">
                  {['Supermarkets & Minimarts', 'Retail Shops & Boutiques', 'Restaurants & Cafes', 'Pharmacies & Clinics'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-red-600 font-semibold hover:text-red-800">
                  Request a POS Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* CCTV Installation */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <motion.img 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2064&auto=format&fit=crop" 
                alt="CCTV Camera" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">CCTV Installation & Maintenance</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Secure your premises with high-definition surveillance systems. We provide professional installation, setup for remote mobile viewing, and ongoing maintenance to ensure your property is always monitored.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our CCTV Services:</h3>
                <ul className="space-y-3 mb-8">
                  {['HD & IP Camera Installation', 'DVR/NVR Setup & Configuration', 'Mobile App Remote Viewing Setup', 'System Maintenance & Repairs'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-red-600 font-semibold hover:text-red-800">
                  Book a Site Survey <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Accessories */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.img 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop" 
                alt="Computer Accessories" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                  <MonitorSmartphone className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech Accessories</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Your one-stop shop for high-quality computer and mobile phone accessories. We stock reliable brands to keep you connected and productive.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Computer Accessories</h3>
                    <ul className="space-y-2">
                      {['Keyboards & Mice', 'Networking Cables', 'Flash Drives & Storage', 'Laptop Chargers'].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-red-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Phone Accessories</h3>
                    <ul className="space-y-2">
                      {['Fast Chargers & Cables', 'Earphones & Headsets', 'Power Banks', 'Phone Cases & Screen Protectors'].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-red-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link to="/products" className="inline-flex items-center text-red-600 font-semibold hover:text-red-800">
                  Browse Products <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
