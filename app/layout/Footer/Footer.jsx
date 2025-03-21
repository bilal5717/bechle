import React from 'react';
import { LuYoutube, LuFacebook , LuInstagram, LuLinkedin } from 'react-icons/lu';

const Footer = () => {
    return (
        <footer className=" py-4  w-full">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-4 ">
                    {/* Most Trending Search */}
                    <div className="footer-section">
                        <h5 className="font-bold mb-2">Most Trending Search</h5>
                        <ul className="space-y-1">
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Mobile</a></li>
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Bike</a></li>
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Laptop</a></li>
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Pet</a></li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div className="footer-section">
                        <h5 className="font-bold mb-2">About Us</h5>
                        <ul className="space-y-1">
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Company Name</a></li>
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Blog</a></li>
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Contact Us</a></li>
                        </ul>
                    </div>


                    {/* Beecho */}
                    <div className="footer-section">
                        <h5 className="font-bold mb-2">Beecho</h5>
                        <ul className="space-y-1">
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Help</a></li>
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Terms of Use</a></li>
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Privacy Policy</a></li>
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">FAQ</a></li>
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Verified Seller</a></li>
                            <li><a href="#" className="footer-links hover:text-gray-500 cursor-pointer">Short Customer Feedback</a></li>
                        </ul>
                    </div>

                    {/* App Download and QR Codes */}
                    <div className="footer-section text-center">
                        <h5 className="font-bold mb-2">Get the App</h5>
                        <div className="flex justify-center gap-2 mb-2">
                            <a href="https://apple.com"><img src="https://sa.zain.com/themes/zain_theme/img/apple-store-badge.svg" alt="App Store" /></a>
                            <a href="https://play.google.com"><img src="https://sa.zain.com/themes/zain_theme/img/apple-store-badge.svg" alt="Google Play" /></a>
                            <a href="https://appgallery.huawei.com"><img src="https://sa.zain.com/themes/zain_theme/img/apple-store-badge.svg" alt="AppGallery" /></a>
                        </div>

                        <div className="flex justify-center gap-3">
                            <div className="border p-2"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv860qo6Wh-pV2Tie51Mv8yVPx3-I0SinkXg&s' alt="QR Code 1" /></div>
                            <div className="border p-2"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnQ_Esx4j_2iazyY4nZr-bFoRxCTN-anPfQ&s' alt="QR Code 2" /></div>
                            <div className="border p-2"><img src='https://prtimes.jp/i/24671/366/resize/d24671-366-294049-2.png' alt="QR Code 3" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;