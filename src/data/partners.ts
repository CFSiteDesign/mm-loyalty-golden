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
];
