import instagramImage1 from '../assets/Images/Instagram-Shop-1.webp';
import instagramImage2 from '../assets/Images/Instagram-Shop-2.webp';
import instagramImage3 from '../assets/Images/Instagram-Shop-3.webp';
import instagramImage4 from '../assets/Images/Instagram-Shop-4.webp';

const instagramImages = [
  instagramImage1,
  instagramImage2,
  instagramImage3,
  instagramImage4,
];

function Footer() {
  return (
    <footer>
      <div className="text">
        <span>Beauty Care</span>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris.
        </p>
        <span>Follow Us</span>
      </div>
      <div>
        <span>Instagram Shop</span>
        <div className="instagram-shop-images">
          {instagramImages.map((src) => (
            <img key={src} src={src} alt="Instagram Shop image" />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
