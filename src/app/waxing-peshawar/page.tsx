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
  title: "Waxing & Threading Peshawar | SanSha A Beauty Lounge",
  description:
    "Waxing and threading in Hayatabad, Peshawar — arms, legs, face and underarms with gentle care. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
  alternates: { canonical: `${SITE.url}/waxing-peshawar/` },
  openGraph: {
    title: "Waxing & Threading Peshawar | SanSha A Beauty Lounge",
    description:
      "Waxing and threading in Hayatabad, Peshawar — arms, legs, face and underarms with gentle care. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
    url: `${SITE.url}/waxing-peshawar/`,
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
    title: "Waxing & Threading Peshawar | SanSha A Beauty Lounge",
    description:
      "Waxing and threading in Hayatabad, Peshawar — arms, legs, face and underarms with gentle care. Call 091-5839119 or WhatsApp 0313 9333377 to book.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Does waxing hurt?",
    answer:
      "Waxing is uncomfortable for a moment — that is the honest answer. Clients in our reviews describe it as gentle and quick, with no pain or rashes afterwards, but every person feels it differently. If you are worried, message the salon first and ask what to expect for the area you want done.",
  },
  {
    question: "Which areas do you wax?",
    answer:
      "The salon waxes arms, legs, face and underarms, and offers full-body waxing too. Threading is also available for eyebrows and facial hair. Call 091-5839119 or WhatsApp 0313 9333377 with the area you want done and the salon will confirm it and give you the price.",
  },
  {
    question: "Threading or waxing for eyebrows — which is better?",
    answer:
      "Both are done at the salon, and the better one depends on your skin and the shape you want. Threading shapes with a thread, while waxing removes the hair with wax. Ask the salon when you book — it will look at your brows and tell you honestly which it would use.",
  },
  {
    question: "How do I book?",
    answer:
      "To book, message the salon on WhatsApp at 0313 9333377 — say whether you want waxing or threading, and which area. Or call 091-5839119. The salon will confirm your slot and give you the price before your appointment, so there are no surprises on the day.",
  },
  {
    question: "How should I prepare for a waxing appointment?",
    answer:
      "Come with the area clean and dry, and let the salon know about your skin when you book — especially if it is sensitive or reacts easily. The salon will tell you anything else to do before the appointment, and what to avoid afterwards, so the visit goes smoothly.",
  },
  {
    question: "What should I do after waxing?",
    answer:
      "The salon will explain the aftercare for your appointment in plain words — what to avoid in the first day and how to look after the skin. Follow that advice rather than a friend's, because it is for your skin and the area you had done.",
  },
  {
    question: "Can I book waxing and a facial in the same visit?",
    answer:
      "Yes — many clients book waxing with a facial in one visit, so both are done in the same appointment. Tell the salon when you book what you want done, and it will confirm the slot and the order, and give you the price for the whole booking.",
  },
];

const PHOTO = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-facial-treatment-room",
)!;

export default function WaxingPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Waxing & Threading" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Waxing &amp; Threading in Peshawar — Arms, Legs, Face &amp;
              Underarms
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Waxing and threading with gentle care at SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — arms, legs, face and underarms, plus eyebrow shaping. Call 091-5839119 or WhatsApp 0313 9333377 to book your visit. The salon will confirm your slot and today&apos;s price.
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
              <strong>What:</strong> waxing for arms, legs, face,
              underarms and full body — plus threading for brows.
            </li>
            <li>
              <strong>Good for:</strong> smooth skin that lasts
              longer than shaving, before an event or as routine.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp with the
              area you want done — the salon confirms it and the
              price.
            </li>
            <li>
              <strong>Prices:</strong> priced by the area, no fixed
              list — ask on WhatsApp or by phone for the price today.
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad — the salon in Peshawar.
            </li>
            <li>
              <strong>Hours:</strong> open around the clock, 24
              hours a day, 7 days a week.
            </li>
            <li>
              <strong>First time:</strong> tell the salon it is your
              first wax — it will explain what to expect.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is waxing and threading?</h2>
          <p>
            Waxing removes hair from the skin so it stays smooth for
            weeks, and threading shapes hair with a thread — mostly
            for eyebrows and facial hair. Both are done at the salon
            in Phase 2, Hayatabad. Waxing is for larger areas like
            arms and legs; threading is for the small, precise work
            around the brows and face.
          </p>
          <p>
            Hair removal is one of the most-booked services at the
            salon, and it is easy to see why. Shaving lasts a day or
            two; waxing lasts weeks, and the hair comes back finer
            over time. Clients book it before a wedding function,
            before Eid, and as regular care — arms, legs and
            underarms in summer, and brows kept in shape all year
            round.
          </p>
          <p>
            Waxing is uncomfortable for a moment — that is the honest
            answer, and the salon will not pretend otherwise. But it
            is quick, and it is over fast. If you are worried, message
            the salon first and ask what to expect for the area you
            want done. The salon will tell you plainly, and you can
            decide before you come in.
          </p>

          <h2>Waxing</h2>
          <p>
            The salon waxes arms, legs, face and underarms, and
            offers full-body waxing too. Tell the salon which area
            you want done when you book, and it will confirm it and
            give you the price.
          </p>
          <h3>Arms</h3>
          <p>
            Arm waxing is the one clients book most often in summer,
            when sleeves go short. It covers the full arm, and it is
            one of the quickest areas — a good first wax if you have
            never had one before, because it is over fast.
          </p>
          <h3>Legs</h3>
          <p>
            Leg waxing covers the full leg or the lower leg — say
            which you want when you book. It is the area clients
            book before a wedding function or a holiday, because
            smooth legs last through the event and beyond.
          </p>
          <h3>Face</h3>
          <p>
            Facial waxing is for the small areas — upper lip, chin,
            cheeks. It is quick, and the salon will tell you what to
            expect for your skin. If your facial skin is sensitive,
            say so when you book, so the salon can advise you.
          </p>
          <h3>Underarms</h3>
          <p>
            Underarm waxing is quick and lasts weeks. It is one of
            the most regular bookings at the salon — many clients
            book it every few weeks as routine, and it fits into a
            visit with a facial or a manicure.
          </p>
          <h3>Full body</h3>
          <p>
            Full-body waxing covers several areas in one visit. Tell
            the salon which areas you want done when you book, and it
            will confirm the slot, the order, and the price for the
            whole booking — so you know what the visit covers before
            you arrive.
          </p>

          <h2>Threading &amp; eyebrows</h2>
          <p>
            Threading is available for eyebrows and facial hair, and
            the salon also does plucking. Threading shapes with a
            thread, while waxing removes the hair with wax — the
            better one depends on your skin and the shape you want,
            so ask the salon when you book.
          </p>
          <h3>Eyebrow shaping</h3>
          <p>
            Eyebrow shaping is the small job that changes the whole
            face. Threading shapes the brow with a thread, line by
            line, so the shape is precise. Tell the salon what shape
            you want — or ask it to suggest one that suits your face.
          </p>
          <h3>Plucking</h3>
          <p>
            Plucking is for the stray hairs threading does not catch,
            and for tidying up between threading visits. It is done
            at the salon with the facial and waxing services, so a
            tidy-up fits into any visit.
          </p>
          <h3>Threading or waxing for brows — which one?</h3>
          <p>
            Both are done at the salon, and the better one depends on
            your skin and the shape you want. Threading is precise
            and suits sensitive skin around the eyes; waxing is
            faster for a larger area. Ask the salon when you book —
            it will look at your brows and tell you honestly which it
            would use.
          </p>
          <table className="mt-4 w-full border-collapse text-left text-slate-700">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  Method
                </th>
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  Used for
                </th>
                <th className="py-2 font-semibold text-slate-900">
                  Ask about
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">Waxing</td>
                <td className="py-2 pr-4">
                  Arms, legs, face, underarms, full body
                </td>
                <td className="py-2">
                  Which areas, and the price per area
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Threading</td>
                <td className="py-2 pr-4">
                  Eyebrows and facial hair, precise shaping
                </td>
                <td className="py-2">
                  Which suits your skin and brow shape
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Who is waxing for — and who should ask first?</h2>
          <p>
            Waxing is for anyone who wants smooth skin that lasts —
            before a wedding function, before Eid, or as regular
            care. It suits arms, legs, face and underarms, and it
            suits anyone who is tired of shaving every other day. If
            you have never had a wax before, that is fine too: tell
            the salon it is your first time, and it will explain
            what to expect.
          </p>
          <p>
            Tell the salon first if your skin is sensitive, or if
            you have a skin condition — tell the salon when you book,
            so it can say whether waxing is right for you now,
            or whether threading fits better. Say so too if your skin
            has reacted to wax before, or if you have had a skin
            treatment recently: the salon needs to know, so it can
            choose what to use and what to avoid. That is not a
            medical call; it is the salon wanting to know about your
            skin before the waxing starts.
          </p>

          <h2>What happens in a waxing appointment?</h2>
          <p>
            A waxing appointment is a short visit. You name the area
            when you book, the price is confirmed before anything
            starts, and the visit runs in the order below.
          </p>
          <ol>
            <li>
              <strong>Say what you want done.</strong> Tell the salon
              the area — arms, legs, face, underarms, or full body —
              and whether you want waxing or threading.
            </li>
            <li>
              <strong>The salon confirms the price.</strong> Waxing
              is priced by the area, so the salon gives you the
              price before the appointment starts.
            </li>
            <li>
              <strong>The waxing is done.</strong> The salon waxes
              the area, section by section, and finishes with the
              skin cared for.
            </li>
            <li>
              <strong>Aftercare, in plain words.</strong> Before you
              leave, the salon explains what to do afterwards — and
              what to avoid.
            </li>
          </ol>
          <p>
            How long does a waxing appointment take? [CONFIRM — ask
            for the usual time for your area when you book.] A single
            area is quick; a full-body booking takes longer, so say
            which areas you want when you message, and ask what time
            to keep free.
          </p>

          <h2>How to prepare for waxing</h2>
          <p>
            Come with the area clean and dry, and let the salon know
            about your skin when you book — especially if it is
            sensitive or reacts easily. The salon will tell you
            anything else to do before the appointment, and what to
            avoid afterwards, so the visit goes smoothly.
          </p>
          <ul>
            <li>
              <strong>Tell the salon about your skin.</strong> If it
              is sensitive, or if it has reacted to wax before, say
              so when you book.
            </li>
            <li>
              <strong>Come with the area clean.</strong> Wash the
              area before you come, and do not put creams or oils on
              it just before the appointment.
            </li>
            <li>
              <strong>Wear something loose.</strong> Loose clothing
              is kinder to the skin after waxing than tight clothes.
            </li>
            <li>
              <strong>Ask about timing.</strong> If you have a
              function coming up, ask the salon how many days before
              it to book, so the skin has time to settle.
            </li>
          </ul>

          <h2>How much does waxing cost?</h2>
          <p>
            Waxing and threading are priced by the area, so the salon
            gives you the price when you book — there is no price
            list on this site. WhatsApp or call with the area you
            want done and ask for the price.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The area.</strong> Arms, legs, face and
              underarms are priced on their own; full body is priced
              for the whole booking.
            </li>
            <li>
              <strong>Waxing or threading.</strong> Threading and
              waxing are different services, priced on their own.
            </li>
            <li>
              <strong>What else you book.</strong> Waxing with a
              facial or a manicure in the same visit changes the
              total — ask the salon to quote the full visit in one
              price.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            with the area you want done and ask for the price. Ask
            when you book, so you know the cost before you come in
            — the price you are given is the price you pay.
          </p>

          <h2>After waxing — how to look after your skin</h2>
          <p>
            Before you leave, the salon explains what to do after
            waxing in plain words — what to avoid in the first day
            and how to care for the skin. Ask about it when you
            book, so the aftercare is clear before the appointment
            starts.
          </p>
          <p>
            A few things help the skin settle. Keep the waxed area
            clean and simple in the first day, and wear loose
            clothing so nothing rubs the skin. Stay out of strong
            sun if the salon tells you to, and do not put anything
            new on the skin until it has settled. If the skin feels
            sore, tell the salon — it will say what to do. And when
            the hair starts to come back, book again rather than
            shaving in between, so the smooth result lasts.
          </p>
          <p>
            [ADD STYLIST NOTE — aftercare details for waxing and
            threading: what to avoid in the first day, when the skin
            settles, how often to repeat each area.]
          </p>

          <h2>Gentle care</h2>
          <p>
            Our clients describe waxing at the salon as gentle and
            quick. The words below are their words, from verbatim Google
            reviews — not a claim by the salon. Waxing is uncomfortable
            for a moment, and every person feels it differently, so if
            you are worried, message the salon first and ask what to
            expect for the area you want done.
          </p>

          <h2>Mistakes and myths about waxing</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The most common mistake is shaving between waxes. It
            undoes the smooth result and makes the next wax harder,
            because the hair comes back at different lengths. Wait
            for your next wax instead. The second is booking a wax
            for the morning of a wedding function: the skin needs a
            day or two to settle, so book ahead of the event, not on
            it. The third is not saying what your skin is like —
            if it is sensitive, or if it reacted last time, say so
            when you book, so the salon can advise you.
          </p>
          <h3>Myths</h3>
          <p>
            Waxing does not make hair grow back thicker. The hair
            comes back finer over time, and the smooth result lasts
            weeks — how long depends on your hair and how often you
            wax. Waxing is not only for legs either: arms, face and
            underarms are waxed just as often, and threading keeps
            brows in shape all year. And one wax does not keep skin
            smooth for good — it is regular care, and the result
            holds when you come back.
          </p>

          <h2>Waxing and other services</h2>
          <p>
            Waxing pairs well with the salon&apos;s other services.
            Many clients book it with a{" "}
            <Link href="/facial-peshawar/">facial</Link> in the same
            visit — the face is cared for and the brows are shaped
            together in one visit. If you want hair removal that lasts
            longer, read about{" "}
            <Link href="/laser-hair-removal-peshawar/">
              laser hair removal
            </Link>{" "}
            — the salon can tell you which one fits your skin. And
            if your visit is for a function, waxing goes well with
            a{" "}
            <Link href="/mani-pedi-peshawar/">
              manicure and pedicure
            </Link>{" "}
            — smooth skin and tidy nails, all done before the event.
          </p>

          <h2>Real clients</h2>
          <p>
            The two reviews below are from Google — clients writing
            about their waxing, word for word. There are more{" "}
            <Link href="/reviews/">waxing reviews</Link> to read.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “I had my waxing session with Lubna at Sansha yesterday
              and had a wonderful experience. She was extremely hygienic,
              gentle, and took the time to explain each step. The entire
              process was comfortable with no pain or rashes. The salon
              itself is very clean and maintains professional standards. I
              highly recommend Lubna for anyone looking for a painless
              and hygienic wax. Will definitely be coming back!”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Aiman Hayat{" "}
              <span className="font-normal text-slate-500">
                — via Google
              </span>
            </footer>
          </blockquote>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “Lubna did my wax and this is my 8 wax session with her
              and she&apos;s so kind polite and well behaved. Am so
              satisfied with her.”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Hania Abid{" "}
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
            heading="Book your waxing or threading"
            text="Message us on WhatsApp with the area you want done — we will give you the price and confirm your slot."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/facial-peshawar/", label: "Facials and skin polish" },
              { href: "/laser-hair-removal-peshawar/", label: "Laser hair removal vs waxing" },
              { href: "/mani-pedi-peshawar/", label: "Mani-pedi and nail care" },
              { href: "/contact/", label: "Book a waxing appointment" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Waxing & Threading" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Waxing & Threading in Peshawar",
          description:
            "Waxing and threading in Hayatabad, Peshawar — arms, legs, face and underarms.",
          url: `${SITE.url}/waxing-peshawar/`,
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
