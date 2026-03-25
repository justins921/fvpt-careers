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
    margins: { top: 36, bottom: 32, left: 48, right: 48 },
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
  doc.roundedRect(L, hTop, W, 118, 7).fill(NAVY);
  doc.rect(L, hTop + 115, W, 3).fill(TEAL);

  doc.fontSize(8.5).font("Helvetica-Bold").fillColor(GOLD)
    .text("NOW HIRING  |  OSHKOSH, WI", L + 22, hTop + 12, { width: W - 44 });

  doc.fontSize(26).font("Helvetica-Bold").fillColor(WHITE)
    .text("Physical Therapist", L + 22, hTop + 26, { width: W - 44 });

  doc.fontSize(17).font("Helvetica-Bold").fillColor(TEAL_BRIGHT)
    .text("Join a Clinic That's Different", L + 22, hTop + 54, { width: W - 44 });

  doc.fontSize(9).font("Helvetica").fillColor("#b0bec5")
    .text(
      "Oshkosh's oldest and highest-rated private practice is growing. We're looking for a hands-on PT who wants real autonomy, a remarkable team, and a facility unlike anything else in the Fox Valley.",
      L + 22, hTop + 74, { width: W - 44, lineGap: 2 }
    );
  doc.restore();
  doc.y = hTop + 130;

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
    doc.roundedRect(x, sY, sW, 42, 5).fill(CREAM);
    doc.fontSize(17).font("Helvetica-Bold").fillColor(TEAL)
      .text(s.n, x, sY + 5, { width: sW, align: "center" });
    doc.fontSize(6.5).font("Helvetica").fillColor(TEXT_LIGHT)
      .text(s.l.toUpperCase(), x, sY + 27, { width: sW, align: "center" });
    doc.restore();
  });
  doc.y = sY + 50;

  // ── HELPERS ───────────────────────────────────────────────────
  function label(t) {
    doc.fontSize(7).font("Helvetica-Bold").fillColor(TEAL)
      .text(t.toUpperCase(), L, doc.y, { characterSpacing: 0.9 });
    doc.y += 1;
  }
  function title(t) {
    doc.fontSize(13.5).font("Helvetica-Bold").fillColor(TEXT_DARK)
      .text(t, L, doc.y, { width: W });
    doc.y += 3;
  }
  function body(t) {
    doc.fontSize(9).font("Helvetica").fillColor(TEXT_MID)
      .text(t, L, doc.y, { width: W, lineGap: 2 });
    doc.y += 2;
  }

  // ── WHY FVPT ──────────────────────────────────────────────────
  label("Why Fox Valley PT");
  title("A Private Practice That Puts Its Team First");
  body("We're not a franchise or corporate chain with productivity quotas. Founded in 1990 by Steve and Regina Sobojinski, every decision has been made with the same philosophy: do right by patients, do right by your people.");
  body("Our 7,500 sq. ft. facility includes a full therapeutic pool -- the only one at a private practice in Oshkosh -- a complete gym, and the space to do genuine one-on-one care. You'll join a team with over 100 years of combined experience.");

  // Feature cards
  const cW = (W - 10) / 2;
  const cH = 38;
  const fY = doc.y;
  [
    { t: "Therapeutic Pool", d: "Only private practice in Oshkosh with aquatic therapy." },
    { t: "Real Autonomy", d: "No quotas, no cookie-cutter protocols." },
    { t: "Flexible Scheduling", d: "Full-time or part-time -- schedules that respect your life." },
    { t: "Growth Supported", d: "CE support, mentorship, room to specialize." },
  ].forEach((f, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = L + col * (cW + 10);
    const y = fY + row * (cH + 6);
    doc.save();
    doc.roundedRect(x, y, cW, cH, 4).lineWidth(0.5).strokeColor(BORDER).stroke();
    doc.fontSize(9.5).font("Helvetica-Bold").fillColor(TEXT_DARK)
      .text(f.t, x + 10, y + 7, { width: cW - 20 });
    doc.fontSize(8.5).font("Helvetica").fillColor(TEXT_MID)
      .text(f.d, x + 10, y + 21, { width: cW - 20, lineGap: 1 });
    doc.restore();
  });
  doc.y = fY + 2 * (cH + 6) + 4;

  // ── BENEFITS ──────────────────────────────────────────────────
  label("Compensation & Benefits");
  title("We Take Care of Our People");
  body("Competitive pay based on experience, with a performance bonus structure that rewards quality work.");

  const benefits = [
    "Competitive Base + Bonus", "401(k) with Match", "Paid Time Off",
    "Continuing Education", "Flexible Schedule", "Full-Time or Part-Time",
    "Casual Culture", "Diverse Caseload",
  ];
  let pX = L, pY = doc.y;
  benefits.forEach((b) => {
    const tw = doc.widthOfString(b, { font: "Helvetica", size: 8 }) + 18;
    if (pX + tw > L + W) { pX = L; pY += 18; }
    doc.save();
    doc.roundedRect(pX, pY, tw, 15, 7.5).lineWidth(0.5).strokeColor(BORDER).stroke();
    doc.fontSize(8).font("Helvetica").fillColor(TEXT_DARK)
      .text(b, pX + 9, pY + 3, { width: tw - 18 });
    doc.restore();
    pX += tw + 6;
  });
  doc.y = pY + 22;

  // ── QUALIFICATIONS ────────────────────────────────────────────
  label("What We're Looking For");
  title("The Right Fit, Not Just the Right Resume");

  [
    "Licensed Physical Therapist in Wisconsin (or eligibility to obtain WI licensure)",
    "Strong manual therapy foundation -- McKenzie Approach, muscle energy, myofascial release, joint mobilization",
    "Comfortable treating patients of all ages and abilities, including athletes",
    "Positive communicator who partners well with patients and referring physicians",
    "Motivated to be part of the Oshkosh community, not just a clinic employee",
    "New grads with strong manual therapy foundations welcome to apply",
  ].forEach((q) => {
    const qY = doc.y;
    doc.save();
    doc.circle(L + 5, qY + 5, 4.5).fill("#e0f0f0");
    doc.strokeColor(TEAL).lineWidth(1.1);
    doc.moveTo(L + 2, qY + 5).lineTo(L + 4.5, qY + 7.5).lineTo(L + 8.5, qY + 2.5).stroke();
    doc.restore();
    doc.fontSize(8.5).font("Helvetica").fillColor(TEXT_MID)
      .text(q, L + 17, qY, { width: W - 17, lineGap: 1 });
    doc.y += 3;
  });
  doc.y += 3;

  // ── ABOUT ─────────────────────────────────────────────────────
  label("About the Clinic");
  title("Oshkosh's Most Trusted PT Practice Since 1990");
  body("Established by Steve Sobojinski OTR, CSCS and Regina Sobojinski PT, Fox Valley Physical Therapy has grown into a 7,500 sq. ft. facility with 14 healthcare professionals. Specialties: McKenzie Method, dry needling, Graston technique, aquatic therapy, TMJ, vestibular rehab, pediatric PT, and orthopedic/sports medicine.");

  doc.y += 3;

  // ── CTA BOX with QR Code ────────────────────────────────────
  const pageBottom = doc.page.height - doc.page.margins.bottom;
  const ctaH = 66;
  if (doc.y + ctaH + 18 > pageBottom) doc.addPage();

  const qrBuffer = await QRCode.toBuffer("https://careers.foxvalleyphysicaltherapy.com", {
    width: 200, margin: 0,
    color: { dark: NAVY, light: "#00000000" },
  });

  const ctaY = doc.y;
  const qrSize = 52;
  const qrX = L + W - qrSize - 14;

  doc.save();
  doc.roundedRect(L, ctaY, W, ctaH, 6)
    .lineWidth(1.5).strokeColor(TEAL).fillAndStroke(CREAM, TEAL);

  const textW = W - qrSize - 40;
  doc.fontSize(14).font("Helvetica-Bold").fillColor(TEXT_DARK)
    .text("Ready to Join Our Team?", L + 16, ctaY + 9, { width: textW, lineBreak: false });
  doc.fontSize(9.5).font("Helvetica").fillColor(TEXT_MID)
    .text("Apply at careers.foxvalleyphysicaltherapy.com", L + 16, ctaY + 27, { width: textW, lineBreak: false });
  doc.fontSize(9.5).font("Helvetica-Bold").fillColor(TEXT_DARK)
    .text("Or call us: (920) 235-8966", L + 16, ctaY + 42, { width: textW, lineBreak: false });
  doc.fontSize(7.5).font("Helvetica").fillColor(TEXT_LIGHT)
    .text("Scan to apply online", L + 16, ctaY + 56, { width: textW, lineBreak: false });

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
