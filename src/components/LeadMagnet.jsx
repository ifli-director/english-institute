"use client";
import { useMemo } from "react";
import { CheckCircle, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import sampleImage from "../../public/freeS.png";
import { SAMPLE_CLASSROOM_URL } from "@/lib/site";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const benefits = [
  { icon: FileText, text: "Join a sample IFLI Google Classroom" },
  { icon: Sparkles, text: "1h recording of a sample session" },
  { icon: CheckCircle, text: "A taste of our digital library" },
];

export default function LeadMagnetSection() {
  const particlePositions = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        left: `${(i * 13.7 + 23) % 100}%`,
        top: `${(i * 17.3 + 15) % 100}%`,
        duration: 3 + (i % 3),
        delay: (i % 5) * 0.4,
      })),
    []
  );

  return (
    <section
      id="free-resources"
      className="relative overflow-hidden bg-linear-to-br from-brand-blue via-[#011a55] to-brand-blue-dark px-6 py-24 text-white md:py-32"
    >
      {/* Soft animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-10 top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-brand-red/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/20"
            style={{ left: particle.left, top: particle.top }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div {...fadeInUp}>
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-[0px_30px_50px_-12px_rgba(0,0,0,0.30),0px_15px_30px_-12px_rgba(0,0,0,0.18)] md:p-16">
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Left: text and button */}
              <div className="order-2 md:order-1">
                <motion.div
                  className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-red-pale px-4 py-2 text-brand-red"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-bold">FREE Resources</span>
                </motion.div>

                <h2 className="mb-6 text-3xl font-extrabold tracking-[-0.04em] text-brand-blue-dark md:text-4xl lg:text-5xl">
                  Get INSTANT Access to FREE SAMPLE RESOURCES
                </h2>

                <p className="mb-6 text-lg leading-relaxed text-brand-blue-muted">
                  See how IFLI will help you speak English confidently, no commitment, just value.
                </p>

                <ul className="mb-8 space-y-3">
                  {benefits.map(({ icon: Icon, text }, index) => (
                    <motion.li
                      key={text}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red-pale">
                        <Icon className="h-4 w-4 text-brand-red" aria-hidden="true" />
                      </span>
                      <span className="font-semibold text-brand-blue-dark">{text}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href={SAMPLE_CLASSROOM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-brand-red px-6 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-brand-red-dark"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Your Sample IFLI Google Classroom
                </motion.a>
              </div>

              {/* Right: photo */}
              <div className="order-1 md:order-2">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <motion.div
                    className="absolute -inset-4 rounded-3xl bg-linear-to-r from-brand-blue to-brand-red opacity-20 blur-2xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <Image
                    src={sampleImage}
                    alt="IFLI learners joining a sample class"
                    sizes="(min-width: 768px) 384px, 90vw"
                    className="relative z-10 mx-auto w-full max-w-sm rounded-2xl drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
