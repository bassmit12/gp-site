import Image from "next/image";

export default function Logo() {
  return (
    <Image
      height={300}
      width={300}
      src="/images/logo.png"
      alt="Logo"
      className="h-12 w-auto"
    />
  );
}
