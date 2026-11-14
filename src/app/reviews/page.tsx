import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE, PHOTOS } from "@/data/photos";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import Photo from "@/components/Photo";
import { breadcrumbJsonLd, imageObjectJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Customer Reviews | SanSha A Beauty Lounge",
  description:
    "Customer reviews for SanSha A Beauty Lounge in Hayatabad, Peshawar — 3.9 stars on Google from 92 reviews. Read verbatim reviews from our clients.",
  alternates: { canonical: `${SITE.url}/reviews/` },
  openGraph: {
    title: "Customer Reviews | SanSha A Beauty Lounge",
    description:
      "Customer reviews for SanSha A Beauty Lounge in Hayatabad, Peshawar — 3.9 stars on Google from 92 reviews. Read verbatim reviews from our clients.",
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
    title: "Customer Reviews | SanSha A Beauty Lounge",
    description:
      "Customer reviews for SanSha A Beauty Lounge in Hayatabad, Peshawar — 3.9 stars on Google from 92 reviews. Read verbatim reviews from our clients.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

/**
 * Verbatim Google reviews (from reviews-real.md, 2026-11-14).
 * A selection of 12 recent reviews — the honest Google figure is
 * 3.9 stars from 92 reviews, shown above. Reviewer-reported price
 * figures in the source file are NOT shown here (no prices are
 * published on this site). Like-counts and "Services:" metadata
 * lines from the source are not part of the review text and are
 * not shown. Staff names appear ONLY inside these verbatim quotes.
 */
const REVIEWS: { name: string; when: string; service: string; text: string }[] = [
  {
    name: "anam usman",
    when: "a week ago",
    service: "Makeup",
    text: "Our experience with miss eman and farah is out class..they did very gud makup of us as we asked they did da same..plus their behaviour is very outstanding they both are soft spoken plus da staff of hairdo is also very freindly sahar nd team..may Allah give much more barakah in ur work",
  },
  {
    name: "Sumira Afridi",
    when: "a month ago",
    service: "Salon service",
    text: "I had a really good experience at Shan Sha Salon today. Sehar did my service and she was very professional, polite, and attentive throughout. I really appreciated the way she understood what I wanted and made sure everything was done perfectly. The service was neat, comfortable, and satisfying. Thank you, Sehar, for the wonderful service. Highly recommended!",
  },
  {
    name: "farah n05",
    when: "a month ago",
    service: "Keratin treatment",
    text: "Today I got keratin treatment from Sansha beauty lounge. The girl Eeman did a wonderful job. She was very polite and professional. She was very patient and gave me absolute good time and care. I would highly recommend Eeman for hair treatments.",
  },
  {
    name: "sana jehangir",
    when: "a month ago",
    service: "Mani-pedi & waxing",
    text: "I did my Meni pedi and waxing from seher and I just love her services",
  },
  {
    name: "komal butt",
    when: "2 months ago",
    service: "Waxing & hair",
    text: "Excellent service and a very professional, friendly, and cooperative staff. Everyone was welcoming, attentive, and made sure I was comfortable throughout. Had a wonderful experience at the parlour! Special thanks to Lubna for the waxing service—she was very professional, gentle, and attentive. And Eman did an amazing job with my hair; she was skilled, friendly, and paid great attention to detail. Both were extremely courteous and made the whole experience comfortable. Highly recommended!",
  },
  {
    name: "Aiman Hayat",
    when: "2 months ago",
    service: "Waxing",
    text: "I had my waxing session with Lubna at Sansha yesterday and had a wonderful experience. She was extremely hygienic, gentle, and took the time to explain each step. The entire process was comfortable with no pain or rashes. The salon itself is very clean and maintains professional standards. I highly recommend Lubna for anyone looking for a painless and hygienic wax. Will definitely be coming back!",
  },
  {
    name: "Aqsa Qureshi",
    when: "2 months ago",
    service: "Waxing & protein treatment",
    text: "Wonderful waxing experience with lovely Ms. Lubna. She was very supportive, kind, and soft-spoken. The service was excellent, and I would definitely love to visit again. Had a great experience at Sansha Beauty Salon with Ms. Eman. She was professional, kind, and soft-spoken. Loved the hair protein treatment and the results. Definitely recommend her.",
  },
  {
    name: "Beena Fatima",
    when: "2 months ago",
    service: "Haircut",
    text: "AOA, I'm Fatima. Had my haircut today at San Shah Salon. The staff was very welcoming and helpful. Special thanks to Miss Lubna — she's highly skilled, professional, and gave me a beautiful, elegant cut. Mashallah. Will definitely visit again!",
  },
  {
    name: "WAQAS AHMED",
    when: "2 months ago",
    service: "Facial & plucking",
    text: "I'm very satisfied with the facial and plucking service my wife received from Ms. Seher. The work was excellent, neat, and professional. She was very cooperative and paid great attention to detail. Highly recommended!",
  },
  {
    name: "Kiran Yousaf",
    when: "2 months ago",
    service: "Makeup",
    text: "My review for eman I am very well satisfied and extremely happy with my makeup look..she very nice and do my makeup as i wanted",
  },
  {
    name: "Hania Abid",
    when: "2 months ago",
    service: "Waxing",
    text: "Lubna did my wax and this is my 8 wax session with her and she's so kind polite and well behaved. Am so satisfied with her.",
  },
  {
    name: "Nabeeha Khanum",
    when: "2 months ago",
    service: "Hair dye",
    text: "My experience with eman was amazing. Suvh a lovely soul and perfect dye done by her.",
  },
];

const RECEPTION = PHOTOS.find(
  (p) => p.slug === "sansha-beauty-lounge-reception-desk-peshawar",
)!;

export default function ReviewsPage() {
  return (
    <div>
      <section className="bg-brand-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center">
          <div>
            <Breadcrumbs
              items={[{ name: "Home", path: "/" }, { name: "Reviews" }]}
            />
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              Customer Reviews
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              {SITE.ratingValue}★ on Google ({SITE.reviewCount} reviews).
              The reviews below are a selection of verbatim Google
              reviews from our clients — their own words, exactly as
              they wrote them.
            </p>
            <p className="mt-4 text-sm text-slate-300">
              <a
                href={SITE.googleMaps}
                className="font-medium text-amber-300 underline"
              >
                Read all {SITE.reviewCount} reviews on Google
              </a>
            </p>
          </div>
          <Photo
            photo={RECEPTION}
            eager
            sizes="(max-width: 640px) 100vw, 680px"
            className="w-full rounded-2xl object-cover"
            caption={RECEPTION.caption}
            captionClassName="mt-2 text-sm leading-relaxed text-slate-300"
          />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <p className="leading-relaxed text-slate-700">
          These are our clients&apos; own words. Staff names appear
          only inside these verbatim quotes — the salon does not name
          staff anywhere else on this site. If you have visited us,
          please leave a review on Google — it helps other people in
          Hayatabad and Peshawar find us.
        </p>

        <div className="mt-8 space-y-6">
          {REVIEWS.map((r) => (
            <blockquote
              key={r.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-accent-600">
                {r.service} · {r.when}
              </p>
              <p className="mt-2 leading-relaxed text-slate-700">
                “{r.text}”
              </p>
              <footer className="mt-3 text-sm font-semibold text-brand-900">
                {r.name}{" "}
                <span className="font-normal text-slate-500">
                  — via Google
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-8 leading-relaxed text-slate-700">
          This page shows 12 of our {SITE.reviewCount} Google reviews —
          a selection of recent ones. The full set, including older
          reviews, is on our Google profile.{" "}
          <Link href="/contact/" className="font-medium text-brand-700 underline hover:text-brand-900">
            Visit us in Phase 2, Hayatabad
          </Link>{" "}
          or call{" "}
          <a href={SITE.phoneHref} className="font-medium text-brand-700 underline hover:text-brand-900">
            {SITE.phoneDisplay}
          </a>{" "}
          to book.
        </p>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Reviews" },
        ])}
      />
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
