"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyEmail, verifyEmailLink } from "@/app/api/auth";
import Loading from "@/app/Loading";
import { toast } from "react-toastify";

export default function VerifyEmailPage() {
  console.log("VERIFY EMAIL PAGE MOUNTED");
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const code = searchParams.get("code");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!email || !code) {
      toast.error("Invalid verification link");
      router.replace("/login");
      return;
    }

    const verify = async () => {
      try {
        await verifyEmailLink({ email, verificationCode: code });
        router.replace("/success-verify");
      } catch (error) {
        toast.error("Verification failed or link expired");
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [email, code, router]);

  if (loading) return <Loading />;

  return null;
}
