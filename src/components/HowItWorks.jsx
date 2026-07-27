import purchaseImage from '../assets/Images/Purchase-Securely-img.webp';
import warehouseImage from '../assets/Images/Ships-From-Warehouse-img.webp';
import styleRoomImage from '../assets/Images/Style-Your-Room-img.webp';

const howItWorksItems = [
  {
    src: purchaseImage,
    alt: 'purchase securely image',
    title: 'Purchase Securely',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: warehouseImage,
    alt: 'ships from warehouse image',
    title: 'Ships From Warehouse',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: styleRoomImage,
    alt: 'style your room image',
    title: 'Style Your Room',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

function HowItWorks() {
  return (
    <section className="How-It-Works">
      <div>
        <h2>How It Works</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="How-It-Works-Images">
        {howItWorksItems.map((item) => (
          <div key={item.title}>
            <img src={item.src} alt={item.alt} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
