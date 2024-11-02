import React from 'react'

const Courses = () => {
  return (
    <>
      <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10'>
        <h1 className='mt-10 font-extrabold text-center lg:text-4xl sm:text-2xl sm:text-left text-main text-[#044e83]'>
          Advanced Courses
        </h1>
        <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10 flex flex-wrap justify-center gap-6'> {/* Added gap-6 for spacing */}
          <a className="transition-all duration-200 hover:scale-105" href="/track/ai/4">
            <div className='flex items-center justify-center mt-4 overflow-hidden text-lg font-bold text-center rounded-lg h-fit box_shadow-col text-zinc-600'> {/* Added mt-4 for top margin */}
              <div>
                <img alt="Artificial Intelligence"
                  loading='lazy'
                  width={450}
                  height={300}
                  decoding='async'
                  data-nimg="1"
                  className='object-cover h-48 w-72' // Adjusted width and height to Tailwind classes
                  src="/image/AI1.jpg"
                  style={{ color: `transparent` }}
                />
                <div className='flex items-center justify-center px-4 h-[70px]'>
                  <text> Artificial Intelligence </text>
                </div>
              </div>
            </div>
          </a>

          <a className="transition-all duration-200 hover:scale-105" href="/track/ai/4">
            <div className='flex items-center justify-center mt-4 overflow-hidden text-lg font-bold text-center rounded-lg h-fit box_shadow-col text-zinc-600'>
              <div>
                <img alt="Web 3 and Metaverse"
                  loading='lazy'
                  width={450}
                  height={300}
                  decoding='async'
                  data-nimg="1"
                  className='object-cover h-48 w-72'
                  src="/image/AI2.jpg"
                  style={{ color: `transparent` }}
                />
                <div className='flex items-center justify-center px-4 h-[70px]'>
                  <text> Web 3 and Metaverse </text>
                </div>
              </div>
            </div>
          </a>

          <a className="transition-all duration-200 hover:scale-105" href="/track/ai/4">
            <div className='flex items-center justify-center mt-4 overflow-hidden text-lg font-bold text-center rounded-lg h-fit box_shadow-col text-zinc-600'>
              <div>
                <img alt="Cloud-Native Computing"
                  loading='lazy'
                  width={450}
                  height={300}
                  decoding='async'
                  data-nimg="1"
                  className='object-cover h-48 w-72'
                  src="/image/AI3.jpg"
                  style={{ color: `transparent` }}
                />
                <div className='flex items-center justify-center px-4 h-[70px]'>
                  <text> Cloud-Native Computing </text>
                </div>
              </div>
            </div>
          </a>

          <a className="transition-all duration-200 hover:scale-105" href="/track/ai/4">
            <div className='flex items-center justify-center mt-4 overflow-hidden text-lg font-bold text-center rounded-lg h-fit box_shadow-col text-zinc-600'>
              <div>
                <img alt="Ambient Computing and IoT"
                  loading='lazy'
                  width={450}
                  height={300}
                  decoding='async'
                  data-nimg="1"
                  className='object-cover h-48 w-72'
                  src="/image/AI4.jpg"
                  style={{ color: `transparent` }}
                />
                <div className='flex items-center justify-center px-4 h-[70px]'>
                  <text> Ambient Computing and IoT </text>
                </div>
              </div>
            </div>
          </a>

          <a className="transition-all duration-200 hover:scale-105" href="/track/ai/4">
            <div className='flex items-center justify-center mt-4 overflow-hidden text-lg font-bold text-center rounded-lg h-fit box_shadow-col text-zinc-600'>
              <div>
                <img alt="Genomics and Bioinformatics"
                  loading='lazy'
                  width={450}
                  height={300}
                  decoding='async'
                  data-nimg="1"
                  className='object-cover h-48 w-72'
                  src="/image/AI5.jpg"
                  style={{ color: `transparent` }}
                />
                <div className='flex items-center justify-center px-4 h-[70px]'>
                  <text> Genomics and Bioinformatics </text>
                </div>
              </div>
            </div>
          </a>

          <a className="transition-all duration-200 hover:scale-105" href="/track/ai/4">
            <div className='flex items-center justify-center mt-4 overflow-hidden text-lg font-bold text-center rounded-lg h-fit box_shadow-col text-zinc-600'>
              <div>
                <img alt="Network Programmability and Automation"
                  loading='lazy'
                  width={450}
                  height={300}
                  decoding='async'
                  data-nimg="1"
                  className='object-cover h-48 w-72'
                  src="/image/AI6.jpg"
                  style={{ color: `transparent` }}
                />
                <div className='flex items-center justify-center px-4 h-[70px]'>
                  <text> Network Programmability and <br/>Automation </text>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Courses
