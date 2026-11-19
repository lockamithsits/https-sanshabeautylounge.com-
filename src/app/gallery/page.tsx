import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteConfig";
import { OG_IMAGE, PHOTOS } from "@/data/photos";
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
} from "@/lib/schema";
import type { Faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Beauty Salon Gallery in Hayatabad | SanSha A Beauty Lounge",
  description:
    "See inside SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — the flower arch entrance, reception, styling chairs, wash area and treatment rooms.",
  alternates: { canonical: `${SITE.url}/gallery/` },
  openGraph: {
    title: "Beauty Salon Gallery in Hayatabad | SanSha A Beauty Lounge",
    description:
      "See inside SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — the flower arch entrance, reception, styling chairs, wash area and treatment rooms.",
    url: `${SITE.url}/gallery/`,
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
    title: "Beauty Salon Gallery in Hayatabad | SanSha A Beauty Lounge",
    description:
      "See inside SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar — the flower arch entrance, reception, styling chairs, wash area and treatment rooms.",
    images: [`${SITE.url}${OG_IMAGE.url}`],
  },
};

const FAQS: Faq[] = [
  {
    question: "Are these photos of the real salon?",
    answer:
      "Yes — every photo on this page was taken at SanSha A Beauty Lounge in Phase 2, Hayatabad. They show the entrance, the reception, the styling chairs, the wash area and the treatment rooms as they are. Nothing here is a stock photo, and no photo has been staged to look like a different salon.",
  },
  {
    question: "Can I visit the salon before I book?",
    answer:
      "Yes — walk in any time. The salon is open 24 hours, 7 days a week, and you can look around, ask about a service and get a price before you decide. If you want to see a particular room, ask when you arrive and the salon will show you.",
  },
  {
    question: "Do the photos show treatments being done?",
    answer:
      "No — the photos show the salon itself: the rooms, the chairs, the products and the entrance. They do not show a treatment in progress, and no client is in focus in any photo. [ADD REAL PHOTO — a treatment in progress, once the salon has one it is happy to share.]",
  },
  {
    question: "Which photo shows the entrance?",
    answer:
      "The first photos on this page show the entrance — the flower arch over the doorway, lit up at night with fairy lights. It is the photo at the top of the home page too. The arch is the easiest way to spot the salon after dark.",
  },
  {
    question: "Is the salon easy to find?",
    answer:
      "The salon is in Phase 2, Hayatabad, at Shop No. 4, Block A, Deans Hights, Peshawar 25124. The signboard photos on this page show what to look for from the street. The map on the contact page shows the location, and the salon will give directions on WhatsApp if you ask.",
  },
  {
    question: "Can I take photos during my visit?",
    answer:
      "Ask when you arrive. The salon is happy for clients to take a photo of their own hair or makeup, but it will say if there is a time when photos are not welcome — for example, when another client is having a treatment nearby. [CONFIRM — photos during visits.]",
  },
  {
    question: "Where is the salon?",
    answer:
      "The salon is in Phase 2, Hayatabad — Shop No. 4, Block A, Deans Hights, Peshawar 25124. Ring 091-5839119 or WhatsApp 0313 9333377 and the salon will talk you in, or open the map on the contact page. It is open around the clock, 7 days a week, so come whenever suits you.",
  },
];

const photo = (slug: string) => PHOTOS.find((p) => p.slug === slug)!;
const ARCH = SITE_HERO;

/** Gallery groups: each photo with its own caption, written for this
 * page — describing only what the photo shows, never a treatment it
 * does not show. Captions differ from the registry captions used on
 * the home page, so the two pages do not share long passages. */
const GROUPS: {
  heading: string;
  intro: string;
  photos: { slug: string; caption: string }[];
}[] = [
  {
    heading: "The entrance",
    intro:
      "The salon's entrance is dressed with a flower arch and fairy lights, and at night it is the brightest thing on the street. These photos were taken after dark, when the arch is lit — it is the same arch on the home page, and it is how most clients first find the salon. The board by the door says the salon is open, and it is: 24 hours, 7 days a week.",
    photos: [
      {
        slug: "sansha-beauty-lounge-entrance-floral-arch-night",
        caption: "The flower arch at the entrance, lit up at night.",
      },
      {
        slug: "sansha-beauty-lounge-entrance-arch-night",
        caption: "The entrance arch, seen from the street at night.",
      },
      {
        slug: "sansha-beauty-lounge-floral-entrance-night",
        caption: "Flowers and fairy lights over the doorway.",
      },
      {
        slug: "sansha-beauty-lounge-salon-entrance-night",
        caption: "The entrance at night, with the Now Open board.",
      },
      {
        slug: "sansha-beauty-lounge-flower-arch-entrance-night",
        caption: "The flower arch glowing after dark.",
      },
    ],
  },
  {
    heading: "Reception and waiting",
    intro:
      "Inside the door is the reception, where clients wait and where the salon keeps its products. The desk is where you check in and where you pay, and the shelves behind it hold the colour and treatment products the salon uses. It is a small, plain space — no grand lobby, just a desk, chairs, and shelves.",
    photos: [
      {
        slug: "sansha-beauty-lounge-reception-shelves-hayatabad",
        caption: "Product shelves and a television in reception.",
      },
      {
        slug: "sansha-beauty-lounge-reception-desk-peshawar",
        caption: "The reception desk and waiting chairs.",
      },
    ],
  },
  {
    heading: "Styling chairs and hair",
    intro:
      "The main floor is where hair happens: styling chairs in front of mirrors, a wash area with basins, and a shelf of colour and treatment products. This is where haircuts, blow-dries, colour and keratin treatments are done. The chairs are the working heart of the salon, and the photos below show them as they are on an ordinary day.",
    photos: [
      {
        slug: "sansha-beauty-lounge-hair-salon-chairs-peshawar",
        caption: "Styling chairs and mirrors on the salon floor.",
      },
      {
        slug: "sansha-beauty-lounge-hair-styling-chairs",
        caption: "Styling chairs along the mirror wall.",
      },
      {
        slug: "sansha-beauty-lounge-hair-salon-interior",
        caption: "The salon floor, seen across the chairs.",
      },
      {
        slug: "sansha-beauty-lounge-hair-wash-area",
        caption: "Hair wash basins and chairs.",
      },
      {
        slug: "sansha-beauty-lounge-hair-colour-products",
        caption: "Colour and treatment products on the shelf.",
      },
    ],
  },
  {
    heading: "Treatment rooms",
    intro:
      "Facials and laser hair removal are done in private rooms, away from the main floor. The facial rooms have a treatment bed and a sink, and the laser room holds the laser machine. These are quiet rooms — the door closes, and the appointment is yours alone. The photos show the rooms empty, as they are between appointments.",
    photos: [
      {
        slug: "sansha-beauty-lounge-facial-room-hayatabad",
        caption: "A private facial room with its treatment bed.",
      },
      {
        slug: "sansha-beauty-lounge-facial-treatment-room",
        caption: "A facial bed and sink in a private room.",
      },
      {
        slug: "sansha-beauty-lounge-laser-hair-removal-room",
        caption: "The laser treatment room and machine.",
      },
    ],
  },
  {
    heading: "Outside the salon",
    intro:
      "From the street, the salon is easy to spot: the signboard carries the name, and the building sits in Phase 2, Hayatabad. The signboard photos below show what to look for when you come — the name on the wall, the welcome banner, and the building itself. If you are coming for the first time, the signboard is the landmark to watch for.",
    photos: [
      {
        slug: "sansha-beauty-lounge-salon-sign-hayatabad-peshawar",
        caption: "The big signboard on the salon wall outside.",
      },
      {
        slug: "sansha-beauty-lounge-salon-signboard-hayatabad",
        caption: "The signboard and welcome banner outside.",
      },
      {
        slug: "sansha-beauty-lounge-building-exterior-hayatabad",
        caption: "The building from the street in Phase 2.",
      },
      {
        slug: "sansha-beauty-lounge-logo-sign-hayatabad",
        caption: "The SanSha name on the salon building.",
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <div>
      <HeroBackground
        photo={ARCH}
        caption={ARCH.caption}
      >
          <Breadcrumbs
            items={[{ name: "Home", path: "/" }, { name: "Gallery" }]}
          />
          <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
            Salon Gallery in Hayatabad, Peshawar
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
            Nineteen photos of the real salon — the entrance, the reception, the styling chairs and the treatment rooms — taken at SanSha A Beauty Lounge in Phase 2, Hayatabad, Peshawar. See the salon before you visit, then call or WhatsApp to book.
          </p>
      </HeroBackground>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-bold text-brand-900">
            Visit at a glance
          </p>
          <ul className="mt-3 space-y-2 leading-relaxed text-slate-700">
            <li>
              <strong>Photos:</strong> 19, all taken at this salon —
              no stock photos, no photos of another salon.
            </li>
            <li>
              <strong>What they show:</strong> the entrance, reception,
              styling chairs, wash area and treatment rooms.
            </li>
            <li>
              <strong>What they do not show:</strong> a treatment in
              progress, or any client in focus.
            </li>
            <li>
              <strong>Where:</strong> Phase 2, Hayatabad — Shop No.
              4, Block A, Deans Hights, Peshawar.
            </li>
            <li>
              <strong>Hours:</strong> the salon never closes for the
              night — open 24 hours, 7 days a week.
            </li>
          </ul>
        </div>

        <div className="page-content">
          <h2>What you will see in these photos</h2>
          <p>
            Every photo on this page was taken inside or outside the
            salon in Phase 2, Hayatabad — the same rooms you will sit
            in when you visit. There are no stock photos here, and no
            photos borrowed from another salon: the arch over the
            door, the chairs in front of the mirrors, the wash basins
            and the treatment beds are all SanSha&apos;s own. If you
            have never been, these photos are the honest way to see
            the place before you come.
          </p>
          <p>
            What the photos do not show is a treatment in progress.
            No client is in focus in any photo, and no photo claims
            to show a haircut, a facial or a makeup look being done.
            [ADD REAL PHOTO — a treatment in progress, once the salon
            has one it is happy to share.] The photos below are
            grouped by area, so you can find the part of the salon
            you want to see: the entrance, reception, the styling
            floor, the treatment rooms, and the outside.
          </p>
        </div>

        {GROUPS.map((g) => (
          <div key={g.heading} className="mt-12">
            <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
              {g.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              {g.intro}
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {g.photos.map((p) => (
                <Photo
                  key={p.slug}
                  photo={photo(p.slug)}
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="w-full rounded-2xl object-cover"
                  caption={p.caption}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="page-content">
          <h2>Planning your visit from the photos</h2>
          <p>
            If you are coming for the first time, the photos above
            tell you what to expect: a walk-in salon, not a big
            spa — a reception desk, a floor of styling chairs, and
            private rooms for facials and laser. Come in, say what
            you want, and the salon will tell you the price before
            anything starts. You can also look at the{" "}
            <Link
              href="/reviews/"
              className="font-medium text-brand-700 underline hover:text-brand-900"
            >
              reviews from clients
            </Link>{" "}
            to see how visits here have gone, or read the{" "}
            <Link
              href="/hair-salon-peshawar/"
              className="font-medium text-brand-700 underline hover:text-brand-900"
            >
              hair salon page
            </Link>{" "}
            and the{" "}
            <Link
              href="/bridal-makeup-peshawar/"
              className="font-medium text-brand-700 underline hover:text-brand-900"
            >
              bridal makeup page
            </Link>{" "}
            for the services themselves.
          </p>
          <p>
            The salon is open 24 hours, 7 days a week, so the photos
            look the same whether you come at noon or at night — the
            arch is lit after dark, and the rooms are the same rooms.
            If you want to see a particular room before you book,
            ask when you arrive and the salon will show you. And if
            you take a photo of your own hair or makeup after your
            visit, ask first — the salon will say whether it is a
            good time for photos. [CONFIRM — photos during visits.]
          </p>
        </div>

        <div className="mt-12">
          <FAQSection faqs={FAQS} />
        </div>

        <div className="mt-12">
          <CallCTA
            heading="Come and see the salon"
            text="Walk in any time, or call or WhatsApp first and we will keep a time for you."
          />
        </div>

        <div className="mt-8">
          <RelatedLinks
            links={[
              { href: "/contact/", label: "Plan your visit" },
              { href: "/reviews/", label: "Read our client reviews" },
              { href: "/hair-salon-peshawar/", label: "Hair salon in Phase 2" },
              { href: "/bridal-makeup-peshawar/", label: "Bridal makeup for barat, walima and nikah" },
            ]}
          />
        </div>
      </div>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
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
