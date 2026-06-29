import Image from "next/image";
import ApplicationForm from "@/components/ApplicationForm";

export default function CareersPage() {
  return (
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image
              src="/FVPT logo.webp"
              alt="Fox Valley Physical Therapy"
              width={44}
              height={44}
            />
            <div className="hidden sm:block">
              <p className="text-navy font-display font-bold text-sm leading-tight">
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
          <h1 className="opacity-0 animate-fade-up">
            <span className="block font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Physical Therapist
            </span>
            <span className="block font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-bright mt-3 tracking-tight">
              Fox Valley Physical Therapy
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-3 text-sm opacity-0 animate-fade-up animation-delay-100">
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-gray-200 px-3 py-1.5 rounded-full">
              Oshkosh, WI
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-gray-200 px-3 py-1.5 rounded-full">
              Full-Time or Part-Time
            </span>
            <span className="inline-flex items-center gap-1.5 bg-gold/20 text-gold border border-gold/30 px-3 py-1.5 rounded-full font-semibold">
              $80,000&ndash;$100,000 + $5,000 Sign-On Bonus
            </span>
          </div>
        </div>
        <div className="h-[2px] bg-gradient-to-r from-teal to-gold" />
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-16">
            {/* The Short Version */}
            <section id="why">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark tracking-tight">
                The Short Version
              </h2>
              <div className="mt-6 space-y-4 text-text-mid leading-relaxed text-lg">
                <p>
                  We&apos;re a family-owned private practice in Oshkosh &mdash; independent
                  since 1990, #1-rated in Winnebago County, and the only private clinic in
                  the area with a therapeutic pool. We&apos;re hiring a Physical Therapist
                  who wants to actually treat patients without a productivity dashboard
                  breathing down their neck.
                </p>
                <p>
                  You&apos;ll see roughly 10&ndash;12 patients per day in one-on-one sessions.
                  No double-booking. No 15-minute eval slots. Real time to do real work.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="#apply"
                  className="bg-teal hover:bg-teal-light text-white font-semibold px-8 py-3 rounded-lg transition text-base inline-block"
                >
                  Apply Now &rarr;
                </a>
              </div>
            </section>

            {/* What the Day Actually Looks Like */}
            <section>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark tracking-tight">
                What the Day Actually Looks Like
              </h2>
              <ul className="mt-8 space-y-5">
                {[
                  { label: "Caseload", text: "10–12 patients per day, one-on-one. Strong focus on orthopedic rehabilitation, with post-surgical, spine, athletic, neurological, and aquatic cases mixed in." },
                  { label: "Evals", text: "Full 60 minutes. Follow-ups are 45–60 minutes." },
                  { label: "Documentation", text: "Built into your schedule. Our in-house SOAP note format is fast and clean — you finish your notes at work, not at 9pm on the couch." },
                  { label: "Schedule", text: "Monday–Friday. No weekends. No on-call. Full-time is 36–40 hours; part-time is flexible around your life." },
                  { label: "EMR", text: "Practice Perfect." },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="font-display font-bold text-text-dark min-w-[120px] sm:min-w-[140px] shrink-0">
                      {item.label}:
                    </span>
                    <span className="text-text-mid leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Compensation */}
            <section>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark tracking-tight">
                Compensation
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  <><strong>$5,000 sign-on bonus</strong> + paid relocation if you&apos;re moving to the Fox Valley</>,
                  <><strong>Base:</strong> $80,000&ndash;$100,000/year, depending on experience</>,
                  <><strong>Bonus:</strong> Performance bonus structure tied to quality outcomes, not volume quotas</>,
                  <><strong>401(k)</strong> with company match</>,
                  <><strong>PTO:</strong> Generous paid time off + vacation</>,
                  <><strong>CEUs:</strong> Continuing education budget, plus paid APTA membership</>,
                  <><strong>Licensure:</strong> WI license renewal reimbursed</>,
                  <><strong>Insurance:</strong> Assistance with health insurance options</>,
                  <><strong>Culture:</strong> Professional but casual. No scrubs required.</>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-teal" />
                    <span className="text-text-mid leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-cream border border-border rounded-xl p-6">
                <p className="text-text-dark leading-relaxed">
                  <strong>We&apos;re personal healthcare, not corporate healthcare.</strong>{" "}
                  That shows up everywhere &mdash; how we schedule, how we treat, how we
                  pay, how we treat each other. It&apos;s the reason therapists stay for
                  10+ years. Ask us about retention &mdash; we&apos;ll tell you the truth.
                </p>
              </div>
            </section>

            {/* Where This Role Goes */}
            <section>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark tracking-tight">
                Where This Role Goes
              </h2>
              <p className="mt-6 text-text-mid leading-relaxed">
                This isn&apos;t a seat-warmer position. We&apos;re hiring someone we want
                to invest in for the long haul.
              </p>
              <div className="mt-8 space-y-4">
                <div className="bg-white border border-border rounded-xl p-5">
                  <h3 className="font-display font-bold text-text-dark">
                    Year 1&ndash;3
                  </h3>
                  <p className="text-text-mid mt-2 leading-relaxed">
                    You&apos;ll earn a specialty certification &mdash; OCS, dry needling,
                    McKenzie credentialing, or whatever direction your interests pull. We
                    pay for it.
                  </p>
                </div>
                <div className="bg-white border border-border rounded-xl p-5">
                  <h3 className="font-display font-bold text-text-dark">
                    Year 5
                  </h3>
                  <p className="text-text-mid mt-2 leading-relaxed">
                    You have the opportunity to become an associate of the practice.
                    We&apos;ll talk specifics during the interview, but the door is real and
                    it&apos;s open.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-text-mid leading-relaxed italic">
                If you want a job that pays you to coast, we&apos;re not it. If you want a
                career path with a finish line that isn&apos;t &ldquo;manager of a satellite
                clinic,&rdquo; we should talk.
              </p>
            </section>

            {/* Why We're Different */}
            <section>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark tracking-tight">
                Why We&apos;re Different
              </h2>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Family-Built, Not VC-Owned",
                    desc: "Founded in 1990 by Steve Sobojinski (OTR, CSCS) and Regina Sobojinski (PT). Every decision since then has been made by people who treat patients, not a board of directors in another state.",
                  },
                  {
                    title: "Therapeutic Pool",
                    desc: "The only one at a private practice in Oshkosh. If you’ve never had aquatic therapy as a treatment tool, you’re going to like what it does for your post-op and chronic-pain caseloads.",
                  },
                  {
                    title: "A Real Team",
                    desc: "PTs, PTAs, and an Athletic Trainer with 100+ years of combined experience under one roof. You’ll have people to bounce cases off who actually know what they’re talking about.",
                  },
                  {
                    title: "Community-Embedded",
                    desc: "35,000+ patients treated. The local orthopedic surgeons, primary care docs, and athletic programs know us by name.",
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="bg-white border border-border rounded-xl p-5 transition hover:border-teal hover:shadow-md"
                  >
                    <h3 className="font-display font-bold text-text-dark">
                      {f.title}
                    </h3>
                    <p className="text-text-mid text-sm mt-2 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* What We're Looking For */}
            <section>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark tracking-tight">
                What We&apos;re Looking For
              </h2>

              <h3 className="font-display font-bold text-text-dark mt-8 text-lg">
                Required
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "WI PT license (or eligible to obtain it)",
                  "Strong skills and genuine interest in orthopedic rehabilitation — this is the core of our caseload",
                  "Strong manual therapy foundation — McKenzie, muscle energy, myofascial release, joint mobilization",
                  "Comfortable treating a mixed caseload across all ages",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-text-mid leading-relaxed">{q}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display font-bold text-text-dark mt-8 text-lg">
                Nice to Have
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Dry needling certification (or interest in getting one — we’ll support it)",
                  "Sports medicine, post-op, neurological, or aquatic therapy experience",
                  "New grads with strong manual training are welcome",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-text-light" />
                    <span className="text-text-mid leading-relaxed">{q}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-text-mid leading-relaxed">
                That&apos;s it. We don&apos;t need five paragraphs of soft skills. If
                you&apos;re a competent clinician who likes patients and wants to keep
                getting better, you&apos;re who we&apos;re looking for.
              </p>
            </section>

            {/* Got Questions */}
            <section className="bg-cream border border-border rounded-xl p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-text-dark">
                Got Questions Before You Apply?
              </h2>
              <p className="mt-4 text-text-mid leading-relaxed">
                Call or text the clinic at{" "}
                <a href="tel:+19202358966" className="text-teal font-semibold hover:text-teal-light transition">
                  (920) 235-8966
                </a>{" "}
                and ask for the hiring contact. We&apos;ll answer real questions about
                caseload, comp, culture, or whatever else you want to know before sending
                a resume.
              </p>
            </section>
          </div>

          {/* Right Column — Form */}
          <div className="lg:col-span-2 mt-16 lg:mt-0">
            <div id="apply" className="lg:sticky lg:top-24 space-y-6 scroll-mt-24">
              <ApplicationForm />

              {/* Clinic Info */}
              <div className="bg-cream rounded-xl p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-lg">{"📍"}</span>
                  <span className="text-text-mid text-sm">
                    909 S. Washburn Street, Oshkosh, WI 54904
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">{"📞"}</span>
                  <a
                    href="tel:+19202358966"
                    className="text-teal text-sm hover:text-teal-light transition"
                  >
                    (920) 235-8966
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">{"🌐"}</span>
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
      <footer className="bg-cream border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/FVPT logo.webp"
            alt="Fox Valley Physical Therapy"
            width={52}
            height={52}
            className="mx-auto"
          />
          <p className="text-text-mid text-sm mt-4">
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
