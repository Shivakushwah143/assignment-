export default function VerifiedBadge() {
  return (
    <div className="flex -translate-y-0.5 items-center gap-2 rounded-full border border-[#c7eac0] bg-[#eaffea] px-4 py-1.5 text-[12px] font-semibold text-[#1b8a25] shadow-[0_10px_24px_rgba(80,175,80,0.2)] sm:px-5 sm:py-2 sm:text-sm">
      <span className="flex h-[22px] w-[22px] items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" fill="#0b8c12" />
          <path d="M7.5 12.2l2.6 2.6 5.4-5.4" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      Verified Analysis
    </div>
  );
}
