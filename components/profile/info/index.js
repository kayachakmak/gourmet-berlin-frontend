import Image from "next/image";
import AuthButton from "@/components/auth-button/AuthButton";

export default function ProfileInfo({ session }) {
  return (
    <>
      <div className="flex  items-start space-x-4">
        <Image
          width={50}
          height={50}
          className="rounded-full"
          src={session.user.image}
          alt="Avatar"
          priority
        />
        <p className=" text-gray-700 ml-4">
          Welcome, <br />
          <i>{session.user.name}</i>
        </p>
      </div>

      <AuthButton />
    </>
  );
}
