import Image from "next/image";
import React from 'react';

const Header = () => {
  return (
<>
<div className="bg-[#044e83] sticky top-0 z-40 h-full w-full bg-main backdrop-blur-3xl print:hidden">

      <div className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]">

        <Image 
          alt="logo" 
          loading="lazy" 
          width={90}
          height={113}
          decoding="async"
          data-nimg= "1"
          className="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]"
          style={{color:`transparent`}}
          src="/image/logo.png" // Use a leading slash for absolute path
        />
        <h1 className=" text_shadow  hidden text-[15px] 
        font-extrabold text-[#b9d8f3] lg:block
         xl- lg:text-xl xl:text-2xl p-10 ">

            Tution Free Education Program on Latest Technologies
        </h1>
        <h1 className="text_shadow text-[1.123rem] 
        font-extrabold text-[#b9d8f3] lg:hidden p-10">
            Tution Free Program
        </h1>
<div className="hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10">
        <a href="/"><div className="capitalize menu_btns">Home</div></a>

        <a href="/Apply/"><div className="capitalize menu_btns">
            Apply</div></a>

        <a href="/Jobs/"><div className="capitalize menu_btns">Jobs</div></a>

        <a href="/Result/"><div className="capitalize menu_btns">
            Result </div></a>
            </div>
      </div>
    </div>
    </>
  );
}

export default Header;
