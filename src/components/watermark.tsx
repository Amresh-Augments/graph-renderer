import Image from "next/image";
import curve from '../public/curve.svg'

export default function Watermark() {
  return (
    <Image
      src={curve}
      alt="Background curve"
      width={300}
      height={300}
      className="z-20 absolute opacity-5 rotate-12 h-full w-full scale-[2] top-0 left-0"
    />
  );
}