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
  title: "Eyebrow Tinting in Peshawar | SanSha A Beauty Lounge",
  description:
    "Eyebrow tinting in Hayatabad, Peshawar — darker, defined brows done at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot today.",
  alternates: { canonical: `${SITE.url}/tinting-peshawar/` },
  openGraph: {
    title: "Eyebrow Tinting in Peshawar | SanSha A Beauty Lounge",
    description:
      "Eyebrow tinting in Hayatabad, Peshawar — darker, defined brows done at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot today.",
    url: `${SITE.url}/tinting-peshawar/`,
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
    title: "Eyebrow Tinting in Peshawar | SanSha A Beauty Lounge",
    description:
      "Eyebrow tinting in Hayatabad, Peshawar — darker, defined brows done at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot today.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What is eyebrow tinting?",
    answer:
      "Eyebrow tinting is colour brushed onto the brow hairs, so pale or light brows look darker and more defined without a pencil. It is done at the salon in one short visit — the tint is brushed on, left to work, then wiped away, leaving brows that frame the face.",
  },
  {
    question: "How long does the tint last?",
    answer:
      "How long the tint lasts depends on your brow hairs and how often you wash your face, so no fixed number of days is promised. Ask when you book how long it usually lasts on brows like yours, and when to come back for a fresh tint.",
  },
  {
    question: "How do I book eyebrow tinting?",
    answer:
      "Choose the day you want to come, then message 0313 9333377 on WhatsApp or ring 091-5839119 and ask for a brow tint. The salon confirms the time and tells you the price before your visit, so the cost is settled before you walk in.",
  },
  {
    question: "Does tinting suit light brows?",
    answer:
      "Yes — light brows are the reason most clients book a tint, because the colour makes the brow shape visible without a pencil. If your brows are very fair, tell the salon when you book, and it will choose a shade that looks natural on you instead of too dark.",
  },
  {
    question: "What should I tell the salon before my appointment?",
    answer:
      "Say whether your skin is sensitive, whether you have had a reaction to hair colour or brow products before, and how dark you want the brows. Mention anything your skin reacts to, so the salon can pick the right shade and leave out what does not suit you.",
  },
  {
    question: "How much does eyebrow tinting cost?",
    answer:
      "A brow tint is priced on its own — ring the salon on 091-5839119 or message 0313 9333377 on WhatsApp before you come in, and it will tell you the cost. Ask for the price first, so you know what the visit costs before you walk through the door.",
  },
];

const HERO = SITE_HERO;

export default function TintingPage() {
  return (
    <div>
      <HeroBackground
        photo={HERO}
        caption={`${HERO.caption} Photo is an illustration, not a photo taken at the salon.`}
      >
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Eyebrow Tinting" },
          ]}
        />
        <p className="lux-eyebrow-on-dark mt-4">Darker, Defined Brows</p>
        <h1 className="lux-h1 mt-3">
          Eyebrow Tinting in Hayatabad, Peshawar — Darker, Defined Brows
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
          Eyebrow tinting at SanSha A Beauty Lounge in Phase 2,
          Hayatabad, darkens pale brows so they look defined without a
          pencil — done at the salon in one short visit. Walk in any time, or message 0313 9333377 on WhatsApp or ring 091-5839119 and ask for a slot.
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
              <strong>What:</strong> eyebrow tinting, done at the salon
              in Phase 2, Hayatabad.
            </li>
            <li>
              <strong>Good for:</strong> pale brows that need shape
              and definition — and anyone who wants to skip the
              pencil.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — tell the salon which brow look you want when you book.
            </li>
            <li>
              <strong>Prices:</strong> the salon prices a tint when you book — there is no set list.
            </li>
            <li>
              <strong>Hours:</strong> Open around the clock, every
              day.
            </li>
            <li>
              <strong>Tint shades:</strong> [CONFIRM — ask when you
              book which tint shades you can choose from].
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is eyebrow tinting?</h2>
          <p>
            Eyebrow tinting is colour brushed onto the brow hairs. It
            does not draw a brow on, and it does not tattoo anything —
            it darkens the hairs you already have, so the brow shape
            shows without a pencil. For pale or light brows, the
            change is clear: brows that used to disappear in a photo
            now frame the face.
          </p>
          <p>
            The visit itself is short. The salon brushes the tint on,
            leaves it to work, and wipes it away — and the brows are
            done. There is no recovery, no waiting days for the
            result, and nothing to look after in a special way. It is
            one of the quickest things the salon does, and one of the
            most visible: the face looks finished, even with no other
            makeup on.
          </p>
          <p>
            Tinting is also the easy half of brow care. Threading
            shapes the brow; tinting colours it. Many clients book
            the two together, and the salon will say so when you book
            — shape first, then colour, in the same sitting. But
            tinting on its own is enough when the shape is already
            right and only the colour needs help.
          </p>

          <h2>How your visit runs</h2>
          <p>
            A tinting visit is quick and simple. There is no long
            appointment, no lying down for an hour, and nothing to
            prepare — just your brows, and a few minutes at the salon.
          </p>
          <ol>
            <li>
              <strong>Say how dark you want them.</strong> A shade
              darker than your hair, or just enough to show the shape
              — tell the salon, and it will pick the tint.
            </li>
            <li>
              <strong>The tint is brushed on.</strong> The salon
              brushes the colour onto the brow hairs, carefully, so
              it stays on the brows and off the skin around them.
            </li>
            <li>
              <strong>It is left to work.</strong> The tint sits for
              a short while. The salon watches it — too short and the
              colour is faint, too long and it is darker than you
              asked for.
            </li>
            <li>
              <strong>Wiped away and checked.</strong> The tint is
              wiped off, and you look in the mirror. If one brow
              needs a touch more, the salon says so and fixes it.
            </li>
          </ol>
          <p>
            How long does a tinting visit take? [CONFIRM — ask the salon how long a tint usually takes when you book.] Come with clean
            brows if you can — no pencil on the day — and tell the
            salon about your skin before the visit starts.
          </p>

          <h2>What tinting costs</h2>
          <p>
            A brow tint is priced when you book, and the price depends on the tint you choose. The salon does not list prices on this site, so ask on call or WhatsApp what a tint costs before you come in.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The tint itself.</strong> Ask when you book
              which shades the salon offers — [CONFIRM: tint shades
              and prices].
            </li>
            <li>
              <strong>The rest of your visit.</strong> A tint booked
              with threading or a facial costs more than a tint
              alone — ask the salon to price both together.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            and ask for the price of a brow tint. Get the price before you book, so there is no surprise when you arrive.
          </p>

          <h2>Before you book</h2>
          <p>
            Tinting suits anyone whose brows look pale or washed out
            — before a wedding function, before Eid, or for every
            day. It suits first-timers as much as regulars: if you
            have never had a tint, say so when you book and the salon
            will keep the first one light.
          </p>
          <p>
            Two things help before you book. First, how dark you want the brows — and whether your skin is sensitive, or you have reacted to hair colour before — the salon needs to know, so it can
            pick the right shade. Second, how dark you want the
            brows: say it plainly, and the salon will match the tint
            to what you asked for, instead of guessing.
          </p>

          <h2>Getting it wrong</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The usual mistake is asking for the darkest tint on the
            menu, because darker sounds like more defined. It is not
            — a tint darker than your hair looks drawn on, not
            natural. Tell the salon about your hair and let it choose
            the shade. Another mistake is coming with pencil still on
            the brows — come with clean brows, so the tint goes on
            the hairs and not on the makeup. And the third is
            expecting the tint to shape the brows too: tint colours,
            threading shapes. If the shape needs work, book both.
          </p>
          <h3>Myths</h3>
          <p>
            Tinting does not dye the skin for good — the colour sits
            on the brow hairs and fades, and the skin under it is
            wiped clean at the visit. Tinting is not only for weddings, either: it is regular care for anyone, whatever the occasion. And one tint does not last forever — the colour
            fades as the hairs shed, and a fresh tint is part of
            having tinted brows, not a sign that something went
            wrong.
          </p>

          <h2>Tinting and other services</h2>
          <p>
            Tinting sits well beside the salon&apos;s other brow and
            face services. Book it with{" "}
            <Link href="/waxing-peshawar/">waxing and threading</Link>{" "}
            and the brows are shaped and coloured in one visit — the
            full brow, done in a single sitting. A{" "}
            <Link href="/facial-peshawar/">facial</Link> goes with it
            too, when the visit is for a function: brows and face,
            both fresh before the event. And{" "}
            <Link href="/party-makeup-peshawar/">party makeup</Link>{" "}
            rounds the visit out, so the brows are already defined
            before the makeup goes on.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your brow tint"
            text="Message us on WhatsApp about the brow look you want — ask the salon for the price and a time that suits you."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/party-makeup-peshawar/", label: "Party makeup in Peshawar" },
              { href: "/waxing-peshawar/", label: "Waxing and threading for shaped brows" },
              { href: "/contact/", label: "Book eyebrow tinting" },
              { href: "/facial-peshawar/", label: "Facials in Peshawar" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Eyebrow Tinting" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Eyebrow Tinting in Hayatabad, Peshawar",
          description:
            "Eyebrow tinting in Hayatabad, Peshawar — darker, defined brows done at the salon.",
          url: `${SITE.url}/tinting-peshawar/`,
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
