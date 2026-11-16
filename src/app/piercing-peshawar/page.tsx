import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE } from "@/data/photos";
import { SERVICE_GALLERY } from "@/data/serviceGallery";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQ";
import CallCTA, { RelatedLinks } from "@/components/CallCTA";
import HeroBackground from "@/components/HeroBackground";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  imageObjectJsonLd,
  serviceJsonLd,
} from "@/lib/schema";
import type { Faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Ear Piercing in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "Ear piercing in Hayatabad, Peshawar — done at the salon in Phase 2, Hayatabad. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot today.",
  alternates: { canonical: `${SITE.url}/piercing-peshawar/` },
  openGraph: {
    title: "Ear Piercing in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Ear piercing in Hayatabad, Peshawar — done at the salon in Phase 2, Hayatabad. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot today.",
    url: `${SITE.url}/piercing-peshawar/`,
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
    title: "Ear Piercing in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Ear piercing in Hayatabad, Peshawar — done at the salon in Phase 2, Hayatabad. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot today.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What ear piercing does the salon do?",
    answer:
      "The salon does ear piercing at the salon in Phase 2, Hayatabad — ask when you book which piercings it does. The piercing is done with a piercing gun, in a private room, and the salon tells you how to look after it before you leave.",
  },
  {
    question: "How do I book ear piercing?",
    answer:
      "Choose the day you want to come, then call the salon on 091-5839119 or WhatsApp 0313 9333377 and ask for an ear piercing. The salon gives you the time and the price before your visit, so you know the cost before you come in.",
  },
  {
    question: "Does ear piercing hurt?",
    answer:
      "Everyone feels it differently — a quick sting, then it is over. The salon does the piercing fast, in one smooth step, and tells you what to expect before it starts. If you are nervous, say so when you book, and the salon will go slowly with you.",
  },
  {
    question: "What should I tell the salon before my piercing?",
    answer:
      "Say which ear and which spot you want pierced, and whether you have had a piercing before. Mention any allergy to metals, and anything your skin reacts to, so the salon can pick the right stud and leave out what does not suit you.",
  },
  {
    question: "How do I look after a new piercing?",
    answer:
      "The salon tells you how to look after it before you leave — what to avoid in the first days, and how to keep it clean. Follow what the salon says, even if a friend suggests something else, and do not touch it with dirty hands. If it looks sore or swollen, ask the salon what to do.",
  },
  {
    question: "How much does ear piercing cost?",
    answer:
      "A piercing is priced on its own — call the salon on 091-5839119 or WhatsApp 0313 9333377 and ask what a piercing costs. The salon tells you the price before your visit, so you know the cost before you walk through the door.",
  },
];

const HERO = SERVICE_GALLERY.find(
  (g) => g.slug === "ear-piercing-sansha-hayatabad",
)!;

export default function PiercingPage() {
  return (
    <div>
      <HeroBackground
        photo={HERO}
        caption={`${HERO.caption} The photo is an illustration of the service, not a photo of the salon at work.`}
      >
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Ear Piercing" },
          ]}
        />
        <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
          Ear Piercing in Hayatabad, Peshawar — Done at the Salon
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
          Ear piercing at SanSha A Beauty Lounge in Phase 2, Hayatabad,
          is done at the salon — a quick visit, and you leave with
          your new piercing. Walk in any time — or ring the salon on 091-5839119 or message 0313 9333377 on WhatsApp to ask for a slot.
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
              <strong>What:</strong> ear piercing, done at the salon
              in Phase 2, Hayatabad.
            </li>
            <li>
              <strong>Good for:</strong> a first piercing, or a new
              one — and anyone who wants it done at the salon.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — tell the salon which ear you want pierced when you book.
            </li>
            <li>
              <strong>Prices:</strong> the salon prices a piercing when you book — there is no set list.
            </li>
            <li>
              <strong>Hours:</strong> Open round the clock, every
              single day.
            </li>
            <li>
              <strong>Piercing types:</strong> [CONFIRM — ask when you
              book which piercings the salon does].
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is ear piercing at the salon?</h2>
          <p>
            Ear piercing at the salon is a quick visit with a clear
            result: you come in, the piercing is done with a piercing
            gun, and you leave wearing it. There is no long
            appointment, no recovery time, and nothing to prepare —
            just the ear, the stud, and a few minutes at the salon.
          </p>
          <p>
            The visit is short, but the salon does not rush it. The
            spot is marked first, so you can see where the piercing
            will sit before anything happens. If the mark looks wrong
            to you, say so — it is moved before the piercing, not
            after. That check is the whole point of having it done at
            a salon instead of at home.
          </p>
          <p>
            A piercing is also the start of looking after the ear,
            not the end of it. The salon tells you how to keep it
            clean in the first days, and what to avoid — and it tells
            you before you leave, while the advice is fresh. What
            you do in the first days decides how well the piercing
            settles, so listen to what the salon says.
          </p>

          <h2>How your visit runs</h2>
          <p>
            A piercing visit runs in a set order. The salon goes step by step, and checks with you before each one.
          </p>
          <ol>
            <li>
              <strong>Say which ear and which spot.</strong> Tell the
              salon what you want pierced, and it will mark the spot
              so you can see it first.
            </li>
            <li>
              <strong>Check the mark.</strong> Look in the mirror.
              If the mark sits where you want it, the piercing goes
              ahead — if not, it is moved.
            </li>
            <li>
              <strong>The piercing itself.</strong> One smooth step
              with the piercing gun. It is quick — a sting, then it
              is done.
            </li>
            <li>
              <strong>How to look after it.</strong> Before you
              leave, the salon tells you how to keep it clean and
              what to avoid in the first days.
            </li>
          </ol>
          <p>
            How long does a piercing visit take? [CONFIRM — ask the salon how long a piercing visit usually takes when you book.] Come as you are — bring nothing with you.
          </p>

          <h2>What piercing costs</h2>
          <p>
            The salon prices a piercing when you book. Ask on call or WhatsApp what a piercing costs, and you will know the price before your visit — there is no price list on this site.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The piercing itself.</strong> Ask when you book
              which piercings the salon does — [CONFIRM: piercing
              types and prices].
            </li>
            <li>
              <strong>The rest of your visit.</strong> A piercing
              booked with a facial or a manicure costs more than a
              piercing alone — ask the salon to price them in one go.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            and ask for the price of a piercing. Ask before you come in, so you know the cost before you arrive.
          </p>

          <h2>Before you book</h2>
          <p>
            Piercing suits anyone who wants an ear pierced — a first
            piercing, or a new one beside an old one. It suits
            first-timers as much as regulars: if you have never had a
            piercing, say so when you book and the salon will go slowly with you.
          </p>
          <p>
            Before you book, two things help. First,
            any allergy to metals — the salon needs to know, so it
            can pick the right stud. Second, whether the piercing is
            for a child: ask the salon what it needs from you, and
            bring what it asks for. The salon will tell you plainly
            what it can do, and what it needs from you first.
          </p>

          <h2>Getting it wrong</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The usual mistake is touching the new piercing with dirty
            hands, or turning it for no reason. Leave it alone, keep
            it clean the way the salon showed you, and let it settle.
            Another mistake is changing the stud too soon: wait until
            the salon says it is ready, and ask before you change it.
            And the third is ignoring it when it looks sore — if it
            looks sore or swollen, ask the salon what to do, instead
            of waiting and hoping.
          </p>
          <h3>Myths</h3>
          <p>
            A piercing does not heal in a day. It takes time to
            settle, and the first days matter most — how you look
            after it then decides how it heals. A piercing is not
            only for young people, either: it is for anyone, whatever
            the age. And one piercing does not mean the ear is done
            — if you want another, the salon will say when the first
            one is ready for a second.
          </p>

          <h2>Piercing and other services</h2>
          <p>
            Piercing sits well beside the salon&apos;s other face and
            grooming services. Book it with a{" "}
            <Link href="/facial-peshawar/">facial</Link> and the face
            is cared for and pierced in one visit — skin, then stud,
            in the same sitting. A{" "}
            <Link href="/mani-pedi-peshawar/">
              manicure and pedicure
            </Link>{" "}
            goes with it too, when the visit is for a function: hands,
            feet and ears, all looked after before the event. And{" "}
            <Link href="/party-makeup-peshawar/">party makeup</Link>{" "}
            rounds the visit out, so the piercing is already in
            before the makeup goes on.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your piercing"
            text="Message us on WhatsApp and say which ear you want pierced — ask the salon for the price and pick a day that suits you."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/mani-pedi-peshawar/", label: "Manicure and pedicure in Peshawar" },
              { href: "/contact/", label: "Book ear piercing" },
              { href: "/facial-peshawar/", label: "Facials in Peshawar" },
              { href: "/party-makeup-peshawar/", label: "Party makeup in Peshawar" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Ear Piercing" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Ear Piercing in Hayatabad, Peshawar",
          description:
            "Ear piercing in Hayatabad, Peshawar — done at the salon.",
          url: `${SITE.url}/piercing-peshawar/`,
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
