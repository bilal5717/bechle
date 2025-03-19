import Image from "next/image";
import Carousel from './componente/HeaderBanner/HeaderBanner';
import carBanner from './assets/BannerImages/bannerimagecar.png';
import textBanner from './assets/BannerImages/textBanner.png';
export default function Home() {
  const images = [
    { src: carBanner.src },
    { src: carBanner.src },
    { src: textBanner.src },
  ];
  return (
    <div className="container-fluid body-wrapper">
      <div className="row">
          <div className="col-6">
          <Carousel images={images} />
          </div>
      </div>
    </div>
  );
}
