import madMonkeyLogo from '@/assets/madmonkey-logo.svg';

const footerColumns = [
  {
    title: 'Rules & Legal',
    links: [
      { label: 'Tour & Groups', href: 'https://madmonkeyhostels.com/groups' },
      { label: 'No Sex Tourists', href: 'https://madmonkeyhostels.com/no-sex-tourists' },
      { label: 'Cancellation Policy', href: 'https://madmonkeyhostels.com/cancellation-policy' },
      { label: 'Privacy Policy', href: 'https://madmonkeyhostels.com/privacy-policy' },
      { label: 'Terms & Conditions', href: 'https://madmonkeyhostels.com/terms-and-conditions' },
    ],
  },
  {
    title: 'Partner With Us',
    links: [
      { label: 'Investor', href: 'https://madmonkeyhostels.com/partners/investors' },
      { label: 'Property Partners', href: 'https://madmonkeyhostels.com/partners/property-partners' },
      { label: 'Content Creators', href: 'https://madmonkeyhostels.com/creative-hub' },
      { label: 'Travel Agencies', href: 'https://madmonkeyhostels.com/partners/travel-agents' },
      { label: 'Tour Operators & Suppliers', href: 'https://madmonkeyhostels.com/partners/suppliers' },
    ],
  },
  {
    title: 'Career',
    links: [
      { label: "We're Hiring", href: 'https://madmonkeyhostels.com/career/' },
    ],
  },
  {
    title: 'Press',
    links: [
      { label: 'Mad Monkey News', href: 'https://madmonkeyhostels.com/mad-monkey-in-the-news' },
      { label: 'Press Releases', href: 'https://madmonkeyhostels.com/press-releases' },
      { label: 'Corporate Social Responsibility', href: 'https://madmonkeyhostels.com/corporate-social-responsibility' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { label: 'Backpacker Guides', href: 'https://madmonkeyhostels.com/backpackers-guide' },
      { label: "Mad Monkey's Travel Blog", href: 'https://madmonkeyhostels.com/our-blog' },
      { label: 'Free Content Creator Stays', href: 'https://madmonkeyhostels.com/creative-hub' },
    ],
  },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/madmonkeyhostels/', icon: 'https://madmonkeyhostels.com/images/instagram.svg' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@madmonkeyhostels', icon: 'https://madmonkeyhostels.com/images/tiktok.svg' },
  { label: 'Facebook', href: 'https://www.facebook.com/MadMonkeyHostels', icon: 'https://madmonkeyhostels.com/images/facebook.svg' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCkUGlFdhp5Ndk68j_QRS1kw', icon: 'https://madmonkeyhostels.com/images/youtube.svg' },
];

export default function Footer() {
  return (
    <footer className="bg-mad-dark text-mad-light/70 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: logo + socials */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <img src={madMonkeyLogo} alt="Mad Monkey" className="h-10 sm:h-12 brightness-0 invert mb-2" />
            <p className="font-bold text-lg text-mad-light tracking-wide" style={{ fontFamily: 'inherit' }}>Mad Monkey</p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                <img src={s.icon} alt={s.label} className="w-5 h-5 brightness-0 invert" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-10 sm:mb-12">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h5 className="text-xs font-bold uppercase tracking-widest text-mad-light/90 mb-3" style={{ fontFamily: 'inherit' }}>{col.title}</h5>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-mad-light/50 hover:text-mad-light transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-mad-light/10 pt-6 text-center">
          <p className="text-xs text-mad-light/40">All rights reserved © Mad Monkey. {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
