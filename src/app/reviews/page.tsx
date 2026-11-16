import type { Metadata } from "next";
import Link from "next/link";
import { REVIEWS } from "@/data/reviews";
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
  reviewJsonLd,
} from "@/lib/schema";
import type { Faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Beauty Salon Reviews in Peshawar | SanSha A Beauty Lounge",
  description:
    "Beauty salon reviews in Peshawar — SanSha A Beauty Lounge, 3.9 stars on Google from 92 reviews. Read what our clients in Hayatabad wrote, word for word.",
  alternates: { canonical: `${SITE.url}/reviews/` },
  openGraph: {
    title: "Beauty Salon Reviews in Peshawar | SanSha A Beauty Lounge",
    description:
      "Beauty salon reviews in Peshawar — SanSha A Beauty Lounge, 3.9 stars on Google from 92 reviews. Read what our clients in Hayatabad wrote, word for word.",
    url: `${SITE.url}/reviews/`,
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
    title: "Beauty Salon Reviews in Peshawar | SanSha A Beauty Lounge",
    description:
      "Beauty salon reviews in Peshawar — SanSha A Beauty Lounge, 3.9 stars on Google from 92 reviews. Read what our clients in Hayatabad wrote, word for word.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Where do these reviews come from?",
    answer:
      "Every review on this page comes from the salon's Google profile, copied word for word — spelling, grammar and all. The salon has not edited them, shortened them or picked only the flattering lines. The selection below is recent reviews; the full set of 92, including older ones, is on Google.",
  },
  {
    question: "What is the salon's Google rating?",
    answer:
      "The salon has 3.9 stars on Google from 92 reviews. That is the average across every review on the profile, old and new — not a score the salon picked or a handful of favourite reviews. It is shown here as plain text, because the salon does not publish a rating badge or a review score of its own.",
  },
  {
    question: "Why are only 12 reviews shown here?",
    answer:
      "This page shows 12 recent reviews so the page stays readable. They are the newest ones from the Google profile, covering hair, makeup, waxing and facials. Nothing has been left out to hide a bad review — the full set of 92 is linked above, and it includes older reviews that are not all five stars.",
  },
  {
    question: "Are the older reviews as positive as these?",
    answer:
      "Not all of them. The older reviews on the Google profile are mixed — most are warm, but a few are one or two stars, and they mention things like slow service or a booking that went wrong. The 3.9 average reflects all of them. The recent reviews on this page are the ones clients have left lately.",
  },
  {
    question: "How do I leave a review for the salon?",
    answer:
      "Go to the salon's Google profile and tap the review button — it takes a minute, and you can write as much or as little as you like. The salon reads every review. If something about your visit could have been better, say so there too; honest reviews help the salon improve and help other clients decide.",
  },
  {
    question: "Do the reviews name the people who did the work?",
    answer:
      "Yes — inside the quotes, clients often name the person who did their hair, waxing or makeup, because that is how they wrote it on Google. The salon itself does not name staff anywhere else on this website. If you book and want to ask for someone by name, mention it when you call or message on WhatsApp.",
  },
  {
    question: "Can I trust that these reviews are real?",
    answer:
      "They are Google reviews, written by clients on the salon's Google profile — not words the salon wrote about itself. The salon shows them exactly as written, spelling mistakes included, and links to the full profile above so you can check them yourself. A review the salon invented would not be on Google at all.",
  },
];

const RECEPTION = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-reception-desk-peshawar",
)!;

const GROUPS: {
  key: "hair" | "makeup" | "waxing" | "facial" | "visit";
  heading: string;
  intro: string;
}[] = [
  {
    key: "hair",
    heading: "What do clients say about hair at SanSha?",
    intro:
      "Hair is the service clients write about most — keratin and protein treatments, haircuts, and dye. What comes through in these reviews is not a single look but the way the appointment felt: unhurried, explained as it went, and finished to what the client asked for. One client came back after a keratin treatment elsewhere had left her hair wrong, and writes that it was corrected at no charge. Another writes about a haircut she calls beautiful and elegant, and a third about a dye done exactly as she wanted. Read them as they are — clients naming the person who did their hair, in their own words.",
  },
  {
    key: "makeup",
    heading: "What do clients say about makeup?",
    intro:
      "The makeup reviews below are short, and they are both about the same thing: the look came out the way the client asked. One client writes that the makeup was done exactly as she asked, and that the people doing it were soft-spoken and easy to be around. The other writes that she is very well satisfied and extremely happy with her look. Makeup for a function is a long sitting, and what clients remember afterwards is whether the person doing it listened — these two say yes, plainly, in their own words.",
  },
  {
    key: "waxing",
    heading: "What do clients say about waxing?",
    intro:
      "Waxing is the service with the most reviews on this page, and the pattern in them is steady: clients write about being comfortable, about each step being explained, and about coming back. One client is on her eighth waxing session with the same person and writes that she is so satisfied. Another writes that the session was comfortable with no pain or rashes, and that the salon itself is very clean. A third writes about a waxing and a protein treatment in the same visit. These are the reviews where clients most often name the person who did the work — inside the quote, as they wrote it.",
  },
  {
    key: "facial",
    heading: "What do clients say about facials?",
    intro:
      "There is one facial review in this selection, and it is written by a client about his wife's facial and plucking — the work was excellent, neat and professional, he writes, and the person doing it was cooperative and paid great attention to detail. It is a short review, but it says what matters for a facial: the skin was handled with care, and the client left satisfied. More facial reviews are on the full Google profile, and the facial page itself explains what a visit looks like.",
  },
  {
    key: "visit",
    heading: "What do clients say about visiting the salon?",
    intro:
      "Some reviews are not about one service but about the visit as a whole — the welcome, the way the salon understood what was wanted, and whether everything was done properly. The review below is one of those: a client writes that the service was neat, comfortable and satisfying, and that the person doing it understood what she wanted and made sure everything was done perfectly. It is the kind of review that tells you more about the salon than any single service page can.",
  },
];

function ReviewCard({ r }: { r: (typeof REVIEWS)[number] }) {
  return (
    <blockquote className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-accent-600">
        {r.service} · {r.when}
      </p>
      <p className="mt-2 leading-relaxed text-slate-700">“{r.text}”</p>
      <footer className="mt-3 text-sm font-semibold text-brand-900">
        {r.name}{" "}
        <span className="font-normal text-slate-500">— via Google</span>
      </footer>
    </blockquote>
  );
}

export default function ReviewsPage() {
  return (
    <div>
      <HeroBackground
        photo={RECEPTION}
        caption={RECEPTION.caption}
      >
          <Breadcrumbs
            items={[{ name: "Home", path: "/" }, { name: "Reviews" }]}
          />
          <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
            Beauty Salon Reviews in Peshawar
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
            {SITE.ratingValue}★ on Google ({SITE.reviewCount} reviews). The reviews below are a selection of verbatim Google reviews from our clients — their own words, exactly as they wrote them, spelling mistakes included. Read them here, or see the full set on the salon&apos;s Google profile.
          </p>
          <p className="mt-4 text-sm text-slate-300">
            <a
              href={SITE.googleMaps}
              className="font-medium text-amber-300 underline"
            >
              Read all {SITE.reviewCount} reviews on Google
            </a>
          </p>
      </HeroBackground>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-bold text-brand-900">
            Reviews at a glance
          </p>
          <ul className="mt-3 space-y-2 leading-relaxed text-slate-700">
            <li>
              <strong>Rating:</strong> {SITE.ratingValue}★ on Google,
              from {SITE.reviewCount} reviews — the average of every
              review on the profile.
            </li>
            <li>
              <strong>Shown here:</strong> 12 recent reviews, word for
              word, grouped by service below.
            </li>
            <li>
              <strong>Where from:</strong> the salon&apos;s Google
              profile — linked above and at the foot of this page.
            </li>
            <li>
              <strong>Edited?</strong> No — spelling and grammar are
              exactly as the client wrote them.
            </li>
            <li>
              <strong>Your review:</strong> if you have visited us,
              leave one on Google — it helps other people in Hayatabad
              and Peshawar find us.
            </li>
            <li>
              <strong>Where:</strong> Shop No. 4, Block A, Deans
              Hights, Phase 2, Hayatabad, Peshawar.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>How to read these reviews</h2>
          <p>
            These are our clients&apos; own words, copied from Google
            exactly as they were written — spelling mistakes, short
            sentences and all. The salon has not tidied them up, and
            it has not picked only the glowing ones: the 12 below are
            the most recent reviews on the profile, and they cover
            hair, makeup, waxing and facials. Staff names appear only
            inside these verbatim quotes — the salon does not name
            staff anywhere else on this site.
          </p>
          <p>
            The honest figure is the one at the top of this page:
            3.9 stars from 92 reviews. That is the average of every
            review the salon has ever received on Google, including
            the older ones — and the older ones are not all warm.
            A few are one or two stars, and they mention slow service
            or a booking that went wrong. The recent reviews below
            are warmer, and the salon is glad of that — but the 3.9
            is the real number, and it stays on this page as plain
            text rather than a badge.
          </p>
          <p>
            If you are deciding whether to visit, read the reviews
            for the service you want — hair, makeup, waxing or
            facial — and then read the service page itself, which
            explains what the visit looks like and what to ask when
            you book. A review tells you how one visit felt; the
            service page tells you what to expect from yours.
          </p>
        </div>

        {GROUPS.map((g) => (
          <div key={g.key} className="mt-12">
            <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
              {g.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              {g.intro}
            </p>
            <div className="mt-6 space-y-6">
              {REVIEWS.filter((r) => r.group === g.key).map((r) => (
                <ReviewCard key={r.name} r={r} />
              ))}
            </div>
          </div>
        ))}

        <div className="page-content">
          <h2>How to leave a review</h2>
          <p>
            If you have visited the salon, the most useful thing you
            can do afterwards is leave a review on Google. It takes
            a minute: open the salon&apos;s Google profile, tap the
            review button, and write what your visit was like — the
            service you had, how it felt, and whether you would come
            back. You can write a sentence or a paragraph; either
            helps the next person deciding whether to book.
          </p>
          <p>
            Say what was good, and say what could have been better
            too. A review that only praises tells the salon nothing
            it can act on, and a review that only complains tells
            the next client nothing about what went right. The salon
            reads every review, and the honest ones — good and bad —
            are the ones that help it improve. If something about
            your visit went wrong, the salon would rather hear it
            on Google, where it can be answered, than not hear it
            at all.
          </p>
          <p>
            This page shows 12 of our {SITE.reviewCount} Google
            reviews — a selection of recent ones. The full set,
            including older reviews, is on our Google profile.{" "}
            <Link
              href="/contact/"
              className="font-medium text-brand-700 underline hover:text-brand-900"
            >
              Visit us in Phase 2, Hayatabad
            </Link>{" "}
            or call{" "}
            <a
              href={SITE.phoneHref}
              className="font-medium text-brand-700 underline hover:text-brand-900"
            >
              {SITE.phoneDisplay}
            </a>{" "}
            to book.
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Book your visit"
            text="Call or WhatsApp, say what you want done, and we will set a time and quote you the price."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/hair-salon-peshawar/", label: "Haircuts and styling" },
              { href: "/bridal-makeup-peshawar/", label: "Bridal makeup in Hayatabad" },
              { href: "/gallery/", label: "Photos of the salon" },
              { href: "/contact/", label: "Call or WhatsApp the salon" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Reviews" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      {reviewJsonLd(REVIEWS).map((review, i) => (
        <JsonLd key={i} data={review} />
      ))}
      <JsonLd
        data={imageObjectJsonLd({
          url: `${SITE.url}/images/${RECEPTION.slug}-${RECEPTION.nativeW}.jpg`,
          caption: RECEPTION.caption,
          width: RECEPTION.nativeW,
          height: RECEPTION.nativeH,
        })}
      />
    </div>
  );
}
