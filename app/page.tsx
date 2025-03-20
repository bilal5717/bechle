import Image from "next/image";
import Carousel from './componente/HeaderBanner/HeaderBanner';
import carBanner from './assets/BannerImages/bannerimagecar.png';
import textBanner from './assets/BannerImages/textBanner.png';
import CategoriesBox from './componente/CategoriesBox/CategoryBox';
import Mobiles from './componente/ProductCards/Mobiles';
import Cars from './componente/ProductCards/Cars';
import Bikes from './componente/ProductCards/Bikes';
import Houses from './componente/ProductCards/Houses';
import LandsAndPlots from './componente/ProductCards/LandNPlots';
import Jobs from './componente/ProductCards/Jobs';
export default function Home() {
  const images = [
    { src: carBanner.src },
    { src: carBanner.src },
    { src: textBanner.src },
  ];
  return (
    <div className="container-fluid body-wrapper">
      <div className="body-inner-home-wrapper">
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
          <div className="col-12">
                <Cars  />
          </div>
          <div className="col-12">
                <Bikes  />
          </div>
          <div className="col-12">
                <Houses  />
          </div>
          <div className="col-12">
                <LandsAndPlots  />
          </div>
          <div className="col-12">
                <Jobs  />
          </div>
          
      </div>
      </div>
          <div className="footer-banner-app">
            
          </div>
          <div className="home-footer-para">
            <h1>Sellup | <span>The Ultimate Destination for Buying & Selling in Pakistan</span></h1>
            <p>
            Welcome to Sellup.pk, your all-in-one platform to buy, sell, and discover everything you need on Pakistan’s leading online marketplace!  
              <br /><br />
              Millions of buyers and sellers trust Sellup.pk to trade a wide range of products. Whether you're searching for cars for sale, property for sale, rental properties, or everyday essentials like mobile phones, laptops and accessories, books, collectibles, or home essentials, we’ve got you covered.  
<br /><br />
              Want to upgrade your living space? Explore garden tools and home improvement products. Need a wardrobe refresh? Browse the latest men's fashion, women's clothing, men’s watches, and women’s watches. Looking for job opportunities or services? Sellup.pk also offers a platform for jobs, services, and even pets!  
<br /><br />
              At Sellup.pk, we provide an extensive range of new and used cars for sale. Easily list your vehicle or trade it in for a better deal. Use our One-Click Search feature to filter by brand, price, mileage, condition, and more to find the perfect ride.  
<br /><br />
              For all your property needs, Sellup Property is the go-to destination for buying, selling, and renting houses, apartments, and commercial spaces—ensuring you get the best market rates hassle-free.  
<br /><br />
              Start your seamless buying and selling journey with Sellup.pk today! 
            </p>
          </div>
    </div>
  );
}
