import beautifyImage from '../assets/Images/Beautify-Your-Space-img.webp';
import greenHalfCircle from '../assets/Images/green-half-circle.webp';

function BeautifyYourSpace() {
  return (
    <section className="Beautify-Your-Space">
      <div className="left">
        <h2>Beautify Your Space</h2>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris.
        </p>
        <button>LEARN MORE</button>
      </div>
      <div className="right">
        <img src={beautifyImage} alt="girl looking to the side" />
        <img className="deco" src={greenHalfCircle} alt="green ellipse behind the girl" />
      </div>
    </section>
  );
}

export default BeautifyYourSpace;
