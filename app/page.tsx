import Image from "next/image";
import ApplicationForm from "@/components/ApplicationForm";

const stats = [
  { number: "36", label: "Years in Practice" },
  { number: "35k+", label: "Patients Treated" },
  { number: "7,500", label: "Sq. Ft. Facility" },
  { number: "#1", label: "Rated in Winnebago Co." },
];

const features = [
  {
    icon: "\uD83C\uDFCA",
    title: "Therapeutic Pool",
    desc: "Only private practice in Oshkosh with aquatic therapy. Expand your treatment capabilities.",
  },
  {
    icon: "\uD83E\uDD1D",
    title: "Real Autonomy",
    desc: "Treat patients the way you know is right. No quotas, no cookie-cutter protocols.",
  },
  {
    icon: "\uD83D\uDCC5",
    title: "Flexible Scheduling",
    desc: "Full-time or part-time, we build schedules that respect your life.",
  },
  {
    icon: "\uD83C\uDF31",
    title: "Growth Supported",
    desc: "Continuing education, mentorship from experienced clinicians, room to specialize.",
  },
];

const benefits = [
  "\uD83D\uDCB0 Competitive Base Pay + Bonus",
  "\uD83D\uDCC8 401(k) with Company Match",
  "\uD83C\uDFD6\uFE0F Paid Time Off",
  "\uD83D\uDCDA Continuing Education",
  "\u23F0 Flexible Schedule",
  "\uD83C\uDFE5 Full-Time or Part-Time",
  "\uD83E\uDD38 Professional Yet Casual Culture",
  "\uD83D\uDD2C Diverse Caseload",
];

const qualifications = [
  "Licensed Physical Therapist in Wisconsin (or eligibility to obtain WI licensure)",
  "Strong foundation in manual therapy \u2014 McKenzie Approach, muscle energy, myofascial release, joint mobilization",
  "Comfortable treating patients of all ages and abilities, including athletes",
  "Positive, self-directed communicator who partners well with patients and referring physicians",
  "Motivated to be part of the Oshkosh community, not just a clinic employee",
  "Eager to learn and grow in a team-oriented environment",
  "New grads with strong manual therapy foundations are welcome to apply",
];

export default function CareersPage() {
  return (
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Fox Valley Physical Therapy"
              width={44}
              height={44}
              className="brightness-0 invert"
            />
            <div className="hidden sm:block">
              <p className="text-white font-display font-bold text-sm leading-tight">
                Fox Valley PT
              </p>
              <p className="text-text-light text-xs">Oshkosh, Wisconsin</p>
            </div>
          </div>
          <a
            href="#apply"
            className="bg-teal hover:bg-teal-light text-white text-sm font-semibold px-5 py-2 rounded-lg transition"
          >
            Apply Now
          </a>
        </div>
        <div className="h-[2px] bg-gradient-to-r from-teal to-gold" />
      </nav>

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="opacity-0 animate-fade-up">
            <span className="inline-flex items-center gap-2 border border-gold/40 text-gold text-sm font-medium px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Now Hiring &middot; Oshkosh, WI
            </span>
          </div>

          <h1 className="mt-6 opacity-0 animate-fade-up animation-delay-100">
            <span className="block font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Physical Therapist
            </span>
            <span className="block font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-bright mt-2 tracking-tight">
              Join a Clinic That&apos;s Different
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            Oshkosh&apos;s oldest and highest-rated private practice is growing. We&apos;re
            looking for a hands-on PT who wants real autonomy, a remarkable team, and a
            facility unlike anything else in the Fox Valley.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-up animation-delay-200">
            <a
              href="#apply"
              className="bg-teal hover:bg-teal-light text-white font-semibold px-8 py-3 rounded-lg transition text-base"
            >
              Apply Now &rarr;
            </a>
            <a
              href="#why"
              className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-3 rounded-lg transition text-base"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-0 animate-fade-up animation-delay-300">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-center"
              >
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-teal-bright tracking-tight">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[2px] bg-gradient-to-r from-teal to-gold" />
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-20">
            {/* Why Fox Valley PT */}
            <section id="why">
              <p className="text-teal text-sm font-semibold tracking-wide uppercase">
                Why Fox Valley PT
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark mt-3 tracking-tight">
                A Private Practice That Actually Puts Its Team First
              </h2>
              <div className="mt-6 space-y-4 text-text-mid leading-relaxed">
                <p>
                  We&apos;re not a franchise or corporate chain with productivity quotas.
                  Founded in 1990 by Steve and Regina Sobojinski, every decision has been
                  made with the same philosophy: do right by patients, do right by your
                  people.
                </p>
                <p>
                  Our 7,500 sq. ft. facility includes a full therapeutic pool &mdash; the
                  only one at a private practice in Oshkosh &mdash; a complete gym, and the
                  space to do genuine one-on-one care. You&apos;ll join a team of PTs, PTAs,
                  and an Athletic Trainer with over 100 years of combined experience.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="bg-white border border-border rounded-xl p-5 transition hover:border-teal hover:shadow-md"
                  >
                    <h3 className="font-display font-semibold text-text-dark">
                      {f.title}
                    </h3>
                    <p className="text-text-mid text-sm mt-1.5 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Compensation & Benefits */}
            <section>
              <p className="text-teal text-sm font-semibold tracking-wide uppercase">
                Compensation &amp; Benefits
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark mt-3 tracking-tight">
                We Take Care of Our People
              </h2>
              <p className="mt-6 text-text-mid leading-relaxed">
                Competitive pay based on experience, with a performance bonus structure
                that rewards the quality work you&apos;re doing.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {benefits.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center bg-white border border-border text-text-dark text-sm font-medium px-4 py-2 rounded-full"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </section>

            {/* What We're Looking For */}
            <section>
              <p className="text-teal text-sm font-semibold tracking-wide uppercase">
                What We&apos;re Looking For
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark mt-3 tracking-tight">
                The Right Fit, Not Just the Right Resume
              </h2>
              <p className="mt-6 text-text-mid leading-relaxed">
                We&apos;re a hands-on, evidence-based clinic. We want a therapist invested
                in outcomes &mdash; and who wants to keep growing.
              </p>

              <ul className="mt-8 space-y-4">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-text-mid leading-relaxed">{q}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* About the Clinic */}
            <section>
              <p className="text-teal text-sm font-semibold tracking-wide uppercase">
                About the Clinic
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark mt-3 tracking-tight">
                Oshkosh&apos;s Most Trusted PT Practice Since 1990
              </h2>
              <div className="mt-6 space-y-4 text-text-mid leading-relaxed">
                <p>
                  Established by Steve Sobojinski OTR, CSCS and Regina Sobojinski PT, Fox
                  Valley Physical Therapy has grown into a 7,500 sq. ft. facility with a
                  team of 14 healthcare professionals. We specialize in one-on-one physical
                  therapy, occupational therapy, athletic training, and sports analysis.
                </p>
                <p>
                  Clinical specialties include the McKenzie Method, dry needling, Graston
                  technique, aquatic therapy, TMJ treatment, vestibular rehabilitation,
                  pediatric PT, and a full spectrum of orthopedic and sports medicine care.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column — Form */}
          <div className="lg:col-span-2 mt-16 lg:mt-0">
            <div id="apply" className="lg:sticky lg:top-24 space-y-6 scroll-mt-24">
              <ApplicationForm />

              {/* Clinic Info */}
              <div className="bg-cream rounded-xl p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-lg">{"\uD83D\uDCCD"}</span>
                  <span className="text-text-mid text-sm">
                    909 S. Washburn Street, Oshkosh, WI 54904
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">{"\uD83D\uDCDE"}</span>
                  <a
                    href="tel:+19202358966"
                    className="text-teal text-sm hover:text-teal-light transition"
                  >
                    (920) 235-8966
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">{"\uD83C\uDF10"}</span>
                  <a
                    href="https://www.foxvalleyphysicaltherapy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal text-sm hover:text-teal-light transition"
                  >
                    foxvalleyphysicaltherapy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/logo.webp"
            alt="Fox Valley Physical Therapy"
            width={52}
            height={52}
            className="brightness-0 invert mx-auto"
          />
          <p className="text-gray-400 text-sm mt-4">
            &copy; 2026 Fox Valley Physical Therapy &amp; Wellness Clinic &middot; 909 S.
            Washburn St., Oshkosh, WI 54904
          </p>
          <a
            href="https://www.foxvalleyphysicaltherapy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal text-sm hover:text-teal-light transition mt-2 inline-block"
          >
            foxvalleyphysicaltherapy.com
          </a>
        </div>
      </footer>
    </>
  );
}
