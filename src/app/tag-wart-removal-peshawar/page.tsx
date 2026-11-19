import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE } from "@/data/photos";
import {SITE_HERO} from "@/data/serviceGallery";
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
  title: "Tag & Wart Removal in Peshawar | SanSha A Beauty Lounge",
  description:
    "Tag and wart removal in Hayatabad, Peshawar — done at the salon in Phase 2, Hayatabad. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot today.",
  alternates: { canonical: `${SITE.url}/tag-wart-removal-peshawar/` },
  openGraph: {
    title: "Tag & Wart Removal in Peshawar | SanSha A Beauty Lounge",
    description:
      "Tag and wart removal in Hayatabad, Peshawar — done at the salon in Phase 2, Hayatabad. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot today.",
    url: `${SITE.url}/tag-wart-removal-peshawar/`,
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
    title: "Tag & Wart Removal in Peshawar | SanSha A Beauty Lounge",
    description:
      "Tag and wart removal in Hayatabad, Peshawar — done at the salon in Phase 2, Hayatabad. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot today.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What does the salon remove?",
    answer:
      "The salon removes small skin tags and warts at the salon in Phase 2, Hayatabad — ask when you book whether the spot you have is one it removes. The work is done with a small device, in a private room, and the salon tells you how to look after the spot before you leave.",
  },
  {
    question: "How does tag and wart removal work?",
    answer:
      "The salon looks at the spot first, then treats it with a small device — the work is quick, and the spot is gone in the same visit. The salon tells you how to look after the spot afterwards, and what to watch for in the first days.",
  },
  {
    question: "How do I book tag or wart removal?",
    answer:
      "Ring the salon on 091-5839119 or message 0313 9333377 on WhatsApp and say you want a tag or a wart removed, then pick a day that suits you. The salon will tell you the time and the price when you book, so the cost is clear before you arrive.",
  },
  {
    question: "What should I tell the salon before my visit?",
    answer:
      "Say where the spot is, how long it has been there, and whether it has changed shape or colour. If a spot bleeds, or looks unusual, talk to a doctor before you book — the salon will tell you the same. Mention anything your skin reacts to, so the salon knows what it is working on.",
  },
  {
    question: "How do I look after the spot afterwards?",
    answer:
      "Before you leave, the salon tells you how to care for the spot — what to avoid in the first days, and how to keep it clean. Follow the salon's advice, and do not pick at the spot while it heals. If it looks sore, swollen or infected, ask the salon what to do, or see a doctor.",
  },
  {
    question: "How much does tag or wart removal cost?",
    answer:
      "A removal is priced on its own — ring 091-5839119 or message 0313 9333377 on WhatsApp and ask what removing your spot costs. The salon gives you the price before your visit, so you know the cost before you come in.",
  },
];

const HERO = SITE_HERO;

export default function TagWartRemovalPage() {
  return (
    <div>
      <HeroBackground
        photo={HERO}
        caption={`${HERO.caption} Photo is an illustration, not a photo taken at the salon.`}
      >
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Tag & Wart Removal" },
          ]}
        />
        <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
          Tag &amp; Wart Removal in Hayatabad, Peshawar — Done at the
          Salon
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
          Tag and wart removal at SanSha A Beauty Lounge in Phase 2,
          Hayatabad, takes off small tags and warts at the salon — a
          quick visit, done with a small device. Walk in any time, or
          message 0313 9333377 on WhatsApp or call 091-5839119 and ask for a slot.
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
              <strong>What:</strong> tag and wart removal, done with
              a small device at the salon in Phase 2, Hayatabad.
            </li>
            <li>
              <strong>Good for:</strong> small tags and warts you want taken off — and anyone who wants it done properly, at the salon.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — tell the salon about the spot when you book.
            </li>
            <li>
              <strong>Prices:</strong> ask the salon for the price of a removal — there is no set list.
            </li>
            <li>
              <strong>Hours:</strong> Open through the week, day and
              night.
            </li>
            <li>
              <strong>What can be removed:</strong> [CONFIRM — ask
              when you book which tags and warts the salon removes].
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is tag and wart removal?</h2>
          <p>
            Tag and wart removal is a small treatment at the salon: a
            tag or a wart is taken off with a small device, in a
            private room, in one visit. There is no long appointment
            and no recovery time — you come in, the spot is looked
            at, the device does the work, and you leave with the
            spot gone.
          </p>
          <p>
            The spots that suit it are the small ones. A tag on the
            neck, a wart on the hand, a small mark on the cheek that
            catches the eye — these are the spots clients ask about.
            The salon looks at the spot first and says honestly
            whether it is one it removes, or whether to see a doctor
            first. That look is the whole point of having it done at the salon instead of at home.
          </p>
          <p>
            It is worth saying plainly what removal is not. It does
            not treat a skin problem, and it does not replace a
            doctor. If a spot has changed shape or colour, or it
            bleeds, talk to a doctor before you book — the salon
            will tell you the same. That is the honest way to think
            about removal: a small treatment for small spots, done
            properly, at the salon.
          </p>

          <h2>How your visit runs</h2>
          <p>
            A removal visit runs in a simple order. The salon looks first, then treats the spot, then tells you how to look after it.
          </p>
          <ol>
            <li>
              <strong>The salon looks at the spot.</strong> Where it
              is, how big it is, and how long it has been there —
              the salon looks first, then says what it can do.
            </li>
            <li>
              <strong>The device does the work.</strong> The small
              device treats the spot. It is quick — if anything
              feels too strong, say so at once.
            </li>
            <li>
              <strong>Checked and finished.</strong> When the work
              is done, the salon checks the spot with you and tells
              you how it looks.
            </li>
            <li>
              <strong>How to look after it.</strong> Before you
              leave, the salon tells you how to care for the spot
              and what to watch for in the first days.
            </li>
          </ol>
          <p>
            How long does a removal visit take? [CONFIRM — ask the salon how long a removal visit usually takes when you book.] Just come as you are — there is nothing to bring.
          </p>

          <h2>What removal costs</h2>
          <p>
            The price of a removal depends on the spot, and the salon prices it when you book. Ask on call or WhatsApp what removing your spot costs before you come in — the salon will give you the price first.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The spot itself.</strong> Ask when you book
              which tags and warts the salon removes — [CONFIRM:
              what can be removed and prices].
            </li>
            <li>
              <strong>How many spots.</strong> More than one spot in
              a visit costs more than one alone — ask the salon to price them all together.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            and ask for the price of removing your spot. Get the price before you book, so the cost is clear before you arrive.
          </p>

          <h2>Before you book</h2>
          <p>
            Removal suits anyone with a small tag or wart they want
            taken off — on the neck, the hand, or the face. It suits
            first-timers as much as regulars: if you have never had
            a removal, say so when you book and the salon will go slowly with you.
          </p>
          <p>
            Two things are worth saying before you book. First,
            where the spot is and how long it has been there — the
            salon needs to know, so it can say whether it removes
            it. Second, whether the spot has changed shape or
            colour, or it bleeds: if so, talk to a doctor before you
            book. The salon will tell you the same, and it will not
            treat a spot it should not touch.
          </p>

          <h2>Getting it wrong</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The usual mistake is picking at the spot afterwards, or
            pulling at the skin while it heals. Leave it alone, keep it clean the way the salon showed you, and give it time to heal.
            Another mistake is covering it with makeup too soon:
            wait until the salon says it is ready, and ask before
            you cover it. And the third is waiting and hoping when it looks sore — if it looks sore, swollen or infected, tell the salon, or see a doctor.
          </p>
          <h3>Myths</h3>
          <p>
            Removal does not leave the skin as it was in a day. The spot takes time to heal, and the first days matter most — how you care for it then decides how it heals.
            Removal is not a cure for a skin problem, either: it
            takes off a small spot, and nothing more. And one
            removal does not mean every spot is gone — if you have
            more than one, the salon will say what it can do in a
            single visit.
          </p>

          <h2>Tag removal and other services</h2>
          <p>
            Removal sits well beside the salon&apos;s other skin
            services. Book it with a{" "}
            <Link href="/facial-peshawar/">facial</Link> and the skin
            is cared for and the spot taken off in one visit — face,
            then spot, in the same sitting.{" "}
            <Link href="/laser-hair-removal-peshawar/">
              Laser hair removal
            </Link>{" "}
            goes with it too, when the visit is for the face: hair
            removed, and spot removed, in one sitting. And{" "}
            <Link href="/waxing-peshawar/">waxing</Link> rounds the
            visit out, so the skin is smooth and the spot is gone
            before you go home.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your removal"
            text="Send us a WhatsApp message and tell us about the spot — the salon will give you the price and keep a slot for you."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/laser-hair-removal-peshawar/", label: "Laser hair removal for face and body" },
              { href: "/contact/", label: "Book tag or wart removal" },
              { href: "/waxing-peshawar/", label: "Waxing and threading in Peshawar" },
              { href: "/facial-peshawar/", label: "Facials in Peshawar" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tag & Wart Removal" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Tag & Wart Removal in Hayatabad, Peshawar",
          description:
            "Tag and wart removal in Hayatabad, Peshawar — done at the salon.",
          url: `${SITE.url}/tag-wart-removal-peshawar/`,
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
