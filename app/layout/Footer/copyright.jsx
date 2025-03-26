import React from 'react';
import { LuYoutube, LuFacebook , LuInstagram, LuLinkedin } from 'react-icons/lu';

const CopyFooter = () => {
    return (
        <div className="container-fluid mx-auto px-5 py-4  copy-footer  w-full">
                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row items-center px-3 justify-between">
                    <p className="mb-2 md:mb-0">@Copyright 2002 - 2090 Company Name</p>
                    <div className="flex gap-3 text-xl">
                        <a href="#" className='text-white'><LuYoutube /></a>
                        <a href="#" className='text-white'><LuFacebook  /></a>
                        <a href="#" className='text-white'><LuInstagram /></a>
                        <a href="#" className='text-white'><LuLinkedin /></a>
                    </div>
                </div>
            </div>
    );
};

export default CopyFooter;