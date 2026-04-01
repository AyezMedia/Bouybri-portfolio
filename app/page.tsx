"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function YahyaBouybriPortfolio() {
  const navItems = ["About", "Skills", "Experience", "Contact"];
  const skills = [
    "Marketing Strategy",
    "Business Development",
    "Sales & Closing",
    "Client Relationship Management",
    "Market Research & Benchmarking",
    "Last-Mile Delivery Operations",
    "Partnership Development",
    "Data Analysis",
    "Problem Solving",
  ];

  const experience = [
    {
      title: "Digital Marketing Consultant",
      company: "Freelancing",
      period: "2024 – 2026",
      points: [
        "Managed social media accounts for small businesses.",
        "Created branded content and advertising materials.",
        "Shot and edited promotional videos and reels.",
        "Revived inactive business pages.",
        "Designed structured communication systems for clients.",
        "Provided branding and growth consulting.",
      ],
    },
    {
      title: "Commercial & Marketing Officer",
      company: "Exxpress Delivery Company, Agadir",
      period: "2024 – 2026 (15 months)",
      points: [
        "Contacted and partnered with 60–70% of shops in Agadir.",
        "Developed commercial strategies to increase client acquisition.",
        "Managed social media and promotional campaigns.",
        "Built strong relationships with local businesses and agencies.",
        "Supported operational coordination and courier management.",
        "Improved customer retention through professional communication.",
      ],
    },
  ];

  const achievements = [
    "Built structured marketing systems for delivery companies.",
    "Developed advertising scripts in Arabic and Darija.",
    "Created long-term growth plans for startups.",
    "Supported brand positioning for local businesses.",
  ];

  const development = [
    "Marketing Strategy & Brand Positioning",
    "Sales & Closing Techniques",
    "Consumer Psychology",
    "Digital Marketing (Meta, TikTok Ads)",
    "Market Research & Benchmarking",
    "Data Analysis",
    "Business Development",
  ];

  const tools = ["Meta Ads", "TikTok Ads", "Canva", "CapCut", "Excel", "CRM"];

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen scroll-smooth bg-[#f8f3ea] text-[#0d2342] transition-colors duration-300 dark:bg-[#08111f] dark:text-[#f8f3ea]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f3ea]/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#08111f]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#0d2342]/55 dark:text-[#f8f3ea]/55">
              Portfolio
            </p>
            <h1 className="text-lg font-black">Yahya Bouybri</h1>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#0d2342]/70 transition hover:text-[#0d2342] dark:text-[#f8f3ea]/72 dark:hover:text-[#f8f3ea]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="rounded-full border border-black/10 bg-black/5 p-2 transition hover:scale-105 dark:border-white/10 dark:bg-white/5"
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <a
              href="mailto:yahyabouybri1@gmail.com"
              className="rounded-full bg-[#0d2342] px-4 py-2 text-sm font-semibold text-[#f8f3ea] transition hover:scale-[1.03] dark:bg-[#f8f3ea] dark:text-[#0d2342]"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      <section
        id="about"
        className="relative overflow-hidden border-b border-black/10 bg-gradient-to-br from-[#ede2d4] via-[#f8f3ea] to-[#dce7f7] dark:border-white/10 dark:from-[#07101c] dark:via-[#0d1b33] dark:to-[#12345a]"
      >
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:42px_42px] dark:[background-image:linear-gradient(rgba(248,243,234,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(248,243,234,0.08)_1px,transparent_1px)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#0d2342]/65 dark:text-[#f8f3ea]/65">
              Portfolio Website
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
              Yahya Bouybri
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-[#0d2342]/80 dark:text-[#f8f3ea]/85 sm:text-2xl">
              Marketing & Business Development Manager
            </p>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#0d2342]/72 dark:text-[#f8f3ea]/72 sm:text-lg">
              Results-driven marketing and logistics professional with 15 months
              of experience in delivery operations, business development, and
              digital marketing.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:yahyabouybri1@gmail.com"
                className="rounded-2xl bg-[#0d2342] px-6 py-3 text-sm font-semibold text-[#f8f3ea] shadow-lg transition hover:-translate-y-1 hover:scale-[1.03] dark:bg-[#f8f3ea] dark:text-[#0d2342]"
              >
                Contact by Email
              </a>
              <a
                href="tel:+212640016052"
                className="rounded-2xl border border-black/15 bg-black/5 px-6 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:bg-black/10 dark:border-[#f8f3ea]/20 dark:bg-[#f8f3ea]/5 dark:hover:bg-[#f8f3ea]/10"
              >
                Call Now
              </a>
              <a
                href="/MyCV.pdf"
                download
                className="rounded-2xl border border-black/15 bg-black/5 px-6 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:bg-black/5 dark:border-[#f8f3ea]/20 dark:bg-[#f8f3ea]/5 dark:hover:bg-[#f8f3ea]/10"
              >
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/yahya-bouybri-9925602a3/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-black/15 bg-transparent px-6 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:bg-black/5 dark:border-[#f8f3ea]/20 dark:bg-[#f8f3ea]/5 dark:hover:bg-[#f8f3ea]/10"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["15+ Months", "60–70% Shops", "3 Languages"].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="rounded-3xl border border-black/10 bg-white/40 p-5 backdrop-blur dark:border-[#f8f3ea]/10 dark:bg-[#f8f3ea]/6"
                >
                  <p className="text-xl font-black">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/30 p-3 shadow-2xl backdrop-blur dark:border-[#f8f3ea]/10 dark:bg-[#f8f3ea]/6">
              <div className="relative flex min-h-[420px] items-end overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#ffffff] via-[#dce7f7] to-[#f1e7d6] p-8 dark:from-[#f8f3ea]/25 dark:via-[#17365d] dark:to-[#08111f]">
                <div className="relative w-full">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-black/10 bg-white/40 shadow-2xl dark:border-[#f8f3ea]/20 dark:bg-[#f8f3ea]/10"
                  >
                    <img
                      src="/mypic.png"
                      alt="Yahya Bouybri"
                      className="h-64 w-64 rounded-full object-cover"
                    />
                  </motion.div>

                  <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-white/55 p-6 dark:border-[#f8f3ea]/10 dark:bg-[#0a162a]/75">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0d2342] text-2xl font-black text-[#f8f3ea] dark:bg-[#f8f3ea] dark:text-[#0d2342]">
                        YB
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">Quick Profile</h2>
                        <p className="text-sm text-[#0d2342]/60 dark:text-[#f8f3ea]/60">
                          Agadir, Morocco
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 space-y-4 text-sm">
                      {[
                        ["Phone", "+212 640 016 052"],
                        ["Email", "yahyabouybri1@gmail.com"],
                        [
                          "Focus",
                          "Business development, digital marketing, partnerships, growth",
                        ],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-black/10 bg-black/5 p-4 dark:border-[#f8f3ea]/10 dark:bg-[#f8f3ea]/5"
                        >
                          <p className="text-[#0d2342]/50 dark:text-[#f8f3ea]/50">
                            {label}
                          </p>
                          <p className="mt-1 font-medium break-all">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Email", "mailto:yahyabouybri1@gmail.com"],
                ["Phone", "tel:+212640016052"],
                ["WhatsApp", "https://wa.me/212640016052"],
              ].map(([label, href]) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="rounded-2xl border border-black/10 bg-white/35 p-4 text-center text-sm font-semibold transition dark:border-[#f8f3ea]/10 dark:bg-[#f8f3ea]/6"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="skills"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-16 md:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white/45 p-8 shadow-lg dark:border-[#17365d] dark:bg-[#0d1d35]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#0d2342]/50 dark:text-[#f8f3ea]/50">
              About
            </p>
            <h2 className="mt-3 text-3xl font-black">Professional Summary</h2>
            <p className="mt-6 text-base leading-8 text-[#0d2342]/78 dark:text-[#f8f3ea]/78">
              Yahya Bouybri is a results-driven marketing and logistics
              professional with experience in delivery operations, business
              development, and digital marketing.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[#0d2342] p-8 text-[#f8f3ea] shadow-lg dark:border-[#d9ccb6]/25 dark:bg-[#f8f3ea] dark:text-[#0d2342]">
            <p className="text-sm uppercase tracking-[0.3em] opacity-55">
              Core Skills
            </p>
            <h2 className="mt-3 text-3xl font-black">What I Do Best</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.07 }}
                  className="rounded-full border border-current/15 bg-current/5 px-4 py-2 text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

<motion.section
  id="experience"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.15 }}
  variants={fadeUp}
  transition={{ duration: 0.6 }}
  className="mx-auto max-w-7xl px-6 pb-16 md:px-10"
>
  <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-gradient-to-br from-[#dce7f7] via-[#eef4fb] to-[#f8f3ea] p-8 shadow-xl md:p-10 dark:border-[#17365d] dark:from-[#081a33] dark:via-[#0d2242] dark:to-[#07101c]">
    
    <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#7dd3fc]/20 blur-3xl dark:bg-[#38bdf8]/20" />
    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f8f3ea]/30 blur-3xl dark:bg-[#60a5fa]/10" />

    <p className="relative text-sm uppercase tracking-[0.3em] text-[#0d2342]/50 dark:text-[#f8f3ea]/50">
      Experience
    </p>
    <h2 className="relative mt-3 text-3xl font-black text-[#0d2342] dark:text-[#f8f3ea]">
      Professional Journey
    </h2>
    <p className="relative mt-3 max-w-2xl text-sm leading-7 text-[#0d2342]/65 dark:text-[#f8f3ea]/65">
      A journey built on marketing strategy, client acquisition, business development, and digital growth.
    </p>

    <div className="relative mt-12">
      <div className="absolute left-[22px] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#0d2342]/20 to-transparent dark:via-[#f8f3ea]/20 md:block" />

      <div className="space-y-8">
        {experience.map((job, index) => (
          <motion.div
            key={job.title}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="relative md:pl-16"
          >
            <div className="absolute left-0 top-5 hidden md:flex">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-bold text-[#0d2342] shadow-lg dark:border-[#f8f3ea]/15 dark:bg-[#0d1d35] dark:text-[#f8f3ea]">
                {index + 1}
                <div className="absolute inset-0 rounded-full bg-[#38bdf8]/20 blur-md dark:bg-[#60a5fa]/20" />
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[1.8rem] border border-black/10 bg-white/60 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl dark:border-[#f8f3ea]/10 dark:bg-[#08111f]/80">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0d2342] via-[#60a5fa] to-[#cbd5e1] dark:from-[#38bdf8] dark:via-[#60a5fa] dark:to-transparent" />

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d2342]/75 dark:border-[#f8f3ea]/10 dark:bg-[#f8f3ea]/5 dark:text-[#f8f3ea]/75">
                      {job.company}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#0d2342] transition group-hover:translate-x-1 dark:text-[#f8f3ea]">
                    {job.title}
                  </h3>
                </div>

                <span className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-semibold text-[#0d2342]/80 shadow-sm dark:border-[#f8f3ea]/10 dark:bg-[#102848] dark:text-[#f8f3ea]/85">
                  {job.period}
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {job.points.map((point, pointIndex) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pointIndex * 0.04 }}
                    className="flex items-start gap-3 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 dark:border-[#f8f3ea]/10 dark:bg-[#f8f3ea]/[0.03]"
                  >
                    <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#0d2342] dark:bg-[#7dd3fc]" />
                    <p className="text-sm leading-7 text-[#0d2342]/78 dark:text-[#f8f3ea]/78">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 pb-16 md:px-10"
      >
        <div className="mb-8 rounded-[2rem] border border-black/10 bg-white/45 p-8 shadow-lg dark:border-[#17365d] dark:bg-[#0d1d35]">
          <p className="text-sm uppercase tracking-[0.3em] text-[#0d2342]/50 dark:text-[#f8f3ea]/50">
            Tools
          </p>
          <h2 className="mt-3 text-3xl font-black">Tools I Work With</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ y: -4, scale: 1.05 }}
                className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm dark:border-[#f8f3ea]/10 dark:bg-[#f8f3ea]/6"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-black/10 bg-[#0d2342] p-8 text-[#f8f3ea] shadow-lg dark:border-[#d9ccb6]/25 dark:bg-[#f8f3ea] dark:text-[#0d2342]">
            <p className="text-sm uppercase tracking-[0.3em] opacity-55">
              Projects & Achievements
            </p>
            <h2 className="mt-3 text-3xl font-black">Impact Highlights</h2>
            <ul className="mt-6 space-y-4">
              {achievements.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 6 }}
                  className="rounded-2xl border border-current/10 bg-current/5 p-4"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/45 p-8 shadow-lg dark:border-[#17365d] dark:bg-[#0d1d35]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#0d2342]/50 dark:text-[#f8f3ea]/50">
              Professional Development
            </p>
            <h2 className="mt-3 text-3xl font-black">Training & Growth Areas</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {development.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-black/10 bg-black/5 p-4 dark:border-[#f8f3ea]/10 dark:bg-[#08111f]/60"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 pb-20 md:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white/45 p-8 shadow-lg dark:border-[#17365d] dark:bg-[#0d1d35]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#0d2342]/50 dark:text-[#f8f3ea]/50">
              Languages
            </p>
            <h2 className="mt-3 text-3xl font-black">Communication</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Arabic", "Native"],
                ["English", "Intermediate"],
                ["French", "Basic"],
              ].map(([lang, level]) => (
                <motion.div
                  key={lang}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-black/10 bg-black/5 p-5 dark:border-[#f8f3ea]/10 dark:bg-[#08111f]/60"
                >
                  <p className="text-lg font-bold">{lang}</p>
                  <p className="mt-1 text-[#0d2342]/65 dark:text-[#f8f3ea]/65">
                    {level}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[2rem] bg-gradient-to-br from-[#0d2342] via-[#17365d] to-[#2d4f77] p-[1px] shadow-xl dark:from-[#f8f3ea] dark:via-[#efe3d1] dark:to-[#d8c7b0]"
          >
            <div className="h-full rounded-[2rem] bg-[#f8f3ea] p-8 dark:bg-[#0c1a30]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#0d2342]/50 dark:text-[#f8f3ea]/50">
                Let’s Work Together
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Open to Growth Opportunities
              </h2>
              <p className="mt-5 leading-8 text-[#0d2342]/75 dark:text-[#f8f3ea]/75">
                Available for marketing strategy, business development,
                partnership building, branding support, and digital growth
                projects.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <a
                  href="mailto:yahyabouybri1@gmail.com"
                  className="block rounded-2xl border border-black/10 bg-black/5 px-5 py-4 transition hover:bg-black/10 dark:border-[#f8f3ea]/10 dark:bg-[#f8f3ea]/6 dark:hover:bg-[#f8f3ea]/10"
                >
                  yahyabouybri1@gmail.com
                </a>
                <a
                  href="tel:+212640016052"
                  className="block rounded-2xl border border-black/10 bg-black/5 px-5 py-4 transition hover:bg-black/10 dark:border-[#f8f3ea]/10 dark:bg-[#f8f3ea]/6 dark:hover:bg-[#f8f3ea]/10"
                >
                  +212 640 016 052
                </a>
                <div className="rounded-2xl border border-black/10 bg-black/5 px-5 py-4 dark:border-[#f8f3ea]/10 dark:bg-[#f8f3ea]/6">
                  Agadir, Morocco
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}