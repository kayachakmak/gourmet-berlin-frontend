import SignIn from "./sign-in";
import ProfileInfo from "./info";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <div className="bg-banner flex  justify-between items-end	 ">
      {session ? <ProfileInfo session={session} /> : <SignIn />}
    </div>
  );
}
