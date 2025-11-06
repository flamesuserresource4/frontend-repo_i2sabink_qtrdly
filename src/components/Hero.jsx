import { motion } from "framer-motion";
import { ArrowRight, Shield, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <g fill="url(#g)">
            {Array.from({ length: 40 }).map((_, i) => (
              <circle key={i} cx={Math.random() * 800} cy={Math.random() * 600} r={Math.random() * 3 + 1} />
            ))}
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 lg:px-8 lg:pt-28 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <Shield className="h-4 w-4 text-amber-400" />
              <span className="tracking-wide">PROAKTIF — Professional • Accountable • Innovative</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Badan Pendapatan Daerah Kabupaten Agam
            </h1>
            <p className="text-blue-100 max-w-2xl">
              As a regional revenue authority, we are committed to delivering transparent, reliable, and technologically empowered services. With a spirit of professionalism, accountability, and continuous innovation, we strive to support Agam’s growth and improve public welfare.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 font-medium text-blue-900 shadow hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-blue-800 transition"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#values"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
              >
                Our Values
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-72 sm:h-96 lg:h-[28rem]"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-amber-400/20 to-blue-300/30 blur-2xl" />
            <div className="relative h-full w-full rounded-xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <div className="h-full w-full grid grid-cols-6 grid-rows-4 gap-2">
                <div className="col-span-4 row-span-4 rounded-md bg-blue-600/40 ring-1 ring-white/10 flex items-center justify-center">
                  <Building2 className="h-20 w-20 text-amber-300" />
                </div>
                <div className="col-span-2 row-span-2 rounded-md bg-blue-500/40 ring-1 ring-white/10" />
                <div className="col-span-2 row-span-2 rounded-md bg-blue-500/30 ring-1 ring-white/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
