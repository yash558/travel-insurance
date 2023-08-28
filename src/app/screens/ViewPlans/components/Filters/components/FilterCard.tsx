// Card.tsx

import Image from 'next/image';
import React from 'react';

interface CardProps {
  imageUrl: string;
  description: string;
  title: string;
  sales: string;
  buttonText: string;
  buttonPrice: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, sales, description, buttonText, buttonPrice, onButtonClick }) => {
  return (
    <div className="max-w-sm flex items-center justify-center p-8 flex-col mx-auto bg-white shadow-md overflow-hidden rounded-xl ">
      <Image className="w-20 h-20" src={imageUrl} alt="Card Image"  height={100} width={100} />
      <hr/>
      <div className="h-[1px] my-4 bg-black w-[60%] flex items-center justify-center"></div>
      <h1 className="text-[#0A225F] text-3xl font-[600]">{title}</h1>
      <h1 className="text-black font-bold text-xl">{sales} Total Sales</h1>
      <div className="flex items-center justify-center px-4 py-2 text-center my-8">
        <p className="text-gray-700 w-[50%] text-lg">{description}</p>
      </div>
      <div className="flex flex-col w-full gap-2 p-2">
        <button
          className="px-4 py-2 bg-[#F5AB01] text-white rounded hover:bg-blue-600"
          onClick={onButtonClick}
        >
          {buttonPrice}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
