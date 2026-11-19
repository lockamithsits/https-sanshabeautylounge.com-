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
  title: "Acrylic & Gel Nails in Peshawar | SanSha A Beauty Lounge",
  description:
    "Acrylic and gel nails in Hayatabad, Peshawar — shaped and finished at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot today.",
  alternates: { canonical: `${SITE.url}/nails-peshawar/` },
  openGraph: {
    title: "Acrylic & Gel Nails in Peshawar | SanSha A Beauty Lounge",
    description:
      "Acrylic and gel nails in Hayatabad, Peshawar — shaped and finished at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot today.",
    url: `${SITE.url}/nails-peshawar/`,
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
    title: "Acrylic & Gel Nails in Peshawar | SanSha A Beauty Lounge",
    description:
      "Acrylic and gel nails in Hayatabad, Peshawar — shaped and finished at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book your slot today.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What are acrylic and gel nails?",
    answer:
      "Acrylic and gel nails are nails shaped and finished at the salon — a full set over your own nails, or a fill to keep a set looking new. The salon shapes the nail, adds the colour you choose, and finishes it with a shine or a matt top coat.",
  },
  {
    question: "How are acrylic and gel nails different?",
    answer:
      "Acrylic is built up on the nail and set hard, so it suits long shapes and long wear. Gel is lighter and looks more natural, and it sets under a lamp. The salon helps you choose between them when you book — ask which one suits the shape you want.",
  },
  {
    question: "How do I book acrylic or gel nails?",
    answer:
      "Pick a day that suits you, then call 091-5839119 or message 0313 9333377 on WhatsApp and say you want acrylic or gel nails. The salon confirms your time and gives you the price first, so you know the cost before you come in.",
  },
  {
    question: "How long does a full set take?",
    answer:
      "A full set takes time — shaping, building and finishing each nail takes a while, so keep your morning or afternoon free. [CONFIRM — ask the salon how long a full set usually takes when you book.] Come with clean hands and no polish, so the salon can start straight away.",
  },
  {
    question: "How do I look after my nails?",
    answer:
      "Do not use your nails as tools — no opening tins, no picking at the edge, no pulling off a loose nail. Wear gloves for washing up and cleaning, and keep the nails dry where you can. If a nail lifts or breaks, book a repair instead of pulling it off — pulling takes your own nail with it.",
  },
  {
    question: "How much do acrylic or gel nails cost?",
    answer:
      "Each set is priced on its own — ask the salon for the price of a full set, a fill, or nail art, and tell it the length and colour you want. Ring 091-5839119 or message 0313 9333377 on WhatsApp and ask the salon for the price before you book.",
  },
];

const HERO = SITE_HERO;

export default function NailsPage() {
  return (
    <div>
      <HeroBackground
        photo={HERO}
        caption={`${HERO.caption} Photo is an illustration, not a photo taken at the salon.`}
      >
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Acrylic & Gel Nails" },
          ]}
        />
        <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
          Acrylic &amp; Gel Nails in Hayatabad, Peshawar — Shaped
          &amp; Finished at the Salon
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
          Acrylic and gel nails at SanSha A Beauty Lounge in Phase 2,
          Hayatabad — shaped, coloured and finished at the salon,
          from a full set to a fill or a fresh look. Ring 091-5839119
          or send a WhatsApp message to 0313 9333377 and ask for a
          slot.
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
              <strong>What:</strong> acrylic and gel nails — full
              sets, fills and nail art, shaped and finished at the
              salon in Phase 2, Hayatabad.
            </li>
            <li>
              <strong>Good for:</strong> long shapes, a fresh look,
              or keeping a set looking new.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — tell the
              salon the length and colour you want.
            </li>
            <li>
              <strong>Prices:</strong> ask the salon for the price of a set — there is no set list.
            </li>
            <li>
              <strong>Hours:</strong> Open morning to night, every
              day.
            </li>
            <li>
              <strong>Types:</strong> [CONFIRM — ask the salon which acrylic and gel finishes are available].
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What are acrylic and gel nails?</h2>
          <p>
            Acrylic and gel nails are nails built up and finished at
            the salon, over your own nails. A full set is a fresh
            set, shaped the way you want it; a fill keeps a set you
            already have looking new as your own nails grow. The
            finish is the part you choose: the shape, the length,
            the colour, and the top coat — shine or matt.
          </p>
          <p>
            The difference between the two is how they are built.
            Acrylic is built up on the nail and set hard, so it
            suits long shapes and long wear. Gel is lighter and
            looks more natural, and it sets under a lamp. Neither
            one is better on its own — the right one depends on the
            shape you want and how you use your hands. The salon
            helps you choose between them when you book, so ask
            which one suits the shape you want.
          </p>
          <p>
            This page is about acrylic and gel nails — the shaping,
            the colour and the finish. It is not about the care of
            the hands themselves: that is the{" "}
            <Link href="/mani-pedi-peshawar/">manicure and pedicure</Link>{" "}
            page, where the nails are cleaned, shaped and tidied
            before any colour goes on. The two pages sit side by
            side: mani-pedi for the care, nails for the look.
          </p>

          <h2>How a nail visit runs</h2>
          <p>
            A nail visit runs in a simple order. The salon shapes first, then builds, then finishes — and checks the set with you.
          </p>
          <ol>
            <li>
              <strong>Shape first.</strong> The salon looks at your
              hands and talks through the shape and the length with
              you — long, short, round, square.
            </li>
            <li>
              <strong>Built up.</strong> The acrylic or gel is built
              up on the nail and set, one nail at a time.
            </li>
            <li>
              <strong>Colour and finish.</strong> The colour you
              chose goes on, then the top coat — shine or matt.
            </li>
            <li>
              <strong>Checked together.</strong> When the set is
              done, the salon checks it with you, nail by nail, so
              you leave happy with how it looks.
            </li>
          </ol>
          <p>
            How long does a full set take? [CONFIRM — ask the salon how long a full set usually takes when you book.] Come with clean hands
            and no polish, so the salon can start straight away.
          </p>

          <h2>What nails cost</h2>
          <p>
            A set is priced when you book, and the price depends on the length, the colour and the design. Ask on call or WhatsApp what a full set, a fill, or nail art costs before you come in, and the salon will tell you the price.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The type.</strong> Ask the salon which acrylic
              and gel finishes it offers — [CONFIRM: types and
              prices].
            </li>
            <li>
              <strong>The length and the design.</strong> A long set
              with nail art costs more than a short set in one
              colour — tell the salon what you want when you book.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            and ask for the price of a full set, a fill, or nail
            art. Ask before you come in, so you know the cost first.
          </p>

          <h2>Before you book</h2>
          <p>
            Nails suit anyone who wants a fresh look, a long shape,
            or a set that lasts. They suit first-timers as much as
            regulars: if you have never had a full set, say so when
            you book and the salon will go slowly with you, shape by shape.
          </p>
          <p>
            Before you book, two things help. First,
            the shape and length you want — bring a photo if you
            have one, or describe it on call. Second, anything your
            nails or skin react to, so the salon can choose what
            suits you. And come with clean hands and no polish, so
            the salon can start straight away.
          </p>

          <h2>Getting it wrong</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The usual mistake is using your nails as tools — opening
            tins, picking at the edge, pulling off a loose nail.
            That breaks the nail and takes your own nail with it. If
            a nail lifts or breaks, book a repair instead of pulling
            it off. Another mistake is soaking the nails in hot
            water right after the visit: give the set time to settle,
            and wear gloves for washing up and cleaning.
          </p>
          <h3>Myths</h3>
          <p>
            Acrylic and gel nails do not damage your own nails by
            themselves — the damage comes from pulling a set off
            instead of having it removed properly. And a set does
            not last forever: as your own nails grow, the set needs
            a fill, and the salon will tell you when to come back.
            One set does not suit every hand, either — the shape and
            the length have to fit how you use your hands, and the
            salon will say so honestly when you book.
          </p>

          <h2>Nails and other services</h2>
          <p>
            Nails sit well beside the salon&apos;s other services.
            Book them with a{" "}
            <Link href="/mani-pedi-peshawar/">manicure and pedicure</Link>{" "}
            and the hands are cared for first, then finished with
            the set — care, then look, in one visit.{" "}
            <Link href="/party-makeup-peshawar/">Party makeup</Link>{" "}
            goes with them too, when the visit is for an event:
            makeup done, and nails done, in one sitting. And a{" "}
            <Link href="/facial-peshawar/">facial</Link> rounds the
            visit out, so the face is fresh and the nails are new
            before you go home.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your nails"
            text="Message us on WhatsApp and tell us the shape and colour you want — ask the salon for the price and book your set in."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/contact/", label: "Book acrylic or gel nails" },
              { href: "/mani-pedi-peshawar/", label: "Manicure and pedicure in Peshawar" },
              { href: "/facial-peshawar/", label: "Facials in Peshawar" },
              { href: "/party-makeup-peshawar/", label: "Party makeup in Peshawar" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Acrylic & Gel Nails" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Acrylic & Gel Nails in Hayatabad, Peshawar",
          description:
            "Acrylic and gel nails in Hayatabad, Peshawar — shaped and finished at the salon.",
          url: `${SITE.url}/nails-peshawar/`,
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
