import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='w-full p-10 mt-20 bg-zinc-100 print:hidden'>
        <div className='m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px]'>
          {/* Adjusted gap and layout */}
          <div className='flex flex-col gap-64 md:flex-row'>
            <div className='text-zinc-800'>
              <h1 className='text-xl font-bold'>Core Courses</h1>
              <div className='flex flex-col gap-3 mt-5 text-sm md:text-base'>
                <a className='truncate' href='/compulsory/1'>
                  Programming Fundamentals
                </a>
                <a className='truncate' href='/compulsory/2'>
                  Web2 Using NextJS
                </a>
                <a className='truncate' href='/compulsory/3'>
                  Earn as You Learn
                </a>
              </div>
            </div>

            {/* Advanced Courses Section */}
            <div className='text-zinc-800'>
              <h1 className='text-xl font-bold'>Advanced Courses</h1>
              <div className='flex flex-col gap-3 mt-5 text-sm md:text-base'>
                <a className='truncate' href='/tracks/wmd/4'>
                  Web 3 and Metaverse
                </a>
                <a className='truncate' href='/tracks/cnc/4'>
                  Cloud-Native Computing
                </a>
                <a className='truncate' href='/tracks/ai/4'>
                  Artificial Intelligence (AI) and Deep Learning
                </a>
                <a className='truncate' href='/tracks/iot/4'>
                  Ambient Computing and IoT
                </a>
                <a className='truncate' href='/tracks/gbs/4'>
                  Genomics and Bioinformatics
                </a>
                <a className='truncate' href='/tracks/npa/4'>
                  Network Programmability and Automation
                </a>
              </div>
            </div>

            {/* Social Links Section */}
            <div className='text-zinc-800'>
              <h1 className='text-xl font-bold'>Social Links</h1>
              <div className="flex mt-5 space-x-4">
                {/* Facebook */}
                <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4267B2] text-white" 
                  href="https://www.facebook.com/TeamKTessori"
                >
                  <img 
                    src="/image/fb.png" 
                    alt="Facebook Logo" 
                    className="w-5 h-5" 
                  />
                </a>

                {/* YouTube */}
                <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white" 
                  href="https://www.youtube.com/@KamranTessori"
                >
                  <img 
                    src="/image/yt.png" 
                    alt="YouTube Logo" 
                    className="w-5 h-5" 
                  />
                </a>

                {/* Twitter */}
                <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1DA1F2] text-white" 
                  href="https://twitter.com/KamranTessori"
                >
                  <img 
                    src="/image/twitter.png" 
                    alt="Twitter Logo" 
                    className="w-5 h-5" 
                  />
                </a>

                {/* Instagram */}
                <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] to-[#DD2A7B] text-white" 
                  href="https://www.instagram.com/kamrantessori/"
                >
                  <img 
                    src="/image/instagram.png" 
                    alt="Instagram Logo" 
                    className="w-5 h-5" 
                  />
                </a>

                {/* TikTok */}
                <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000000] text-white" 
                  href="https://www.tiktok.com/@kamrantessori"
                >
                  <img 
                    src="/image/Tiktok.png" 
                    alt="TikTok Logo" 
                    className="w-5 h-5" 
                  />
                </a>
              </div>
              {/* Email Section */}
              <a 
                className="flex items-center py-1 mt-4 underline text-main" 
                target="_blank" 
                href="mailto:education@governorsindh.com"
              >
                <img 
                    src="/image/letter.png" 
                    alt="email Logo" 
                    className="w-5 h-5" 
                  />
                   education@governorsindh.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
