/**
 * The 12 verbatim Google reviews shown on the site.
 *
 * Single source of truth — imported by /reviews/ (which also carries
 * the Review schema for these 12) and by the home page's
 * "Our Happy Customers" section. Never edit the wording: these are
 * copied word for word from Google, spelling mistakes included.
 * Staff names appear ONLY inside these verbatim quotes. Reviewer-
 * reported price figures in the source file are NOT shown here
 * (no prices are published on this site).
 *
 * The honest Google figure is 3.9 stars from 92 reviews (SITE in
 * siteConfig) — these 12 are the most recent ones, not a score.
 */

export interface SiteReview {
  name: string;
  when: string;
  service: string;
  group: "hair" | "makeup" | "waxing" | "facial" | "visit";
  text: string;
}

export const REVIEWS: SiteReview[] = [
  {
    name: "anam usman",
    when: "a week ago",
    service: "Makeup",
    group: "makeup",
    text: "Our experience with miss eman and farah is out class..they did very gud makup of us as we asked they did da same..plus their behaviour is very outstanding they both are soft spoken plus da staff of hairdo is also very freindly sahar nd team..may Allah give much more barakah in ur work",
  },
  {
    name: "Sumira Afridi",
    when: "a month ago",
    service: "Salon service",
    group: "visit",
    text: "I had a really good experience at Shan Sha Salon today. Sehar did my service and she was very professional, polite, and attentive throughout. I really appreciated the way she understood what I wanted and made sure everything was done perfectly. The service was neat, comfortable, and satisfying. Thank you, Sehar, for the wonderful service. Highly recommended!",
  },
  {
    name: "farah n05",
    when: "a month ago",
    service: "Keratin treatment",
    group: "hair",
    text: "Today I got keratin treatment from Sansha beauty lounge. The girl Eeman did a wonderful job. She was very polite and professional. She was very patient and gave me absolute good time and care. I would highly recommend Eeman for hair treatments.",
  },
  {
    name: "sana jehangir",
    when: "a month ago",
    service: "Mani-pedi & waxing",
    group: "waxing",
    text: "I did my Meni pedi and waxing from seher and I just love her services",
  },
  {
    name: "komal butt",
    when: "2 months ago",
    service: "Waxing & hair",
    group: "waxing",
    text: "Excellent service and a very professional, friendly, and cooperative staff. Everyone was welcoming, attentive, and made sure I was comfortable throughout. Had a wonderful experience at the parlour! Special thanks to Lubna for the waxing service—she was very professional, gentle, and attentive. And Eman did an amazing job with my hair; she was skilled, friendly, and paid great attention to detail. Both were extremely courteous and made the whole experience comfortable. Highly recommended!",
  },
  {
    name: "Aiman Hayat",
    when: "2 months ago",
    service: "Waxing",
    group: "waxing",
    text: "I had my waxing session with Lubna at Sansha yesterday and had a wonderful experience. She was extremely hygienic, gentle, and took the time to explain each step. The entire process was comfortable with no pain or rashes. The salon itself is very clean and maintains professional standards. I highly recommend Lubna for anyone looking for a painless and hygienic wax. Will definitely be coming back!",
  },
  {
    name: "Aqsa Qureshi",
    when: "2 months ago",
    service: "Waxing & protein treatment",
    group: "waxing",
    text: "Wonderful waxing experience with lovely Ms. Lubna. She was very supportive, kind, and soft-spoken. The service was excellent, and I would definitely love to visit again. Had a great experience at Sansha Beauty Salon with Ms. Eman. She was professional, kind, and soft-spoken. Loved the hair protein treatment and the results. Definitely recommend her.",
  },
  {
    name: "Beena Fatima",
    when: "2 months ago",
    service: "Haircut",
    group: "hair",
    text: "AOA, I'm Fatima. Had my haircut today at San Shah Salon. The staff was very welcoming and helpful. Special thanks to Miss Lubna — she's highly skilled, professional, and gave me a beautiful, elegant cut. Mashallah. Will definitely visit again!",
  },
  {
    name: "WAQAS AHMED",
    when: "2 months ago",
    service: "Facial & plucking",
    group: "facial",
    text: "I'm very satisfied with the facial and plucking service my wife received from Ms. Seher. The work was excellent, neat, and professional. She was very cooperative and paid great attention to detail. Highly recommended!",
  },
  {
    name: "Kiran Yousaf",
    when: "2 months ago",
    service: "Makeup",
    group: "makeup",
    text: "My review for eman I am very well satisfied and extremely happy with my makeup look..she very nice and do my makeup as i wanted",
  },
  {
    name: "Hania Abid",
    when: "2 months ago",
    service: "Waxing",
    group: "waxing",
    text: "Lubna did my wax and this is my 8 wax session with her and she's so kind polite and well behaved. Am so satisfied with her.",
  },
  {
    name: "Nabeeha Khanum",
    when: "2 months ago",
    service: "Hair dye",
    group: "hair",
    text: "My experience with eman was amazing. Suvh a lovely soul and perfect dye done by her.",
  },
];
