"use client";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function VerifyEmailPage() {
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    router.push("success-verify");
   };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent-50">
      <div className=" bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center gap-6">
        <h1 className={`${poppins.className} font-bold text-xl`}>
          Check Your Mail!
        </h1>
        <div className="bg-[#F6BD27]  flex flex-col justify-center pl-2 rounded-full w-12 aspect-square">
          <MdOutlineMarkEmailRead size={30} className="text-white " />
        </div>
        <p className={`${poppins.className} text-sm text-[#737380]`}>
          If the email you provided is correct, you should receive a
          verification email from us.
        </p>

        <button onClick={onSubmit}
          className={`${poppins.className} bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition`}
        >
          Verify email confirmation
        </button>
      </div>
    </div>
  );
}
