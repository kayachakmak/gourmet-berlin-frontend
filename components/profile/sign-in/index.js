import AuthButton from "@/components/auth-button/AuthButton";
export default function SignIn() {
  return (
    <>
      <p className=" ml-3 text-xs text-center lg:max-2xl:text-xl">
        {" "}
        You are not <br />
        signed in.{" "}
      </p>
      <AuthButton />
    </>
  );
}
