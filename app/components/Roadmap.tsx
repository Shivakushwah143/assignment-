export default function Roadmap() {
  return (
    <div className="mt-3 rounded-2xl border border-[#d9e6f7] bg-linear-to-b from-[#f9fbff] to-[#f3f7fd] p-4 shadow-lg sm:p-6">
      <div className="mb-4 text-[17px] font-medium text-[#2e567f] sm:text-lg">
        Your personalized roadmap to <strong className="font-bold">70+ WealthUp</strong> score
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="min-h-[18rem] rounded-2xl border-2 border-[#2c5c9c] bg-white p-4 shadow-md sm:min-h-80 sm:p-6">
          <div className="text-xs font-semibold text-[#ff2d2d]">Step 1: Critical</div>
          <h3 className="mb-1 mt-2 text-lg font-semibold text-[#2a4a74]">Build your safety net (Emergency fund)</h3>
          <p className="text-sm text-[#5b708a]">
            Ankit, avoid a potential 2-year setback. Build your emergency
            fund to be risk-free within the next 6 months.
          </p>
          <div className="mt-4 text-sm font-medium text-[#2c4f79]">
            I can commit to saving{" "}
            <span className="rounded-md border border-[#b8cdee] bg-[#e9f2ff] px-2 py-0.5 font-semibold text-[#2a4a74]">Rs 500</span>{" "}
            monthly
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {["Rs 500", "Rs 1,000", "Rs 5,000", "Rs 6,000"].map((t, i) => (
              <span
                key={t}
                className={`cursor-pointer rounded-md px-3 py-1 transition ${
                  i === 0
                    ? "border border-[#2c5c9c] bg-[#eaf2ff] text-[#2c4f79]"
                    : "border border-[#d6d6d6] bg-white text-[#3b4a5c]"
                }`}
              >
                {t}
              </span>
            ))}
            <span className="cursor-pointer border-b border-[#2c5c9c] px-1 py-1 text-[#7b8795]">
              Enter amount
            </span>
          </div>
          <div className="mt-4 text-sm font-semibold text-[#3f5e82]">Recommended Funds (Top performers)</div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <div className="flex w-full items-center gap-2 rounded-xl border border-[#e0e8f4] bg-white px-3 py-2 text-xs shadow-sm sm:min-w-44 sm:w-auto">
              <div className="grid h-6 w-6 grid-cols-2 grid-rows-2 gap-0.5 rounded-md border border-[#e1e1e1] bg-white p-1">
                <span className="h-2 w-2 bg-[#e11d48]" />
                <span className="h-2 w-2 bg-[#2563eb]" />
                <span className="h-2 w-2 bg-[#2563eb]" />
                <span className="h-2 w-2 bg-[#e11d48]" />
              </div>
              <div>
                <div className="font-medium text-[#1E3A5F]">HDFC Mid-Cap Fund</div>
                <div className="text-xs font-semibold text-[#1ea34a]">26.6% (3Y)</div>
              </div>
            </div>
            <div className="flex w-full items-center gap-2 rounded-xl border border-[#8bb7e8] bg-[#e8f3ff] px-3 py-2 text-xs shadow-sm sm:min-w-44 sm:w-auto">
              <div className="h-6 w-6 rounded-md" style={{ background: "radial-gradient(circle at 60% 40%, #ffeb3b 0%, #ff9800 55%, #f44336 100%)" }} />
              <div>
                <div className="font-medium text-[#1E3A5F]">Bandhan Small Ca..</div>
                <div className="text-xs font-semibold text-[#1ea34a]">32% (3Y)</div>
              </div>
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#d0dcec] bg-white text-[#7b8ea4] shadow-sm transition hover:bg-gray-100">&gt;</div>
          </div>
          <button className="mt-4 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#2f5f8f] to-[#4b8ad8] px-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#1e4a75]">
            Start Investing Today
            <span className="inline-flex items-center rounded-full border border-[#29a546] bg-[#dff7d9] px-3 py-0.5 text-xs font-bold text-[#1ea34a]">
              +20 pts
            </span>
          </button>
          <div className="mt-3 flex items-center gap-2 text-xs text-[#2f5f8f]">
            <span
              className="inline-block h-4 w-4"
              style={{
                background: "linear-gradient(180deg,#1e3a8a,#1d4ed8)",
                clipPath: "polygon(40% 0, 70% 0, 45% 45%, 75% 45%, 30% 100%, 45% 55%, 20% 55%)",
              }}
            />
            Express setup: Complete in under 3 minutes
          </div>
        </div>

        <div className="min-h-[18rem] rounded-2xl border border-[#e2e2e2] bg-[#fdfdfd] p-4 shadow-sm sm:min-h-80 sm:p-6">
          <div className="text-xs text-[#7a8ea6]">Step 2</div>
          <h3 className="mb-1 mt-2 text-lg font-semibold text-[#284b78]">Optimize investments</h3>
          <p className="text-sm text-[#617790]">
            Invest regularly to build long-term wealth. Explore diversified
            mutual funds and asset allocation strategies tailored to your risk
            profile.
          </p>
          <button className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#4a90E2] px-4 text-sm font-semibold text-white opacity-70 sm:mt-20">
            Begin Investing
            <span className="rounded-full bg-[#e5f2ff] px-2 py-0.5 text-xs font-bold text-[#3c78b3]">+12 pts</span>
          </button>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#8a9bb1]">
            <span className="relative inline-block h-4 w-4 rounded-sm bg-[#9aa3af]">
              <span className="absolute -top-2 left-0.5 h-2 w-2.5 rounded-t-full border-2 border-[#9aa3af] border-b-0" />
            </span>
            Complete step 1 (critical) to unlock
          </div>
        </div>

        <div className="min-h-[18rem] rounded-2xl border border-[#e2e2e2] bg-[#fdfdfd] p-4 shadow-sm sm:min-h-80 sm:p-6">
          <div className="text-xs text-[#7a8ea6]">Step 3</div>
          <h3 className="mb-1 mt-2 text-lg font-semibold text-[#284b78]">Maximize growth</h3>
          <p className="text-sm text-[#617790]">
            Accelerate your financial future by reviewing advanced growth
            options, retirement planning, and tax-efficient investment
            vehicles.
          </p>
          <button className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#4a90E2] px-4 text-sm font-semibold text-white opacity-70 sm:mt-20">
            Analyse your Mutual Funds
            <span className="rounded-full bg-[#e5f2ff] px-2 py-0.5 text-xs font-bold text-[#3c78b3]">+8 pts</span>
          </button>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#8a9bb1]">
            <span className="relative inline-block h-4 w-4 rounded-sm bg-[#9aa3af]">
              <span className="absolute -top-2 left-0.5 h-2 w-2.5 rounded-t-full border-2 border-[#9aa3af] border-b-0" />
            </span>
            Complete step 1 (critical) to unlock
          </div>
        </div>
      </div>
    </div>
  );
}
