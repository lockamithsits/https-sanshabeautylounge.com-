import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import {OG_IMAGE, PHOTOS} from "@/data/photos";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQ";
import CallCTA, { RelatedLinks } from "@/components/CallCTA";
import Photo from "@/components/Photo";
import HeroBackground from "@/components/HeroBackground";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  imageObjectJsonLd,
  serviceJsonLd,
} from "@/lib/schema";
import type { Faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Manicure & Pedicure Peshawar | SanSha A Beauty Lounge",
  description:
    "Manicure and pedicure in Hayatabad, Peshawar — whitening mani-pedi with polish and nail care. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot.",
  alternates: { canonical: `${SITE.url}/mani-pedi-peshawar/` },
  openGraph: {
    title: "Manicure & Pedicure Peshawar | SanSha A Beauty Lounge",
    description:
      "Manicure and pedicure in Hayatabad, Peshawar — whitening mani-pedi with polish and nail care. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot.",
    url: `${SITE.url}/mani-pedi-peshawar/`,
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
    title: "Manicure & Pedicure Peshawar | SanSha A Beauty Lounge",
    description:
      "Manicure and pedicure in Hayatabad, Peshawar — whitening mani-pedi with polish and nail care. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What is included in a manicure?",
    answer:
      "A manicure at the salon is a whitening manicure with nail care and polish — your nails are shaped and cleaned, the hands are cared for, and polish is applied to finish. Call or WhatsApp the salon to book, and it will tell you the price before your appointment.",
  },
  {
    question: "What is included in a pedicure?",
    answer:
      "A pedicure at the salon is a whitening pedicure with foot care and polish — your feet are soaked and cared for, the nails are shaped and cleaned, and polish is applied to finish. Call or WhatsApp to book, and the salon will tell you the price first.",
  },
  {
    question: "Do you do nail polish and nail art?",
    answer:
      "The salon does manicure and pedicure with polish, and nail shaping as part of the service. For nail art, ask on WhatsApp before you book — the salon will tell you honestly what is available for your appointment, so you know before you come.",
  },
  {
    question: "How do I book?",
    answer:
      "Choose manicure, pedicure or both, then call 091-5839119 or message the salon on WhatsApp at 0313 9333377 with the day you would like to come. The salon will confirm your slot and tell you the price first, before your appointment starts.",
  },
  {
    question: "How long does a manicure or pedicure take?",
    answer:
      "That depends on whether you book a manicure, a pedicure or both, so the salon does not publish a fixed time. When you book on WhatsApp, ask how long your appointment will take and the salon will give you the time for your booking, so you can plan your day around it.",
  },
  {
    question: "Can I get a manicure and pedicure in one visit?",
    answer:
      "Yes — you can book a manicure and a pedicure together in one visit, and many clients do, so hands and feet are cared for in the same appointment. Tell the salon when you book that you want both, and it will confirm the slot and give you the price for the two together.",
  },
  {
    question: "What polish colours can I choose from?",
    answer:
      "The salon offers polish as part of the manicure and pedicure, and you can ask what shades are available when you book. If you have a colour in mind for an event, mention it on WhatsApp before you come, and the salon will tell you whether it has that shade.",
  },
];

const photo = (slug: string) => PHOTOS.find((p) => p.slug === slug)!;
const PHOTO = photo("salon-pedicure-room-chairs-sansha-hayatabad");

export default function ManiPediPage() {
  return (
    <div>
      <HeroBackground
        photo={PHOTO}
        caption={PHOTO.caption}
      >
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Manicure & Pedicure" },
            ]}
          />
          <p className="lux-eyebrow-on-dark mt-4">Whitening Mani-Pedi &amp; Nail Care</p>
          <h1 className="lux-h1 mt-3">
            Manicure &amp; Pedicure in Peshawar — Whitening Mani-Pedi
            &amp; Nail Care
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
            Manicure and pedicure with polish at SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — whitening mani-pedi with nail care. Message us on WhatsApp at 0313 9333377 or call 091-5839119 to book, and the salon will confirm your slot.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.phoneHref}
              className="btn-lux w-full sm:w-auto"
            >
              Call {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.whatsappHref}
              className="btn-whatsapp w-full sm:w-auto"
            >
              WhatsApp {SITE.whatsappDisplay}
            </a>
          </div>
      </HeroBackground>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="lux-card border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-bold text-brand-900">Quick facts</p>
          <ul className="mt-3 space-y-2 leading-relaxed text-slate-700">
            <li>
              <strong>What:</strong> whitening manicure and pedicure
              with polish and nail care.
            </li>
            <li>
              <strong>Good for:</strong> hands and feet that need care
              before an event — or as regular grooming.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — choose
              manicure, pedicure or both when you book.
            </li>
            <li>
              <strong>Prices:</strong> no fixed list — priced by the
              service; call or WhatsApp for today&apos;s price.
            </li>
            <li>
              <strong>Where:</strong> the salon is at Shop No. 4,
              Block A, Deans Hights, Phase 2, Hayatabad, Peshawar.
            </li>
            <li>
              <strong>Hours:</strong> open day and night, 24 hours a day, 7 days a week.
            </li>
            <li>
              <strong>Nail art:</strong> [CONFIRM — ask on WhatsApp
              before you book whether nail art is available].
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is a manicure and pedicure?</h2>
          <p>
            A manicure cares for your hands and nails; a pedicure cares
            for your feet and toenails. At the salon, both are
            whitening treatments with nail care and polish — your
            nails are shaped and cleaned, the hands or feet are cared
            for, and polish is applied to finish. It is done at the
            salon in Phase 2, Hayatabad, and it is the part of a salon
            visit that shows every time you look at your hands.
          </p>
          <p>
            Hands and feet work hard in Peshawar. Dust, dry air and
            long days leave nails rough and skin dry, and in winter
            the cold dries them out again. A manicure and pedicure is
            the reset: nails shaped, hands and feet cared for, polish
            on to finish. It is why so many of the salon&apos;s
            clients book a mani-pedi before a wedding function, Eid,
            or a family event — and why others book it as regular
            grooming, just to keep their nails tidy.
          </p>
          <p>
            A mani-pedi is also the simplest salon service to start
            with. If you have never been to the salon before, it is a
            gentle first visit — no big decision, no long appointment.
            And if you are already coming for a facial or waxing, it
            fits into the same visit, so you leave with hands, feet
            and face all looked after at once.
          </p>

          <h2>Manicure</h2>
          <p>
            A manicure at the salon is a whitening manicure with nail
            care and polish — your nails are shaped and cleaned, the
            hands are cared for, and polish is applied to finish.
            Tell the salon when you book if you want a particular
            polish shade, and it will tell you what is available.
          </p>
          <h3>What a manicure covers</h3>
          <p>
            The manicure covers shaping and cleaning the nails, care
            for the hands, and polish to finish. If your nails are
            uneven or your hands feel rough, say so when you book —
            the salon will know what your hands need before you
            arrive.
          </p>

          <h2>Pedicure</h2>
          <p>
            A pedicure at the salon is a whitening pedicure with foot
            care and polish — your feet are soaked and cared for, the
            nails are shaped and cleaned, and polish is applied to
            finish. Feet carry you all day, and a pedicure is the
            care they rarely get.
          </p>
          <h3>What a pedicure covers</h3>
          <p>
            The pedicure covers soaking and caring for the feet,
            shaping and cleaning the toenails, and polish to finish.
            If your feet are dry or your nails need shaping, tell the
            salon when you book, so it knows what your feet need.
          </p>

          <h2>Nail care and polish</h2>
          <p>
            Nail shaping is part of the manicure and pedicure, and
            polish is applied to finish. If you have a colour in mind
            for an event, mention it on WhatsApp before you come, and
            the salon will tell you whether it has that shade.
          </p>
          <h3>Nail art — ask first</h3>
          <p>
            For nail art, ask on WhatsApp before you book — the salon
            will tell you honestly what is available for your
            appointment, so you know before you come. [CONFIRM: is
            nail art offered, and what designs are available?] Do not
            assume nail art is part of a manicure or pedicure; ask,
            and the salon will say what your booking covers.
          </p>
          <table className="mt-4 w-full border-collapse text-left text-slate-700">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  Service
                </th>
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  What it covers
                </th>
                <th className="py-2 font-semibold text-slate-900">
                  Good for
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">Manicure</td>
                <td className="py-2 pr-4">
                  Nails shaped and cleaned, hands cared for, polish
                </td>
                <td className="py-2">
                  Hands that show every day
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Pedicure</td>
                <td className="py-2 pr-4">
                  Feet soaked and cared for, toenails shaped, polish
                </td>
                <td className="py-2">
                  Feet before an event, or regular care
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Who is a mani-pedi for — and who should ask first?</h2>
          <p>
            A manicure and pedicure is for anyone who wants their
            hands and feet looked after — before a wedding function,
            before Eid, or as regular grooming. It suits every age,
            and it suits nails that are uneven, hands that feel
            rough, or feet that have been ignored for months. If you
            have never had one before, that is fine — mention it
            when you book, and the salon will keep the first visit
            gentle.
          </p>
          <p>
            Tell the salon first if the skin on your hands or feet is
            sore or broken, or if your nails have a condition you are
            unsure about — say it when you book, so the salon can
            tell you whether a manicure or pedicure is right for you
            now, or whether to wait. That is not medical guidance;
            it is the salon wanting to know about your hands and
            feet before it works on them.
          </p>

          <h2>What happens in a mani-pedi appointment?</h2>
          <p>
            A mani-pedi appointment is a relaxed visit. You pick
            manicure, pedicure or both when you book, and the visit
            follows the order below — shaping and cleaning first,
            care next, polish to finish.
          </p>
          <ol>
            <li>
              <strong>Choose what you want.</strong> Manicure,
              pedicure or both — tell the salon when you book, and
              mention any polish shade you have in mind.
            </li>
            <li>
              <strong>Your hands or feet are prepared.</strong> Nails
              are shaped and cleaned first, and feet are soaked
              where a pedicure is booked.
            </li>
            <li>
              <strong>Care and polish.</strong> The hands or feet are
              cared for, and polish is applied to finish.
            </li>
            <li>
              <strong>Checked before you leave.</strong> The salon
              will show you the finish and tell you how to look
              after it.
            </li>
          </ol>
          <p>
            How long does a manicure or pedicure take? [CONFIRM —
            the salon will give you the time for your booking when
            you book.] Booking both together takes longer than one
            alone, so say what you want when you message, and ask
            what time to keep free.
          </p>

          <h2>How much does a manicure or pedicure cost?</h2>
          <p>
            A manicure, a pedicure or both — each has its own price,
            given to you when you book. No prices are printed on this
            site: WhatsApp or call with what you want done and ask
            for the price.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>Manicure or pedicure.</strong> Each is priced
              on its own — both together costs more than one alone.
            </li>
            <li>
              <strong>Polish.</strong> Ask whether polish is part of
              the service or priced on its own.
            </li>
            <li>
              <strong>What else you book.</strong> A manicure with a
              facial or waxing in the same visit changes the total —
              ask the salon for a single price covering everything
              you book.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            with what you want done and ask for the price. Get the
            price when you book, so it is settled before your
            appointment — you pay what you were told, nothing more.
          </p>

          <h2>How to look after your nails after a mani-pedi</h2>
          <p>
            What you can do after a manicure or pedicure depends on
            the polish and your nails. When the polish is on, the
            salon tells you how to look after it — what to avoid in
            the first hours while it sets, and how to keep the finish
            looking good. Ask when you book, so you know before you
            leave.
          </p>
          <p>
            A few things help the finish last. Let the polish set
            before you do anything rough with your hands, and keep
            your nails clean and simple in the first day. Do not
            pick at the polish if it chips — come back and ask the
            salon what your nails need then. And when the polish
            starts to wear, book again rather than peeling it off
            yourself.
          </p>
          <p>
            [ADD STYLIST NOTE — aftercare details for manicure and
            pedicure: how long polish takes to set, what to avoid,
            how often to repeat each service.]
          </p>

          <h2>Mistakes and myths about mani-pedi</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The most common mistake is peeling polish off when it
            starts to chip. It takes nail with it, and the nail
            takes weeks to recover. Come back to the salon instead,
            and let it be removed properly. The second is booking a
            manicure for the morning of a wedding function and
            expecting it to survive the whole day of work — book it
            close to the event, and let the polish set before the
            day starts. The third is not saying what you want: if
            you want a particular shade, or nail art, say so when
            you book, not when you arrive.
          </p>
          <h3>Myths</h3>
          <p>
            A manicure does not make nails permanently stronger. It
            shapes and cares for them, and the result lasts until
            the nails grow out — how long that is depends on your
            nails and how they are treated afterwards. A pedicure is
            not only for summer either: feet need care in winter
            too, when dry air and closed shoes leave them rough. And
            one mani-pedi does not fix neglected nails for good — it
            is regular care, and the nails stay tidy when you come
            back.
          </p>

          <h2>Mani-pedi and other services</h2>
          <p>
            A manicure and pedicure sits well beside the salon&apos;s
            other services. Many clients add a{" "}
            <Link href="/facial-peshawar/">facial</Link> to the same
            visit — face, hands and feet, all looked after before an
            event. It also fits with{" "}
            <Link href="/waxing-peshawar/">waxing</Link>
            , so grooming is done in one appointment. And if your
            visit is for a function, a mani-pedi goes well with{" "}
            <Link href="/party-makeup-peshawar/">party makeup</Link>{" "}
            — the look is finished when the nails match the rest.
          </p>

          <h2>Real clients</h2>
          <p>
            Below is a Google review from a client who had a mani-pedi —
            her own words, exactly as written. The reviews page has the
            full set.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “I did my Meni pedi and waxing from seher and I just love
              her services”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              sana jehangir{" "}
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
            heading="Book your manicure or pedicure"
            text="Message us on WhatsApp with what you want — manicure, pedicure or both — and we will confirm your slot."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/facial-peshawar/", label: "Facials in Phase 2, Hayatabad" },
              { href: "/waxing-peshawar/", label: "Waxing and threading in Hayatabad" },
              { href: "/reviews/", label: "Read what clients say" },
              { href: "/contact/", label: "Book a mani-pedi" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Manicure & Pedicure" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Manicure & Pedicure in Peshawar",
          description:
            "Manicure and pedicure in Hayatabad, Peshawar — whitening mani-pedi with polish and nail care.",
          url: `${SITE.url}/mani-pedi-peshawar/`,
        })}
      />
      <JsonLd
        data={imageObjectJsonLd({
          url: `${SITE.url}/images/${PHOTO.slug}-${PHOTO.nativeW}.jpg`,
          caption: "Inside the salon in Phase 2, Hayatabad.",
          width: PHOTO.nativeW,
          height: PHOTO.nativeH,
        })}
      />
    </div>
  );
}
