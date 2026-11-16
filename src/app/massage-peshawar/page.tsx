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
import HeroBackground from "@/components/HeroBackground";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  imageObjectJsonLd,
  serviceJsonLd,
} from "@/lib/schema";
import type { Faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Massage in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "Massage in Hayatabad, Peshawar — a relaxing back massage to ease tired muscles and unwind. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
  alternates: { canonical: `${SITE.url}/massage-peshawar/` },
  openGraph: {
    title: "Massage in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Massage in Hayatabad, Peshawar — a relaxing back massage to ease tired muscles and unwind. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    url: `${SITE.url}/massage-peshawar/`,
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
    title: "Massage in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Massage in Hayatabad, Peshawar — a relaxing back massage to ease tired muscles and unwind. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What is a massage at SanSha?",
    answer:
      "It is time on a treatment bed at the salon in Phase 2, Hayatabad, while the salon works on tired muscles — shoulders, back and neck — so you leave feeling eased and rested. A massage is a quiet break in your day. It is not a medical treatment, and it is done at the salon, never at home.",
  },
  {
    question: "Which massage should I book?",
    answer:
      "Start with what your body needs: muscles that feel tired after long days, or simply a quiet, relaxing visit. Tell the salon when you book and it will help you choose. Ask which massages the salon offers now, and say what you want the visit to do for you.",
  },
  {
    question: "How do I book a massage?",
    answer:
      "Choose a day, then call 091-5839119 or send a WhatsApp message to 0313 9333377. The salon confirms the time and gives you the price first, so there is nothing extra to pay when you arrive. Walk in if you prefer — the salon is open 24 hours, 7 days a week.",
  },
  {
    question: "Can I book a massage before a wedding or Eid?",
    answer:
      "Yes. A massage in the days before a wedding function or Eid leaves you rested for the event, and many clients book one for exactly that reason. Mention your function date when you book, and the salon will suggest a good day to come in.",
  },
  {
    question: "What should I tell the salon before a massage?",
    answer:
      "Say where you feel sore, and which areas you want the massage to focus on — or to leave alone. If you have had a massage before, say what you liked about it. The more the salon knows, the better it can shape the visit around you.",
  },
  {
    question: "How much does a massage cost?",
    answer:
      "The salon prices each massage on its own. Ask on call or WhatsApp before you come in, and it will tell you the cost — this site carries no price list, so the price is clear before you arrive at the salon.",
  },
];

const HERO = SERVICE_GALLERY.find(
  (g) => g.slug === "back-massage-sansha-hayatabad",
)!;

export default function MassagePage() {
  return (
    <div>
      <HeroBackground
        photo={HERO}
        caption={`${HERO.caption} The photo is an illustration of the service, not a photo of the salon.`}
      >
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Massage" },
            ]}
          />
          <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
            Massage in Hayatabad, Peshawar — Relax and Unwind
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
            Long days leave their mark on shoulders, back and neck —
            a massage at SanSha A Beauty Lounge, Phase 2 Hayatabad,
            is an hour set aside to rest them. Walk in any time, or
            call 091-5839119 or WhatsApp 0313 9333377 and the salon
            will keep a time for you.
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
              <strong>What:</strong> a relaxing massage, done at the
              salon in Phase 2, Hayatabad.
            </li>
            <li>
              <strong>Good for:</strong> tired muscles and a quiet
              break — and anyone who wants to unwind.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — the salon
              helps you choose when you book.
            </li>
            <li>
              <strong>Prices:</strong> no fixed list — the salon gives
              you the price when you book.
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar.
            </li>
            <li>
              <strong>Hours:</strong> Open all day and night, every
              day.
            </li>
            <li>
              <strong>Massage types:</strong> [CONFIRM — ask when you
              book which massages the salon offers].
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>A quiet hour for tired muscles</h2>
          <p>
            Shoulders that ache by evening, a back that complains
            after a long day on your feet, a neck that feels stiff by
            Friday — most bodies in Peshawar know this feeling. A
            massage is the salon&apos;s answer to it: time on a
            treatment bed, in a private room, while the salon works
            on the muscles that have done the week&apos;s work.
          </p>
          <p>
            Nothing about it is complicated. You arrive, you say what
            feels tired, and the salon takes it from there. There is
            no machine, no gadget and no rush — just hands, a
            treatment bed and an hour that belongs to you. When it is
            over, the tired feeling has eased, and the rest of the
            day feels easier.
          </p>
          <p>
            It is worth saying plainly what a massage is not. It is
            not a cure for an injury, and it is not a treatment for a
            health problem. It is rest — the kind of rest your body
            asks for after long days, given properly, at the salon.
          </p>

          <h2>How your visit runs</h2>
          <p>
            A massage visit follows a simple order. Nothing is
            rushed, and nothing is decided without you.
          </p>
          <ol>
            <li>
              <strong>Say what feels tired.</strong> Shoulders, back,
              neck — tell the salon where the week has settled. It
              will shape the massage around what you say.
            </li>
            <li>
              <strong>Lie down and let go.</strong> The treatment bed
              is ready in a private room. You lie down, and the
              massage begins at a pace that suits you.
            </li>
            <li>
              <strong>The massage itself.</strong> The salon works on
              the muscles you talked about, for as long as your
              booking covers. If anything feels too strong or too
              light, say so — it is your visit.
            </li>
            <li>
              <strong>Rest a moment, then go.</strong> When the
              massage ends, take a minute before you get up. The
              salon will tell you how it went, and that is the visit
              done.
            </li>
          </ol>
          <p>
            How long does a massage take? [CONFIRM — ask the salon
            for the usual time when you book.] Just come as you are —
            there is nothing to bring.
          </p>

          <h2>What a massage costs</h2>
          <p>
            A massage is priced on its own, and the salon gives you
            the price when you book. This site carries no price list,
            because the price depends on the massage — ask on call or
            WhatsApp and you will know the cost before you arrive.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The massage itself.</strong> Ask when you book
              which massages the salon offers — [CONFIRM: massage
              types and prices].
            </li>
            <li>
              <strong>The rest of your visit.</strong> A massage
              booked with a facial or a manicure costs more than a
              massage alone — ask the salon to price everything
              together as one visit.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            and ask for the price of the massage you want. Ask before
            you come in, so the cost is settled before you arrive —
            nothing is added at the salon.
          </p>

          <h2>Before you book</h2>
          <p>
            A massage suits anyone who wants to unwind — after long
            days on your feet, before a wedding function, before Eid,
            or for no reason at all. It suits tired shoulders and a
            tired back, and it suits a first visit as much as a
            regular one. If you have never had a massage, say so when
            you book and the salon will keep it gentle.
          </p>
          <p>
            Two things are worth mentioning before you book. First,
            any injury or health concern — the salon needs to know,
            so it can say whether a massage is right for you now or
            whether to wait. Second, any part of your body you would
            rather the massage left alone. A massage is not a medical
            treatment, and the salon will not treat it as one.
          </p>

          <h2>Getting it wrong</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The usual mistake is asking for the hardest massage on
            the menu, because harder sounds like better. It is not —
            a hard massage suits some bodies and hurts others. Tell
            the salon about your muscles and let it choose the
            strength. Another mistake is expecting one massage to
            undo months of tired muscles: it eases them, it does not
            rebuild them. And the third is saying nothing about
            soreness and hoping the salon will guess — say what
            aches, and the visit starts right.
          </p>
          <h3>Myths</h3>
          <p>
            A massage does not cure muscle problems, and it does not
            fix an injury. It rests tired muscles for a while, and
            the feeling fades — how long it lasts depends on your
            body and how you look after it. A massage is not only
            for people in pain, either. It is regular care for
            anyone, and one session does not change the body — it
            rests it. If your body needs more than a massage, the
            salon will say so honestly.
          </p>

          <h2>Massage and other services</h2>
          <p>
            A massage sits well beside the salon&apos;s other
            relaxing services. Book it with a{" "}
            <Link href="/body-spa-peshawar/">
              body spa treatment
            </Link>{" "}
            in the same visit and the whole body is cared for —
            scrub, then massage, in one sitting. A{" "}
            <Link href="/facial-peshawar/">facial</Link> goes with
            it too, when the visit is for a function: face and body,
            both rested before the event. And{" "}
            <Link href="/mani-pedi-peshawar/">
              a manicure and pedicure
            </Link>{" "}
            rounds the visit out, so hands, feet and body are all
            looked after before you go home.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your massage"
            text="Message us on WhatsApp with the day you want, and the salon will confirm your time and your price."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/body-spa-peshawar/", label: "Body spa for soft, refreshed skin" },
              { href: "/facial-peshawar/", label: "Facials in Peshawar" },
              { href: "/mani-pedi-peshawar/", label: "Manicure and pedicure in Peshawar" },
              { href: "/contact/", label: "Book a massage" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Massage" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Massage in Hayatabad, Peshawar",
          description:
            "Massage in Hayatabad, Peshawar — a relaxing back massage to ease tired muscles and unwind.",
          url: `${SITE.url}/massage-peshawar/`,
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
