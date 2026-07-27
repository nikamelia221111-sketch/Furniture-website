import freeDelivery from '../assets/Icons/Free-delivery.svg';
import support from '../assets/Icons/Support.svg';
import authenticity from '../assets/Icons/authenticity.svg';

const features = [
  {
    src: freeDelivery,
    alt: 'Free Delivery',
    title: 'Free Delivery',
    subtitle: 'Lorem ipsum dolor sit amet.',
  },
  {
    src: support,
    alt: 'Support 24/7',
    title: 'Support 24/7',
    subtitle: 'Lorem ipsum dolor sit amet.',
  },
  {
    src: authenticity,
    alt: '100% Authentic',
    title: '100% Authentic',
    subtitle: 'Lorem ipsum dolor sit amet.',
  },
];

function HeaderInfo() {
  return (
    <div className="headerinfo">
      <div>
        {features.map((feature, index) => (
          <div key={feature.title} className={index > 0 ? 'gap' : undefined}>
            <img src={feature.src} alt={feature.alt} />
            <div className="test">
              <p>{feature.title}</p>
              <span>{feature.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderInfo;
