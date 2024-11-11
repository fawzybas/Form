import "./confirmation.css";

export default function Confirmation() {
  return (
    <>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-20">
        <img
          src="/Depo Logo.png"
          alt="Thank You Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-6 text-center">
          <div className="font-medium">
            <h2 className="text-2xl font-semibold text-gray-800">
              Thank You, [Fawzy]!
            </h2>
            <p className="text-gray-600 mt-2">
              We re excited to have you with us.
            </p>
            <p className="text-gray-600 mt-4">
              Please confirm your email address to activate your account and get
              started with [Service Name]
            </p>

            <p className="text-l mt-2 font-semibold text-gray-700">
              please use this OTP to verify your email
            </p>
          </div>

          <div className="mt-6 w-full mx-auto">
            <p className="inline-block w-[200px] py-2 rounded-lg  border-solid border-2 border-green-400 bg-gray-100 text-gray-600 text-xl font-bold">
              +12345#
            </p>
          </div>

          <p className="text-gray-400 mt-6 text-lx font-bold">
            If you didn’t create this account, please ignore this email.
          </p>
        </div>
        <div className="bg-gray-100 p-4 text-center text-gray-400 text-sm font-medium">
          © 2024 Depo web. All rights reserved.
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
