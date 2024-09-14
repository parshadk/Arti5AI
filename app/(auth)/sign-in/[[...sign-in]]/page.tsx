import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center bg-blue-300">
      <SignIn />
    </div>
  );
}
