export type Partner = {
  name: string;
  location?: string;
  link?: string;
  linkType?: 'instagram' | 'facebook' | 'phone' | 'website';
  offer?: string;
  description?: string;
  phone?: string;
};

export type Area = {
  code: string;
  name: string;
  partners: Partner[];
};

export const areas: Area[] = [
  {
    code: 'MNL',
    name: 'Manila',
    partners: [
      { name: 'Skin BLVD Aesthetic Clinic', location: 'Poblacion', link: 'https://www.instagram.com/theskinblvdph/', linkType: 'instagram', offer: '5% off on all services' },
      { name: 'Le Noire', location: 'Makati', link: 'https://www.instagram.com/lanoiremnl/', linkType: 'instagram', offer: 'Free entry' },
    ],
  },
  {
    code: 'SGO',
    name: 'Siargao',
    partners: [
      { name: 'Bar Ciao', location: 'General Luna', link: 'https://www.instagram.com/barciao_iao/', linkType: 'instagram', offer: '5% on F&B' },
      { name: 'Gwapitos', location: 'General Luna', link: 'https://www.instagram.com/gwapitos.official/', linkType: 'instagram', offer: '10% on merch' },
      { name: 'Good Times Coffee', location: 'General Luna', link: 'https://www.instagram.com/goodtimescoffeeph/', linkType: 'instagram', offer: '10% on F&B' },
    ],
  },
  {
    code: 'SQR',
    name: 'Siquijor',
    partners: [
      { name: 'Aninag Festival', location: 'Siquijor', offer: '20% off on tickets: Discount code MADMONKEY20 https://aninagfestival.helixpay.ph/ or walk in present/show wristag is ok, however to cut the queue shorter can buy online' },
    ],
  },
  {
    code: 'NLE',
    name: 'Nusa Lembongan',
    partners: [
      {
        name: 'Captain Coconut Snorkelling Tour',
        link: 'https://captaincoconut-lembongan.com/',
        linkType: 'website',
        phone: '+6281239907420',
        offer: '30% discount on snorkelling tours (200k pp discounted from 300k)',
        description: 'Explore the vibrant underwater world of Nusa Lembongan, Nusa Ceningan, and Nusa Penida with their expert local team. Whether you\u2019re a first-time snorkeler or an experienced explorer, Captain Coconut is here to deliver safe, fun, and unforgettable ocean experiences.',
      },
      {
        name: 'Pratiwi Fun Trip Island Hopping Penida',
        link: 'https://www.tripadvisor.com/Attraction_Review-g2538506-d33243600-Reviews-Penida_Fun_Trip-Nusa_Penida_Bali.html',
        linkType: 'website',
        phone: '+6281236472299',
        offer: '10% discount on all tours',
        description: 'Penida Fun Trip is your gateway to personalised travel experiences, unlocking the vibrant beauty and rich culture of Bali\u2019s island paradise.',
      },
    ],
  },
  {
    code: 'PAN',
    name: 'Panglao',
    partners: [
      {
        name: 'Flying Fish Dive Shop',
        link: 'https://en.flyingfishdive.com/',
        linkType: 'website',
        phone: '+639695986051',
        offer: '15% off diving experience - special rate of 2,500 PHP (usually 3,000) per person',
        description: 'Curious about the underwater world? Join this safe & exciting beginner-friendly diving experience! No experience needed, all gear provided, free underwater photos. Book now and explore the ocean like never before!',
      },
    ],
  },
  {
    code: 'LPB',
    name: 'Luang Prabang',
    partners: [
      {
        name: 'Jambon',
        link: 'https://www.instagram.com/jambon_luangprabang/',
        linkType: 'instagram',
        phone: '+8562093128850',
        offer: '10% off all food and beverage',
        description: 'Quality French Restaurant & Cafe in Luang Prabang. Escape the heat in their cozy air-conditioned space.',
      },
    ],
  },
  {
    code: 'HOI',
    name: 'Hoi An',
    partners: [
      {
        name: 'Serene Spa Hoi An',
        location: '2 branches',
        link: 'https://serenespa.vn/',
        linkType: 'website',
        phone: '+84916362368',
        offer: '5% off all services or 10% off all services if paying with cash (excludes public holidays and Tet)',
        description: 'Serene Spa makes use of natural remedies to ensure its guests are getting the attention and care they deserve. The spa consists of several private rooms, speciality suites, state of the art treatment and hydro speciality facilities. Indulge yourself and get treated by massage therapists with an eye for detail.',
      },
    ],
  },
  {
    code: 'HAN',
    name: 'Hanoi',
    partners: [
      {
        name: 'Mland - Jewelry Making Workshop',
        location: 'Old Quarter',
        link: 'https://www.instagram.com/mland_ws/',
        linkType: 'instagram',
        phone: '+84362904178',
        offer: 'Combo of 1 handmade ring + laser engraving service for 1,000,000 VND, with an additional 10% discount for Mad Monkey customers',
        description: 'Mland (Moments Land) is a hands-on silver jewelry workshop nestled in the heart of Hanoi\u2019s Old Quarter. Here, you\u2019ll craft your own personalised pieces, from rings and bracelets to necklaces, under the dedicated guidance of their experienced team.',
      },
      {
        name: 'Serene Spa Hanoi',
        location: '3 branches',
        link: 'https://serenespa.vn/',
        linkType: 'website',
        phone: '+84916362368',
        offer: '5% off all services or 10% off all services if paying with cash (excludes public holidays and Tet)',
        description: 'Serene Spa makes use of natural remedies to ensure its guests are getting the attention and care they deserve. The spa consists of several private rooms, speciality suites, state of the art treatment and hydro speciality facilities. Indulge yourself and get treated by massage therapists with an eye for detail.',
      },
    ],
  },
];
