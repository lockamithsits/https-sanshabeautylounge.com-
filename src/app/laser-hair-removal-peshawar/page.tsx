import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import {OG_IMAGE} from "@/data/photos";
import { SITE_HERO } from "@/data/serviceGallery";
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
  title: "Laser Hair Removal Peshawar | SanSha A Beauty Lounge",
  description:
    "Laser hair removal in Hayatabad, Peshawar — face, arms, legs and full body. Book a consultation on call or WhatsApp: 091-5839119 / 0313 9333377.",
  alternates: { canonical: `${SITE.url}/laser-hair-removal-peshawar/` },
  openGraph: {
    title: "Laser Hair Removal Peshawar | SanSha A Beauty Lounge",
    description:
      "Laser hair removal in Hayatabad, Peshawar — face, arms, legs and full body. Book a consultation on call or WhatsApp: 091-5839119 / 0313 9333377.",
    url: `${SITE.url}/laser-hair-removal-peshawar/`,
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
    title: "Laser Hair Removal Peshawar | SanSha A Beauty Lounge",
    description:
      "Laser hair removal in Hayatabad, Peshawar — face, arms, legs and full body. Book a consultation on call or WhatsApp: 091-5839119 / 0313 9333377.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Is laser hair removal safe?",
    answer:
      "Laser hair removal is a treatment to talk through in person, because it depends on your skin and hair. Book a consultation on call or WhatsApp and the salon will explain what the treatment involves for you, and answer your questions before you decide anything.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "That depends on the area and your hair, so the salon does not publish a session count. After a consultation the salon will say how many sessions it expects for the area you want treated, and what each one will cost before you start.",
  },
  {
    question: "Laser or waxing — which is right for me?",
    answer:
      "Laser is a course of sessions for longer-term hair reduction, while waxing is a per-visit treatment you repeat when the hair grows back. Which suits you depends on the area, your hair and your budget — ask the salon when you book and it will explain both honestly.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Call 091-5839119 or message the salon on WhatsApp at 0313 9333377 and ask for a laser consultation. The salon will arrange a time to talk through the areas you want treated, explain the treatment, and give you the price before anything is booked.",
  },
  {
    question: "Does laser hair removal hurt?",
    answer:
      "That varies from person to person and from area to area, so the salon will not promise you a feeling in advance. Ask about it at your consultation and the salon will explain what a session feels like for the area you want treated, before you decide anything.",
  },
  {
    question: "Can I have laser treatment if my skin is sensitive?",
    answer:
      "Tell the salon about your skin at your consultation — that is what the consultation is for. The salon will talk through your skin and hair type, explain what the treatment involves for you, and tell you honestly whether laser is a good fit before anything is booked.",
  },
  {
    question: "What should I do before my first laser session?",
    answer:
      "Ask the salon when you book — it will tell you how to prepare for the area you want treated. Come to your consultation ready to talk about your skin, your hair, and anything the salon asks about, so it can give you clear advice before your first session.",
  },
];

const PHOTO = SITE_HERO;

export default function LaserPage() {
  return (
    <div>
      <HeroBackground
        photo={PHOTO}
        caption={PHOTO.caption}
      >
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Laser Hair Removal" },
            ]}
          />
          <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
            Laser Hair Removal in Peshawar — Face, Arms, Legs &amp; Full
            Body
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
            Laser hair removal for face, arms, legs and full body at SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar. Talk to the salon first on call or WhatsApp and it will explain the treatment for your skin and hair, and give you the price after your consultation.
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
      </HeroBackground>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-bold text-brand-900">Quick facts</p>
          <ul className="mt-3 space-y-2 leading-relaxed text-slate-700">
            <li>
              <strong>What:</strong> laser hair removal for longer-term
              hair reduction — not a one-visit fix.
            </li>
            <li>
              <strong>Areas:</strong> face, arms, legs and full body.
            </li>
            <li>
              <strong>First step:</strong> a consultation, where the salon
              talks through your skin and hair type.
            </li>
            <li>
              <strong>Results:</strong> they vary from person to person —
              no result is promised in advance.
            </li>
            <li>
              <strong>Prices:</strong> given after your consultation, by
              area — no prices are listed on this site.
            </li>
            <li>
              <strong>Where:</strong> SanSha A Beauty Lounge, Phase 2,
              Hayatabad, Peshawar — open 24 hours, 7 days a week.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is laser hair removal?</h2>
          <p>
            Laser hair removal is a treatment the salon offers for
            longer-term hair reduction. It is done at the salon in Phase
            2, Hayatabad, and it starts with a consultation — the salon
            explains what the treatment involves for your skin and hair
            before anything is booked.
          </p>
          <p>
            The idea is simple: instead of removing hair visit by visit,
            as waxing does, laser works over a course of sessions toward
            hair that grows back finer and sparser. How far it goes
            depends on you — your hair, your skin, and the area being
            treated. That is why the salon will not quote you a result
            before it has seen you and talked it through.
          </p>
          <p>
            If you are weighing laser against waxing, the{" "}
            <Link href="/waxing-peshawar/">
              waxing page
            </Link>{" "}
            sets out the other option. The two methods suit different
            people, and the honest answer for you comes out of the
            consultation, not out of a web page.
          </p>

          <h2>Results vary — what that means for you</h2>
          <p>
            Results from laser hair removal vary from person to person.
            That is not a line to skip past — it is the most important
            thing to understand before you book. Two people can have the
            same area treated and see different results, because skin
            type, hair type and hair colour all play a part.
          </p>
          <p>
            The salon does not promise a result in advance, and it does
            not publish a session count. After your consultation, the
            salon will say how many sessions it expects for the area you
            want treated, and what each one will cost before you start.
            If the salon thinks laser is not the right fit for you, it
            will say so — and{" "}
            <Link href="/waxing-peshawar/">
              waxing and threading
            </Link>{" "}
            is the honest alternative for many people.
          </p>
          <p>
            Think of laser as longer-term hair reduction, not a promise
            that hair will never return. Anyone who tells you otherwise
            is selling, not advising. The consultation exists so you can
            hear what is realistic for your skin and hair before you
            spend anything.
          </p>

          <h2>Who is laser for — and who should talk to the salon first?</h2>
          <p>
            Laser suits people who want longer-term hair reduction on
            the face, arms, legs or full body, and who are ready for a
            course of sessions rather than a single visit. It suits
            people who are tired of repeating a per-visit treatment
            every few weeks and want to see whether a course of laser
            can change that.
          </p>
          <p>
            Talk to the salon first — before booking any session — if
            any of these apply to you. The consultation is where these
            things are raised, and the salon will advise you on what
            they mean for your treatment:
          </p>
          <ul>
            <li>
              Your skin is sensitive, or reacts easily to new
              treatments.
            </li>
            <li>
              You have a skin condition on the area you want treated, or
              the area has cuts, rashes or irritation.
            </li>
            <li>
              You are pregnant, or think you may be.
            </li>
            <li>
              You take medicine that affects your skin, or you have
              recently had another skin treatment on the same area.
            </li>
            <li>
              You have had a lot of sun on the area recently, or you
              have a fresh tan.
            </li>
          </ul>
          <p>
            This is not a full list, and it is not medical advice — it
            is the list of things to mention at your consultation so the
            salon can give you clear, personal advice. If something on
            it applies to you, say so when you book the consultation,
            not after.
          </p>

          <h2>How a consultation works</h2>
          <p>
            Every laser booking at the salon starts with a consultation.
            Nothing is booked before it, and nothing is charged for a
            session you have not agreed to. The consultation is a
            conversation, not a sales pitch.
          </p>
          <ol>
            <li>
              <strong>Ask for a laser consultation.</strong> Call{" "}
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
              message the salon on WhatsApp at{" "}
              <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
              and say you want to talk about laser. The salon will
              arrange a time.
            </li>
            <li>
              <strong>Talk through the areas.</strong> At the
              consultation, say which areas you want treated — face,
              arms, legs or full body — and what you hope to get out of
              it.
            </li>
            <li>
              <strong>Talk through your skin and hair.</strong> The salon
              will ask about your skin type, your hair type, and the
              things listed above, so it can explain what the treatment
              involves for you.
            </li>
            <li>
              <strong>Hear the plan and the price.</strong> The salon
              will say how many sessions it expects for your area, what
              each one will cost, and what to do before your first
              session — before anything is booked.
            </li>
          </ol>
          <p>
            If you would rather see the salon first, the{" "}
            <Link href="/contact/">contact page</Link> has the address
            and the map. The salon is in Phase 2, Hayatabad, and it is
            open 24 hours, 7 days a week.
          </p>

          <h2>What happens in a session</h2>
          <p>
            A session happens at the salon, in the laser treatment room,
            after your consultation. The salon will explain what it is
            doing as it goes, and what you should expect during the
            session for the area being treated. Come to the session the
            way the salon told you to prepare — if you were given
            preparation advice at your consultation, follow that, and
            ask if anything is unclear.
          </p>
          <p>
            Sessions are booked one at a time, and the salon will tell
            you when to come back for the next one. There is no fixed
            schedule published on this site, because the gap between
            sessions depends on the area and on you. [ADD STYLIST NOTE —
            typical session length and gap between sessions to confirm
            with the salon.]
          </p>

          <h2>Aftercare</h2>
          <p>
            Aftercare is explained at the salon after your session, and
            that advice is the one to follow — it is given for your skin
            and your area, not written for everyone. Listen to it, and
            ask at the time if anything is unclear.
          </p>
          <p>
            In general: keep the treated area clean, and do not put new
            products on it until the salon says you can. Tell the salon
            if the area reacts in a way you did not expect, rather than
            trying to fix it yourself. And if you are unsure about sun,
            heat or exercise after a session, ask before you do it — a
            quick message on WhatsApp is enough.
          </p>

          <h2>Patch test</h2>
          <p>
            A patch test is a small test on a small area of skin, done
            before a full treatment, to see how your skin responds. It
            is a sensible step for a treatment like laser, where skin
            type matters.
          </p>
          <p>
            Ask whether a patch test is part of your first visit when you
            book your consultation. [CONFIRM — does the salon do a patch
            test before a first laser session?] The salon will tell you
            what happens at your first visit, and whether a patch test is
            included.
          </p>

          <h2>Laser vs waxing</h2>
          <p>
            Laser and waxing are two different methods of hair removal,
            and they suit different people. Laser is a course of sessions
            for longer-term hair reduction, while waxing is a per-visit
            treatment you repeat when the hair grows back. Which suits
            you depends on the area, your hair and your budget — ask the
            salon when you book and it will explain both honestly. For
            waxing, see our{" "}
            <Link href="/waxing-peshawar/">
              waxing and threading page
            </Link>
            .
          </p>
          <table className="mt-4 w-full border-collapse text-left text-slate-700">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  &nbsp;
                </th>
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  Laser
                </th>
                <th className="py-2 font-semibold text-slate-900">
                  Waxing
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">How it works</td>
                <td className="py-2 pr-4">
                  A course of sessions, toward longer-term reduction
                </td>
                <td className="py-2">
                  Per-visit treatment, repeated as hair grows back
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">First step</td>
                <td className="py-2 pr-4">A consultation, then sessions</td>
                <td className="py-2">Book a visit, and it is done</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">Results</td>
                <td className="py-2 pr-4">
                  Vary by person, skin and hair type
                </td>
                <td className="py-2">Smooth skin until hair grows back</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Price</td>
                <td className="py-2 pr-4">
                  By area, after your consultation
                </td>
                <td className="py-2">
                  By area — call or WhatsApp for today&apos;s price
                </td>
              </tr>
            </tbody>
          </table>

          <h2>How much does laser cost?</h2>
          <p>
            Laser is priced by the area and the number of sessions, so
            the salon gives you the price after your consultation — no
            prices are listed on this site. A small area and a large area
            are not priced the same, and a course of sessions is not
            priced like a single visit.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The area.</strong> Face, arms, legs and full body
              are different sizes of job.
            </li>
            <li>
              <strong>The number of sessions.</strong> The salon says how
              many sessions it expects after your consultation — that
              number sets the total.
            </li>
            <li>
              <strong>Your hair and skin.</strong> What the salon
              expects for your area depends on your hair and skin type,
              which is why the price comes after the consultation.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> with
            the area you want treated and ask for the price — the salon
            will give it to you after your consultation, before anything
            is booked.
          </p>

          <h2>Mistakes and myths about laser hair removal</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The most common mistake is booking sessions without a
            consultation first. Laser depends on your skin and hair, and
            a consultation is where that is talked through — skipping it
            means booking blind. The second is expecting a fixed session
            count from a web page: the salon does not publish one,
            because it depends on the area and on you. The third is
            comparing prices between salons without asking what the
            price covers — a session count, an area, and aftercare all
            matter.
          </p>
          <h3>Myths</h3>
          <p>
            Laser does not mean the hair is gone for good. The honest
            version is longer-term hair reduction, and results vary from
            person to person. One session is not enough — laser is a
            course, not a single visit. And laser does not work the same
            for everyone: skin type and hair type matter, which is why
            the salon talks them through with you before anything is
            booked.
          </p>

          <h2>What our clients say</h2>
          <p>
            [ADD CLIENT REVIEW — no laser reviews were in the salon&apos;s
            Google review dump yet. Add a real laser review here, in the
            client&apos;s own words, when one exists.]
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Talk to the salon before you book laser"
            text="Call or WhatsApp us about the areas you want treated — we will arrange a consultation and give you the price before anything is booked."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/waxing-peshawar/", label: "Waxing and threading instead of laser" },
              { href: "/facial-peshawar/", label: "Facials for your skin" },
              { href: "/reviews/", label: "See all client reviews" },
              { href: "/contact/", label: "Book a laser consultation" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Laser Hair Removal" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Laser Hair Removal in Peshawar",
          description:
            "Laser hair removal in Hayatabad, Peshawar — face, arms, legs and full body.",
          url: `${SITE.url}/laser-hair-removal-peshawar/`,
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
