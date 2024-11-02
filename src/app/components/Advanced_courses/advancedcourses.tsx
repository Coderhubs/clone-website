import React from 'react';

const AdvancedCourses = () => {
  return (
    <div>
      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
      <h1 className="mt-10 text-2xl font-extrabold text-center lg:text-4xl sm:text-4xl sm:text-left text-main text-[#044e83]">Core Courses Sequence</h1>
      
        <div className="grid grid-cols-1 gap-5 mt-10 xl-lg:grid-cols-4 sm:grid-cols-3 xl-lg:gap-10">
          
  
          <a className="transition-all duration-200 hover:scale-105" href="/compulsory/1">
          
            <div className="flex flex-col items-center justify-center overflow-hidden text-lg font-bold text-center rounded-lg h-fit box_shadow text-zinc-600">
              
              <div>
                <img 
                  alt="programming fundamentals" 
                  loading="lazy" 
                  width="450" 
                  height="300" 
                  decoding="async" 
                  data-nimg="1" 
                  className="object-cover w-full"
                  style={{ color: "transparent" }} 
                  src="/image/program1.jpg" 
                />
  
              </div>
              <div className="px-4 flex justify-center items-center h-[70px]"><text>Programming Fundamentals</text></div>
            </div>
          </a>

          {/* Course 2 */}
          <a className="transition-all duration-200 hover:scale-105" href="/compulsory/2">
          
            <div className="flex flex-col items-center justify-center overflow-hidden text-lg font-bold text-center rounded-lg h-fit box_shadow text-zinc-600">
              <div>
                <img 
                  alt="nextjs" 
                  loading="lazy" 
                  width="450" 
                  height="300" 
                  decoding="async" 
                  data-nimg="1" 
                  className="object-cover w-full" 
                  src="/image/program2.jpg" 

                  style={{ color: "transparent" }} 
                />
             
             <div className="px-4 flex justify-center items-center h-[70px]">
                 <span>Web2 Using NextJS</span>
              </div>
              </div>
            </div>
            
          </a>

          {/* Course 3 */}
          <a className="transition-all duration-200 hover:scale-105" href="/compulsory/3">
            <div className="flex flex-col items-center justify-center overflow-hidden text-lg font-bold text-center rounded-lg h-fit box_shadow text-zinc-600">
              <div>
                <img 
                  alt="data structures" 
                  loading="lazy" 
                  width="450" 
                  height="300" 
                  decoding="async" 
                  data-nimg="1" 
                  className="object-cover w-full" 
                  src="/image/program3.jpg" 

                  style={{ color: "transparent" }} 
                />
              </div>
              <div className="px-4 flex justify-center items-center h-[70px]">
                <text>Earn as You Learn</text>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCourses;
