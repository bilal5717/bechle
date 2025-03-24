'use client';

import { useParams } from "next/navigation";
import { LuTag, LuMapPin, LuWifi, LuWifiOff } from 'react-icons/lu';
import Link from 'next/link';
import ProductImageCorusal from "../../componente/ProductImageCoursal/ProductImgSlider";
import 'bootstrap/dist/css/bootstrap.min.css';

const mobiles = [
  { id: 1, image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg", price: "RS 50,000", title: "Samsung Galaxy S21", status: "Used", address: "123 Main St, City, Country", posted: "1 day ago", ptaApproved: 'pta' },
  { id: 2, image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg", price: "RS 45,000", title: "iPhone 12", status: "New", address: "456 Elm St, City, Country", posted: "3 days ago", ptaApproved: 'non pta' }
];

export default function PostPage() {
  const { id } = useParams();
  const mobile = mobiles.find((m) => m.id === parseInt(id));

  return (
    <div className="container my-5">
      <div className="row">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb" style={{ fontSize: '0.875rem', color: '#6c757d' }}>
            <li className="breadcrumb-item">
              <Link href="/" style={{ color: '#6c757d', textDecoration: 'none' }}>Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/mobiles" style={{ color: '#6c757d', textDecoration: 'none' }}>Mobiles</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {mobile ? mobile.title : "Not Found"}
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
      <div className="col-8 border p-4 rounded-3">
    <ProductImageCorusal />
</div>

      </div>
    </div>
  );
}
