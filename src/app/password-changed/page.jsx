"use client";
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

import { ImCheckmark } from "react-icons/im";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export default function ResetPassword() {
  const router = useRouter();

  const onSubmitHandler = (e) => {
  e.preventDefault();
  router.push("/login")
}
  return (
    <main
      className={`${dmsans.className} flex pt-40 pb-20 flex-col items-center justify-center min-h-screen bg-accent-50 px-4 lg:px-20`}
    >
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <div>
          <div className="bg-[#D9D9D9] rounded-full w-16 aspect-square mx-auto flex items-center justify-center mb-4">
            <ImCheckmark size={40} className="" />
          </div>
          <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
            Password Changed !
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            You have successfully changed your password
          </p>
        </div>
        <form onSubmit={onSubmitHandler} className="space-y-4 py-4">
          <button
            type="submit"
            className="w-full bg-[#003271] cursor-pointer text-white py-2 rounded-xl hover:bg-[#002050]"
          >
            Go To Login
          </button>
        </form>
      </div>
    </main>
  );
}
