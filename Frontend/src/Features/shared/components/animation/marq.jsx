import { Link } from 'react-router-dom';

const categories = [
  { name: 'SHIRTS', path: '/shirts' },
  { name: 'T-SHIRTS', path: '/tshirts' },
  { name: 'HOODIES', path: '/hoodies' },
  { name: 'SNEAKERS', path: '/sneakers' },
  { name: 'SHOES', path: '/shoes' },
  { name: 'HIGH-END', path: '/highend' },
];

export default function CategoryMarquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {categories.map((cat, idx) => (
          <Link key={`track1-${idx}`} to={cat.path} className="marquee-item">
            {cat.name}
          </Link>
        ))}
        {categories.map((cat, idx) => (
          <Link key={`track2-${idx}`} to={cat.path} className="marquee-item">
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
