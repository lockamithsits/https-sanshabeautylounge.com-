import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE, PHOTOS } from "@/data/photos";
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
  title: "Hair Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "Haircuts, blow-dry, hair wash and styling in Hayatabad, Peshawar. Walk in or book your slot today on WhatsApp — SanSha A Beauty Lounge, Phase 2.",
  alternates: { canonical: `${SITE.url}/hair-salon-peshawar/` },
  openGraph: {
    title: "Hair Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Haircuts, blow-dry, hair wash and styling in Hayatabad, Peshawar. Walk in or book your slot today on WhatsApp — SanSha A Beauty Lounge, Phase 2.",
    url: `${SITE.url}/hair-salon-peshawar/`,
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
    title: "Hair Salon in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Haircuts, blow-dry, hair wash and styling in Hayatabad, Peshawar. Walk in or book your slot today on WhatsApp — SanSha A Beauty Lounge, Phase 2.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Do I need an appointment for a haircut?",
    answer:
      "No — you can walk in to the salon at Shop No. 4, Block A, Deans Hights, Phase 2, Hayatabad. If you are coming at a busy time, or you want a cut and blow-dry before an event, it is worth calling or sending a WhatsApp message first so a time is kept for you.",
  },
  {
    question: "Can you cut and blow-dry my hair for an event?",
    answer:
      "Yes — a cut with a blow-dry is one of the salon's everyday services, and it is a good choice before a party, dinner or family event. Tell the salon about your event when you book, so it can plan the cut and the finish around the look you want.",
  },
  {
    question: "Do you do hair colour and keratin too?",
    answer:
      "Yes — the salon does hair colour, balayage, dye and streaks, and keratin and protein treatments for smooth, frizz-free hair. Each has its own page on this site, and you can book any of them by calling 091-5839119 or messaging on WhatsApp.",
  },
  {
    question: "How do I book?",
    answer:
      "You can walk in to the salon in Phase 2, Hayatabad — no booking needed for a haircut. If you would rather have a time kept for you, call 091-5839119 or message the salon on WhatsApp at 0313 9333377 with the service you want and the day you would like to come.",
  },
  {
    question: "How long does a haircut take?",
    answer:
      "That depends on the cut and your hair — a simple trim is quicker than a restyle, and longer hair takes longer to cut and finish. [CONFIRM — the salon will confirm the usual time for your cut when you book.] Arrive on time if you have somewhere to be after, and message the salon if you are running late.",
  },
  {
    question: "Can I get a cut and colour in one visit?",
    answer:
      "Yes, if the salon has time for both — tell the salon what you want when booking, so the visit can be planned around both. A cut with colour takes longer than a cut on its own, so book ahead, and send a photo of the shade so the salon can say whether it suits your hair.",
  },
  {
    question: "What should I bring to my hair appointment?",
    answer:
      "Bring a photo of the cut or style you want — it helps the salon understand what you are asking for, especially if you want a change. If you are coming for colour too, bring a photo of the shade. Come with clean, dry hair unless the salon tells you otherwise, and arrive on time.",
  },
];

const photo = (slug: string) => PHOTOS.find((p) => p.slug === slug)!;
const HERO = photo("sansha-beauty-lounge-hair-salon-chairs-peshawar");

export default function HairSalonPage() {
  return (
    <div>
      <HeroBackground
        photo={HERO}
        caption={HERO.caption}
      >
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Hair Salon" },
            ]}
          />
          <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
            Hair Salon in Hayatabad, Peshawar — Cuts, Blow-Dry &amp;
            Styling
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
            Haircuts, blow-dry, hair wash and styling at SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — plus keratin, protein and hair colour. Walk in at any hour, or book your slot today on WhatsApp at 0313 9333377 or by calling 091-5839119.
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
              <strong>What:</strong> haircuts, blow-dry, hair wash and
              styling — plus keratin and colour as separate visits.
            </li>
            <li>
              <strong>Walk in or book:</strong> walk in for a haircut, or
              call or WhatsApp to keep a time for your visit.
            </li>
            <li>
              <strong>Prices:</strong> no fixed list — the price depends
              on the service and your hair; ask when you book.
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans Hights
              in Phase 2, Hayatabad.
            </li>
            <li>
              <strong>Hours:</strong> open all day, every day of the
              week.
            </li>
            <li>
              <strong>Good for:</strong> a regular trim, a new cut, a
              blow-dry before an event, or styling for a function.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What does the hair salon do?</h2>
          <p>
            The hair salon at SanSha is where everyday hair happens —
            haircuts, blow-dry, hair wash and styling, all in Phase 2,
            Hayatabad. It is the salon&apos;s busiest corner: women
            coming in for a regular trim, a new cut, a blow-dry before
            a party, or styling for a wedding week. You can walk in
            for a haircut, or call or WhatsApp to keep a time for your
            visit.
          </p>
          <p>
            You can see the styling chairs and wash area in the{" "}
            <Link href="/gallery/">salon gallery</Link>.
          </p>
          <p>
            The salon also does keratin and protein treatments and hair
            colour, but those are their own visits with their own pages
            — a{" "}
            <Link href="/keratin-treatment-peshawar/">
              keratin treatment for frizz
            </Link>{" "}
            when frizz is the problem, and{" "}
            <Link href="/hair-colour-peshawar/">
              hair colour and balayage
            </Link>{" "}
            when you want a new shade. This page is about the everyday
            hair services: the cut, the wash, the blow-dry and the
            styling.
          </p>
          <p>
            If you are getting ready for a function — a party, a dinner,
            a wedding week — tell the salon about the event when you
            book, so it can plan the finish around the look you want.
            A cut with a blow-dry is the simplest way to look finished
            for an evening, and it is the service most of the salon&apos;s
            regular clients come back for.
          </p>

          <h2>Haircuts</h2>
          <p>
            A haircut at the salon is a cut shaped to your hair and your
            face — tell the salon what you want when you come in, and it
            will cut it the way you ask. Bring a photo if you have one:
            a photo of the cut you want says more than a long
            description, and it helps the salon understand the shape
            you are asking for, especially if you want a change.
          </p>
          <h3>What a haircut looks like</h3>
          <p>
            A haircut starts with a short talk about what you want — the
            length, the shape, and whether you want a change or just a
            tidy-up. Then the salon cuts your hair to the shape you
            asked for, and finishes with a blow-dry so the shape of the
            cut shows properly. How long does a haircut take? [CONFIRM —
            the salon will confirm the usual time for your cut when you
            book.] A simple trim is quicker than a restyle, and longer
            hair takes longer to cut and finish.
          </p>
          <h3>Who is a haircut for?</h3>
          <p>
            A haircut is for anyone who wants their hair tidier, shorter,
            or shaped differently. It suits a regular trim every few
            weeks, a new cut for a new season, and a fresh shape before
            a wedding week or Eid. Ask first if you want a big change —
            much shorter hair, or a very different shape — and say so
            when you book, so the salon can keep enough time for it.
            And if your hair is frizzy as well as long, mention it: the
            salon may suggest a{" "}
            <Link href="/keratin-treatment-peshawar/">
              keratin treatment at the salon
            </Link>{" "}
            as a separate visit, so the cut and the smoothing are
            planned together.
          </p>

          <h2>Blow-dry &amp; hair wash</h2>
          <p>
            A hair wash with a blow-dry leaves your hair clean, smooth
            and ready for the day — or for an event the same evening. It
            is also the finish after a cut, so the shape of the cut
            shows properly.
          </p>
          <p>
            A blow-dry suits anyone who wants smooth, finished hair
            without a cut — before a party, a dinner, a family event,
            or a day out. It is the quickest service in the salon, and
            it is the one to book when you want to look finished but
            do not need anything changed. Tell the salon when you book
            if you want volume, a smooth finish, or a particular shape,
            so the finish matches the look you want.
          </p>
          <Photo
            photo={photo("sansha-beauty-lounge-hair-wash-area")}
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption="Hair wash basins and chairs at SanSha A Beauty Lounge."
          />
          <p>
            The wash area is where the visit starts for most services —
            a wash before a cut, a wash before a blow-dry, and a wash
            as part of a treatment. If you are coming only for a wash
            and blow-dry, you can walk in the same as for a haircut.
          </p>

          <h2>Hair styling for events</h2>
          <p>
            If you have a party, dinner or family event, the salon can
            style your hair for it — a cut with a blow-dry, or styling
            with your makeup. Tell the salon about your event when you
            book, so it can plan the finish around the look you want.
          </p>
          <p>
            Styling for an event is different from an everyday cut: the
            finish has to hold through a long evening of photos,
            dancing and dinner. Say what the event is and what you will
            be wearing, and bring a photo of the style you want if you
            have one. For a wedding function, the hairdo is part of the
            bridal sitting — see{" "}
            <Link href="/bridal-makeup-peshawar/">
              bridal makeup with hairdo
            </Link>
            . For a lighter event look, a{" "}
            <Link href="/party-makeup-peshawar/">
              party makeup sitting
            </Link>{" "}
            with styling may fit better than a full bridal package.
          </p>
          <p>
            Book event styling ahead, not on the day — especially in
            wedding season from October to February, when the salon
            fills up. A message on WhatsApp with your event date and
            the style you want is enough to start the booking.
          </p>

          <h2>Hair treatments at the salon</h2>
          <p>
            For frizzy, unmanageable hair, the salon does{" "}
            <Link href="/keratin-treatment-peshawar/">
              keratin treatment
            </Link>{" "}
            and protein treatments — smooth, frizz-free hair that is
            easier to manage and style. A treatment is a separate visit
            from a haircut, and it is the service to ask about when a
            cut alone does not fix the frizz.
          </p>
          <p>
            If your hair puffs up after every wash, or it will not sit
            the way you want it to, a cut will not solve it — the hair
            needs smoothing, not shortening. Tell the salon about the
            frizz when you book, and it will say honestly whether a
            treatment suits your hair, or whether a cut and blow-dry
            is enough. [ADD STYLIST NOTE — when a treatment is the
            right call versus a cut alone.]
          </p>

          <h2>Hair colour at the salon</h2>
          <p>
            The salon also does{" "}
            <Link href="/hair-colour-peshawar/">
              hair colour in Peshawar
            </Link>{" "}
            — dye, balayage, streaks and highlights. Choose your shade
            first, then book: send a photo of the shade you want on
            WhatsApp, and the salon will tell you whether it suits your
            hair.
          </p>
          <p>
            Colour and a cut go well together in one visit, if the salon
            has time for both — tell the salon what you want when you
            book, so the visit can be planned around both. A cut with
            colour takes longer than a cut on its own, so book ahead.
            And if you are planning both a colour and a keratin
            treatment, ask the salon about the order first — it will
            tell you what works for your hair.
          </p>

          <h2>How much does a hair service cost?</h2>
          <p>
            What a hair service costs depends on the service and your
            hair, so the salon tells you the price when you book. There
            is no fixed price list on this site — call or WhatsApp for
            today&apos;s price for the service you want.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The service.</strong> A haircut, a blow-dry, a
              styling visit, a treatment and a colour are different
              jobs, priced on their own.
            </li>
            <li>
              <strong>Your hair length.</strong> Longer hair takes more
              time to cut, wash and finish, so it costs more than
              shorter hair.
            </li>
            <li>
              <strong>What you book together.</strong> A cut with a
              blow-dry, or a cut with colour, is priced as a whole
              booking — ask for the price of everything you want.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a> with
            the service you want and ask for the price of your booking.
            The salon will give you the price before the appointment,
            so there are no surprises when you arrive.
          </p>

          <h2>How to prepare for your appointment</h2>
          <p>
            A little preparation makes the visit smoother, and it costs
            you nothing. Do these before you come, and your cut or
            styling will go the way you want it to.
          </p>
          <ul>
            <li>
              Bring a photo of the cut or style you want — it helps the
              salon understand what you are asking for, especially if
              you want a change.
            </li>
            <li>
              Come with clean, dry hair unless the salon tells you
              otherwise — a cut and a blow-dry both work better on
              clean, dry hair.
            </li>
            <li>
              Say what you want in plain words: how much length you
              want off, and what shape you want it to fall into.
            </li>
            <li>
              Tell the salon about your event, if there is one — the
              finish is planned around it.
            </li>
            <li>
              Arrive at the time you agreed, and message the salon if
              you are running late.
            </li>
            <li>
              If you are coming for colour too, bring a photo of the
              shade as well.
            </li>
          </ul>

          <h2>Mistakes and myths about haircuts</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The most common mistake is asking for a cut without showing
            what you want. A photo of the cut you want says more than
            a long description, and without one the salon has to guess
            the shape you have in mind. The second is booking a big
            change at the last minute before an event — a restyle
            needs more time than a trim, and it should be booked
            ahead. The third is cutting your own hair between visits:
            a home trim can take the shape out of a cut, and the salon
            then has to fix it before it can shape it again.
          </p>
          <h3>Myths</h3>
          <p>
            Cutting your hair does not make it grow faster — it keeps
            the ends tidy, so the hair looks healthier while it grows.
            A blow-dry does not damage your hair on its own, and it is
            the finish that shows the shape of a cut properly. And a
            trim is not a waste of money: regular trims keep the shape
            of a cut, so each visit is a tidy-up rather than a repair.
          </p>

          <h2>Real clients</h2>
          <p>
            The two reviews below are word-for-word from Google — written
            by clients after a haircut. More{" "}
            <Link href="/reviews/">haircut reviews</Link> are on the reviews page.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “AOA, I&apos;m Fatima. Had my haircut today at San Shah
              Salon. The staff was very welcoming and helpful. Special
              thanks to Miss Lubna — she&apos;s highly skilled,
              professional, and gave me a beautiful, elegant cut.
              Mashallah. Will definitely visit again!”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Beena Fatima{" "}
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
            heading="Book your hair appointment"
            text="Walk in, or call or WhatsApp us with the service you want and the day you would like to come."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/keratin-treatment-peshawar/", label: "Keratin treatment for smooth, frizz-free hair" },
              { href: "/hair-colour-peshawar/", label: "Hair colour and balayage at the salon" },
              { href: "/bridal-makeup-peshawar/", label: "Bridal makeup and hairdo for weddings" },
              { href: "/party-makeup-peshawar/", label: "Party makeup with a hairdo" },
              { href: "/contact/", label: "Book a haircut or blow-dry" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Hair Salon" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Hair Salon in Hayatabad, Peshawar",
          description:
            "Haircuts, blow-dry, hair wash and styling in Hayatabad, Peshawar.",
          url: `${SITE.url}/hair-salon-peshawar/`,
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
