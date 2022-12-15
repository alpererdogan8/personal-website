import Image from "next/image";
import { images } from "../next.config.js";

const Badge = ({ src, alt }) => {
  return (
    <>
      <Image
        width={131}
        height={20}
        className="border-[2px] bg-black w-auto h-[25px] border-black rounded-[4px] drop-shadow-xl dark:border-white mr-2 mb-2 object-contain"
        src={src}
        alt={alt}
      />
    </>
  );
};

export default Badge;
