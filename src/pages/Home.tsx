import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, MonitorSmartphone, Server, ArrowRight, CheckCircle2, Star, PhoneCall } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 border border-red-400/30 text-red-200 text-sm font-semibold tracking-wider mb-6">
                MAVOKO'S PREMIER TECH SUPPLIER
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Your Trusted Tech Solutions Partner in <span className="text-red-500">Mavoko</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Empowering businesses and homes with reliable POS systems, advanced CCTV surveillance, and premium computer & phone accessories.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+254735074910"
                  className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-red-900 bg-white hover:bg-gray-50 transition-colors shadow-lg"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/254735074910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-green-500 text-base font-bold rounded-lg text-white bg-green-500 hover:bg-green-600 hover:border-green-600 transition-colors shadow-lg"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative bottom edge */}
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Quick Highlights / Services Overview */}
      <section className="py-16 bg-gray-50 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">POS Systems</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Streamline your business operations with our modern Point of Sale systems. Perfect for supermarkets, retail shops, and restaurants in Mavoko.
              </p>
              <Link to="/services" className="text-red-600 font-semibold flex items-center hover:text-red-800">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CCTV Installation</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Protect your property with high-definition surveillance cameras. We offer professional installation and maintenance for homes and businesses.
              </p>
              <Link to="/services" className="text-red-600 font-semibold flex items-center hover:text-red-800">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <MonitorSmartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tech Accessories</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Premium phone and computer accessories including chargers, cases, keyboards, mice, and networking devices at competitive prices.
              </p>
              <Link to="/products" className="text-red-600 font-semibold flex items-center hover:text-red-800">
                View products <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Businesses in Mavoko Trust Us
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  At Swikk Domains Computers, we don't just sell equipment; we provide end-to-end tech solutions that help your business thrive and keep your premises secure.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: 'Affordable Pricing', desc: 'Quality tech solutions that fit your budget without compromising on reliability.' },
                    { title: 'Fast & Local Support', desc: 'Based right here in Mavoko, we respond quickly to your installation and maintenance needs.' },
                    { title: 'Reliable Equipment', desc: 'We source our POS systems, cameras, and accessories from trusted global manufacturers.' }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                        <p className="mt-1 text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                  alt="Technician working on equipment" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl">Expert Installation</p>
                    <p className="text-gray-200">Professional setup for all our systems</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it. Here's what businesses in Mavoko have experienced working with us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John K.', role: 'Supermarket Owner', text: 'Swikk Domains installed our new POS system. The transition was smooth, and their training was excellent. Highly recommended!' },
              { name: 'Sarah M.', role: 'Homeowner', text: 'I feel much safer after they installed CCTV cameras around my compound. The mobile app setup was very helpful.' },
              { name: 'David O.', role: 'Office Manager', text: 'Our go-to place for all computer accessories. They always have what we need in stock and their prices are very fair.' }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Tech?</h2>
          <p className="text-xl text-red-100 mb-10">
            Visit our shop in Mavoko or contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-red-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-base font-bold rounded-lg text-white hover:bg-red-700 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
