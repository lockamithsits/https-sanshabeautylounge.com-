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
  title: "Electrolysis in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "Electrolysis in Hayatabad, Peshawar — hair removal done hair by hair at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
  alternates: { canonical: `${SITE.url}/electrolysis-peshawar/` },
  openGraph: {
    title: "Electrolysis in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Electrolysis in Hayatabad, Peshawar — hair removal done hair by hair at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    url: `${SITE.url}/electrolysis-peshawar/`,
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
    title: "Electrolysis in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Electrolysis in Hayatabad, Peshawar — hair removal done hair by hair at the salon. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What is electrolysis?",
    answer:
      "Electrolysis is hair removal done one hair at a time — a fine probe treats each hair at the root, so the work is precise. It is done at the salon, in a private room, and it suits small areas where you want the hair gone, like the upper lip or the chin.",
  },
  {
    question: "Which areas can electrolysis treat?",
    answer:
      "It suits small areas best — the upper lip, the chin, and the brows — because each hair is treated one at a time. For larger areas, ask the salon whether electrolysis is the right choice, or whether waxing or laser would suit you better. The salon will say honestly what fits your area.",
  },
  {
    question: "How do I book electrolysis?",
    answer:
      "Message 0313 9333377 on WhatsApp or ring 091-5839119 and say you want electrolysis, then pick a day that suits you. Tell the salon which area you want treated — the salon will confirm the time and give you the price first.",
  },
  {
    question: "How many visits will I need?",
    answer:
      "That depends on the area and how much hair there is, so the salon does not promise a number of visits in advance. When you book, ask what the salon would suggest for your area — it will give you an honest answer after seeing the hair, not a number from a chart.",
  },
  {
    question: "What should I tell the salon before my appointment?",
    answer:
      "Say which area you want treated, whether your skin is sensitive, and whether you have had hair removal there before. Mention anything your skin reacts to, so the salon can choose the right setting and leave out what does not suit you.",
  },
  {
    question: "How much does electrolysis cost?",
    answer:
      "The salon prices electrolysis on its own — the cost depends on the area and how long the session runs. Call the salon on 091-5839119 or WhatsApp 0313 9333377 before you come in, and it will tell you the cost. Get the price before you book, so there is no surprise when you arrive at the salon.",
  },
];

const HERO = SERVICE_GALLERY.find(
  (g) => g.slug === "electrolysis-sansha-hayatabad",
)!;

export default function ElectrolysisPage() {
  return (
    <div>
      <HeroBackground
        photo={HERO}
        caption={`${HERO.caption} The photo is an illustration of the service, not a photo of our salon's work.`}
      >
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Electrolysis" },
          ]}
        />
        <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
          Electrolysis in Hayatabad, Peshawar — Hair Removal, Hair by
          Hair
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
          Electrolysis at SanSha A Beauty Lounge in Phase 2, Hayatabad,
          removes hair one hair at a time — a fine probe treats each
          hair, so the result is precise. Walk in any time, or call 091-5839119 or WhatsApp 0313 9333377 and ask for a time.
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
              <strong>What:</strong> electrolysis, done hair by hair
              at the salon in Phase 2, Hayatabad.
            </li>
            <li>
              <strong>Good for:</strong> small areas where you want
              the hair gone — upper lip, chin, brows.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — tell the salon which area you want treated when you book.
            </li>
            <li>
              <strong>Prices:</strong> ask the salon for the price of your area — there is no set list.
            </li>
            <li>
              <strong>Hours:</strong> Open at all hours, seven days a
              week.
            </li>
            <li>
              <strong>Treatment areas:</strong> [CONFIRM — ask when
              you book which areas the salon treats with
              electrolysis].
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is electrolysis?</h2>
          <p>
            Electrolysis is hair removal done one hair at a time. A
            fine probe treats each hair at the root, so the work is
            precise — hair by hair, not a whole area at once. It is
            slow work by nature, and that is the point: when the hair
            you want gone sits in a small, visible place, precision
            matters more than speed.
          </p>
          <p>
            The areas that suit it best are the small ones. The upper
            lip, the chin, the brows — places where a few hairs show
            and waxing feels too broad. For those spots, electrolysis
            is the careful option: each hair is treated on its own,
            and the skin around it is left alone. For a large area,
            the salon will tell you honestly whether electrolysis is
            the right choice, or whether waxing or laser would suit
            you better.
          </p>
          <p>
            It is worth saying plainly what electrolysis is not. It
            is not a quick fix for a large area, and it is not a
            single visit that ends the matter — the number of visits
            depends on the area and the hair. The salon will say so
            when you book, after seeing the hair, instead of
            promising a number it cannot keep.
          </p>

          <h2>How your visit runs</h2>
          <p>
            An electrolysis visit is quiet and careful. You lie back
            in a private room, the area is cleaned, and the salon
            works hair by hair. Nothing about it is rushed, and
            nothing is decided without you.
          </p>
          <ol>
            <li>
              <strong>Say which area you want treated.</strong> Upper
              lip, chin, brows — tell the salon, and it will say
              what it can do with the hair there.
            </li>
            <li>
              <strong>The area is cleaned.</strong> The skin is
              cleaned first, so the treatment works on clean skin.
            </li>
            <li>
              <strong>The probe treats each hair.</strong> One hair
              at a time, at the root. If anything feels too strong,
              say so at once — it is your visit.
            </li>
            <li>
              <strong>Checked and finished.</strong> When the session
              ends, the salon checks the area with you and tells you
              how it looks and what to do next.
            </li>
          </ol>
          <p>
            How long does an electrolysis session take? [CONFIRM —
            ask the salon how long a session usually takes when you book.] Come with
            clean skin if you can, and tell the salon about your skin
            before the session starts.
          </p>

          <h2>What electrolysis costs</h2>
          <p>
            The price of electrolysis depends on the area, and the salon prices it when you book. Ask on call or WhatsApp what treating your area costs — the salon will give you the price before your visit.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The area.</strong> A small area costs less than
              a larger one — [CONFIRM: treatment areas and prices].
            </li>
            <li>
              <strong>How long the session runs.</strong> A longer
              session costs more than a short one — ask the salon
              what a session for your area usually runs to.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            and ask for the price of electrolysis for your area. Get the price before you book, so you know the cost first.
          </p>

          <h2>Before you book</h2>
          <p>
            Electrolysis suits anyone who wants hair gone from a
            small area — the upper lip, the chin, the brows — and
            wants it done precisely. It suits first-timers as much as
            regulars: if you have never had electrolysis, say so when
            you book and the salon will keep the first session short.
          </p>
          <p>
            Two things are worth saying before you book. First, what you want the result to be — and whether your skin is sensitive, or you have had hair removal on that area before — the salon needs to know, so
            it can choose what suits you. Second, what you want the
            result to be: say which area, and the salon will tell
            you honestly what it can do there.
          </p>

          <h2>Getting it wrong</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The usual mistake is expecting one session to finish the
            matter. Electrolysis works hair by hair, and the number
            of visits depends on the area and the hair — ask the
            salon what it would suggest, instead of assuming one
            visit is enough. Another mistake is coming with makeup
            or cream still on the area: come with clean skin, so the
            session starts right. And the third is picking at the
            skin afterwards — leave it alone and ask the salon what
            to do.
          </p>
          <h3>Myths</h3>
          <p>
            Electrolysis is not the same as laser — the two work
            differently, and the salon will say which one fits your
            area and your hair. Electrolysis is not instant, either:
            it treats hair one at a time, so a session takes as long
            as the area needs. And it is not only for one kind of
            hair: ask the salon about your hair, and it will say
            whether electrolysis is the right choice for it.
          </p>

          <h2>Electrolysis and other services</h2>
          <p>
            Electrolysis sits well beside the salon&apos;s other hair
            removal services. If the area is larger than a few hairs,{" "}
            <Link href="/laser-hair-removal-peshawar/">
              laser hair removal
            </Link>{" "}
            may suit you better — the salon can say which one fits
            your area. For a quick result on a larger area,{" "}
            <Link href="/waxing-peshawar/">waxing</Link> is the
            faster option, and the salon will tell you honestly which
            to choose. And a{" "}
            <Link href="/facial-peshawar/">facial</Link> goes with
            it, when the visit is for the face: skin cared for, and
            hair removed, in the same sitting.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your electrolysis"
            text="Send us a WhatsApp message and say which area you want treated — the salon will give you the price and set a time for you."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/contact/", label: "Book electrolysis" },
              { href: "/waxing-peshawar/", label: "Waxing and threading in Peshawar" },
              { href: "/laser-hair-removal-peshawar/", label: "Laser hair removal for face and body" },
              { href: "/facial-peshawar/", label: "Facials in Peshawar" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Electrolysis" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Electrolysis in Hayatabad, Peshawar",
          description:
            "Electrolysis in Hayatabad, Peshawar — hair removal done hair by hair at the salon.",
          url: `${SITE.url}/electrolysis-peshawar/`,
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
