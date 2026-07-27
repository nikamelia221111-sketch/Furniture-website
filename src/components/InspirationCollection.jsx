import inspirationImage1 from '../assets/Images/inspration-collection-img1.webp';
import inspirationImage2 from '../assets/Images/inspration-collection-img2.webp';
import inspirationImage3 from '../assets/Images/inspration-collection-img3.webp';

const inspirationImages = [
  {
    src: inspirationImage1,
    alt: 'inspiration collection image number one',
    className: 'image1',
  },
  {
    src: inspirationImage2,
    alt: 'inspiration collection image number two',
    className: 'image2',
  },
  {
    src: inspirationImage3,
    alt: 'inspiration collection image number three',
    className: 'image3',
  },
];

function InspirationCollection() {
  return (
    <section className="Inspiration-Collection">
      <div>
        <h2>Inspiration Collection</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="Inspiration-Collection-images">
        {inspirationImages.map((image) => (
          <img key={image.src} className={image.className} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  );
}

export default InspirationCollection;
