'use client';
import Link from 'next/link';
import { useParams } from "next/navigation";
import { Calendar, Box, Star, StarHalf } from 'lucide-react';
import { LuMapPin } from "react-icons/lu";

export default function PostPage() {
  const { id } = useParams();
  // Sample data - replace with your actual data
  const profileName = "Tech Gadgets";
  const vendorStatus = "Vendor";
  const totalProducts = 42;
  const joinedDate = "January 15, 2020";
  const description = "We offer the latest mobile phones and accessories at competitive prices. Our products are 100% genuine with manufacturer warranty. Fast shipping and excellent customer service. Satisfaction guaranteed!";
  const socialLinks = [
    { name: 'Facebook', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' }
  ];

  return (
    <div className="container-fluid p-0">
      
      {/* Combined Card with Cover Image and Profile Content */}
      <div className="container mt-4">
        {/* Breadcrumb */}
        <div className="container-fluid bg-light py-2 border-bottom">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb m-0" style={{ fontSize: '0.875rem' }}>
                <li className="breadcrumb-item">
                  <Link href="/" className="text-decoration-none text-secondary">Home</Link>
                </li>
                <li className="breadcrumb-item active text-dark" aria-current="page">
                  {profileName}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="card shadow-sm">
          {/* Cover Image */}
          <div 
            className="card-img-top" 
            style={{
              height: '250px',
              backgroundImage: 'url(https://www.products.panacea-soft.co/psx-mpc-demo/public/storage/PSX_MPC/uploads/65b0c4dc9e8ae_.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          {/* Profile Content */}
          <div className="card-body">
            <div className="row">
              {/* Profile Image */}
              <div className="col-md-2">
                <div 
                  className="rounded-circle overflow-hidden border border-4 border-white shadow-sm position-absolute" 
                  style={{
                    width: '150px',
                    height: '150px',
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0NcAXUALcTwJAA43jwukoqCvspGjR0RGhg&s)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              
              {/* Profile Info */}
              <div className="col-md-10 offset-md-2">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <div className="d-flex align-items-center">
                    <h3 className=""><b>{profileName}</b></h3>
                    <span className="badge bg-success mx-2">{vendorStatus}</span>
                  </div>
                  <div className="d-flex gap-2 mb-1">
                    <span><Calendar width={16}/></span>
                    <div>
                      Joined: <span className="fw-bold">{joinedDate}</span>
                    </div>
                  </div>
                  <div className="d-flex gap-2 mb-3 align-items-center">
                    <span><LuMapPin width={16}/></span>
                    <div>
                      <span className="">No.7, U Ba Han St, Lay Daunk Kan Qtr, Thingangyun</span>
                    </div>
                  </div>

                  {/* Stats Cards with Icons */}
                  <div className="d-flex gap-3 mb-3">
                    <div className="card profile-info  p-3 flex-grow-1">
                      <div className="d-flex align-items-center gap-2">
                       
                      <div >
                          <div className="fw-bold d-flex align-items-center"><Box width={16} /><span className='mx-1'>18 Products</span></div>
                          <div className="text-muted small">Currently Listed</div>
                        </div>
                      </div>
                    </div>
                    <div className="card profile-info  p-3 flex-grow-1">
                      <div className="d-flex align-items-center gap-2">
                        
                        <div>
                          <div className="fw-bold d-flex align-items-center"><Star width={16} /><span className='mx-1'>4.4/5</span></div>
                          <div className="text-muted small">Based on 120 reviews</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mb-3" style={{ lineHeight: '1.6' }}>
                    Our Happy Shoppee is growing rapidly and is looking to fill the role of vendor management. Thank you in advance for taking a look at the list of responsibilities and qualifications. We look forward to reviewing your resume. Responsibilities for vendor management • Ensure high levels of customer satisfaction are accomplished, both internally and externally •
                  </p>
                  
                  <div className="d-flex gap-3">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index} 
                        href={link.url} 
                        className="text-decoration-none text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}