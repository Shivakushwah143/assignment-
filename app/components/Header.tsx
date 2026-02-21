import VerifiedBadge from "./VerifiedBadge";

export default function Header() {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="/308fdd6fb30b2250140521ee48f05cb4256e0db1.png"
          alt="Wealthup"
          className="h-[28px] w-auto"
        />
      </div>

      <div className="mx-auto mt-4 w-[90vw] max-w-[1307px]">
        <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-5">
          <div>
            <h1 className="mb-1 text-[24px] font-medium tracking-[0.2px] text-[#24436a] sm:text-[28px]">
              Good Morning, <span className="font-bold text-[#1e3f68]">Ankit!</span>
            </h1>
            <p className="text-[14px] leading-[1.6] text-[#3a5f84] sm:text-[16px]">
              At <strong>28</strong>, your income is strong, but your wealth
              efficiency is lagging.
            </p>
          </div>
          <VerifiedBadge />
        </div>
      </div>
    </div>
  );
}
