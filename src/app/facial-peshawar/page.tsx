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
  title: "Facials in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "Facials in Hayatabad, Peshawar — whitening, organic and derma facials with skin polish. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
  alternates: { canonical: `${SITE.url}/facial-peshawar/` },
  openGraph: {
    title: "Facials in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Facials in Hayatabad, Peshawar — whitening, organic and derma facials with skin polish. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    url: `${SITE.url}/facial-peshawar/`,
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
    title: "Facials in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Facials in Hayatabad, Peshawar — whitening, organic and derma facials with skin polish. Call 091-5839119 or WhatsApp 0313 9333377 to book a slot.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Which facial is right for my skin?",
    answer:
      "That depends on your skin — whether it is dry, oily, dull or sensitive, and what you want from the facial. The salon's menu covers whitening, organic and derma facials with skin polish, and the salon will help you choose when you book on call or WhatsApp.",
  },
  {
    question: "What is a derma facial?",
    answer:
      "A derma facial is one of the facials on the salon's menu, alongside whitening and organic facials. It is a deeper facial treatment for the skin — ask the salon on call or WhatsApp what it involves for your skin type, and whether it is the right choice for you.",
  },
  {
    question: "How often should I get a facial?",
    answer:
      "That depends on your skin and what you want from it, so the salon does not publish a fixed routine. When you book, ask how often the salon would suggest a facial for your skin, and it will give you a routine that fits your skin and your budget.",
  },
  {
    question: "How do I book?",
    answer:
      "Pick the facial you want and the day you would like to come, then call 091-5839119 or message the salon on WhatsApp at 0313 9333377. Your slot will be confirmed, and the salon will tell you the price before your appointment, so there are no surprises.",
  },
  {
    question: "Can I get a facial before a wedding or Eid?",
    answer:
      "Yes — many clients book a facial in the days before a wedding function or Eid, so their skin looks fresh for the event. Tell the salon when your function is when you book, and ask which facial it would suggest for your skin and how many days before the event to come in.",
  },
  {
    question: "What should I tell the salon about my skin before a facial?",
    answer:
      "Tell the salon whether your skin is dry, oily, sensitive or combination, and mention anything it reacts to — creams, sun, or treatments you have had before. The salon will use that to suggest a facial and to decide what to avoid, so the treatment suits your skin.",
  },
  {
    question: "Do facials include skin polish?",
    answer:
      "Skin polish is done with the facials at the salon — ask when you book whether it is part of the facial you choose, and what it involves for your skin. The salon will tell you honestly what your booking covers, so you know before you come in.",
  },
];

const photo = (slug: string) => PHOTOS.find((p) => p.slug === slug)!;
const HERO = photo("sansha-beauty-lounge-facial-room-hayatabad");

export default function FacialsPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Facials" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Facials in Hayatabad, Peshawar — Whitening, Organic &amp;
              Derma
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Facials with skin polish at SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — whitening, organic and derma facials for your skin type. Call 091-5839119 or WhatsApp 0313 9333377 to keep a time, and the salon will confirm your slot and today&apos;s price.
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
            photo={HERO}
            eager
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption={HERO.caption}
            captionClassName="mt-2 text-sm leading-relaxed text-slate-300"
          />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-bold text-brand-900">Quick facts</p>
          <ul className="mt-3 space-y-2 leading-relaxed text-slate-700">
            <li>
              <strong>What:</strong> facials with skin polish, done at
              the salon in Phase 2, Hayatabad.
            </li>
            <li>
              <strong>Good for:</strong> skin that looks dull, dry or
              tired — and anyone who wants regular skin care.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp — the salon
              helps you choose the facial when you book.
            </li>
            <li>
              <strong>Prices:</strong> no fixed list — priced by the
              facial; call or WhatsApp for today&apos;s price.
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar.
            </li>
            <li>
              <strong>Hours:</strong> the salon is open 24 hours, 7
              days a week.
            </li>
            <li>
              <strong>Facial menu:</strong> [CONFIRM — ask when you
              book whether the facial you want is on the current menu].
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is a facial?</h2>
          <p>
            A facial is a skin treatment done at the salon — your skin
            is cleaned, cared for and finished, so it looks fresh and
            feels looked after. It is not a medical treatment, and it
            does not change your skin overnight. It is regular care for
            your face, done by hand at the salon in Phase 2, Hayatabad.
          </p>
          <p>
            Skin in Peshawar works hard. Dust, dry air and long days
            out leave it dull, and in winter the cold dries it out
            again. A facial is the reset: the salon cleans the skin
            properly, gives it the care it needs, and finishes it so
            you leave looking fresh. It is the kind of care that shows
            the same day — and it is why so many of the salon&apos;s
            clients book a facial before a wedding function, Eid, or a
            family event.
          </p>
          <p>
            A facial is also regular care, not a one-off fix. One
            facial will not change your skin for good, and the salon
            will not promise that it will. What it does is keep your
            skin looked after — and when you come back, the salon
            knows your skin and can suggest what it needs next. That is
            the honest way to think about facials: steady care, not a
            miracle in one sitting.
          </p>

          <h2>Facial types</h2>
          <p>
            The salon&apos;s listed menu covers three facials, with
            skin polish. The menu below is what the salon lists — ask
            when you book whether the facial you want is on the
            current menu, because the salon will tell you honestly
            what it offers now. [CONFIRM: current facial menu —
            whitening, organic and derma facials, and skin polish.]
          </p>
          <h3>Whitening facial</h3>
          <p>
            The whitening facial is for brighter-looking skin. If your
            skin looks dull after weeks of dust and sun, this is the
            facial clients ask for when they want a fresh, brighter
            look — before a wedding function, Eid, or a dinner. Tell
            the salon what you want from it when you book, and it will
            say whether the whitening facial fits your skin.
          </p>
          <h3>Organic facial</h3>
          <p>
            The organic facial is the gentler one. It suits skin that
            reacts easily, or anyone who wants a lighter touch — a
            facial that cares for the skin without being heavy on it.
            If your skin is sensitive, or you have never had a facial
            before and want to start gently, mention it when you book
            and ask whether the organic facial is the right first
            step.
          </p>
          <h3>Derma facial</h3>
          <p>
            The derma facial is the deeper facial treatment on the
            menu. It is for skin that needs more than a light facial —
            skin that feels rough, or looks tired even after rest. Ask
            the salon on call or WhatsApp what a derma facial involves
            for your skin type, and whether it is the right choice for
            you. The salon will not suggest it unless it fits.
          </p>
          <h3>Skin polish</h3>
          <p>
            Skin polish is done with the facials. Ask the salon when
            you book whether skin polish is part of the facial you
            choose, and what it involves for your skin — it is not
            automatically part of every booking, so ask and the salon
            will say what your appointment covers.
          </p>
          <table className="mt-4 w-full border-collapse text-left text-slate-700">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  Facial
                </th>
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  Suits
                </th>
                <th className="py-2 font-semibold text-slate-900">
                  Ask about
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">Whitening</td>
                <td className="py-2 pr-4">
                  Dull skin that needs a brighter, fresher look
                </td>
                <td className="py-2">
                  Whether it fits your skin type
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">Organic</td>
                <td className="py-2 pr-4">
                  Sensitive skin, or a first facial
                </td>
                <td className="py-2">
                  Whether it is the gentler first step
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Derma</td>
                <td className="py-2 pr-4">
                  Skin that needs a deeper treatment
                </td>
                <td className="py-2">
                  What it involves for your skin
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Which facial suits my skin?</h2>
          <p>
            That depends on your skin — whether it is dry, oily, dull
            or sensitive, and what you want from the facial. The salon
            will help you choose when you book on call or WhatsApp. If
            you are unsure, tell the salon about your skin when you
            message and it will suggest the right facial for you.
          </p>
          <h3>Dry skin</h3>
          <p>
            If your skin feels tight or dry, especially in winter,
            tell the salon when you book. A facial for dry skin is
            about care and moisture, not about stripping the skin —
            and the salon will suggest the facial that fits, rather
            than the one that sounds strongest.
          </p>
          <h3>Oily skin</h3>
          <p>
            Oily skin needs cleaning that does not leave it stripped
            and sore. Tell the salon your skin is oily when you
            message, and ask which facial it would use — the salon
            will look at your skin and choose, instead of leaving the
            decision to you.
          </p>
          <h3>Sensitive skin</h3>
          <p>
            Sensitive skin reacts to things other skin does not, so
            say so before the appointment. Mention anything your skin
            reacts to — creams, sun, or treatments you have had
            before — and the salon will decide what to use and what
            to avoid. If your skin is very sensitive, the organic
            facial is the one to ask about first.
          </p>
          <h3>Dull or tired skin</h3>
          <p>
            Dull skin is the most common reason clients book a facial
            — weeks of dust, sun and late nights show on the face.
            The whitening facial is the one clients ask for when they
            want a fresh look, and it is the facial to mention when
            you book before a function or Eid.
          </p>

          <h2>Who is a facial for — and who should ask first?</h2>
          <p>
            A facial is for anyone who wants their skin looked after —
            before a wedding function, before Eid, or as regular care.
            It suits every age, and it suits skin that is dull, dry,
            oily or tired. If you have never had a facial before,
            that is fine — say so when you book, and the salon will
            keep the first facial gentle.
          </p>
          <p>
            Tell the salon first if your skin reacts easily, or if
            you have a skin condition — say it when you book, so the
            salon can tell you whether a facial is right for you now,
            or whether to wait. Say so too if you have had a skin
            treatment somewhere else recently, or if you are using
            anything strong on your skin: the salon needs to know, so
            it can pick the right products for your skin and leave out
            what does not suit it. That is not
            a medical judgement; it is the salon wanting to know about
            your skin before it touches it.
          </p>

          <h2>What happens in a facial appointment?</h2>
          <p>
            A facial appointment is a quiet visit in a private room.
            You talk through your skin first, then the treatment
            follows the order below — cleanse, care, and finish, with
            nothing rushed.
          </p>
          <ol>
            <li>
              <strong>Talk about your skin.</strong> Tell the salon
              what your skin is like — dry, oily, sensitive, dull —
              and what you want from the facial. The salon will
              suggest the facial that fits.
            </li>
            <li>
              <strong>Your skin is cleaned.</strong> The facial starts
              with a proper clean, so the rest of the treatment works
              on clean skin.
            </li>
            <li>
              <strong>The facial is done.</strong> The salon does the
              facial you agreed on, with skin polish where it is
              part of the booking.
            </li>
            <li>
              <strong>Finished and checked.</strong> Your skin is
              finished and the salon will tell you how it looks and
              what to do next.
            </li>
            <li>
              <strong>Aftercare, in plain words.</strong> Before you
              leave, the salon tells you how to look after your skin
              — and what to avoid in the first day.
            </li>
          </ol>
          <p>
            How long does a facial take? [CONFIRM — ask the salon
            for the usual time when you book.] Come with a clean face
            if you can, and tell the salon about your skin before the
            appointment starts — it saves time and it means the facial
            is right for you from the first step.
          </p>

          <h2>How much does a facial cost?</h2>
          <p>
            Each facial is priced on its own, so the salon tells you
            the price when you book — this site does not carry a price
            list. Call or WhatsApp with the facial you want and ask
            for the price before your appointment.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The facial you choose.</strong> Whitening,
              organic and derma facials are priced on their own.
            </li>
            <li>
              <strong>Skin polish.</strong> Ask whether skin polish
              is part of your facial or priced on its own.
            </li>
            <li>
              <strong>What else you book.</strong> A facial with
              waxing or a manicure in the same visit changes the
              total — ask the salon to price the whole visit as one
              booking.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            with the facial you want and ask for the price. Ask
            before you arrive, so the cost is clear when you come
            in — nothing is added at the salon.
          </p>

          <h2>How to look after your skin after a facial</h2>
          <p>
            What you can do after a facial depends on your skin and
            the facial you had. Before you leave, the salon tells you
            what to do next in plain words — what to avoid in the
            first day, and when your normal routine can resume. Ask
            about it when you book, so you leave knowing exactly how
            to look after your skin.
          </p>
          <p>
            A few things help the fresh look last. Do what the salon
            tells you after the facial, even if a friend suggests
            something else — the advice is for your skin and your
            facial, not for theirs. Keep your skin clean and simple
            in the first day, and stay out of strong sun if the
            salon tells you to. And when the fresh look starts to
            fade, come back and ask the salon what your skin needs
            then — it may be another facial, or it may be a
            different one this time.
          </p>
          <p>
            [ADD STYLIST NOTE — aftercare details for facials:
            what to avoid in the first day, when to wash the face,
            how often to repeat each facial type.]
          </p>

          <h2>Mistakes and myths about facials</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The most common mistake is booking the strongest facial
            because it sounds like the most effective one. A deeper
            facial is not better for every skin — it is better for
            the skin it suits, and wrong for the skin it does not.
            Tell the salon about your skin and let it choose. The
            second mistake is expecting a new face in one sitting: a
            facial freshens the skin, it does not rebuild it. The
            third is coming to a facial with makeup still on and no
            word about your skin — say what your skin is like when
            you book, so the appointment starts right.
          </p>
          <h3>Myths</h3>
          <p>
            A facial does not make skin permanently brighter. It
            freshens the skin for a while, and the glow fades — how
            long it stays depends on your skin and how you look
            after it. A facial is not only for brides either: it is
            regular care for anyone, whatever the occasion. And one
            facial does not fix skin problems — it cares for the
            skin. If your skin needs more than a facial, the salon
            will tell you honestly, and it may suggest waiting
            rather than booking.
          </p>

          <h2>Facials and other services</h2>
          <p>
            A facial pairs well with the salon&apos;s other skin and
            grooming services. Many clients book a facial with{" "}
            <Link href="/waxing-peshawar/">
              waxing and threading
            </Link>{" "}
            in the same visit — the face is cared for and the brows
            are shaped in the same sitting. If you want hair removal
            that lasts longer than waxing, read about{" "}
            <Link href="/laser-hair-removal-peshawar/">
              laser hair removal
            </Link>{" "}
            — the salon can say which one fits your skin. And if your
            visit is for a function, a facial goes well with{" "}
            <Link href="/mani-pedi-peshawar/">
              a manicure and pedicure
            </Link>{" "}
            — hands, feet and face, all looked after before the
            event.
          </p>

          <h2>Real clients</h2>
          <p>
            One of our clients wrote the review below on Google after a
            facial — word for word. You can read the rest in our{" "}
            <Link href="/reviews/">facial reviews</Link>.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “I&apos;m very satisfied with the facial and plucking
              service my wife received from Ms. Seher. The work was
              excellent, neat, and professional. She was very cooperative
              and paid great attention to detail. Highly recommended!”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              WAQAS AHMED{" "}
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
            heading="Book your facial"
            text="Message us on WhatsApp with the facial you want — we will give you the price and keep a time for you."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/waxing-peshawar/", label: "Waxing and threading for smooth skin" },
              { href: "/laser-hair-removal-peshawar/", label: "Laser hair removal for face and body" },
              { href: "/mani-pedi-peshawar/", label: "Manicure and pedicure in Peshawar" },
              { href: "/contact/", label: "Book a facial" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Facials" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Facials in Hayatabad, Peshawar",
          description:
            "Facials in Hayatabad, Peshawar — whitening, organic and derma facials with skin polish.",
          url: `${SITE.url}/facial-peshawar/`,
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
