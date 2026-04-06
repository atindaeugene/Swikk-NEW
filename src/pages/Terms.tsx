import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Rules and guidelines for using our services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services and Products</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify or discontinue any service or product without notice at any time. Prices for our products are subject to change without notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Warranties and Returns</h2>
          <p className="text-gray-600 mb-6">
            Products come with manufacturer warranties as specified at the time of purchase. Returns are subject to our return policy and must be made within the specified timeframe with original receipt and packaging.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
          <p className="text-gray-600">
            In no event shall Swikk Domains Computers, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
          </p>
        </div>
      </section>
    </div>
  );
}
