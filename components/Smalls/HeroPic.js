import Image from "next/image";

export const HeroPic = () => {
  return (
    <div>
      <Image 
        src="/hero-image.png" 
        width={100}  
        height={100} 
        alt="Hero Image" 
      />
    </div>
  );
};
