import diningImage from '../assets/Images/DIning-img.webp';
import livingImage from '../assets/Images/Living-img.webp';
import bedroomImage from '../assets/Images/Bedroom-img.webp';

const rangeItems = [
  { src: diningImage, alt: 'dining room image', label: 'Dining' },
  { src: livingImage, alt: 'living room image', label: 'Living' },
  { src: bedroomImage, alt: 'bedroom image', label: 'Bedroom' },
];

function BrowseRange() {
  return (
    <section className="Browse-The-Range">
      <div>
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="Browse-The-Range-images">
        {rangeItems.map((item) => (
          <div key={item.label}>
            <img src={item.src} alt={item.alt} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseRange;
