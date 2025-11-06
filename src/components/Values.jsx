import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Lightbulb } from "lucide-react";

const values = [
  {
    title: "Professional",
    desc:
      "We deliver services with expertise, courtesy, and a commitment to excellence.",
    icon: BadgeCheck,
  },
  {
    title: "Accountable",
    desc: "We uphold transparency and responsibility in every decision and action.",
    icon: ShieldCheck,
  },
  {
    title: "Innovative",
    desc: "We embrace technology and new ideas to continuously improve public service.",
    icon: Lightbulb,
  },
];

export default function Values() {
  return (
    <section id="values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900">
            Our Core Values
          </h2>
          <p className="mt-3 text-blue-700/80">
            PROAKTIF — Professional, Accountable, Innovative
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-blue-100 bg-gradient-to-b from-white to-blue-50/60 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-blue-900">{v.title}</h3>
              </div>
              <p className="mt-3 text-blue-800/80 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
