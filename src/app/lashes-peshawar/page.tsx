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
  title: "Lash Extensions in Peshawar | SanSha A Beauty Lounge",
  description:
    "Lash extensions in Hayatabad, Peshawar — fuller-looking lashes applied at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
  alternates: { canonical: `${SITE.url}/lashes-peshawar/` },
  openGraph: {
    title: "Lash Extensions in Peshawar | SanSha A Beauty Lounge",
    description:
      "Lash extensions in Hayatabad, Peshawar — fuller-looking lashes applied at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    url: `${SITE.url}/lashes-peshawar/`,
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
    title: "Lash Extensions in Peshawar | SanSha A Beauty Lounge",
    description:
      "Lash extensions in Hayatabad, Peshawar — fuller-looking lashes applied at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What are lash extensions?",
    answer:
      "Lash extensions are single lashes fixed to your own lashes, one by one, so they look fuller and longer without mascara. They are applied at the salon while you lie back with your eyes closed, and the salon shapes them to the look you asked for — natural for every day, or fuller for a wedding or Eid.",
  },
  {
    question: "How long do lash extensions last?",
    answer:
      "That depends on your own lashes and how you look after the extensions, so the salon does not promise a fixed number of days. When you book, ask how long they usually last and when to come back for a fill — the salon will give you an honest answer for your lashes, not a number from a chart.",
  },
  {
    question: "How do I book lash extensions?",
    answer:
      "Pick a day that suits you, then ring the salon on 091-5839119 or message 0313 9333377 on WhatsApp. Tell the salon the look you want — natural or fuller — and it will confirm your time and give you the price first, so there is nothing extra to pay when you arrive at the salon.",
  },
  {
    question: "Can I wear makeup with lash extensions?",
    answer:
      "Yes, but keep it light around the eyes — heavy mascara and oily removers work against the extensions, so the salon will tell you what to avoid. If you wear eye makeup most days, say so when you book, and ask the salon how to clean around the lashes without pulling at them.",
  },
  {
    question: "What should I tell the salon before my appointment?",
    answer:
      "Say whether your eyes are sensitive, whether you wear contact lenses, and what look you want — natural or fuller. Mention any reaction you have had to lash glue or eye products before, so the salon can choose what suits you and leave out what does not.",
  },
  {
    question: "How much do lash extensions cost?",
    answer:
      "The salon prices each set of lashes on its own, so message 0313 9333377 on WhatsApp or ring 091-5839119 before you come in and it will tell you the cost — the price is settled before you arrive, nothing is added at the salon. What you pay depends on the look you choose.",
  },
];

const HERO = SERVICE_GALLERY.find(
  (g) => g.slug === "lash-extensions-sansha-hayatabad",
)!;

export default function LashesPage() {
  return (
    <div>
      <HeroBackground
        photo={HERO}
        caption={`${HERO.caption} The photo is an illustration of the service, not a photo of our salon.`}
      >
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Lash Extensions" },
          ]}
        />
        <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
          Lash Extensions in Hayatabad, Peshawar — Fuller Lashes,
          Applied at the Salon
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
          Lash extensions at SanSha A Beauty Lounge in Phase 2,
          Hayatabad, give you fuller-looking lashes without mascara —
          applied lash by lash at the salon. Walk in any time, or message 0313 9333377 on WhatsApp and ask for a slot today.
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
              <strong>What:</strong> lash extensions, applied lash by
              lash at the salon in Phase 2, Hayatabad.
            </li>
            <li>
              <strong>Good for:</strong> fuller-looking lashes for a
              wedding, Eid, or every day.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — tell the salon the look you want when you book.
            </li>
            <li>
              <strong>Prices:</strong> ask the salon for the price of a full set or a fill — there is no set list.
            </li>
            <li>
              <strong>Hours:</strong> Open 24 hours, 7 days a week.
            </li>
            <li>
              <strong>Lash styles:</strong> [CONFIRM — ask when you
              book which lash styles are on offer].
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What are lash extensions?</h2>
          <p>
            Lash extensions are single lashes fixed onto your own
            lashes, one at a time, until the lash line looks fuller
            and longer. They are not false lashes stuck on in a strip,
            and they are not mascara — they are separate lashes, put
            on one by one, so the result looks like your own lashes
            at their best. You choose how full you want them, and the
            salon builds the look around that.
          </p>
          <p>
            The point of extensions is the morning. Without them, the
            eyes need mascara, a curler and a steady hand before the
            day starts. With them, the lashes are already there when
            you wake up — full, dark and shaped. That is why so many
            clients book them before a wedding week, before Eid, or
            before a holiday: the look is done, and it stays done
            while the week runs.
          </p>
          <p>
            Extensions are not forever. Your own lashes shed and grow
            back, and the extensions go with them — that is normal,
            and the salon will say so plainly when you book. What you
            get is a set of lashes that looks full for a while, and a
            salon that will tell you honestly when to come back for a
            fill, instead of promising a number it cannot keep.
          </p>

          <h2>How your visit runs</h2>
          <p>
            A lash visit is quiet and slow by nature. You lie back,
            your eyes stay closed, and the salon works lash by lash.
            Nothing about it is rushed, and nothing is decided
            without you.
          </p>
          <ol>
            <li>
              <strong>Talk about the look.</strong> Natural for every
              day, or fuller for a function — say what you want, and
              the salon will say what it can do with your lashes.
            </li>
            <li>
              <strong>Lie back and close your eyes.</strong> The
              lashes are applied with your eyes closed, in a private
              room. You rest while the salon works.
            </li>
            <li>
              <strong>The extensions go on.</strong> One lash at a
              time, until the look you agreed on is there. If
              anything feels uncomfortable, say so at once.
            </li>
            <li>
              <strong>Open your eyes and check.</strong> When the set
              is done, you look in the mirror and the salon checks
              the shape with you — full on both sides, even, and the
              way you asked for it.
            </li>
            <li>
              <strong>How to look after them.</strong> Before you
              leave, the salon tells you what to avoid in the first
              day, and how to clean around the lashes.
            </li>
          </ol>
          <p>
            How long does a lash appointment take? [CONFIRM — ask the salon how long a set of extensions usually takes when you book.] Come with clean
            lashes if you can — no mascara on the day — and tell the
            salon about your eyes before the appointment starts.
          </p>

          <h2>What lashes cost</h2>
          <p>
            There is no price list for lashes on this site. A full set or a fill is priced when you book, and the price depends on the look you choose — the length, the curl, the fullness. Ring 091-5839119 or message 0313 9333377 on WhatsApp and ask what your look costs, before you come in.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The look you choose.</strong> A natural set and
              a fuller set are priced on their own — [CONFIRM: lash
              styles and prices].
            </li>
            <li>
              <strong>A fill, later on.</strong> When the extensions
              start to thin, a fill tops them up — ask the salon what
              a fill costs when you book the first set.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            and ask for the price of the look you want. Ask before you come in, so you know the cost first — nothing is added at the salon.
          </p>

          <h2>Before you book</h2>
          <p>
            Lashes suit anyone who wants fuller-looking eyes without
            mascara — before a wedding function, before Eid, or for
            every day. They suit first-timers as much as regulars: if
            you have never had extensions, say so when you book and
            the salon will keep the first set natural.
          </p>
          <p>
            Before you book, two things help. First,
            whether your eyes are sensitive, or you wear contact
            lenses — the salon needs to know, so it can choose what
            suits you. Second, any reaction you have had to lash glue
            or eye products before. Extensions are not a medical
            treatment, and the salon will not treat them as one — but
            it does need to know about your eyes before it works on
            them.
          </p>

          <h2>Getting it wrong</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The usual mistake is asking for the fullest set on the
            menu, because fuller sounds like better. It is not — a
            very full set suits some eyes and overwhelms others. Tell
            the salon about your eyes and let it choose the fullness.
            Another mistake is rubbing the eyes in the first day, or
            pulling at a lash that feels loose: leave it alone and
            ask the salon. And the third is coming to the appointment
            with mascara still on — come with clean lashes, so the
            appointment starts right.
          </p>
          <h3>Myths</h3>
          <p>
            Extensions do not ruin your own lashes by themselves —
            what harms them is pulling extensions off, or rubbing
            hard at the eyes. Extensions are not only for brides,
            either: they are regular care for anyone, whatever the
            occasion. And one set does not last forever — the
            extensions shed with your own lashes, and a fill is part
            of having them, not a sign that something went wrong.
          </p>

          <h2>Lashes and other services</h2>
          <p>
            Lashes sit well beside the salon&apos;s other eye and
            face services. Book them with{" "}
            <Link href="/party-makeup-peshawar/">party makeup</Link>{" "}
            and the whole look is done in one visit — lashes, then
            makeup, in the same sitting. A{" "}
            <Link href="/facial-peshawar/">facial</Link> goes with
            them too, when the visit is for a function: face and
            lashes, both fresh before the event. And{" "}
            <Link href="/mani-pedi-peshawar/">
              a manicure and pedicure
            </Link>{" "}
            finishes the visit, so hands, feet and eyes are all looked after before you go home.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your lashes"
            text="Send us a WhatsApp message and say what look you want — the salon will give you the price and hold a slot for you."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/facial-peshawar/", label: "Facials in Peshawar" },
              { href: "/party-makeup-peshawar/", label: "Party makeup for the full look" },
              { href: "/contact/", label: "Book lash extensions" },
              { href: "/mani-pedi-peshawar/", label: "Manicure and pedicure in Peshawar" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Lash Extensions" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Lash Extensions in Hayatabad, Peshawar",
          description:
            "Lash extensions in Hayatabad, Peshawar — fuller-looking lashes applied lash by lash at the salon.",
          url: `${SITE.url}/lashes-peshawar/`,
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
