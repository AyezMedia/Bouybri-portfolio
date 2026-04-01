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

  return (
    <div className="min-h-screen scroll-smooth bg-[#08111f] text-[#f8f3ea]">
      <header className="sticky top-0 z-50 border-b border-[#f8f3ea]/10 bg-[#08111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#f8f3ea]/55">Portfolio</p>
            <h1 className="text-lg font-black text-[#f8f3ea]">Yahya Bouybri</h1>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#f8f3ea]/72 transition hover:text-[#f8f3ea]"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="mailto:yahyabouybri1@gmail.com"
            className="rounded-full bg-[#f8f3ea] px-4 py-2 text-sm font-semibold text-[#0d2342] transition hover:scale-[1.02]"
          >
            Hire Me
          </a>
        </div>
      </header>
      <section id="about" className="relative overflow-hidden border-b border-[#f8f3ea]/10 bg-gradient-to-br from-[#07101c] via-[#0d1b33] to-[#12345a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,243,234,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(196,214,255,0.12),transparent_26%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(248,243,234,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(248,243,234,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#f8f3ea]/65">
              Portfolio Website
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
              Yahya Bouybri
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-[#f8f3ea]/85 sm:text-2xl">
              Marketing & Business Development Manager
            </p>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#f8f3ea]/72 sm:text-lg">
              Results-driven marketing and logistics professional with 15 months of experience in delivery operations, business development, and digital marketing. Proven ability to acquire clients, build partnerships, and expand business networks.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:yahyabouybri1@gmail.com"
                className="rounded-2xl bg-[#f8f3ea] px-6 py-3 text-sm font-semibold text-[#0d2342] shadow-lg shadow-black/20 transition hover:scale-[1.02]"
              >
                Contact by Email
              </a>
              <a
                href="tel:+212640016052"
                className="rounded-2xl border border-[#f8f3ea]/20 bg-[#f8f3ea]/5 px-6 py-3 text-sm font-semibold text-[#f8f3ea] transition hover:bg-[#f8f3ea]/10"
              >
                Call Now
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/6 p-5 backdrop-blur">
                <p className="text-3xl font-black text-[#f8f3ea]">15+</p>
                <p className="mt-2 text-sm text-[#f8f3ea]/70">Months of professional experience</p>
              </div>
              <div className="rounded-3xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/6 p-5 backdrop-blur">
                <p className="text-3xl font-black text-[#f8f3ea]">60–70%</p>
                <p className="mt-2 text-sm text-[#f8f3ea]/70">Shops in Agadir contacted and partnered</p>
              </div>
              <div className="rounded-3xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/6 p-5 backdrop-blur">
                <p className="text-3xl font-black text-[#f8f3ea]">3</p>
                <p className="mt-2 text-sm text-[#f8f3ea]/70">Working languages</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-[#f8f3ea]/10 bg-[#f8f3ea]/6 p-3 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="relative flex min-h-[420px] items-end overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#f8f3ea]/25 via-[#17365d] to-[#08111f] p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,243,234,0.26),transparent_30%)]" />
                <div className="relative w-full">
                  <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-[#f8f3ea]/20 bg-[#f8f3ea]/10 text-center text-sm text-[#f8f3ea]/65 shadow-2xl shadow-black/30">
                    <img
                      src="/mypic.png"
                      alt="Yahya Bouybri"
                      className="w-64 h-64 rounded-full object-cover"
                    />
                  </div>
                  <div className="mt-6 rounded-[1.5rem] border border-[#f8f3ea]/10 bg-[#0a162a]/75 p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f8f3ea] text-2xl font-black text-[#0d2342]">
                        YB
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#f8f3ea]">Quick Profile</h2>
                        <p className="text-sm text-[#f8f3ea]/60">Agadir, Morocco</p>
                      </div>
                    </div>

                    <div className="mt-8 space-y-4 text-sm text-[#f8f3ea]/85">
                      <div className="rounded-2xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/5 p-4">
                        <p className="text-[#f8f3ea]/50">Phone</p>
                        <p className="mt-1 font-medium">+212 640 016 052</p>
                      </div>
                      <div className="rounded-2xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/5 p-4">
                        <p className="text-[#f8f3ea]/50">Email</p>
                        <p className="mt-1 font-medium break-all">yahyabouybri1@gmail.com</p>
                      </div>
                      <div className="rounded-2xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/5 p-4">
                        <p className="text-[#f8f3ea]/50">Focus</p>
                        <p className="mt-1 font-medium">Business development, digital marketing, partnerships, growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <a href="mailto:yahyabouybri1@gmail.com" className="rounded-2xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/6 p-4 text-center text-sm font-semibold text-[#f8f3ea] transition hover:bg-[#f8f3ea]/10">
                Email
              </a>
              <a href="tel:+212640016052" className="rounded-2xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/6 p-4 text-center text-sm font-semibold text-[#f8f3ea] transition hover:bg-[#f8f3ea]/10">
                Phone
              </a>
              <a href="https://wa.me/212640016052" className="rounded-2xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/6 p-4 text-center text-sm font-semibold text-[#f8f3ea] transition hover:bg-[#f8f3ea]/10">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#17365d] bg-[#0d1d35] p-8 shadow-lg shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f8f3ea]/50">About</p>
            <h2 className="mt-3 text-3xl font-black text-[#f8f3ea]">Professional Summary</h2>
            <p className="mt-6 text-base leading-8 text-[#f8f3ea]/78">
              Yahya Bouybri is a results-driven marketing and logistics professional with experience in delivery operations, business development, and digital marketing. He has demonstrated a strong ability to acquire clients, build partnerships, support operations, and improve customer relationships through strategy and communication.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d9ccb6]/25 bg-[#f8f3ea] p-8 text-[#0d2342] shadow-lg shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#0d2342]/55">Core Skills</p>
            <h2 className="mt-3 text-3xl font-black">What He Does Best</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#0d2342]/12 bg-[#0d2342]/5 px-4 py-2 text-sm text-[#0d2342]/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <div className="rounded-[2rem] border border-[#17365d] bg-gradient-to-br from-[#0c1a30] to-[#102848] p-8 shadow-xl shadow-black/20 md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f8f3ea]/50">Experience</p>
          <h2 className="mt-3 text-3xl font-black text-[#f8f3ea]">Professional Journey</h2>
          <div className="mt-10 grid gap-6">
            {experience.map((job) => (
              <div key={job.title} className="rounded-[1.5rem] border border-[#f8f3ea]/30 bg-[#08111f]/75 p-6 transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#f8f3ea]">{job.title}</h3>
                    <p className="mt-1 text-[#f8f3ea]/72">{job.company}</p>
                  </div>
                  <span className="rounded-full border border-[#f8f3ea]/10 bg-[#f8f3ea]/6 px-4 py-2 text-sm text-[#f8f3ea]/78">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-6 grid gap-3 text-[#f8f3ea]/78">
                  {job.points.map((point) => (
                    <li key={point} className="rounded-2xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/[0.03] px-4 py-3">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#d9ccb6]/25 bg-[#f8f3ea] p-8 text-[#0d2342] shadow-lg shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#0d2342]/55">Projects & Achievements</p>
            <h2 className="mt-3 text-3xl font-black">Impact Highlights</h2>
            <ul className="mt-6 space-y-4 text-[#0d2342]/85">
              {achievements.map((item) => (
                <li key={item} className="rounded-2xl border border-[#0d2342]/10 bg-[#0d2342]/5 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[#17365d] bg-[#0d1d35] p-8 shadow-lg shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f8f3ea]/50">Professional Development</p>
            <h2 className="mt-3 text-3xl font-black text-[#f8f3ea]">Training & Growth Areas</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {development.map((item) => (
                <div key={item} className="rounded-2xl border border-[#f8f3ea]/10 bg-[#08111f]/60 p-4 text-[#f8f3ea]/82">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[#17365d] bg-[#0d1d35] p-8 shadow-lg shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f8f3ea]/50">Languages</p>
            <h2 className="mt-3 text-3xl font-black text-[#f8f3ea]">Communication</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#f8f3ea]/10 bg-[#08111f]/60 p-5">
                <p className="text-lg font-bold text-[#f8f3ea]">Arabic</p>
                <p className="mt-1 text-[#f8f3ea]/65">Native</p>
              </div>
              <div className="rounded-2xl border border-[#f8f3ea]/10 bg-[#08111f]/60 p-5">
                <p className="text-lg font-bold text-[#f8f3ea]">English</p>
                <p className="mt-1 text-[#f8f3ea]/65">Intermediate</p>
              </div>
              <div className="rounded-2xl border border-[#f8f3ea]/10 bg-[#08111f]/60 p-5">
                <p className="text-lg font-bold text-[#f8f3ea]">French</p>
                <p className="mt-1 text-[#f8f3ea]/65">Basic</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-[#f8f3ea] via-[#efe3d1] to-[#d8c7b0] p-[1px] shadow-xl shadow-black/20">
            <div className="h-full rounded-[2rem] bg-[#0c1a30] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f8f3ea]/50">Let’s Work Together</p>
              <h2 className="mt-3 text-3xl font-black text-[#f8f3ea]">Open to Growth Opportunities</h2>
              <p className="mt-5 leading-8 text-[#f8f3ea]/75">
                Available for marketing strategy, business development, partnership building, branding support, and digital growth projects.
              </p>
              <div className="mt-8 space-y-4 text-sm text-[#f8f3ea]/85">
                <a href="mailto:yahyabouybri1@gmail.com" className="block rounded-2xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/6 px-5 py-4 hover:bg-[#f8f3ea]/10">
                  yahyabouybri1@gmail.com
                </a>
                <a href="tel:+212640016052" className="block rounded-2xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/6 px-5 py-4 hover:bg-[#f8f3ea]/10">
                  +212 640 016 052
                </a>
                <div className="rounded-2xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/6 px-5 py-4">
                  Agadir, Morocco
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
