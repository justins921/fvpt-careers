import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import QRCode from "qrcode";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "Fox-Valley-PT-Job-Posting.pdf");

const NAVY = "#0d2240";
const TEAL = "#1a7a78";
const TEAL_BRIGHT = "#2dc4c0";
const CREAM = "#f8f5ef";
const TEXT_DARK = "#0d1f35";
const TEXT_MID = "#3d5470";
const TEXT_LIGHT = "#6b85a0";
const BORDER = "#dde4ed";
const WHITE = "#ffffff";
const GOLD = "#c9a84c";

async function main() {
  const doc = new PDFDocument({
    size: "letter",
    margins: { top: 34, bottom: 28, left: 48, right: 48 },
    info: {
      Title: "Physical Therapist - Fox Valley Physical Therapy & Wellness Clinic",
      Author: "Fox Valley Physical Therapy & Wellness Clinic",
      Subject: "Job Posting - Physical Therapist, Oshkosh, WI",
    },
  });

  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  const W = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const L = doc.page.margins.left;

  // ── HEADER ────────────────────────────────────────────────────
  const hTop = doc.y;
  doc.save();
  doc.roundedRect(L, hTop, W, 105, 7).fill(NAVY);
  doc.rect(L, hTop + 102, W, 3).fill(TEAL);

  doc.fontSize(8).font("Helvetica-Bold").fillColor(GOLD)
    .text("NOW HIRING  |  OSHKOSH, WI", L + 20, hTop + 12, { width: W - 40 });

  doc.fontSize(24).font("Helvetica-Bold").fillColor(WHITE)
    .text("Physical Therapist", L + 20, hTop + 26, { width: W - 40 });

  doc.fontSize(15).font("Helvetica-Bold").fillColor(TEAL_BRIGHT)
    .text("Join a Private Practice", L + 20, hTop + 52, { width: W - 40 });

  doc.fontSize(8.5).font("Helvetica").fillColor("#b0bec5")
    .text(
      "Oshkosh's oldest and highest-rated private practice is growing. We're looking for a hands-on PT who wants real autonomy, a remarkable team, and a facility unlike anything else in the Fox Valley.",
      L + 20, hTop + 72, { width: W - 40, lineGap: 2 }
    );
  doc.restore();
  doc.y = hTop + 114;

  // ── STATS ─────────────────────────────────────────────────────
  const sY = doc.y;
  const sGap = 8;
  const sW = (W - sGap * 3) / 4;
  [
    { n: "36", l: "Years in Practice" },
    { n: "35k+", l: "Patients Treated" },
    { n: "7,500", l: "Sq. Ft. Facility" },
    { n: "#1", l: "Rated in Winnebago Co." },
  ].forEach((s, i) => {
    const x = L + i * (sW + sGap);
    doc.save();
    doc.roundedRect(x, sY, sW, 36, 4).fill(CREAM);
    doc.fontSize(15).font("Helvetica-Bold").fillColor(TEAL)
      .text(s.n, x, sY + 5, { width: sW, align: "center" });
    doc.fontSize(6).font("Helvetica").fillColor(TEXT_LIGHT)
      .text(s.l.toUpperCase(), x, sY + 23, { width: sW, align: "center" });
    doc.restore();
  });
  doc.y = sY + 44;

  // ── HELPERS ───────────────────────────────────────────────────
  function gap(n) { doc.y += n; }
  // Track Y to help fit on one page
  function debugY(label) { console.log(`${label}: y=${Math.round(doc.y)} / ${doc.page.height - doc.page.margins.bottom}`); }
  function label(t) {
    doc.fontSize(7).font("Helvetica-Bold").fillColor(TEAL)
      .text(t.toUpperCase(), L, doc.y, { characterSpacing: 0.8 });
    doc.y += 2;
  }
  function heading(t) {
    doc.fontSize(13).font("Helvetica-Bold").fillColor(TEXT_DARK)
      .text(t, L, doc.y, { width: W });
    doc.y += 4;
  }
  function para(t) {
    doc.fontSize(8.5).font("Helvetica").fillColor(TEXT_MID)
      .text(t, L, doc.y, { width: W, lineGap: 2 });
    doc.y += 3;
  }

  // ── WHY FVPT ──────────────────────────────────────────────────
  label("Why Fox Valley PT");
  heading("A Private Practice That Puts Its Team First");
  para("We're not a franchise or corporate chain with productivity quotas. Founded in 1990 by Steve and Regina Sobojinski, every decision has been made with the same philosophy: do right by patients, do right by your people.");
  para("Our 7,500 sq. ft. facility includes a full therapeutic pool -- the only one at a private practice in Oshkosh -- a complete gym, and the space to do genuine one-on-one care. You'll join a team of PTs, PTAs, and an Athletic Trainer with over 100 years of combined experience.");

  // Feature cards -- 2x2 grid
  const cW = (W - 10) / 2;
  const cH = 34;
  const fY = doc.y;
  [
    { t: "Therapeutic Pool", d: "Only private practice in Oshkosh with aquatic therapy." },
    { t: "Real Autonomy", d: "No quotas, no cookie-cutter protocols." },
    { t: "Flexible Scheduling", d: "Full-time or part-time, schedules that respect your life." },
    { t: "Growth Supported", d: "CE, mentorship from experienced clinicians, room to specialize." },
  ].forEach((f, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = L + col * (cW + 10);
    const y = fY + row * (cH + 5);
    doc.save();
    doc.roundedRect(x, y, cW, cH, 4).lineWidth(0.5).strokeColor(BORDER).stroke();
    doc.fontSize(9).font("Helvetica-Bold").fillColor(TEXT_DARK)
      .text(f.t, x + 10, y + 7, { width: cW - 20 });
    doc.fontSize(8).font("Helvetica").fillColor(TEXT_MID)
      .text(f.d, x + 10, y + 20, { width: cW - 20, lineGap: 1 });
    doc.restore();
  });
  doc.y = fY + 2 * (cH + 5) + 3;

  gap(8);

  // ── BENEFITS ──────────────────────────────────────────────────
  label("Compensation & Benefits");
  heading("We Take Care of Our People");
  para("Competitive pay based on experience, with a performance bonus structure that rewards quality work.");

  const benefitsLeft = [
    "Competitive Base Pay + Bonus",
    "401(k) with Company Match",
    "Paid Time Off",
    "Vacation",
    "Continuing Education",
  ];
  const benefitsRight = [
    "APTA Professional Membership",
    "Flexible Schedule",
    "Full-Time or Part-Time",
    "Casual Culture",
    "Diverse Caseload",
  ];
  const bY = doc.y;
  const halfW = (W - 20) / 2;

  [benefitsLeft, benefitsRight].forEach((col, ci) => {
    col.forEach((b, bi) => {
      const x = L + ci * (halfW + 20);
      const y = bY + bi * 13;
      doc.save();
      doc.circle(x + 3, y + 4, 2).fill(TEAL);
      doc.fontSize(8.5).font("Helvetica").fillColor(TEXT_DARK)
        .text(b, x + 10, y, { width: halfW - 10 });
      doc.restore();
    });
  });
  doc.y = bY + 5 * 13;

  gap(8);

  // ── QUALIFICATIONS ────────────────────────────────────────────
  label("What We're Looking For");
  heading("The Right Fit, Not Just the Right Resume");

  [
    "Licensed Physical Therapist in Wisconsin (or eligibility to obtain WI licensure)",
    "Strong foundation in manual therapy -- McKenzie Approach, muscle energy, myofascial release, joint mobilization, etc.",
    "Comfortable treating patients of all ages and abilities, including athletes",
    "Positive, self-directed communicator who partners well with patients and referring physicians",
    "Motivated to be part of the Oshkosh community, not just a clinic employee",
    "Eager to learn and grow in a team-oriented environment",
    "New grads with strong manual therapy foundations are welcome to apply",
  ].forEach((q) => {
    const qY = doc.y;
    doc.save();
    doc.circle(L + 4, qY + 4.5, 4).fill("#e8f4f4");
    doc.strokeColor(TEAL).lineWidth(1);
    doc.moveTo(L + 1.5, qY + 4.5).lineTo(L + 3.5, qY + 6.5).lineTo(L + 7, qY + 2.5).stroke();
    doc.restore();
    doc.fontSize(8.5).font("Helvetica").fillColor(TEXT_MID)
      .text(q, L + 16, qY, { width: W - 16 });
    doc.y += 3;
  });

  gap(8);

  // ── ABOUT ─────────────────────────────────────────────────────
  label("About the Clinic");
  heading("Oshkosh's Most Trusted PT Practice Since 1990");
  para("Established by Steve Sobojinski OTR, CSCS and Regina Sobojinski PT, Fox Valley Physical Therapy has grown into a 7,500 sq. ft. facility with a team of 10 healthcare professionals. Clinical specialties include orthopedic and sports medicine care, spine care by the McKenzie Method, dry needling, aquatic therapy, TMJ treatment, and post-operative rehabilitation.");

  gap(6);

  // ── CTA BOX with QR Code ────────────────────────────────────
  const pageBottom = doc.page.height - doc.page.margins.bottom;
  const ctaH = 62;
  if (doc.y + ctaH + 18 > pageBottom) doc.addPage();

  const qrBuffer = await QRCode.toBuffer("https://careers.foxvalleyphysicaltherapy.com", {
    width: 200, margin: 0,
    color: { dark: NAVY, light: "#00000000" },
  });

  const ctaY = doc.y;
  const qrSize = 48;
  const qrX = L + W - qrSize - 14;

  doc.save();
  doc.roundedRect(L, ctaY, W, ctaH, 6)
    .lineWidth(1.5).strokeColor(TEAL).fillAndStroke(CREAM, TEAL);

  const textW = W - qrSize - 40;
  doc.fontSize(14).font("Helvetica-Bold").fillColor(TEXT_DARK)
    .text("Ready to Join Our Team?", L + 16, ctaY + 8, { width: textW, lineBreak: false });
  doc.fontSize(9).font("Helvetica").fillColor(TEXT_MID)
    .text("Apply at careers.foxvalleyphysicaltherapy.com", L + 16, ctaY + 26, { width: textW, lineBreak: false });
  doc.fontSize(9).font("Helvetica-Bold").fillColor(TEXT_DARK)
    .text("Or call us: (920) 235-8966", L + 16, ctaY + 40, { width: textW, lineBreak: false });
  doc.fontSize(7.5).font("Helvetica").fillColor(TEXT_LIGHT)
    .text("Scan to apply online", L + 16, ctaY + 53, { width: textW, lineBreak: false });

  doc.image(qrBuffer, qrX, ctaY + 7, { width: qrSize, height: qrSize });
  doc.restore();
  doc.y = ctaY + ctaH + 8;

  // ── FOOTER ────────────────────────────────────────────────────
  doc.fontSize(7).font("Helvetica").fillColor(TEXT_LIGHT)
    .text(
      "Fox Valley Physical Therapy & Wellness Clinic  |  909 S. Washburn Street, Oshkosh, WI 54904  |  foxvalleyphysicaltherapy.com",
      L, doc.y, { width: W, align: "center", lineBreak: false }
    );

  doc.end();
  await new Promise((resolve) => stream.on("finish", resolve));
  console.log(`PDF generated: ${outPath}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
