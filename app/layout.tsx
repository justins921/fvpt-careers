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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap"
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
                "<p>Fox Valley Physical Therapy &amp; Wellness Clinic is seeking a motivated Physical Therapist to join our well-established private practice in Oshkosh, WI.</p>" +
                "<p><strong>Why Fox Valley PT:</strong></p>" +
                "<ul>" +
                "<li>Oshkosh's oldest and highest-rated private practice, serving the community for 36 years</li>" +
                "<li>7,500 sq. ft. facility with therapeutic pool and full gym</li>" +
                "<li>Real clinical autonomy — no quotas, no cookie-cutter protocols</li>" +
                "<li>Team of 14 professionals with over 100 years of combined experience</li>" +
                "</ul>" +
                "<p><strong>Benefits:</strong></p>" +
                "<ul>" +
                "<li>Competitive base pay plus performance bonuses</li>" +
                "<li>401(k) with company matching</li>" +
                "<li>Paid time off</li>" +
                "<li>Continuing education support</li>" +
                "<li>Flexible scheduling (full-time or part-time)</li>" +
                "</ul>" +
                "<p><strong>Qualifications:</strong></p>" +
                "<ul>" +
                "<li>Doctor of Physical Therapy (DPT) or equivalent from an accredited program</li>" +
                "<li>Wisconsin PT licensure or eligibility required</li>" +
                "<li>Strong foundation in manual therapy — McKenzie Approach, myofascial release, joint mobilization</li>" +
                "<li>New graduates with strong manual therapy foundations welcome</li>" +
                "</ul>",
              datePosted: "2026-03-25",
              validThrough: "2026-09-30T23:59:59Z",
              employmentType: ["FULL_TIME", "PART_TIME"],
              directApply: true,
              identifier: {
                "@type": "PropertyValue",
                name: "Fox Valley Physical Therapy & Wellness Clinic",
                value: "FVPT-PT-2026",
              },
              hiringOrganization: {
                "@type": "Organization",
                name: "Fox Valley Physical Therapy & Wellness Clinic",
                sameAs: "https://www.foxvalleyphysicaltherapy.com",
                logo: "https://careers.foxvalleyphysicaltherapy.com/logo.webp",
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
              educationRequirements: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Doctor of Physical Therapy (DPT)",
              },
              qualifications:
                "Doctor of Physical Therapy (DPT) or equivalent from an accredited program. Wisconsin PT licensure or eligibility required.",
              skills:
                "Manual therapy, McKenzie Approach, Myofascial release, Joint mobilization, Therapeutic exercise",
              jobBenefits:
                "401(k) with company matching, Paid time off, Flexible schedule, Continuing education, Performance bonuses",
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
