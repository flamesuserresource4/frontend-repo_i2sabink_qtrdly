import { motion } from "framer-motion";
import { FileText, Info, CreditCard } from "lucide-react";

const services = [
  {
    title: "Tax Services",
    desc: "Guidance and processing for regional tax obligations and compliance.",
    icon: FileText,
  },
  {
    title: "Public Information",
    desc: "Access to regulations, statistics, and up-to-date announcements.",
    icon: Info,
  },
  {
    title: "Payment Guidance",
    desc: "Step-by-step instructions for secure and convenient payments.",
    icon: CreditCard,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900">
              Services Overview
            </h2>
            <p className="mt-2 text-blue-800/80">
              Explore our key services designed to serve the people of Agam.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-blue-700 text-white px-4 py-2 shadow hover:bg-blue-800 transition"
          >
            Contact Us
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-blue-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-blue-800/80 leading-relaxed">{s.desc}</p>
              <button className="mt-5 inline-flex text-sm font-medium text-blue-700 hover:text-blue-900">
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 font-medium text-blue-900 shadow hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200 transition"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
