"use client";
import Image from "next/image";

type Props = {
  description: string;
  title: string;
  image: string;
};

const ProductDetail: React.FC<Props> = ({ description, title, image }) => {
  return (
    <div className=" w-72 flex items-center flex-col">
      {/* Image Section */}
      <div className="relative w-72 h-48">
        <Image src={image} alt={title} fill className="rounded-md" />
      </div>
      {/* Content Section */}
      <div className="p-4 bg-white rounded-lg shadow-md overflow-hidden mt-[-1rem] mx-[-1rem] w-[95%] z-10">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className=" text-gray-300">
          - - - - - - - - - - - - - - - - - - - - - - - -
        </span>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-orange-500 mt-2 cursor-pointer text-xs font-semibold">
          <span className="border-b-2 border-orange-500">READ</span> MORE
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
