import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="py-16" id="about">
      <div className="w-full flex justify-center px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6}}
          viewport={{ once: true }}
          className="text-center relative w-full"
        >
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full" />
          <h2 className="text-3xl lg:text-6xl font-bold text-amber-300 mb-10">
            About Us
          </h2>
          <div className="w-[95%] lg:w-[90%] xl:w-[85%] mx-auto bg-gradient-to-r from-[#e0e7ff] via-[#c7d2fe] to-[#e0e7ff] border-l-[10px] border-indigo-500 shadow-2xl rounded-3xl p-8 sm:p-14 text-center">
            <p className="text-xl text-gray-800 mb-6 font-semibold">
              If it doesn’t connect or convert, we don’t do it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              We know there is no one-size-fits-all formula. That is why we
              believe in work done with a purpose and backed by data.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              <span className="font-semibold text-gray-900">Spark Tech</span> is
              a digital marketing agency in Chennai helping brands rise above
              the noise with strategies that are clear, creative, and
              conversion-ready.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We play with ideas that spark action and results that speak for
              themselves.
            </p>

            <div className="flex justify-center">
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-8"
              >
                Know More About Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
