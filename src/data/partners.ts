export type Partner = {
  name: string;
  location?: string;
  link?: string;
  linkType?: 'instagram' | 'facebook' | 'phone';
  offer?: string;
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
      { name: 'Almacen Bar', location: 'Poblacion', link: 'https://www.instagram.com/almacenph/', linkType: 'instagram', offer: '5-10% on F&B' },
      { name: 'House of Donner', location: 'Poblacion', link: 'https://www.instagram.com/houseofdonerph/', linkType: 'instagram', offer: '5-10% on F&B' },
      { name: 'Only Pans', location: 'Poblacion', link: 'https://www.instagram.com/onlypanstaqueria/', linkType: 'instagram', offer: '5-10% on F&B' },
      { name: 'Rabbit Room', location: 'Makati', link: 'https://www.instagram.com/rabbitroom_/', linkType: 'instagram', offer: '10% on F&B' },
    ],
  },
  {
    code: 'PLO',
    name: 'Panglao / Bohol',
    partners: [
      { name: 'Atmo Club', location: 'Tagbilaran', link: 'https://www.instagram.com/atmoclub/', linkType: 'instagram', offer: 'Free entry' },
      { name: 'Seaquest Dive Center', link: 'https://www.facebook.com/SeaQuestDiveCenter/', linkType: 'facebook' },
      { name: 'Flying Fish Dive Shop', link: 'https://www.facebook.com/people/Flying-Fish-Scuba-Bohol/61564881701007/', linkType: 'facebook' },
      { name: 'Haka Dive Center', link: 'https://www.facebook.com/hakadivecenter/', linkType: 'facebook' },
      { name: 'Blue Freedom Apnea Freedive Club', link: 'https://www.facebook.com/bluefreedomapnea/', linkType: 'facebook' },
      { name: 'Masaje de Bohol', link: 'https://www.facebook.com/MasajedeBoholSaunaandSpa/', linkType: 'facebook' },
      { name: 'Surin Spa', link: 'https://www.facebook.com/people/SURIN-SPA/61583792997676/', linkType: 'facebook' },
      { name: 'Tiger Muay Thai Bohol', link: 'https://www.facebook.com/tigermuaythaiph/', linkType: 'facebook' },
    ],
  },
  {
    code: 'SGO',
    name: 'Siargao',
    partners: [
      { name: 'Bar Ciao', location: 'General Luna', link: 'https://www.instagram.com/barciao_iao/', linkType: 'instagram', offer: '5% on F&B' },
      { name: 'Gwapitos', location: 'General Luna', link: 'https://www.instagram.com/gwapitos.official/', linkType: 'instagram', offer: '10% on merch' },
      { name: 'Good Times Coffee', location: 'General Luna', link: 'https://www.instagram.com/goodtimescoffeeph/', linkType: 'instagram', offer: '10% on F&B' },
      { name: 'Shaka', location: 'General Luna', link: 'https://www.instagram.com/shaka.hq/', linkType: 'instagram', offer: '5-10% on F&B' },
      { name: 'Leche Ice Cream', location: 'General Luna', link: 'https://www.instagram.com/lecheicecream/', linkType: 'instagram', offer: '5-10% on F&B' },
      { name: 'Barbosa', location: 'General Luna', link: 'https://www.instagram.com/barbosa_siargao/', linkType: 'instagram', offer: '5-10% on F&B' },
    ],
  },
  {
    code: 'DGT',
    name: 'Dumaguete',
    partners: [
      { name: 'Nature Sparadise Massage and Spa', link: 'https://www.facebook.com/BambooSparadiseMassage/', linkType: 'facebook' },
      { name: 'Vero Massage Clinic & Spa', link: 'https://www.facebook.com/VERO.MASSAGECLINICSPA', linkType: 'facebook' },
      { name: "Miguelito's Barbershop", link: 'https://www.instagram.com/miguelitos_barbershop/', linkType: 'instagram' },
      { name: 'Black & Copper Co. Coffee & Barbershop', link: 'https://www.instagram.com/blackandcopperco/', linkType: 'instagram' },
      { name: 'Bugtaw', link: 'https://www.instagram.com/bugtaw_dgte/', linkType: 'instagram' },
    ],
  },
  {
    code: 'SQR',
    name: 'Siquijor',
    partners: [
      { name: 'Aninag Festival', location: 'Siquijor', link: 'https://www.instagram.com/aninagfestival/', linkType: 'instagram', offer: '20% off on tickets (code MADMONKEY20) or walk in/show wristag to cut the queue' },
      { name: 'Runik', location: 'Siquijor', link: 'https://www.instagram.com/runiksiquijor/', linkType: 'instagram', offer: '5-10% on F&B or Free Entry for sunset time only' },
    ],
  },
  {
    code: 'NCP',
    name: 'Nacpan',
    partners: [
      { name: 'Gym', location: 'Mabuhay', offer: '10% off F&B' },
    ],
  },
];
