import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE, PHOTOS } from "@/data/photos";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQ";
import CallCTA, { RelatedLinks } from "@/components/CallCTA";
import Photo from "@/components/Photo";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  imageObjectJsonLd,
  serviceJsonLd,
} from "@/lib/schema";
import type { Faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Keratin Treatment in Peshawar | SanSha A Beauty Lounge",
  description:
    "Keratin treatment in Peshawar for smooth, frizz-free hair — plus protein treatment and hair spa. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
  alternates: { canonical: `${SITE.url}/keratin-treatment-peshawar/` },
  openGraph: {
    title: "Keratin Treatment in Peshawar | SanSha A Beauty Lounge",
    description:
      "Keratin treatment in Peshawar for smooth, frizz-free hair — plus protein treatment and hair spa. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
    url: `${SITE.url}/keratin-treatment-peshawar/`,
    siteName: SITE.fullName,
    locale: "en",
    type: "website",
    images: [
      {
        url: `${SITE.url}${OG_IMAGE.url}`,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keratin Treatment in Peshawar | SanSha A Beauty Lounge",
    description:
      "Keratin treatment in Peshawar for smooth, frizz-free hair — plus protein treatment and hair spa. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What is keratin treatment?",
    answer:
      "Keratin treatment is a hair treatment the salon applies to smooth the hair and calm frizz, leaving it easier to manage and style. It is done at the salon in Phase 2, Hayatabad. Call or WhatsApp the salon to book, and it will explain the treatment and the price for your hair length.",
  },
  {
    question: "Keratin or protein treatment — which is right for me?",
    answer:
      "Both are hair treatments for smoother, more manageable hair, and the right one depends on your hair — how frizzy or dry it is, and what you want from the result. The salon will look at your hair when you come in and tell you honestly which treatment suits it better.",
  },
  {
    question: "How long does keratin treatment last?",
    answer:
      "That depends on your hair and how it is cared for afterwards, so the salon does not publish a fixed duration. When you book, the salon will explain what to expect for your hair and how to look after it, so the smooth result lasts as long as it can.",
  },
  {
    question: "Can I wash my hair after keratin?",
    answer:
      "Ask the salon when you book — what you can do after the treatment depends on the treatment used and your hair. The salon will explain the aftercare for your appointment in plain words, so you know exactly what to do and what to avoid.",
  },
  {
    question: "How do I book?",
    answer:
      "Tell the salon the treatment you want and the day you would like to come — call 091-5839119 or message on WhatsApp at 0313 9333377. The salon will confirm your slot and give you the price for your hair length before the appointment, so there are no surprises.",
  },
  {
    question: "Does keratin treatment straighten my hair?",
    answer:
      "Keratin treatment smooths the hair and calms frizz, so hair looks straighter and is easier to style — but it is not a straightening treatment, and it will not make curly hair pin-straight. If you want straight hair every day, tell the salon when you book, and it will say honestly what keratin can and cannot do for your hair.",
  },
  {
    question: "Can I colour my hair after keratin?",
    answer:
      "Yes, but ask the salon about the order first — colour and keratin are done at the salon, and the salon will tell you what works for your hair and whether to colour before or after the treatment. If you have a colour appointment booked, mention the keratin when messaging, so visits can be planned around your hair.",
  },
];

const PHOTO = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-hair-wash-area",
)!;

export default function KeratinPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Keratin Treatment" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Keratin Treatment in Peshawar — Smooth, Frizz-Free Hair
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Keratin and protein treatments for smooth, frizz-free hair —
              at SanSha A Beauty Lounge in Phase 2, Hayatabad. Call or
              WhatsApp to book.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.phoneHref}
                className="flex min-h-12 items-center justify-center rounded-lg bg-accent-500 px-6 text-base font-bold text-brand-950 hover:bg-accent-400"
              >
                Call {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.whatsappHref}
                className="flex min-h-12 items-center justify-center rounded-lg bg-[#25d366] px-6 text-base font-bold text-white hover:brightness-110"
              >
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </div>
          </div>
          <Photo
            photo={PHOTO}
            eager
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption={PHOTO.caption}
            captionClassName="mt-2 text-sm leading-relaxed text-slate-300"
          />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-bold text-brand-900">Quick facts</p>
          <ul className="mt-3 space-y-2 leading-relaxed text-slate-700">
            <li>
              <strong>What:</strong> keratin or protein treatment for
              smooth, frizz-free hair.
            </li>
            <li>
              <strong>Good for:</strong> frizzy, unmanageable hair that is
              hard to style.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — the salon gives
              you the price for your hair length before the appointment.
            </li>
            <li>
              <strong>Prices:</strong> no fixed list — priced by hair
              length and treatment; call or WhatsApp for today&apos;s
              price.
            </li>
            <li>
              <strong>Where:</strong> Phase 2, Hayatabad, Peshawar — find
              us at Shop No. 4, Block A, Deans Hights.
            </li>
            <li>
              <strong>Hours:</strong> open around the clock — 24 hours,
              7 days a week.
            </li>
            <li>
              <strong>Hair spa:</strong> [CONFIRM — ask when you book;
              not confirmed as a standing offer yet].
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is keratin treatment?</h2>
          <p>
            Keratin treatment is a hair treatment the salon applies to
            smooth the hair and calm frizz, leaving it easier to manage
            and style. It is done at the salon in Phase 2, Hayatabad, and
            it suits hair that is frizzy after a wash or will not sit the
            way you want it to.
          </p>
          <p>
            Frizz is a daily fight in Peshawar. Dry summer air, dust and
            long days out leave hair rough and hard to comb, and in
            winter the cold air dries it out again. If your hair puffs up
            after every wash, or you spend every morning trying to make
            it sit flat, that is the hair keratin treatment is for. The
            treatment smooths the hair so it falls the way you want it
            to, and styling takes less time afterwards.
          </p>
          <p>
            Keratin treatment is not a straightening treatment, and it
            does not change your hair colour. It smooths what you have —
            it will not make curly hair pin-straight, and it will not
            fix hair that is badly damaged. If you want straight hair
            every day, or your hair needs more than smoothing, tell the
            salon when you book and it will say honestly what keratin
            can and cannot do for your hair.
          </p>

          <h2>Keratin or protein treatment — which one suits your hair?</h2>
          <p>
            The salon does both keratin and protein treatments, and both
            are for smoother, more manageable hair. The right one depends
            on your hair — how frizzy or dry it is, and what you want
            from the result. The salon will look at your hair when you
            come in and tell you honestly which treatment suits it
            better, so you do not have to decide on your own.
          </p>
          <table className="mt-4 w-full border-collapse text-left text-slate-700">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  &nbsp;
                </th>
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  Keratin treatment
                </th>
                <th className="py-2 font-semibold text-slate-900">
                  Protein treatment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">For</td>
                <td className="py-2 pr-4">
                  Frizzy, unmanageable hair that will not sit smooth
                </td>
                <td className="py-2">
                  Hair that feels dry or rough and needs care
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">Result</td>
                <td className="py-2 pr-4">
                  Smoother hair, calmer frizz, easier styling
                </td>
                <td className="py-2">
                  Smoother, softer-feeling hair, easier to manage
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Ask about</td>
                <td className="py-2 pr-4">
                  Whether keratin suits your hair type
                </td>
                <td className="py-2">
                  Whether protein suits your hair better
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Keratin treatment</h3>
          <p>
            Keratin is the treatment to ask about when frizz is the
            problem. If your hair puffs up after a wash, or it will not
            hold a smooth finish through the day, keratin is the first
            thing the salon will suggest. It is the treatment most of
            the salon&apos;s keratin clients come back for, and it is
            the one to book when you want your hair to behave.
          </p>
          <h3>Protein treatment</h3>
          <p>
            Protein is the treatment to ask about when your hair feels
            dry or rough as well as frizzy. It is a gentler option, and
            it suits hair that needs care as much as smoothing. If you
            are not sure which one your hair needs, that is exactly what
            the salon is for — come in, let the salon look at your
            hair, and it will tell you which treatment fits.
          </p>
          <p>
            If you are planning a big event — a wedding week, or Eid —
            book the treatment ahead of the event, not the day before.
            Your hair will be smoother for the functions, and a{" "}
            <Link href="/bridal-makeup-peshawar/">
              bridal makeup sitting
            </Link>{" "}
            or{" "}
            <Link href="/party-makeup-peshawar/">
              party makeup sitting
            </Link>{" "}
            goes on easier when the hair underneath is already smooth.
          </p>

          <h2>Who is keratin treatment for — and who should ask first?</h2>
          <p>
            Keratin treatment is for anyone whose hair is frizzy and
            hard to manage — hair that puffs up after a wash, will not
            sit the way you want it to, or takes too long to style every
            morning. It suits long hair and short hair alike, and it
            suits anyone who wants their hair to look smooth without a
            daily fight with the straightener.
          </p>
          <p>
            Ask first if your hair has been coloured recently, or if you
            are planning a colour change — mention it when you book, so
            the salon can tell you the right order for colour and
            keratin. Ask first too if your hair is very damaged, or if
            you have never had a treatment before: the salon will look
            at your hair and tell you honestly whether keratin is right
            for it, or whether something gentler fits better. And if you
            want a big change — much straighter hair, or a much lighter
            colour — say so when you book, so the salon can tell you
            what is possible before you come in.
          </p>

          <h2>What happens in a keratin appointment?</h2>
          <p>
            A keratin appointment is a salon visit, not a quick wash.
            The salon will go through the steps with you when you book,
            and say what it needs from you. Here is how the visit
            usually runs:
          </p>
          <ol>
            <li>
              <strong>Talk about your hair.</strong> Tell the salon what
              bothers you — the frizz, the dryness, the styling time —
              and what you want from the result. The salon will look at
              your hair and say which treatment suits it.
            </li>
            <li>
              <strong>Hair wash.</strong> Your hair is washed first, so
              the treatment goes on clean hair.
            </li>
            <li>
              <strong>The treatment is applied.</strong> The salon
              applies the keratin or protein treatment through your
              hair, section by section.
            </li>
            <li>
              <strong>It is left in.</strong> The treatment stays in
              your hair for a time the salon will confirm when you book.
            </li>
            <li>
              <strong>Finished with a blow-dry.</strong> Your hair is
              dried and finished, so you leave the salon seeing the
              smooth result.
            </li>
          </ol>
          <p>
            How long does a keratin appointment take? [CONFIRM — the
            salon will confirm the usual time for your hair length when
            you book.] Longer hair takes longer, so tell the salon your
            hair length when you message, and ask what time to keep
            free. Come with clean hair unless the salon tells you
            otherwise, and arrive on time — a late start pushes the
            whole appointment.
          </p>

          <h2>Hair spa — ask when you book</h2>
          <p>
            Hair spa is named in the salon&apos;s listing alongside
            keratin and protein treatment. Ask about it when you book —
            availability is not confirmed as a standing offer yet, and
            the salon will tell you honestly whether it is offered and
            what it includes. [CONFIRM: is hair spa offered, and what
            does it include?] Do not assume it is part of a keratin
            appointment; ask, and the salon will say what your booking
            covers.
          </p>

          <h2>How much does keratin treatment cost?</h2>
          <p>
            Keratin and protein are priced by hair length and by the
            treatment, so there is no fixed price list on this site. The
            salon gives you the price for your hair length before the
            appointment, so there are no surprises when you arrive.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>Your hair length.</strong> Longer hair takes more
              treatment and more time, so it costs more than shorter
              hair.
            </li>
            <li>
              <strong>The treatment.</strong> Keratin and protein are
              different treatments, priced on their own.
            </li>
            <li>
              <strong>What else you book.</strong> A cut or colour in
              the same visit changes the total — ask for one price for
              the whole booking.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> with
            the treatment you want and ask for the price for your hair
            length. That way you know the cost before the day, and
            there is nothing extra to pay at the salon.
          </p>

          <h2>How to look after your hair after keratin</h2>
          <p>
            What you can do after the treatment depends on the treatment
            used and your hair, so the salon will explain the aftercare
            for your appointment in plain words. Ask the salon when you
            book what to do afterwards — especially when you can wash
            your hair, and what to avoid in the first days.
          </p>
          <p>
            A few things help the smooth result last. Follow the
            aftercare the salon gives you, and do not change it because
            a friend told you something different — the advice is for
            your treatment, not theirs. Wash your hair when the salon
            says you can, and keep it simple in between. A regular trim
            keeps the ends tidy, so the smooth look holds. And when the
            result starts to fade, come back and ask the salon what
            your hair needs then — it may be another treatment, or it
            may be a wash and finish instead.
          </p>
          <p>
            [ADD STYLIST NOTE — aftercare details for keratin and
            protein treatments: when to wash, what to avoid, how long
            the result usually lasts for different hair types.]
          </p>

          <h2>Mistakes and myths about keratin</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The most common mistake is expecting pin-straight hair.
            Keratin smooths the hair — it does not straighten it, and
            if you wanted a straightener result every day, you will be
            disappointed. The second is booking a colour change for the
            same day without asking about the order: colour and keratin
            are both done at the salon, but the order matters, and the
            salon should be asked first. The third is washing your hair
            before the salon says you can — ask when you book, and wait
            until then.
          </p>
          <h3>Myths</h3>
          <p>
            Keratin does not make hair permanently straight. It smooths
            the hair, and the result fades over time — how long it
            lasts depends on your hair and how it is cared for
            afterwards. Keratin is not only for very curly hair either:
            it is for any hair that is frizzy and hard to manage,
            whatever its type. And one treatment does not fix damaged
            hair — it smooths it. If your hair is damaged, the salon
            will tell you honestly what it needs, and it may not be
            keratin.
          </p>

          <h2>Keratin treatment or hair colour first?</h2>
          <p>
            Many clients want both a smoother finish and a new shade.
            The order matters, so ask the salon before you book either
            service — it will say what fits your hair, and whether the
            colour should come before the treatment or after it. If a
            colour visit is already in your diary, tell the salon about
            it when you message, so both appointments can be arranged
            around your hair.
          </p>
          <p>
            If you are thinking about a new shade as well as smoother
            hair, look at{" "}
            <Link href="/hair-colour-peshawar/">
              hair colour services
            </Link>{" "}
            first, then message the salon with both services in mind.
            And if your hair is frizzy and you only want a cut, start
            with the{" "}
            <Link href="/hair-salon-peshawar/">
              hair salon
            </Link>{" "}
            — a cut and blow-dry shows you what your hair needs next.
          </p>

          <h2>Real clients</h2>
          <p>
            Below are two Google reviews from clients who had a keratin
            or protein treatment — their own words, exactly as written.
            See the full set of{" "}
            <Link href="/reviews/">keratin reviews</Link>.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “Today I got keratin treatment from Sansha beauty lounge.
              The girl Eeman did a wonderful job. She was very polite and
              professional. She was very patient and gave me absolute
              good time and care. I would highly recommend Eeman for hair
              treatments.”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              farah n05{" "}
              <span className="font-normal text-slate-500">
                — via Google
              </span>
            </footer>
          </blockquote>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “Had a great experience at Sansha Beauty Salon with Ms.
              Eman. She was professional, kind, and soft-spoken. Loved
              the hair protein treatment and the results. Definitely
              recommend her.”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Aqsa Qureshi{" "}
              <span className="font-normal text-slate-500">
                — via Google
              </span>
            </footer>
          </blockquote>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your keratin treatment"
            text="Message us on WhatsApp with the treatment you want — we will tell you the price for your hair length and keep a time for you."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/hair-salon-peshawar/", label: "Haircuts, blow-dry and styling at the salon" },
              { href: "/hair-colour-peshawar/", label: "Hair colour after keratin — the right order" },
              { href: "/bridal-makeup-peshawar/", label: "Bridal makeup for the wedding week" },
              { href: "/reviews/", label: "What clients say about keratin" },
              { href: "/contact/", label: "Book a keratin appointment" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Keratin Treatment" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Keratin Treatment in Peshawar",
          description:
            "Keratin treatment in Peshawar for smooth, frizz-free hair — plus protein treatment and hair spa.",
          url: `${SITE.url}/keratin-treatment-peshawar/`,
        })}
      />
      <JsonLd
        data={imageObjectJsonLd({
          url: `${SITE.url}/images/${PHOTO.slug}-${PHOTO.nativeW}.jpg`,
          caption: PHOTO.caption,
          width: PHOTO.nativeW,
          height: PHOTO.nativeH,
        })}
      />
    </div>
  );
}
