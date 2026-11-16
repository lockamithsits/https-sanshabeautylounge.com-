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
  title: "Hijama Cupping in Peshawar | SanSha A Beauty Lounge",
  description:
    "Hijama cupping in Hayatabad, Peshawar — fire cupping done at the salon in Phase 2. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
  alternates: { canonical: `${SITE.url}/hijama-cupping-peshawar/` },
  openGraph: {
    title: "Hijama Cupping in Peshawar | SanSha A Beauty Lounge",
    description:
      "Hijama cupping in Hayatabad, Peshawar — fire cupping done at the salon in Phase 2. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    url: `${SITE.url}/hijama-cupping-peshawar/`,
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
    title: "Hijama Cupping in Peshawar | SanSha A Beauty Lounge",
    description:
      "Hijama cupping in Hayatabad, Peshawar — fire cupping done at the salon in Phase 2. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What is hijama cupping?",
    answer:
      "Hijama cupping is a traditional therapy done at the salon, using warm glass cups placed on the skin — most often the back. The cups are warmed with fire, set on the skin, and left for a short while. It is a quiet, hands-on treatment, done in a private room at the salon.",
  },
  {
    question: "What happens in a cupping session?",
    answer:
      "You lie down in a private room, and the salon places warm glass cups on the area you talked about — usually the back. The cups stay on for a short while, then the salon lifts them off and the session is done. Tell the salon if anything feels too strong at any point.",
  },
  {
    question: "How do I book hijama cupping?",
    answer:
      "Pick a day that suits you, then message 0313 9333377 on WhatsApp or call 091-5839119 and ask for hijama cupping. The salon confirms the time and tells you the price first, so the cost is settled before you arrive at the salon.",
  },
  {
    question: "Who should ask first before booking cupping?",
    answer:
      "Say if you have a health concern, an injury, or skin that breaks easily — the salon needs to know, so it can say whether cupping is right for you now or whether to wait. Cupping is not a medical treatment, and the salon will not treat it as one. When in doubt, ask the salon first.",
  },
  {
    question: "What should I tell the salon before my session?",
    answer:
      "Say where you feel sore, and which areas you want the cups on — or to leave alone. Mention any health concern or injury, and anything your skin reacts to. The more the salon knows, the better it can shape the session around you.",
  },
  {
    question: "How much does hijama cupping cost?",
    answer:
      "A cupping session is priced on its own — message 0313 9333377 on WhatsApp or ring 091-5839119 and ask what a session costs. The salon gives you the price before your visit, so the cost is clear before you arrive.",
  },
];

const HERO = SERVICE_GALLERY.find(
  (g) => g.slug === "hijama-cupping-sansha-hayatabad",
)!;

export default function HijamaCuppingPage() {
  return (
    <div>
      <HeroBackground
        photo={HERO}
        caption={`${HERO.caption} The photo is an illustration of the service, not a photo of this salon.`}
      >
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Hijama Cupping" },
          ]}
        />
        <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
          Hijama Cupping in Hayatabad, Peshawar — Fire Cupping at the
          Salon
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
          Hijama cupping at SanSha A Beauty Lounge in Phase 2,
          Hayatabad, is fire cupping done at the salon — warm glass
          cups placed on the back to ease tired muscles. Walk in any time, or send a WhatsApp message to 0313 9333377 or call 091-5839119 and ask for a time.
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
              <strong>What:</strong> hijama cupping with fire cups,
              done at the salon in Phase 2, Hayatabad.
            </li>
            <li>
              <strong>Good for:</strong> a stiff back and tired muscles — and a quiet hour to yourself.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — tell the salon where it hurts when you book.
            </li>
            <li>
              <strong>Prices:</strong> the salon prices a session when you book — there is no set list.
            </li>
            <li>
              <strong>Hours:</strong> Open day and night, seven days
              a week.
            </li>
            <li>
              <strong>Cupping areas:</strong> [CONFIRM — ask when you
              book which areas the salon cups].
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is hijama cupping?</h2>
          <p>
            Hijama cupping is an old therapy, done at the salon with
            warm glass cups. The cups are warmed with fire, set on
            the skin — most often the back — and left for a short
            while. The warmth and the pull of the cups are the
            treatment: nothing is cut, nothing is injected, and
            nothing is taken from the body. It is a quiet session in
            a private room, and it is over before long.
          </p>
          <p>
            People book cupping when the back aches after long days, or the shoulders feel heavy by evening — when a massage alone does not feel like enough. It will not cure an injury, and it will not treat a health problem. It is rest for the back and shoulders, given in a different way from a massage.
          </p>
          <p>
            It is worth saying plainly what cupping is not. It does not fix a health problem, and it does not replace a doctor. If you have a health concern, tell the salon when you book, and it will say honestly if cupping is right for you now, or if you should wait. That is the honest way to think about cupping: a traditional therapy for a stiff back, done properly, at the salon.
          </p>

          <h2>How your visit runs</h2>
          <p>
            A cupping session runs in a set order, one step at a time. The salon talks you through each step before it happens.
          </p>
          <ol>
            <li>
              <strong>Say where you feel sore.</strong> Back,
              shoulders, or somewhere else — tell the salon where
              the week has settled. It will shape the session around
              what you say.
            </li>
            <li>
              <strong>Lie down in a private room.</strong> The cups
              go on the area you talked about. You lie still while
              they sit on the skin.
            </li>
            <li>
              <strong>The cups sit for a short while.</strong> The
              salon watches them. If anything feels too strong, say
              so at once — it is your session.
            </li>
            <li>
              <strong>The cups come off.</strong> The salon lifts
              them away, one by one, and the session is done. Rest
              a moment before you get up.
            </li>
          </ol>
          <p>
            How long does a cupping session take? [CONFIRM — ask the salon how long a cupping session usually takes when you book.] Come as you are — you need to bring nothing.
          </p>

          <h2>What cupping costs</h2>
          <p>
            A cupping session is priced when you book. The salon prices each session on its own, so ask on call or WhatsApp what a session costs — you will know the price before your visit.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The session itself.</strong> Ask when you book
              which areas the salon cups — [CONFIRM: cupping areas
              and prices].
            </li>
            <li>
              <strong>The rest of your visit.</strong> Cupping booked
              with a massage costs more than cupping alone — ask the salon to price the session as a whole.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            and ask for the price of a cupping session. Ask before you come in, so the cost is clear before you arrive.
          </p>

          <h2>Before you book</h2>
          <p>
            Cupping suits anyone who wants to try it for tired
            muscles — after long days on your feet, before a wedding
            function, or for no reason at all. First-timers are welcome too. If you have never had cupping, say so when you book and the salon will keep the first session gentle.
          </p>
          <p>
            Before you book, it helps to say two things. First,
            any health concern or injury — the salon needs to know,
            so it can say if cupping is right for you now, or if you should wait. Second, any part of your body you would rather the cups left alone — say so, and the salon will leave it alone. Cupping is not medicine, and the salon does not treat it as medicine.
          </p>

          <h2>Getting it wrong</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The usual mistake is asking for the strongest cups on the back, because stronger sounds like better. It is not — strong cupping suits some bodies and hurts others. Say where it hurts and let the salon pick the strength. Another mistake is expecting one session to undo months of a stiff back: it eases it, it does not rebuild it. And the third is saying nothing about a health concern and hoping the salon will guess — tell the salon what aches, and the visit starts right.
          </p>
          <h3>Myths</h3>
          <p>
            Cupping does not cure a muscle problem, and it does not fix an injury. It eases a stiff back for a while, then the feeling fades away. How long the ease lasts depends on your body, and on how you look after it. Cupping is not only for people in pain, either — anyone can book it. One session rests the body, it does not change it, and if your body needs more than cupping, the salon will say so honestly.
          </p>

          <h2>Cupping and other services</h2>
          <p>
            Cupping sits well beside the salon&apos;s other relaxing
            services. Book it with a{" "}
            <Link href="/massage-peshawar/">massage</Link> in the same
            visit and the tired muscles get both treatments — cups,
            then hands, in one sitting. A{" "}
            <Link href="/body-spa-peshawar/">body spa treatment</Link>{" "}
            goes with it too, when the visit is for the whole body:
            scrub, then cups, then rest. And a{" "}
            <Link href="/facial-peshawar/">facial</Link> rounds the
            visit out, so face and body are both cared for before
            you go home.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your cupping"
            text="Message us on WhatsApp and tell us where it hurts — the salon will tell you the price and book your session."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/massage-peshawar/", label: "Massage in Peshawar" },
              { href: "/facial-peshawar/", label: "Facials in Peshawar" },
              { href: "/body-spa-peshawar/", label: "Body spa for soft, refreshed skin" },
              { href: "/contact/", label: "Book hijama cupping" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Hijama Cupping" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Hijama Cupping in Hayatabad, Peshawar",
          description:
            "Hijama cupping in Hayatabad, Peshawar — fire cupping done at the salon.",
          url: `${SITE.url}/hijama-cupping-peshawar/`,
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
