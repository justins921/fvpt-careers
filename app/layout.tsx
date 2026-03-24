import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Physical Therapist Job | Fox Valley Physical Therapy – Oshkosh, WI",
  description:
    "Fox Valley Physical Therapy is hiring a Physical Therapist in Oshkosh, WI. Oshkosh's oldest and highest-rated private practice — 36 years, therapeutic pool, real autonomy. Full-time or part-time.",
  openGraph: {
    title: "Physical Therapist Job | Fox Valley Physical Therapy – Oshkosh, WI",
    description:
      "Fox Valley Physical Therapy is hiring a Physical Therapist in Oshkosh, WI. Oshkosh's oldest and highest-rated private practice — 36 years, therapeutic pool, real autonomy. Full-time or part-time.",
    url: "https://careers.foxvalleyphysicaltherapy.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "JobPosting",
              title: "Physical Therapist",
              description:
                "Fox Valley Physical Therapy & Wellness Clinic is seeking a motivated Physical Therapist to join our well-established private practice in Oshkosh, WI. Oshkosh's oldest and highest-rated private practice, serving the community for 36 years. 7,500 sq. ft. facility with therapeutic pool and full gym. Real autonomy, flexible scheduling, competitive pay plus bonuses, 401(k) with matching, PTO, and continuing education support.",
              datePosted: "2025-03-24",
              validThrough: "2025-09-30",
              employmentType: ["FULL_TIME", "PART_TIME"],
              hiringOrganization: {
                "@type": "Organization",
                name: "Fox Valley Physical Therapy & Wellness Clinic",
                sameAs: "https://www.foxvalleyphysicaltherapy.com",
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "909 South Washburn Street",
                  addressLocality: "Oshkosh",
                  addressRegion: "WI",
                  postalCode: "54904",
                  addressCountry: "US",
                },
              },
              baseSalary: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: {
                  "@type": "QuantitativeValue",
                  minValue: 70000,
                  maxValue: 95000,
                  unitText: "YEAR",
                },
              },
              jobBenefits:
                "401(k) with company matching, Paid time off, Flexible schedule, Continuing education, Performance bonuses",
              qualifications:
                "Doctor of Physical Therapy (DPT) or equivalent from an accredited program. Wisconsin PT licensure or eligibility required.",
              skills:
                "Manual therapy, McKenzie Approach, Myofascial release, Joint mobilization, Therapeutic exercise",
            }),
          }}
        />
      </head>
      <body className="font-body bg-warm-white text-text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
