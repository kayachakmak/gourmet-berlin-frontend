import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-banner flex justify-center items-center md:h-20">
      <Image
        className="h-full object-contain"
        src="https://i.ibb.co/YBpQRrj/Capture.png"
        alt="Gourmet Berlin Banner"
        width={1090}
        height={100}
      />
    </div>
  );
}
