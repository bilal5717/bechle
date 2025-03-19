import Image from "next/image";
import Carousel from './componente/HeaderBanner/HeaderBanner';
import carBanner from './assets/BannerImages/bannerimagecar.png';
import textBanner from './assets/BannerImages/textBanner.png';
import CategoriesBox from './componente/CategoriesBox/CategoryBox';
import Mobiles from './componente/ProductCards/Mobiles';
export default function Home() {
  const images = [
    { src: carBanner.src },
    { src: carBanner.src },
    { src: textBanner.src },
  ];
  return (
    <div className="container-fluid body-wrapper">
      <div className="row">
          <div className="col-12">
          <Carousel images={images} />
          </div>
          <div className="col-12">
            <CategoriesBox />
          </div>
          <h1 className="explore-heading">Explore Top Categories</h1>
          <div className="col-12">
                <Mobiles  />
          </div>
      </div>
    </div>
  );
}
