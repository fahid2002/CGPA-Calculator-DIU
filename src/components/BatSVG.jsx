import Image from "next/image";

export default function BatSVG({ size = 80 }) {
  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <Image
        src="/image/F.png"
        alt="Hero icon"
        fill
        sizes={`${size}px`}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
