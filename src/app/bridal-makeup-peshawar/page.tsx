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
  title: "Bridal Makeup in Peshawar | SanSha A Beauty Lounge",
  description:
    "Bridal makeup in Peshawar for barat, walima, nikah and mehndi — with hairdo, dupatta setting and trial on request. Call 091-5839119 or WhatsApp.",
  alternates: { canonical: `${SITE.url}/bridal-makeup-peshawar/` },
  openGraph: {
    title: "Bridal Makeup in Peshawar | SanSha A Beauty Lounge",
    description:
      "Bridal makeup in Peshawar for barat, walima, nikah and mehndi — with hairdo, dupatta setting and trial on request. Call 091-5839119 or WhatsApp.",
    url: `${SITE.url}/bridal-makeup-peshawar/`,
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
    title: "Bridal Makeup in Peshawar | SanSha A Beauty Lounge",
    description:
      "Bridal makeup in Peshawar for barat, walima, nikah and mehndi — with hairdo, dupatta setting and trial on request. Call 091-5839119 or WhatsApp.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "How far ahead should I book bridal makeup?",
    answer:
      "Message the salon on WhatsApp with your date and function as soon as your event date is fixed — the earlier, the better, because wedding season (October to February) fills up and dates go fast. If your date is close, ask anyway — the salon will tell you honestly what is still available.",
  },
  {
    question: "What is included in a bridal makeup package?",
    answer:
      "A bridal package is makeup with a hairdo for your function — barat, walima, nikah, mehndi or engagement. Prices depend on the function and the look you want, so call 091-5839119 or WhatsApp 0313 9333377 with your event date and the salon will give you your package.",
  },
  {
    question: "Do you offer a bridal trial?",
    answer:
      "Ask about a trial when you book — trials and dupatta setting are not confirmed as standing offers yet, so the salon will tell you honestly what is possible for your date and look. Message on WhatsApp with your event date and ask what can be arranged before your function.",
  },
  {
    question: "Can you do makeup for barat and walima on different days?",
    answer:
      "Yes — barat and walima are separate functions on different days, and the salon books each one separately. Message the salon with both dates and your look for each function, and it will arrange the two bookings so both days are covered.",
  },
  {
    question: "How do I book — call or WhatsApp?",
    answer:
      "Both work. Message the salon on WhatsApp at 0313 9333377 with your event date and function — barat, walima, nikah, mehndi or engagement — or call 091-5839119. The salon will confirm your slot and tell you what to bring, if anything, before the day.",
  },
  {
    question: "What should I bring to my bridal appointment?",
    answer:
      "Bring the dupatta or outfit you plan to wear, if you have it, and a photo or two of looks you like — it helps the salon understand what you want. Bring any hair pieces or jewellery you plan to wear with the look, and come with clean, dry hair unless the salon tells you otherwise.",
  },
  {
    question: "What if my wedding date changes after I book?",
    answer:
      "Message the salon on WhatsApp as soon as you know — dates move, and the salon will tell you honestly whether your new date is free and what can be shifted. The sooner you tell us, the more likely your new date can be kept, especially in wedding season from October to February.",
  },
];

const PHOTO = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-flower-arch-entrance-night",
)!;

export default function BridalMakeupPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Bridal Makeup" },
              ]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Bridal Makeup in Peshawar — Barat, Walima, Nikah &amp; Mehndi
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Bridal makeup with a hairdo for every function of your
              wedding — at SanSha A Beauty Lounge in Phase 2, Hayatabad.
              Send your event date on WhatsApp and we will confirm your
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
              <strong>What:</strong> bridal makeup with a hairdo, for one
              function at a time.
            </li>
            <li>
              <strong>Functions:</strong> barat, walima, nikah, mehndi and
              engagement — each booked on its own.
            </li>
            <li>
              <strong>Booking:</strong> send your event date on WhatsApp,
              or call the salon.
            </li>
            <li>
              <strong>Prices:</strong> no fixed list — call or WhatsApp
              for today&apos;s price for your function and look.
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans Hights,
              Phase 2, Hayatabad, Peshawar.
            </li>
            <li>
              <strong>Hours:</strong> open 24 hours, 7 days a week.
            </li>
            <li>
              <strong>Trial and dupatta setting:</strong> [CONFIRM — ask
              when you book; not confirmed as standing offers yet].
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What is bridal makeup at SanSha?</h2>
          <p>
            Bridal makeup at SanSha is makeup with a hairdo for one
            function of your wedding — barat, walima, nikah, mehndi or
            engagement. Each function is booked on its own, so the look
            for your barat is not the same sitting as the look for your
            walima. You book by sending your event date on WhatsApp, or
            by calling the salon.
          </p>
          <p>
            A wedding week in Peshawar is long, and the functions run
            late. That is why the salon books one function at a time:
            your makeup and hairdo are done for the day in front of you,
            not rushed between two events. When you message, say which
            function you are booking and what kind of look you want —
            full and classic, or soft and light — and the salon will tell
            you what it can do for that day.
          </p>
          <p>
            If you are also thinking about your hair before the wedding
            week, a{" "}
            <Link href="/keratin-treatment-peshawar/">
              keratin treatment to smooth frizz
            </Link>{" "}
            or{" "}
            <Link href="/hair-colour-peshawar/">
              hair colour and balayage
            </Link>{" "}
            can be booked as separate visits before your functions. Bridal
            makeup itself is the makeup and hairdo for the day — hair
            treatments are their own appointments.
          </p>

          <h2>Bridal looks for every function</h2>
          <p>
            A wedding in Peshawar is not one day — it is a week of
            functions, and each one needs its own look. The salon does
            bridal makeup for all of them:
          </p>
          <h3>Barat</h3>
          <p>
            The fuller bridal look for the main day, with a hairdo. This
            is the look most brides plan first, and it is the one to book
            earliest — barat dates in wedding season go first.
          </p>
          <h3>Walima</h3>
          <p>
            A fresh look for the reception, booked as a separate day. Many
            brides want the walima look lighter than the barat, so say
            what you want when you message — the two days are separate
            bookings with separate looks.
          </p>
          <h3>Nikah</h3>
          <p>
            A softer look for the ceremony. Nikah makeup is usually
            lighter than barat makeup, and it suits a daytime ceremony
            where you want to look like yourself, only more finished.
          </p>
          <h3>Mehndi</h3>
          <p>
            A colourful look for the henna night. Mehndi is the liveliest
            function of the week, and the makeup follows that — brighter
            colour, and a hairdo that holds up through a long evening of
            dancing and photos.
          </p>
          <p>
            If henna is part of your mehndi night, see{" "}
            <Link href="/bridal-mehndi-peshawar/">
              bridal mehndi in Peshawar
            </Link>{" "}
            — henna for the bride and her guests.
          </p>
          <h3>Engagement</h3>
          <p>
            A lighter look for the engagement function. If your engagement
            is a smaller family event, tell the salon — a lighter look
            with a hairdo is often the right call, and it costs less
            than a full bridal sitting.
          </p>
          <p>
            Each function is booked separately, so tell the salon your
            look for each day when you message. If you are also looking
            for a lighter look for a family event, see{" "}
            <Link href="/party-makeup-peshawar/">
              party makeup with hairdo
            </Link>
            .
          </p>

          <h2>Who is bridal makeup for — and who should ask first?</h2>
          <p>
            Bridal makeup is for any bride with a function to attend —
            barat, walima, nikah, mehndi or engagement — who wants her
            makeup and hairdo done at a salon on the day. It suits brides
            who have their date fixed and want one place to handle the
            whole look, and it suits brides booking more than one
            function, because each day is arranged on its own.
          </p>
          <p>
            Ask first if your function is very close — within a day or
            two — because a slot may already be taken, and the salon will
            tell you honestly what is still free. Ask first too if you
            want a very light, everyday look: a{" "}
            <Link href="/party-makeup-peshawar/">
              party makeup sitting
            </Link>{" "}
            may fit that better than a full bridal package. And if your
            skin reacts easily to new products, mention it when you book
            so the salon knows before the day.
          </p>

          <h2>How booking works</h2>
          <p>
            Booking bridal makeup takes one message, and the salon does
            the rest. There is no form to fill in — you book by call or
            WhatsApp, and the salon confirms your slot directly.
          </p>
          <ol>
            <li>
              <strong>Send your date and function.</strong> Message the
              salon on WhatsApp at 0313 9333377 with your event date and
              which function it is — barat, walima, nikah, mehndi or
              engagement — or call 091-5839119.
            </li>
            <li>
              <strong>Hear whether the date is free.</strong> The salon
              will tell you honestly whether your date is still open,
              and if it is not, what else is possible around it.
            </li>
            <li>
              <strong>Talk through the look.</strong> Say what you want —
              full or soft, and what kind of hairdo — and send a photo
              of a look you like if you have one. The salon will tell
              you what it can do for that function.
            </li>
            <li>
              <strong>Get your package and price.</strong> The salon
              gives you the package for that function and the price
              before the day, so there is no surprise when you arrive.
            </li>
            <li>
              <strong>Your slot is kept.</strong> Come to the salon in
              Phase 2, Hayatabad, on the day. If anything changes — your
              date, your function, your look — message the salon as soon
              as you know.
            </li>
          </ol>

          <h2>What happens on your wedding day</h2>
          <p>
            On the day, you come to the salon in Phase 2, Hayatabad, at
            the time you agreed when you booked. Your makeup is done
            first, then your hairdo, so the whole look comes together in
            one sitting. Bring what you plan to wear with the look — your
            dupatta or outfit — if you have it ready.
          </p>
          <p>
            How long does bridal makeup take? [CONFIRM — the salon will
            confirm the usual time for your look when you book.] Arrive
            on time, because a late start pushes everything after it —
            and on a wedding day there is usually somewhere to be right
            after. If you are running late, a quick WhatsApp message
            lets the salon plan around it.
          </p>

          <h2>What&apos;s included</h2>
          <p>
            A bridal package is makeup with a hairdo for your function.
            That is the core of it: the makeup for your look, and the
            hairdo that goes with it, done in one sitting at the salon.
          </p>
          <p>
            A trial and dupatta setting are not confirmed as standing
            offers yet — ask about them when you book and the salon will
            tell you honestly what is possible for your date. [CONFIRM:
            trial and dupatta setting availability.] Do not assume a trial
            is included in the package price; the salon will say what
            your package covers before the day.
          </p>

          <h2>How much does bridal makeup cost?</h2>
          <p>
            Bridal makeup has no fixed price list on this site, because
            the price depends on the function and the look. A barat
            sitting is not priced like a nikah sitting, and a full look
            with a detailed hairdo is not priced like a soft look. The
            salon gives you the price for your function when you book —
            call or WhatsApp for today&apos;s price.
          </p>
          <p>What changes the price:</p>
          <ul>
            <li>
              <strong>The function.</strong> Barat, walima, nikah, mehndi
              and engagement are different sittings with different looks.
            </li>
            <li>
              <strong>The look.</strong> A full bridal look and a soft
              look take different amounts of work.
            </li>
            <li>
              <strong>The hairdo.</strong> A simple hairdo and a detailed
              one are not the same job.
            </li>
            <li>
              <strong>How many functions you book.</strong> Each function
              is priced on its own — booking barat and walima means two
              sittings, not one.
            </li>
            <li>
              <strong>How far ahead you book.</strong> Wedding season
              (October to February) fills up, and late bookings depend on
              what is still free.
            </li>
          </ul>
          <p>
            Ask for the price before the day, in the same message where
            you send your date and function. That way you know exactly
            what your package covers and what it costs.
          </p>

          <h2>How to prepare for your bridal makeup</h2>
          <p>
            A little preparation makes the sitting smoother, and it costs
            you nothing. Do these before the day, and your makeup and
            hairdo will go on easier and last better through the
            function.
          </p>
          <p>
            If you are thinking about{" "}
            <Link href="/laser-hair-removal-peshawar/">
              laser hair removal before the wedding
            </Link>{" "}
            mention it when you book — the salon will tell you how far
            ahead to plan.
          </p>
          <ul>
            <li>
              Come with clean, dry hair unless the salon tells you
              otherwise — a hairdo holds better on hair that is clean
              and dry.
            </li>
            <li>
              Bring the dupatta or outfit you plan to wear, if you have
              it, so the look can be matched to it.
            </li>
            <li>
              Save a photo or two of looks you like on your phone, and
              show them when you arrive.
            </li>
            <li>
              Bring any hair pieces or jewellery you plan to wear with
              the look.
            </li>
            <li>
              Tell the salon when you book if your skin reacts easily to
              new products.
            </li>
            <li>
              Eat before you come — a bridal sitting is long, and you
              will feel better for it.
            </li>
            <li>
              Arrive on time, and message the salon if you are running
              late.
            </li>
          </ul>

          <h2>Mistakes and myths about bridal makeup</h2>
          <h3>Mistakes to avoid</h3>
          <p>
            The most common mistake is booking late in wedding season.
            October to February fills up, and a date left to the last
            week may already be taken. The second is booking one look
            for every function — barat and walima are different days with
            different moods, and one look rarely fits both. The third is
            arriving with no idea of the look you want: a photo or two on
            your phone saves a long conversation on the day.
          </p>
          <h3>Myths</h3>
          <p>
            Bridal makeup does not have to be heavy. A soft look is still
            bridal makeup, and for a nikah or a daytime function it is
            often the right choice. A trial is not always included in a
            package — ask, do not assume. And one sitting does not cover
            barat and walima: they are separate functions on separate
            days, booked and priced separately.
          </p>

          <h2>Bridal makeup or party makeup?</h2>
          <p>
            Bridal makeup and party makeup are different sittings for
            different days. Bridal makeup is the full look with a hairdo
            for a wedding function; party makeup is a lighter look, also
            with a hairdo, for engagements, dinners and family events.
            If your event is a wedding function, book bridal. If it is a
            family event where you want to look finished but not bridal,
            party makeup fits better — see our{" "}
            <Link href="/party-makeup-peshawar/">
              party looks
            </Link>
            .
          </p>
          <table className="mt-4 w-full border-collapse text-left text-slate-700">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  &nbsp;
                </th>
                <th className="py-2 pr-4 font-semibold text-slate-900">
                  Bridal makeup
                </th>
                <th className="py-2 font-semibold text-slate-900">
                  Party makeup
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">For</td>
                <td className="py-2 pr-4">
                  Barat, walima, nikah, mehndi, engagement
                </td>
                <td className="py-2">
                  Engagements, dinners, family events
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">Look</td>
                <td className="py-2 pr-4">Full bridal look with hairdo</td>
                <td className="py-2">Lighter look with hairdo</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-4 font-semibold">Booking</td>
                <td className="py-2 pr-4">
                  Book early — wedding season fills up
                </td>
                <td className="py-2">Book ahead, or ask about the day</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Price</td>
                <td className="py-2 pr-4">
                  By function and look — ask when you book
                </td>
                <td className="py-2">
                  By look — call or WhatsApp for today&apos;s price
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Real brides</h2>
          <p>
            Our brides wrote the words below on Google — exactly as they
            wrote them. There are more{" "}
            <Link href="/reviews/">bridal reviews</Link>.
          </p>
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
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your bridal makeup"
            text="Message us on WhatsApp with your wedding date and function, or call the salon — we will tell you what is free and what your package covers."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/party-makeup-peshawar/", label: "Party makeup for engagements and dinners" },
              { href: "/hair-salon-peshawar/", label: "Haircuts and blow-dry before the wedding" },
              { href: "/reviews/", label: "What brides say" },
              { href: "/contact/", label: "Book your bridal makeup" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Bridal Makeup" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Bridal Makeup in Peshawar",
          description:
            "Bridal makeup in Peshawar for barat, walima, nikah and mehndi — with hairdo. Ask about a trial and dupatta setting when you book.",
          url: `${SITE.url}/bridal-makeup-peshawar/`,
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
