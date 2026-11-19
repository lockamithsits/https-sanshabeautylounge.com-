import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import {OG_IMAGE} from "@/data/photos";
import { SITE_HERO } from "@/data/serviceGallery";
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
  title: "Party Makeup in Hayatabad Peshawar | SanSha A Beauty Lounge",
  description:
    "Party makeup in Peshawar with hairdo for engagements, dinners and family events. Book your slot on call or WhatsApp — SanSha A Beauty Lounge.",
  alternates: { canonical: `${SITE.url}/party-makeup-peshawar/` },
  openGraph: {
    title: "Party Makeup in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Party makeup in Peshawar with hairdo for engagements, dinners and family events. Book your slot on call or WhatsApp — SanSha A Beauty Lounge.",
    url: `${SITE.url}/party-makeup-peshawar/`,
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
    title: "Party Makeup in Hayatabad Peshawar | SanSha A Beauty Lounge",
    description:
      "Party makeup in Peshawar with hairdo for engagements, dinners and family events. Book your slot on call or WhatsApp — SanSha A Beauty Lounge.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "What is the difference between party and bridal makeup?",
    answer:
      "Party makeup is a lighter look for engagements, dinners and family events, while bridal makeup is a fuller look built for the whole wedding day — barat, walima, nikah or mehndi. Both include a hairdo, and both are done at the salon in Phase 2, Hayatabad.",
  },
  {
    question: "Does party makeup include a hairdo?",
    answer:
      "Yes — party makeup at SanSha includes a hairdo with the makeup, so you leave ready for your event. If you have a particular hairstyle in mind, mention it when you book on WhatsApp, and the salon will tell you whether it suits your hair and the look.",
  },
  {
    question: "How long does party makeup take?",
    answer:
      "It depends on the look and whether a hairdo is included, so there is no set time on this site. Message the salon on WhatsApp when you book and ask how long your look will take — it will give you the time for your appointment, so you can plan your evening around it.",
  },
  {
    question: "How do I book?",
    answer:
      "Message the salon on WhatsApp at 0313 9333377 with your event and the date, or call 091-5839119. The salon will confirm your slot and tell you what time to arrive. Weekends and wedding season fill up fastest, so book ahead for your event.",
  },
  {
    question: "What should I bring to a party makeup appointment?",
    answer:
      "Bring a photo of the look you like, if you have one — it helps the salon understand what you want faster than words alone. Also tell the salon about your outfit and the event, so the makeup and hairdo suit both.",
  },
  {
    question: "Can I book party makeup for a group?",
    answer:
      "Ask the salon on WhatsApp if you want makeup for more than one person — a group of friends or family for the same event. The salon will tell you whether it can fit everyone in and what time to arrive, so nobody is left waiting.",
  },
  {
    question: "Will my party makeup last the whole evening?",
    answer:
      "Party makeup is made to last through your event, and the salon finishes it so it holds up for the evening. How long it holds depends on your skin, the weather and the night — ask the salon when you book what to expect for your event.",
  },
];

const PHOTO = SITE_HERO;

export default function PartyMakeupPage() {
  return (
    <div>
      <HeroBackground
        photo={PHOTO}
        caption={PHOTO.caption}
      >
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Party Makeup" },
            ]}
          />
          <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
            Party Makeup in Peshawar — With Hairdo
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
            Party makeup with a hairdo for engagements, dinners and family events at SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar. Book your slot on call at 091-5839119 or WhatsApp at 0313 9333377, and the salon will confirm your time and today&apos;s price.
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
              <strong>What:</strong> party makeup with a hairdo, for
              engagements, dinners and family events.
            </li>
            <li>
              <strong>Good for:</strong> an evening out when you want
              to look polished — without a full bridal build.
            </li>
            <li>
              <strong>Booking:</strong> message on WhatsApp with your
              event and date, or call — the salon confirms the slot.
            </li>
            <li>
              <strong>Prices:</strong> no fixed list — priced by the
              look; call or WhatsApp for today&apos;s price.
            </li>
            <li>
              <strong>Where:</strong> Phase 2, Hayatabad, Peshawar —
              Shop No. 4, Block A, Deans Hights.
            </li>
            <li>
              <strong>Hours:</strong> the salon stays open 24 hours,
              7 days a week.
            </li>
            <li>
              <strong>Group bookings:</strong> [CONFIRM — ask on
              WhatsApp if you want makeup for more than one person].
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is party makeup?</h2>
          <p>
            Party makeup is a lighter makeup look for engagements,
            dinners and family events — done at the salon with a
            hairdo, so you leave ready for your event. It is not a
            bridal look: it is shorter, lighter, and made for an
            evening, not a whole wedding day.
          </p>
          <p>
            Peshawar has an event almost every week in wedding season
            — an engagement one night, a dinner the next, a family
            gathering on the weekend. Party makeup is the look for
            those evenings: polished and finished, but not the full
            bridal build. You sit in the chair, the makeup and
            hairdo are done, and you walk out ready for the night.
          </p>
          <p>
            It is also the look for the events around a wedding. If
            your sister is getting married and you are at every
            function, you do not need a bridal look for each one —
            you need a party look that is fresh, light, and right
            for the evening. That is what this page is for.
          </p>

          <h2>Party looks</h2>
          <p>
            Party makeup is for the events around the wedding — and for
            the evenings in between. The salon does party looks for:
          </p>
          <h3>Engagements</h3>
          <p>
            An engagement is the biggest of the party looks — a
            polished look for the engagement function, with a hairdo
            to match. It is close to a bridal look in care, but
            lighter in build. Tell the salon it is an engagement
            when you book, so it knows the evening matters.
          </p>
          <p>
            Some engagements come with a mehndi night — see{" "}
            <Link href="/bridal-mehndi-peshawar/">
              bridal mehndi for brides and guests
            </Link>{" "}
            for henna alongside the party look.
          </p>
          <h3>Dinners</h3>
          <p>
            A dinner look is lighter — a fresh look for a dinner or
            a family gathering, where you want to look good without
            looking made up for a wedding. It is the most relaxed of
            the party looks, and the quickest to sit for.
          </p>
          <h3>Family events</h3>
          <p>
            Eid, birthdays and get-togethers all call for a fresh
            look. A party makeup sitting for a family event is
            lighter still — makeup and hairdo, done so you look
            polished for the photos and the evening, without a heavy
            build.
          </p>

          <h2>Party vs bridal — what&apos;s different</h2>
          <p>
            Party makeup is a lighter, shorter look than bridal makeup —
            the same care, without the full wedding-day build. Bridal
            makeup is fuller and made to last the whole day, for barat,
            walima, nikah or mehndi. If your event is a wedding function,
            see{" "}
            <Link href="/bridal-makeup-peshawar/">
              bridal makeup for weddings
            </Link>
            .
          </p>
          <table className="mt-4 w-full border-collapse text-left text-slate-700">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  Look
                </th>
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  Made for
                </th>
                <th className="py-2 font-semibold text-slate-900">
                  Hairdo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">Party</td>
                <td className="py-2 pr-4">
                  One evening — engagement, dinner, family event
                </td>
                <td className="py-2">Included</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Bridal</td>
                <td className="py-2 pr-4">
                  The whole wedding day — barat, walima, nikah, mehndi
                </td>
                <td className="py-2">Included, fuller build</td>
              </tr>
            </tbody>
          </table>

          <h2>What&apos;s included</h2>
          <p>
            Party makeup includes a hairdo with the makeup, so you leave
            ready for your event. If you have a particular hairstyle in
            mind, mention it when you book on WhatsApp.
          </p>
          <p>
            What the hairdo looks like depends on your hair and the
            look you want — a simple style for a dinner, or something
            more finished for an engagement. Tell the salon about
            your outfit and the event when you book, so the makeup
            and hairdo suit both. And if your hair needs more than a
            style — a cut, a wash, or a colour — say so when you
            message, so the salon can plan the visit around your
            hair. The{" "}
            <Link href="/hair-salon-peshawar/">
              hair salon
            </Link>{" "}
            does cuts and blow-dry, and{" "}
            <Link href="/hair-colour-peshawar/">
              hair colour
            </Link>{" "}
            is a separate visit — ask the salon what fits before
            your event.
          </p>

          <h2>Who is party makeup for — and who should ask first?</h2>
          <p>
            Party makeup is for anyone with an evening to look good
            for — an engagement, a dinner, a family event, Eid. It
            suits every age, and it suits anyone who wants to look
            polished without a bridal build. If you have never had
            your makeup done at a salon before, that is fine too:
            tell the salon, and it will keep the look light.
          </p>
          <p>
            Tell the salon first if your skin reacts to makeup, or
            if you have had a reaction before — say it when you book,
            so the salon can tell you what it would use and what to
            avoid. Say so too if you have a skin condition, or if you
            have had a facial or a skin treatment recently: the salon
            needs to know before it puts makeup on your skin. That is
            not medical guidance; it is the salon wanting to know
            about your skin before the makeup goes on.
          </p>

          <h2>What happens in a party makeup appointment?</h2>
          <p>
            A party makeup appointment is a single sitting at the
            salon. You talk through the event and the look first,
            then the makeup is done and the hairdo finished — the
            visit runs like this.
          </p>
          <ol>
            <li>
              <strong>Talk about the event.</strong> Tell the salon
              what the event is — engagement, dinner, family
              gathering — and what you want from the look. Bring a
              photo if you have one.
            </li>
            <li>
              <strong>The makeup is done.</strong> The salon does
              the makeup for your look, and checks it with you as
              it goes.
            </li>
            <li>
              <strong>The hairdo is finished.</strong> Your hair is
              styled to go with the makeup, so the whole look
              matches.
            </li>
            <li>
              <strong>Checked before you leave.</strong> The salon
              will show you the finished look and tell you what to
              do if anything needs fixing during the evening.
            </li>
          </ol>
          <p>
            How long does party makeup take? [CONFIRM — the salon
            will confirm the usual time for your look.] It depends on
            the look and whether a hairdo is included, so ask when
            you book on WhatsApp, and plan your event around the
            time the salon gives you. Come with a clean face if you
            can, and bring a photo of the look you like — it helps
            more than words alone.
          </p>

          <h2>How much does party makeup cost?</h2>
          <p>
            The price of a party look depends on the look itself, so
            the salon gives it to you when you book — not on this
            site. Call or WhatsApp with your event and date and ask
            for the price of your look.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The look.</strong> An engagement look and a
              dinner look are priced on their own — the fuller the
              look, the more it costs.
            </li>
            <li>
              <strong>The hairdo.</strong> The hairdo is included
              with the makeup, so ask what the whole sitting
              covers.
            </li>
            <li>
              <strong>More than one person.</strong> Makeup for a
              group is priced for the group — ask on WhatsApp
              whether the salon can fit everyone in.
            </li>
          </ul>
          <p>
            Call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or
            WhatsApp{" "}
            <a href={SITE.whatsappHref}>{SITE.whatsappDisplay}</a>{" "}
            with your event and date and ask for the price of your
            look. Ask when you book, so you know what your look
            costs before the event — the price you are given covers
            the makeup and hairdo, nothing is added later.
          </p>

          <h2>How to prepare for your party look</h2>
          <p>
            A little preparation makes the appointment smoother. Tell
            the salon about your event and your outfit when you book,
            so the makeup and hairdo suit both. Bring a photo of the
            look you like, if you have one — it helps the salon
            understand what you want faster than words alone.
          </p>
          <ul>
            <li>
              <strong>Bring a photo.</strong> A photo of the look
              you like helps more than a description.
            </li>
            <li>
              <strong>Say what the event is.</strong> Engagement,
              dinner or family gathering — the look changes with
              the evening.
            </li>
            <li>
              <strong>Mention your outfit.</strong> The makeup and
              hairdo should suit what you are wearing.
            </li>
            <li>
              <strong>Come with a clean face.</strong> Arrive with
              clean skin if you can, so the makeup goes on well.
            </li>
            <li>
              <strong>Book ahead.</strong> Weekends and wedding
              season fill up fastest, so book early for your event.
            </li>
          </ul>

          <h2>After the event — taking makeup off</h2>
          <p>
            When the night is over, take the makeup off gently and
            let your skin rest. Use what you normally use at home,
            and do not scrub the skin to get it all off in one go —
            a gentle clean is enough. If your skin feels sore
            afterwards, tell the salon when you next book, so it
            knows for the next look.
          </p>
          <p>
            [ADD STYLIST NOTE — aftercare for party makeup: how to
            remove it, what to avoid, how to care for the skin the
            next day.]
          </p>

          <h2>Mistakes and myths about party makeup</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The most common mistake is booking a bridal look for a
            party. It is heavier than the evening needs, and it
            takes longer to sit for. A party look is the right
            weight for an evening — book the bridal look only for a
            wedding function. The second is arriving with no idea
            what you want: the salon can suggest a look, but a
            photo of what you like makes the sitting faster and the
            result closer to what you had in mind. The third is
            booking late in wedding season — weekends fill up, so
            book as soon as you know the date.
          </p>
          <h3>Myths</h3>
          <p>
            Party makeup is not a smaller bridal look. It is its
            own look — lighter, shorter, made for an evening — and
            it is not a cut-down version of something bigger. Party
            makeup does not have to be heavy to last the evening
            either: it is finished so it holds up through the
            night. And one sitting does not mean the look is the
            same for everyone — the makeup is done for your face,
            your outfit and your event, not from a fixed template.
          </p>

          <h2>Party makeup and other services</h2>
          <p>
            Party makeup goes well with the salon&apos;s other
            services. If your event is a wedding function, see{" "}
            <Link href="/bridal-makeup-peshawar/">
              bridal makeup for a wedding function
            </Link>{" "}
            — the fuller look for barat, walima, nikah and mehndi.
            If your hair needs more than a style before the event,
            the{" "}
            <Link href="/hair-salon-peshawar/">
              hair salon in Hayatabad
            </Link>{" "}
            does cuts and blow-dry, and a{" "}
            <Link href="/keratin-treatment-peshawar/">
              keratin treatment
            </Link>{" "}
            smooths frizz ahead of the functions. And for the full
            event look, book a{" "}
            <Link href="/facial-peshawar/">facial</Link> and a{" "}
            <Link href="/mani-pedi-peshawar/">
              manicure and pedicure in Peshawar
            </Link>{" "}
            in the same visit — face, hands and feet, all ready for
            the night.
          </p>

          <h2>Real clients</h2>
          <p>
            Two of our clients wrote the words below on Google. You can
            read the rest of our{" "}
            <Link href="/reviews/">makeup reviews</Link>.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “My review for eman I am very well satisfied and extremely
              happy with my makeup look..she very nice and do my makeup
              as i wanted”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              Kiran Yousaf{" "}
              <span className="font-normal text-slate-500">
                — via Google
              </span>
            </footer>
          </blockquote>
          <blockquote className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="leading-relaxed text-slate-700">
              “Our experience with miss eman and farah is out class..they
              did very gud makup of us as we asked they did da same..plus
              their behaviour is very outstanding they both are soft
              spoken plus da staff of hairdo is also very freindly sahar
              nd team..may Allah give much more barakah in ur work”
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand-900">
              anam usman{" "}
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
            heading="Book your party makeup"
            text="Send your event and date on WhatsApp and we will confirm your slot — with hairdo."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/bridal-makeup-peshawar/", label: "Bridal makeup for barat and walima" },
              { href: "/hair-salon-peshawar/", label: "Hair salon for event styling" },
              { href: "/reviews/", label: "What clients say about party makeup" },
              { href: "/contact/", label: "Book your party makeup" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Party Makeup" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Party Makeup in Peshawar",
          description:
            "Party makeup in Peshawar with hairdo for engagements, dinners and family events.",
          url: `${SITE.url}/party-makeup-peshawar/`,
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
