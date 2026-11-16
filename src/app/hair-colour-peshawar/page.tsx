import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE, PHOTOS } from "@/data/photos";
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
  title: "Hair Colour & Balayage Peshawar | SanSha A Beauty Lounge",
  description:
    "Hair colour, balayage, dye and streaks in Hayatabad, Peshawar. Choose your shade first, then book — call 091-5839119 or WhatsApp 0313 9333377.",
  alternates: { canonical: `${SITE.url}/hair-colour-peshawar/` },
  openGraph: {
    title: "Hair Colour & Balayage Peshawar | SanSha A Beauty Lounge",
    description:
      "Hair colour, balayage, dye and streaks in Hayatabad, Peshawar. Choose your shade first, then book — call 091-5839119 or WhatsApp 0313 9333377.",
    url: `${SITE.url}/hair-colour-peshawar/`,
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
    title: "Hair Colour & Balayage Peshawar | SanSha A Beauty Lounge",
    description:
      "Hair colour, balayage, dye and streaks in Hayatabad, Peshawar. Choose your shade first, then book — call 091-5839119 or WhatsApp 0313 9333377.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Can you dye my hair the shade I want?",
    answer:
      "Bring the shade you want to the salon — a photo helps — and the salon will look at your hair and tell you honestly whether that shade is possible for you. Some shades need more than one visit, and the salon will say so before it starts.",
  },
  {
    question: "What is balayage?",
    answer:
      "Balayage is a way of colouring the hair where the colour is painted on by hand, so the lighter pieces blend softly into your natural shade instead of starting in a hard line. It is one of the colour services at the salon — call or WhatsApp to book.",
  },
  {
    question: "Will colour damage my hair?",
    answer:
      "Colour changes the hair, and how much depends on your hair and the shade you choose — lighter shades ask more of the hair than darker ones. Come in first and the salon will look at your hair and tell you honestly what is possible, and what it would need.",
  },
  {
    question: "How do I book?",
    answer:
      "Send a photo of the shade you want on WhatsApp at 0313 9333377, with the day you would like to come — or call 091-5839119. The salon will look at the shade, tell you whether it suits your hair, and confirm your slot.",
  },
  {
    question: "How long does hair colour last?",
    answer:
      "That depends on the shade and your hair — darker shades hold longer, lighter shades fade faster, and how often you wash your hair matters too. The salon will tell you honestly what to expect for your shade when you book, and what to do to keep the colour looking fresh for longer.",
  },
  {
    question: "Can I go from dark to light hair in one visit?",
    answer:
      "Sometimes — but some shades need more than one visit, and the salon will say so before it starts. Going lighter asks more of the hair, so bring a photo of the shade and the salon will look at your hair and tell you what is possible in one sitting, and what would need a second visit.",
  },
  {
    question: "Will I need a patch test before colouring my hair?",
    answer:
      "A patch test is a test of the colour on your skin, done before the appointment to check for a reaction. If you have never coloured your hair, or your skin reacts easily, mention it when you book — the salon will tell you whether a patch test is needed, and when to come in for it.",
  },
];

const PHOTO = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-hair-colour-products",
)!;

export default function HairColourPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Hair Colour & Balayage" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Hair Colour &amp; Balayage in Peshawar — Dye, Streaks &amp;
              Highlights
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Hair colour, balayage, dye and streaks at SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar. Choose your shade first with the salon, then book — call 091-5839119 or WhatsApp 0313 9333377, and the salon will confirm your slot and today&apos;s price.
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
            photo={PHOTO}
            eager
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption={PHOTO.caption}
            captionClassName="mt-2 text-sm leading-relaxed text-slate-300"
          />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-bold text-brand-900">Quick facts</p>
          <ul className="mt-3 space-y-2 leading-relaxed text-slate-700">
            <li>
              <strong>What:</strong> hair colour, balayage, dye, streaks
              and highlights.
            </li>
            <li>
              <strong>How to book:</strong> send a photo of the shade you
              want on WhatsApp, or call the salon.
            </li>
            <li>
              <strong>Prices:</strong> no fixed list — priced by the
              colour you choose and your hair length; message the salon
              for today&apos;s price.
            </li>
            <li>
              <strong>Where:</strong> in Phase 2, Hayatabad — Shop No. 4,
              Block A, Deans Hights, Peshawar.
            </li>
            <li>
              <strong>Hours:</strong> open 24 hours, 7 days a week.
            </li>
            <li>
              <strong>Patch test:</strong> [CONFIRM — ask when you book
              whether a patch test is needed for your colour].
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What hair colour services does the salon do?</h2>
          <p>
            The salon does hair colour in all its forms — dye, balayage,
            streaks and highlights. Each one is a different way of
            putting colour in the hair, and the salon will help you pick
            the one that suits your hair and the look you want. Bring
            the shade you want — a photo helps — and the salon will look
            at your hair and tell you honestly whether that shade is
            possible for you.
          </p>
          <h3>Hair dye</h3>
          <p>
            A full colour change for the whole head. Dye is the choice
            when you want one even shade from roots to ends — a new
            brown, a black, a burgundy, or a full change from what you
            have now. It suits anyone who wants their hair one colour,
            and it is the simplest colour service to explain: you pick
            the shade, the salon colours the whole head.
          </p>
          <h3>Balayage</h3>
          <p>
            Colour painted on by hand, so the lighter pieces blend
            softly into your natural shade instead of starting in a hard
            line. Balayage suits anyone who wants lighter hair without
            the upkeep of a full dye — the blend grows out softly, so
            the roots do not show a sharp line. It is the colour to ask
            about when you want a sun-lightened look for the summer, or
            a softer change before a wedding week.
          </p>
          <h3>Streaks</h3>
          <p>
            Lighter pieces through the hair for contrast. Streaks suit
            anyone who wants a visible change without colouring the
            whole head — a few lighter pieces around the face, or
            through the lengths, can lift the whole look. They are a
            good first colour if you have never coloured your hair
            before and want to try it without a full change.
          </p>
          <h3>Highlights</h3>
          <p>
            Lighter pieces that lift the colour overall. Highlights are
            spread through the hair rather than placed in a few bold
            pieces, so the whole head looks lighter and brighter. They
            suit hair that feels flat or dull in one shade, and they
            work well with a cut — a fresh cut and highlights together
            can change the whole shape of the look.
          </p>
          <p>
            Not sure which one fits? That is what the salon is for.
            Send a photo of the look you want on WhatsApp and say
            whether you want a full change or a softer one, and the
            salon will tell you which service matches it. If your hair
            is frizzy as well as dull, a{" "}
            <Link href="/keratin-treatment-peshawar/">
              keratin treatment in Peshawar
            </Link>{" "}
            can be planned around the colour — ask the salon about the
            order first.
          </p>

          <h2>How do I choose my shade?</h2>
          <p>
            Choosing a shade starts with a photo. Save one or two photos
            of the colour you want on your phone — the exact shade, not
            just "brown" or "blonde" — and send them on WhatsApp when
            you book, or show them when you come in. The salon will look
            at your hair and tell you honestly whether that shade is
            possible for you, and whether it needs one visit or more.
          </p>
          <p>
            A few things to think about before you choose. Lighter
            shades ask more of the hair than darker ones, so going much
            lighter may take more than one visit. Your natural shade
            matters too — a colour that looks soft on light hair can
            look very different on dark hair, and the salon will say so
            before it starts. And think about the upkeep: a full dye
            shows roots as it grows, while balayage blends as it grows
            out. If you do not want to come back often, say so — the
            salon will steer you towards a colour that grows out well.
          </p>
          <p>
            If you are choosing a shade for a wedding week or Eid, book
            the colour ahead of the event, not the day before — a fresh
            colour needs a day or two to settle, and you will want to
            see it in daylight before the function. A{" "}
            <Link href="/bridal-makeup-peshawar/">
              bridal makeup appointment
            </Link>{" "}
            goes on easier when the hair colour is already done and
            settled.
          </p>

          <h2>What is a patch test — and will I need one?</h2>
          <p>
            A patch test is a small test of the colour on your skin,
            done before the appointment to check for a reaction. It is
            a simple step, and it matters most if you have never had
            your hair coloured, or if your skin reacts easily to new
            products.
          </p>
          <p>
            Will you need one? [CONFIRM — ask when you book whether a
            patch test is needed for your colour, and when to come in
            for it.] Mention it when you message: if you have never
            coloured your hair, or your skin reacts easily, say so, and
            the salon will tell you whether a patch test is needed and
            when to come in. Do not skip the question — a patch test
            costs you a short visit, and it is the careful way to start
            a colour you have never had before.
          </p>

          <h2>Who is hair colour for — and who should ask first?</h2>
          <p>
            Hair colour is for anyone who wants a change — a new shade,
            lighter pieces, or a full colour change. It suits a first
            colour as much as a regular one, and it suits anyone
            getting ready for a wedding week, Eid, a university
            farewell, or an office event where you want to look
            finished.
          </p>
          <p>
            Ask first if your hair has been coloured before — especially
            if it was coloured at home, or if the colour is still in
            your hair. Tell the salon what is already on your hair
            when you book, because colour over old colour behaves
            differently from colour on untouched hair. Ask first too if
            your hair feels damaged or very dry, or if you want to go
            much lighter: the salon will look at your hair and tell you
            honestly what is possible, and what it would need. And if
            your skin reacts easily to new products, mention it — see
            the patch test section above.
          </p>

          <h2>What happens in a colour appointment?</h2>
          <p>
            A colour appointment follows a clear order. When you book,
            ask the salon to explain what happens in your appointment
            and what to bring. This is how the visit usually goes:
          </p>
          <ol>
            <li>
              <strong>Talk about the shade.</strong> Show the photo of
              the colour you want and say what you are hoping for — a
              full change, or something softer. The salon will look at
              your hair and say whether the shade is possible.
            </li>
            <li>
              <strong>The colour is applied.</strong> The salon applies
              the colour through your hair, section by section, in the
              way that matches the service — dye all over, balayage
              painted on by hand, or streaks and highlights placed
              through the hair.
            </li>
            <li>
              <strong>The colour is left in.</strong> The colour stays
              in your hair for a time the salon will confirm when you
              book.
            </li>
            <li>
              <strong>Washed and finished.</strong> Your hair is washed
              and dried, so you leave the salon seeing the colour as it
              really looks.
            </li>
          </ol>
          <p>
            How long does a colour appointment take? [CONFIRM — ask the
            salon for the usual time for your colour and hair length
            when you book.] Longer hair and lighter shades take longer,
            so tell the salon your hair length and the shade you want
            when you message, and ask what time to keep free. Come with
            clean, dry hair unless the salon tells you otherwise, wear
            a top you do not mind getting marked, and arrive on time.
          </p>

          <h2>How to look after coloured hair</h2>
          <p>
            Colour changes the hair, so it needs a little more care
            afterwards. The salon will explain the aftercare for your
            appointment in plain words — ask what to do and what to
            avoid before you leave, especially when you can wash your
            hair and what to use on it.
          </p>
          <p>
            A few things help the colour last. Wash your hair less
            often if you can, and ask the salon what to use when you do
            wash it — the wrong wash can fade a fresh colour faster
            than it should. Keep your hair out of harsh sun where you
            can, and come back for a trim so the ends stay tidy and
            the colour keeps its shape. When the colour starts to fade
            or the roots show, message the salon and ask what your hair
            needs — a refresh, a root touch-up, or a new shade
            altogether.
          </p>
          <p>
            [ADD STYLIST NOTE — aftercare for coloured hair: washing,
            products to use and avoid, how to keep balayage and
            highlights looking fresh between visits.]
          </p>

          <h2>How much does hair colour cost?</h2>
          <p>
            Colour is priced by the colour you choose and your hair
            length, so there is no price list on this site. Message the
            salon on WhatsApp with the colour you want, and it will
            give you the price for your booking — call or WhatsApp for
            today&apos;s price.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The colour you choose.</strong> A full dye, a
              balayage, streaks and highlights are different jobs, and
              they are priced differently.
            </li>
            <li>
              <strong>Your hair length.</strong> Longer hair takes more
              colour and more time, so it costs more than shorter hair.
            </li>
            <li>
              <strong>How many visits it takes.</strong> Some shades
              need more than one visit, and each visit is priced on
              its own.
            </li>
            <li>
              <strong>What else you book.</strong> A cut with the colour
              changes the total — ask the salon to price the whole visit
              together.
            </li>
          </ul>

          <h2>Mistakes and myths about hair colour</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The most common mistake is choosing a shade from a photo
            without asking whether it suits your hair. A colour that
            looks soft on light hair can look very different on dark
            hair, and the salon should be asked before the colour goes
            on. The second is colouring over old colour without saying
            so — colour over colour behaves differently, and the salon
            needs to know what is already on your hair. The third is
            washing a fresh colour too soon, or with the wrong wash:
            ask the salon when you can wash it and what to use, and
            wait until then.
          </p>
          <h3>Myths</h3>
          <p>
            Colour does not always damage hair — how much it changes
            the hair depends on your hair and the shade you choose, and
            darker shades ask less of the hair than lighter ones. A
            lighter shade does not always need bleach, and it does not
            always take one visit — the salon will tell you honestly
            what your shade needs. And balayage is not the same as
            streaks: balayage is painted on by hand and blends softly,
            while streaks are placed pieces for contrast. They are
            different services, and the salon will help you pick the
            one that fits the look you want.
          </p>

          <h2>Colour or keratin first?</h2>
          <p>
            If you want colour and a smoother finish, talk to the salon
            about which comes first before you book. Both services
            happen at the salon, and the right order depends on your
            hair — the salon will advise you. Already booked a keratin
            visit? Say so when you message, and the salon will fit the
            colour around it.
          </p>
          <p>
            If your hair is frizzy as well as dull, look at{" "}
            <Link href="/keratin-treatment-peshawar/">
              keratin treatment for smooth, frizz-free hair
            </Link>{" "}
            first, then message the salon with both services in mind.
            And if you only want a fresh shape without a colour change,
            the{" "}
            <Link href="/hair-salon-peshawar/">
              hair salon
            </Link>{" "}
            is where to begin — a cut with a blow-dry gives you a clean
            starting point.
          </p>

          <h2>Real clients</h2>
          <p>
            The reviews below come straight from Google — two clients
            writing about their hair colour. More{" "}
            <Link href="/reviews/">reviews about hair colour</Link> are on the reviews page.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “My experience with eman was amazing. Suvh a lovely soul
              and perfect dye done by her.”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Nabeeha Khanum{" "}
              <span className="font-normal text-slate-500">
                — via Google
              </span>
            </footer>
          </blockquote>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “Eman did an amazing job with my hair; she was skilled,
              friendly, and paid great attention to detail.”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              komal butt{" "}
              <span className="font-normal text-slate-500">
                — via Google
              </span>
            </footer>
          </blockquote>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your hair colour"
            text="Send a photo of the shade you want on WhatsApp and we will tell you whether it suits your hair — then book your slot."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/hair-salon-peshawar/", label: "Hair salon in Phase 2, Hayatabad" },
              { href: "/keratin-treatment-peshawar/", label: "Keratin and protein treatments" },
              { href: "/bridal-makeup-peshawar/", label: "Bridal makeup with a hairdo" },
              { href: "/reviews/", label: "What clients say about hair colour" },
              { href: "/contact/", label: "Book your colour appointment" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Hair Colour & Balayage" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Hair Colour & Balayage in Peshawar",
          description:
            "Hair colour, balayage, dye and streaks in Hayatabad, Peshawar.",
          url: `${SITE.url}/hair-colour-peshawar/`,
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
