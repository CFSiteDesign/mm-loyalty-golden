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
    code: 'SQR',
    name: 'Siquijor',
    partners: [
      { name: 'Aninag Festival', location: 'Siquijor', link: 'https://www.instagram.com/aninagfestival/', linkType: 'instagram', offer: '20% off on tickets (code MADMONKEY20) or walk in/show wristag to cut the queue' },
    ],
  },
  {
    code: 'NCP',
    name: 'Nacpan',
    partners: [
      { name: 'Gym', location: 'Mabuhay', offer: '10% of F&B' },
    ],
  },
];
