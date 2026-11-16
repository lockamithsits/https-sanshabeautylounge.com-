import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE } from "@/data/photos";
import { SERVICE_GALLERY } from "@/data/serviceGallery";
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
  title: "Body Spa in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "Body spa in Hayatabad, Peshawar — a body scrub and massage for soft, refreshed skin. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
  alternates: { canonical: `${SITE.url}/body-spa-peshawar/` },
  openGraph: {
    title: "Body Spa in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Body spa in Hayatabad, Peshawar — a body scrub and massage for soft, refreshed skin. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    url: `${SITE.url}/body-spa-peshawar/`,
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
    title: "Body Spa in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Body spa in Hayatabad, Peshawar — a body scrub and massage for soft, refreshed skin. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What is a body spa treatment?",
    answer:
      "It is a scrub and a massage for the whole body, done at the salon in Phase 2, Hayatabad. The scrub cares for the skin all over, the massage follows, and you leave with soft, refreshed skin and a rested feeling. It is a quiet visit, not a medical treatment.",
  },
  {
    question: "What does a body spa session include?",
    answer:
      "A scrub followed by a massage, done at the salon. What exactly your session covers is something to ask about when you book — the salon will say honestly what is included, so you know before you come in and can ask for anything extra.",
  },
  {
    question: "Who is a body spa for?",
    answer:
      "Anyone who wants their skin to feel soft and cared for — before a wedding function, before Eid, or as a treat for yourself. It suits skin that feels rough or dry, and anyone who wants a calm, relaxing visit to the salon.",
  },
  {
    question: "How do I book a body spa?",
    answer:
      "Call 091-5839119 or send a WhatsApp message to 0313 9333377 and say you want a body spa, with the day that suits you. The salon will confirm your time and tell you the price before you arrive, so there are no surprises.",
  },
  {
    question: "How much does a body spa cost?",
    answer:
      "Prices depend on the session, so the salon tells you the price when you book — this site carries no price list. Ask on call or WhatsApp before you come in, and the salon will tell you the cost, so nothing is added when you arrive.",
  },
  {
    question: "Can I book a body spa with a facial or a manicure?",
    answer:
      "Yes. A body spa, a facial and a manicure and pedicure can all happen in one visit, booked as a single appointment. Tell the salon everything you want when you book, and ask it to price the whole visit together, so you know the total before you arrive.",
  },
];

const HERO = SERVICE_GALLERY.find(
  (g) => g.slug === "body-scrub-spa-sansha-hayatabad",
)!;

export default function BodySpaPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Body Spa" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Body Spa in Hayatabad, Peshawar — Scrub and Massage
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Rough, dry skin all over the body deserves more than a
              face cream — a body spa at SanSha A Beauty Lounge,
              Phase 2 Hayatabad, pairs a full-body scrub with a
              massage. Call 091-5839119 or WhatsApp 0313 9333377 and
              book a session.
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
            photo={HERO}
            eager
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption={`${HERO.caption} This is an illustration of the service — not a photo taken at the salon.`}
            captionClassName="mt-2 text-sm leading-relaxed text-slate-300"
          />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-bold text-brand-900">Quick facts</p>
          <ul className="mt-3 space-y-2 leading-relaxed text-slate-700">
            <li>
              <strong>What:</strong> a body scrub and massage, done at
              the salon in Phase 2, Hayatabad.
            </li>
            <li>
              <strong>Good for:</strong> skin that feels rough or dry
              — and anyone who wants soft, refreshed skin.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — the salon
              tells you what your session covers when you book.
            </li>
            <li>
              <strong>Prices:</strong> no fixed list — ask on call or
              WhatsApp before you come in.
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar.
            </li>
            <li>
              <strong>Hours:</strong> Open every hour, every day.
            </li>
            <li>
              <strong>What is included:</strong> [CONFIRM — ask when
              you book what a body spa session includes].
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>Skin care for the whole body, not just the face</h2>
          <p>
            Most skin care stops at the face. The rest of the body
            gets soap and water and is forgotten — until it feels
            rough in winter, or dry after weeks of dust and sun. A
            body spa is the salon&apos;s answer to that: a scrub and
            a massage for the skin all over the body, done in a
            private room at the salon in Phase 2, Hayatabad.
          </p>
          <p>
            The scrub comes first. It cares for the skin across the
            back, arms and legs — the places a face cream never
            reaches. Then the massage follows, and the two together
            leave the skin feeling soft and the body feeling rested.
            It is a slow visit, and that is the point: nothing about
            it is hurried.
          </p>
          <p>
            It is worth saying plainly what a body spa is not. It
            does not change your skin overnight, and it is not a
            treatment for a skin problem. It is care — the kind of
            care the skin all over your body rarely gets, given
            properly, at the salon.
          </p>

          <h2>What a session looks like</h2>
          <p>
            A body spa session follows a simple order, and the salon
            will talk you through it before it starts.
          </p>
          <ol>
            <li>
              <strong>Talk about your skin.</strong> Rough, dry,
              sensitive — say what your skin feels like, and what you
              want from the session. The salon will shape it around
              what you say.
            </li>
            <li>
              <strong>The scrub.</strong> The salon does the scrub
              you agreed on, caring for the skin all over the body.
            </li>
            <li>
              <strong>The massage.</strong> After the scrub, the
              massage eases the body. Scrub and massage together are
              what make a body spa.
            </li>
            <li>
              <strong>Slow finish.</strong> The session ends gently.
              Take your time getting up, and ask the salon anything
              you want to know before you leave.
            </li>
          </ol>
          <p>
            How long does a body spa take? [CONFIRM — ask the salon
            how long a session usually runs.] No preparation is
            needed — just arrive as you are.
          </p>

          <h2>Prices for a body spa</h2>
          <p>
            A body spa is priced when you book, because the price
            depends on the session. This site carries no price list —
            call or WhatsApp and the salon will give you the price
            before you come in, so you arrive knowing what the visit
            costs.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>What the session covers.</strong> Ask when you
              book what a body spa session includes — [CONFIRM: what
              is included and how it is priced].
            </li>
            <li>
              <strong>The rest of your visit.</strong> A body spa
              booked with a facial or a manicure costs more than a
              body spa alone — ask the salon to give you one price
              for the whole visit.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            and ask what a body spa costs. Ask before you arrive, so
            you know the cost before you come in.
          </p>

          <h2>Is a body spa right for you?</h2>
          <p>
            If your skin feels rough when you run a hand over your
            arms, or dry no matter how much cream you use, a body
            spa is the visit for that. It is also the visit for a
            wedding function or Eid, when you want the skin all over
            — not just the face — to look cared for. And it is the
            visit for no reason at all: a slow hour at the salon,
            for yourself.
          </p>
          <p>
            One thing to say before you book: whether your skin
            reacts easily. Mention anything it reacts to — creams,
            sun, or treatments you have had before — and mention any
            skin condition, so the salon can say whether a body spa
            suits you now or whether to wait. Say too if there is
            any part of your body the treatment should leave alone.
            A body spa is not a medical treatment, and the salon
            will not treat it as one.
          </p>

          <h2>What people get wrong about body spa</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            Start with the scrub: harder is not better. A strong
            scrub suits some skin and stings other skin, so tell the
            salon what yours feels like and let it choose the
            strength. Then the expectation: one session will not give
            you new skin. It freshens what is there, and the soft
            feeling fades in days. And the third mistake is silence —
            saying nothing about sensitive skin and hoping the salon
            will guess. Say what your skin reacts to, and the visit
            starts right.
          </p>
          <h3>Myths</h3>
          <p>
            A body spa does not make skin permanently soft, and it
            does not fix skin problems. It freshens the skin for a
            while, then the soft feeling wears off. How long it lasts
            comes down to your skin and how you look after it. A body
            spa is not only for brides, either. It is regular care
            for anyone, and one session does not change the skin — it
            cares for it. If your skin needs more than a body spa,
            the salon will say so honestly.
          </p>

          <h2>Body spa and other services</h2>
          <p>
            A body spa is easy to pair with the rest of the salon.
            Add a{" "}
            <Link href="/massage-peshawar/">massage</Link> and the
            visit covers the whole body — the scrub first, the
            massage after, in a single sitting. Add a{" "}
            <Link href="/facial-peshawar/">facial</Link> and the face
            gets the same care as the body, which matters before a
            wedding function or Eid. Add{" "}
            <Link href="/mani-pedi-peshawar/">
              a manicure and pedicure
            </Link>{" "}
            and the visit covers hands and feet too — one booking,
            everything done.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your body spa"
            text="Call or WhatsApp and say you want a body spa — the salon will tell you the price and hold your time."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/massage-peshawar/", label: "Massage to relax and unwind" },
              { href: "/facial-peshawar/", label: "Facials in Peshawar" },
              { href: "/mani-pedi-peshawar/", label: "Manicure and pedicure in Peshawar" },
              { href: "/contact/", label: "Book a body spa" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Body Spa" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Body Spa in Hayatabad, Peshawar",
          description:
            "Body spa in Hayatabad, Peshawar — a body scrub and massage for soft, refreshed skin.",
          url: `${SITE.url}/body-spa-peshawar/`,
        })}
      />
      <JsonLd
        data={imageObjectJsonLd({
          url: `${SITE.url}/images/${HERO.slug}-${HERO.nativeW}.jpg`,
          caption: HERO.caption,
          width: HERO.nativeW,
          height: HERO.nativeH,
        })}
      />
    </div>
  );
}
