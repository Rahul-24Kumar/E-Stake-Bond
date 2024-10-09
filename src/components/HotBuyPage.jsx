import React from 'react';

const HotBuyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* Banner Section */}
      <div className="w-full h-96 relative">
        
        <div className="absolute top-1/3 left-10 text-white">
        <h2 className="text-4xl font-bold text-black">Hot Buy</h2>
        <h3 className="text-3xl font-semibold text-gray-700 mt-4">Verification Collections</h3>
        <p className="text-xl text-gray-600 mt-6 leading-relaxed">
          To unlock mineral-rich African countries' full potential, mining companies and African governments must embrace the Fourth Industrial Revolution.
        </p>
          <button className="mt-4 bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Text Section */}
      {/* <div className="mt-12 max-w-4xl text-center px-6">
        <h2 className="text-4xl font-bold text-black">Hot Buy</h2>
        <h3 className="text-3xl font-semibold text-gray-700 mt-4">Verification Collections</h3>
        <p className="text-xl text-gray-600 mt-6 leading-relaxed">
          To unlock mineral-rich African countries' full potential, mining companies and African governments must embrace the Fourth Industrial Revolution.
        </p>
      </div> */}
    </div>
  );
};

export default HotBuyPage;
