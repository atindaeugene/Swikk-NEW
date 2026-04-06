import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              How we handle and protect your data.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            We collect information you provide directly to us when you request a quote, make a purchase, or contact us for support. This may include your name, email address, phone number, and business details.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you about products, services, and offers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
          <p className="text-gray-600 mb-6">
            We do not share your personal information with third parties except as necessary to provide our services or as required by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at info@swikkdomains.co.ke.
          </p>
        </div>
      </section>
    </div>
  );
}
