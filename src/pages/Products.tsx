import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    category: 'POS Systems',
    name: 'Complete Retail POS Bundle',
    description: 'Includes touch screen monitor, receipt printer, cash drawer, and barcode scanner.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'POS Systems',
    name: 'Thermal Receipt Printer',
    description: 'High-speed 80mm thermal receipt printer with auto-cutter. USB/LAN interfaces.',
    image: 'https://images.unsplash.com/photo-1620505155835-06011e50859b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'CCTV Systems',
    name: '4-Channel HD CCTV Kit',
    description: 'Complete kit with 4 HD cameras, DVR, 1TB HDD, and installation cables.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2064&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'CCTV Systems',
    name: 'IP Dome Camera',
    description: '1080p IP Dome camera with night vision and motion detection.',
    image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=1983&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'Computer Accessories',
    name: 'Wireless Keyboard & Mouse Combo',
    description: 'Ergonomic wireless keyboard and optical mouse set. Long battery life.',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2071&auto=format&fit=crop',
  },
  {
    id: 6,
    category: 'Phone Accessories',
    name: 'Fast Charging Power Bank',
    description: '20,000mAh high-capacity power bank with dual USB output and fast charging.',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=2070&auto=format&fit=crop',
  }
];

export default function Products() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Our Products</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              High-quality tech equipment and accessories available at our Mavoko store.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Price on Request</span>
                    <Link 
                      to="/contact" 
                      className="flex items-center text-red-600 font-semibold hover:text-red-800 bg-red-50 px-4 py-2 rounded-lg transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Request Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Looking for something specific? We source a wide variety of tech products.</p>
            <a 
              href="https://wa.me/254735074910?text=Hello,%20I'm%20looking%20for%20a%20specific%20product."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-green-500 hover:bg-green-600 transition-colors shadow-lg"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
