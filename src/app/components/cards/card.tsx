import React from 'react';

const Card = () => {
  return (
    <>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-5 mx-auto mt-20 sm:grid-cols-3">
        <img
          alt="solo1"
          loading="lazy"
          width="294.914"
          height="300"
          decoding="async"
          data-nimg="1"
          className="shadow-2xl shadow-black rounded-lg w-full h-[300px] object-cover p-0"
          src="/image/card 1.jpg"
          style={{ color: "transparent" }}
        />
        <img
          alt="solo2"
          loading="lazy"
          width="294.914"
          height="300"
          decoding="async"
          data-nimg="1"
          className="shadow-2xl w-full shadow-black rounded-lg h-[300px] object-cover p-0"
          src="/image/card2.jpg"
          style={{ color: "transparent" }}
        />
        <img
          alt="solo3"
          loading="lazy"
          width="294.914"
          height="300"
          decoding="async"
          data-nimg="1"
          className="shadow-2xl w-full  shadow-black rounded-lg h-[300px] object-cover p-0"
          src="/image/card 3.jpg"
          style={{ color: "transparent" }}
        />
      </div>
    </>
  );
};

export default Card;
