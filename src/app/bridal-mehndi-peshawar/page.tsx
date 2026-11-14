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
  title: "Bridal Mehndi in Peshawar | SanSha A Beauty Lounge",
  description:
    "Bridal mehndi application in Peshawar — henna for brides and guests, booked with your bridal makeup. Call 091-5839119 or WhatsApp 0313 9333377.",
  alternates: { canonical: `${SITE.url}/bridal-mehndi-peshawar/` },
  openGraph: {
    title: "Bridal Mehndi in Peshawar | SanSha A Beauty Lounge",
    description:
      "Bridal mehndi application in Peshawar — henna for brides and guests, booked with your bridal makeup. Call 091-5839119 or WhatsApp 0313 9333377.",
    url: `${SITE.url}/bridal-mehndi-peshawar/`,
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
    title: "Bridal Mehndi in Peshawar | SanSha A Beauty Lounge",
    description:
      "Bridal mehndi application in Peshawar — henna for brides and guests, booked with your bridal makeup. Call 091-5839119 or WhatsApp 0313 9333377.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Do you apply bridal mehndi at the salon?",
    answer:
      "The salon offers bridal mehndi application for brides — henna on the hands and feet for the mehndi function. [CONFIRM — bridal mehndi application is offered at the salon.] Ask when you book whether mehndi is available for your date, and the salon will confirm what it can do for you.",
  },
  {
    question: "Can you do mehndi for guests as well as the bride?",
    answer:
      "Guests at the mehndi function can have henna too — family and friends, not only the bride. [CONFIRM — mehndi for guests.] Tell the salon how many guests want mehndi when you book, so it can plan the time and tell you the price for the whole group.",
  },
  {
    question: "Should I book mehndi with my bridal makeup?",
    answer:
      "Many brides book mehndi and bridal makeup through the same salon, so one booking covers both. [CONFIRM — mehndi and makeup booked together.] Tell the salon your event date and the functions — mehndi, barat, walima, nikah — when you message, and it will plan the sittings around your wedding week.",
  },
  {
    question: "How do I book?",
    answer:
      "Ring 091-5839119 or send the salon a WhatsApp message at 0313 9333377. Say your event date and which function it is, and the salon will hold your slot and give you the price so nothing is a surprise on the day. Book once your date is fixed — wedding season runs from October to February and days go quickly.",
  },
  {
    question: "How far ahead should I book mehndi before the wedding?",
    answer:
      "As soon as your wedding date is set. [CONFIRM — how far ahead mehndi is booked, and how many days before the function to come in.] From October to February the salon is at its busiest, holding full days for brides, so a sitting asked for late may already be gone.",
  },
  {
    question: "How long does bridal mehndi take?",
    answer:
      "That depends on how much henna you want — both hands, hands and feet, and whether guests are having it too. [CONFIRM — usual time for bridal mehndi, and for guests.] Ask when you book, and the salon will tell you how long to set aside for your sitting.",
  },
  {
    question: "What should I do after the mehndi is applied?",
    answer:
      "The salon will tell you how to look after the henna before you leave — what to avoid, and how long to keep it on. [ADD STYLIST NOTE — aftercare for bridal mehndi: how long to keep it on, what to avoid, how the colour develops.] Ask about it when you book, so you know what to expect.",
  },
];

const photo = (slug: string) => PHOTOS.find((p) => p.slug === slug)!;
const ARCH = photo("sansha-beauty-lounge-entrance-floral-arch-night");

export default function BridalMehndiPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Bridal Mehndi" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Bridal Mehndi in Peshawar — Henna for Brides &amp; Guests
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Henna for the bride and her guests, done at the salon in
              Phase 2, Hayatabad. Message us and we will hold your
              sitting.
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
            photo={ARCH}
            eager
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption="The flower-decorated arch over the salon door at night."
            captionClassName="mt-2 text-sm leading-relaxed text-slate-300"
          />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-bold text-brand-900">Quick facts</p>
          <ul className="mt-3 space-y-2 leading-relaxed text-slate-700">
            <li>
              <strong>What:</strong> henna application for the bride
              and her guests, done at the salon. [CONFIRM — bridal
              mehndi application is offered.]
            </li>
            <li>
              <strong>For:</strong> the mehndi function — the bride,
              her sisters, and guests.
            </li>
            <li>
              <strong>Booking:</strong> call or WhatsApp with your
              event date — ask whether mehndi can be booked with
              your bridal makeup. [CONFIRM]
            </li>
            <li>
              <strong>Prices:</strong> priced by how much henna you
              want — no set list; ask on call or WhatsApp and the
              salon will give you the figure.
            </li>
            <li>
              <strong>Where:</strong> Phase 2, Hayatabad — Shop No.
              4, Block A, Deans Hights, Peshawar.
            </li>
            <li>
              <strong>Hours:</strong> open around the clock — 24
              hours, 7 days a week.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is bridal mehndi?</h2>
          <p>
            Bridal mehndi is henna applied to the bride&apos;s hands
            and feet for the mehndi function — one of the wedding
            functions, alongside barat, walima and nikah. It is a
            service you book at the salon, like bridal makeup: you
            come in, the henna is applied, and you leave with it on.
            This page is about booking that service. It is not a
            gallery of mehndi designs, and it does not show design
            ideas — if you want inspiration pictures, those live on
            design sites and social media, not here.
          </p>
          <p>
            In Peshawar, the mehndi function is usually the most
            colourful night of the wedding week, and the bride&apos;s
            henna is part of it — along with the music, the dancing
            and the yellow and green of the evening. Guests have
            henna too, usually simpler than the bride&apos;s. The
            salon&apos;s mehndi service covers both: the bride, and
            the guests who want henna at the same function.
            [CONFIRM — bridal mehndi application, and mehndi for
            guests, are offered at the salon.]
          </p>

          <h2>Bridal mehndi for the bride</h2>
          <p>
            For the bride, mehndi means henna on both hands and,
            often, on the feet as well. How much is applied is up to
            you — some brides want full hands, others want a lighter
            look — and the salon will ask what you want when you
            book. [CONFIRM — designs offered for bridal mehndi, and
            the usual time for a bridal sitting.] Tell the salon
            when your mehndi function is, and it will say when to
            come in so the henna is ready for the evening.
          </p>
          <h3>Hands</h3>
          <p>
            The bride&apos;s hands carry the main henna — palms and
            the backs of the hands, up to the wrists and beyond if
            you want it. This is the part everyone sees in the
            photos, so say what you like when you book: full or
            light, and whether you want a particular style.
            [CONFIRM — designs offered for the bride&apos;s hands.]
          </p>
          <h3>Feet</h3>
          <p>
            Henna on the feet is part of bridal mehndi for many
            brides, usually simpler than the hands. Ask when you
            book whether feet are included in your sitting, or
            priced on their own — and wear something easy to walk
            in afterwards, so the henna is not rubbed off on the
            way home. [CONFIRM — feet included, and the usual time.]
          </p>

          <h2>Mehndi for guests</h2>
          <p>
            Guests at the mehndi function can have henna too —
            sisters, cousins and friends, usually a simpler design
            than the bride&apos;s. [CONFIRM — mehndi for guests.]
            If several guests want henna, tell the salon how many
            when you book, so it can plan the time: one guest takes
            a short while, a group takes the evening. The salon will
            tell you the price for the whole group before the day,
            so there are no surprises.
          </p>
          <p>
            Guest mehndi is a good fit for the mehndi function
            itself — it is done at the salon before the function,
            and the guests arrive with it already on. If you are
            booking for a group, send the number of guests and the
            function date on WhatsApp, and the salon will confirm
            whether it can take the whole group on that day.
          </p>

          <h2>Booked with your bridal makeup</h2>
          <p>
            Many brides book mehndi and bridal makeup through the
            same salon, so one booking covers both. [CONFIRM —
            mehndi and makeup booked together.] Tell the salon your
            event date and the functions — mehndi, barat, walima,
            nikah — when you message, and it will plan the sittings
            around your wedding week, so the mehndi and the makeup
            do not clash on the same day.
          </p>
          <p>
            Booking both together also means the salon knows your
            whole week: the mehndi function, the barat, the walima.
            If you are having your makeup done at the salon as well,
            say so in the first message — the salon will keep the
            days in order, and tell you which sitting comes first.
            The price for mehndi and the price for makeup are
            separate, and the salon will tell you each one when you
            book.
          </p>

          <h2>What happens at the appointment?</h2>
          <p>
            A mehndi appointment is a sitting at the salon — you
            come in, the henna is applied, and you leave with it
            on. The steps below are how it usually goes; the salon
            will confirm the details when you book.
          </p>
          <ol>
            <li>
              <strong>Book with your date.</strong> Call or WhatsApp
              with your event date and the function, and say who
              the mehndi is for — the bride, guests, or both.
            </li>
            <li>
              <strong>Say what you want.</strong> Tell the salon how
              much henna you want — both hands, hands and feet —
              and whether you want a particular style. [CONFIRM —
              designs offered.]
            </li>
            <li>
              <strong>Come in for the sitting.</strong> Arrive with
              clean hands and feet, and wear clothes that are easy
              to move in while the henna is applied.
            </li>
            <li>
              <strong>The henna is applied.</strong> The salon
              applies the henna while you sit — how long it takes
              depends on how much you want. [CONFIRM — usual time
              for a bridal sitting, and for guests.]
            </li>
            <li>
              <strong>Aftercare, explained simply.</strong> The salon
              goes through it with you before you head home — what
              to keep away from, and how long the henna stays on.
            </li>
          </ol>

          <h2>Who is bridal mehndi for — and who should ask first?</h2>
          <p>
            Bridal mehndi is for the bride, and for the guests who
            want henna at the mehndi function. It suits anyone
            having a mehndi function — a bride in wedding week, a
            sister, a friend. If you have never had henna before,
            that is fine — say so when you book, and the salon will
            keep it simple.
          </p>
          <p>
            If your skin flares up easily, or henna has ever left
            your skin sore, bring it up when you book. The salon
            would rather hear it first than find out during the
            sitting — it can then say whether mehndi is a good idea
            for you right now, or whether waiting is wiser. The
            same goes for a skin condition, or anything strong you
            are putting on your skin at the moment. None of that is
            a medical call; it is the salon asking what your skin
            can handle before it starts.
          </p>

          <h2>How much does bridal mehndi cost?</h2>
          <p>
            There is no set price for bridal mehndi on this site,
            because it changes with how much henna you want. The
            salon works it out when you book — tell them the
            bride&apos;s mehndi, or the guests, or both, and they
            will give you the figure before the day. Nothing is
            added once you arrive.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The bride or guests.</strong> The bride&apos;s
              mehndi — both hands, and feet — is priced on its own;
              guest mehndi is simpler and priced per guest.
            </li>
            <li>
              <strong>How much henna.</strong> Both hands costs
              more than one hand; hands and feet cost more than
              hands alone.
            </li>
            <li>
              <strong>How many guests.</strong> A group of guests
              changes the total — ask the salon to price the whole
              group as one booking.
            </li>
          </ul>
          <p>
            Ring{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            message{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            on WhatsApp with what you want, and the salon will give
            you the price there and then. Get it before the day, so
            you know where you stand.
          </p>

          <h2>After the mehndi</h2>
          <p>
            What you do after the henna is applied matters as much
            as the sitting itself. The salon will go through it
            with you before you head home — what to keep away from,
            and how long the henna stays on. Ask about it when you
            book, so nothing about the day is a surprise.
          </p>
          <p>
            [ADD STYLIST NOTE — aftercare for bridal mehndi: how
            long to keep the henna on, what to avoid, how the colour
            develops, and when the colour is at its deepest.]
          </p>

          <h2>Bridal mehndi and bridal makeup</h2>
          <p>
            Mehndi and bridal makeup are two different services for
            the same wedding week — henna on the hands, makeup on
            the face — and the salon does both. They are booked
            separately, even when they are booked together, because
            they are different sittings on different days.
          </p>
          <table className="mt-4 w-full border-collapse text-left text-slate-700">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  Service
                </th>
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  For
                </th>
                <th className="py-2 font-semibold text-slate-900">
                  When
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">
                  Bridal mehndi
                </td>
                <td className="py-2 pr-4">
                  Henna on the hands and feet
                </td>
                <td className="py-2">The mehndi function</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">
                  Bridal makeup
                </td>
                <td className="py-2 pr-4">
                  The full look for the wedding day
                </td>
                <td className="py-2">Barat and walima</td>
              </tr>
            </tbody>
          </table>
          <p>
            If you want both, read about{" "}
            <Link href="/bridal-makeup-peshawar/">
              bridal makeup in Peshawar
            </Link>{" "}
            and book the two together — the salon will plan the
            sittings around your wedding week. For lighter looks at
            smaller functions, see{" "}
            <Link href="/party-makeup-peshawar/">
              party makeup in Hayatabad
            </Link>
            .
          </p>

          <h2>Mistakes and myths about bridal mehndi</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The most common mistake is leaving the booking too late.
            From October to February the salon is at its busiest,
            holding full days for brides — a mehndi sitting asked
            for in wedding week may already be gone. Book as soon
            as your date is fixed. The second mistake is not
            saying how many guests want henna: one guest is quick,
            a group takes the evening, and the salon needs to know
            before the day. The third is coming to the sitting with
            lotion or cream on your hands — come with clean hands,
            so the henna goes on properly.
          </p>
          <h3>Myths</h3>
          <p>
            Henna colour does not appear at full depth the moment
            it is applied — it develops after the sitting, and the
            salon will tell you how long to keep it on and what to
            avoid. [CONFIRM — how the colour develops, and when it
            is at its deepest.] Mehndi is not only for the bride
            either: guests have henna at the mehndi function too,
            and it is part of the evening for everyone. And one
            mehndi sitting does not need to be the most elaborate
            design to be right — it needs to be the one you asked
            for, done well.
          </p>

          <h2>Real clients</h2>
          <p>
            No review on this site mentions a bridal mehndi
            application yet — the 12 reviews on the{" "}
            <Link href="/reviews/">reviews page</Link> cover hair,
            makeup, waxing and facials. [ADD CLIENT REVIEW — a real
            review about bridal mehndi, once one exists on the
            salon&apos;s Google profile.] When a client writes about
            mehndi at the salon, it will be shown here word for
            word, like the rest.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your bridal mehndi"
            text="Send your event date on WhatsApp and we will hold your sitting and tell you the price."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/bridal-makeup-peshawar/", label: "Bridal makeup in Peshawar" },
              { href: "/party-makeup-peshawar/", label: "Party makeup in Hayatabad" },
              { href: "/reviews/", label: "What our clients say" },
              { href: "/contact/", label: "Contact the salon" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Bridal Mehndi" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Bridal Mehndi in Peshawar",
          description:
            "Bridal mehndi application in Peshawar — henna for brides and guests, booked with your bridal makeup.",
          url: `${SITE.url}/bridal-mehndi-peshawar/`,
        })}
      />
      <JsonLd
        data={imageObjectJsonLd({
          url: `${SITE.url}/images/${ARCH.slug}-${ARCH.nativeW}.jpg`,
          caption: ARCH.caption,
          width: ARCH.nativeW,
          height: ARCH.nativeH,
        })}
      />
    </div>
  );
}
