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
