import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Physical Therapist Job | Fox Valley Physical Therapy – Oshkosh, WI",
  description:
    "Fox Valley Physical Therapy is hiring a Physical Therapist in Oshkosh, WI. Oshkosh's oldest and highest-rated private practice — 36 years, therapeutic pool, real autonomy. Full-time or part-time.",
  icons: {
    icon: "/FVPT logo.webp",
    apple: "/FVPT logo.webp",
  },
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
        <meta name="google-site-verification" content="xu00aJlcVio48RAKNBc9QKGNq3Y_s__x18jwQC8jCYo" />
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
                "<p>Fox Valley Physical Therapy is hiring a Physical Therapist in Oshkosh, WI. Family-owned private practice, independent since 1990, #1-rated in Winnebago County. $80,000–$100,000/year + $5,000 sign-on bonus.</p>" +
                "<p><strong>What the Day Looks Like:</strong> 10–12 patients per day, one-on-one. 60-minute evals. 45–60 minute follow-ups. Documentation built into your schedule. Monday–Friday, no weekends, no on-call.</p>" +
                "<p><strong>Compensation:</strong></p>" +
                "<ul>" +
                "<li>$5,000 sign-on bonus + paid relocation</li>" +
                "<li>$80,000–$100,000/year base</li>" +
                "<li>Performance bonus tied to quality outcomes</li>" +
                "<li>401(k) with company match</li>" +
                "<li>PTO + vacation</li>" +
                "<li>Continuing education budget + paid APTA membership</li>" +
                "<li>WI license renewal reimbursed</li>" +
                "<li>Assistance with health insurance options</li>" +
                "</ul>" +
                "<p><strong>Career Growth:</strong> Specialty certification support (OCS, dry needling, McKenzie). Opportunity to become an associate of the practice by Year 5.</p>" +
                "<p><strong>Why We're Different:</strong> 7,500 sq. ft. facility with therapeutic pool (only one at a private practice in Oshkosh). Team of PTs, PTAs, and Athletic Trainer with 100+ years combined experience. 35,000+ patients treated.</p>" +
                "<p><strong>Requirements:</strong></p>" +
                "<ul>" +
                "<li>WI PT license or eligibility</li>" +
                "<li>Strong interest in orthopedic rehabilitation</li>" +
                "<li>Manual therapy foundation — McKenzie, muscle energy, myofascial release, joint mobilization</li>" +
                "<li>New grads with strong manual training welcome</li>" +
                "</ul>",
              datePosted: "2026-06-08",
              validThrough: "2026-12-31T23:59:59Z",
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
                logo: "https://careers.foxvalleyphysicaltherapy.com/FVPT%20logo.webp",
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
                  minValue: 80000,
                  maxValue: 100000,
                  unitText: "YEAR",
                },
              },
              educationRequirements: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "postgraduate degree",
              },
              qualifications:
                "Doctor of Physical Therapy (DPT) or equivalent from an accredited program. Wisconsin PT licensure or eligibility required.",
              skills:
                "Manual therapy, McKenzie Approach, Myofascial release, Joint mobilization, Therapeutic exercise",
              jobBenefits:
                "$5,000 sign-on bonus, Paid relocation, 401(k) with company matching, Paid time off, Vacation, Continuing education budget, Paid APTA membership, WI license renewal reimbursed, Performance bonuses, Flexible schedule",
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
