export default function VerifyEmailPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent-50">
      <h1 className="text-3xl font-bold text-primary-700 mb-2">
        Verify Your Email
      </h1>
      <p className="text-gray-600 text-center max-w-md">
        A verification link has been sent to your email. Please check your inbox
        and click the link to complete registration.
      </p>
    </div>
  );
}
