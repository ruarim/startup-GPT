import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        className="rounded-lg"
        src={"/StartupGPTLogo.svg"}
        width={500}
        height={300}
        alt="Logo"
      />
    </div>
  );
}
