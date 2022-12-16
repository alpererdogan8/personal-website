import Image from "next/image";

const LoaderPulse = () => {
  return (
    <div className=" animate-pulse dark:bg-gray-600  w-[131px] h-[25px] block border-[2px] bg-black  border-black rounded-[4px] drop-shadow-xl dark:border-white mr-2 mb-2 "></div>
  );
};

const Badge = ({ src, alt }) => {
  return (
    <>
      <Image
        width={131}
        height={20}
        className="border-[2px] bg-black w-auto h-[25px] border-black rounded-[4px] drop-shadow-xl dark:border-white mr-2 mb-2 object-contain"
        src={src}
        alt={alt}
        priority
      />
    </>
  );
};

export default Badge;
