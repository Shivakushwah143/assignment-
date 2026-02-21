const breakdown = [
  { label: "Emergency Funds", value: "0 / 20", percent: 0 },
  {
    label: "Liquidity",
    value: "11 / 20",
    percent: 55,
    gradient: "linear-gradient(90deg,#FF6969 0%,#FFBC70 100%)",
  },
  { label: "Investments", value: "20 / 20", percent: 100 },
  { label: "Health Insurance", value: "20 / 20", percent: 100 },
  {
    label: "Life Insurance",
    value: "7 / 20",
    percent: 35,
    gradient: "linear-gradient(90deg,#FF6969 0%,#FFBC70 100%)",
  },
  { label: "Savings", value: "16 / 20", percent: 80 },
];

export default function MainScoreCard() {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-3xl border border-[#d9e6f7] bg-linear-to-b from-[#f8fbff] to-[#f2f7fd] p-5 shadow-lg sm:p-6 lg:grid-cols-[1.1fr_1.4fr] lg:gap-7">
      <div className="relative">
        <div className="relative rounded-2xl bg-[#f7f1f4] px-4 pb-4 pt-5 shadow-md sm:px-5 sm:pb-5 sm:pt-6">
          <div className="relative mx-auto mt-8 h-36 w-72 rounded-t-full border-12 border-b-0 border-[#f0f0f0] sm:h-40 sm:w-80">
            <div
              className="absolute -left-8 -top-8 h-36 w-72 rounded-t-full border-2 border-b-0 border-transparent sm:h-40 sm:w-80"
              style={{
                borderTopColor: "#FF6969",
                borderLeftColor: "#FF6969",
                borderRightColor: "#FFBC70",
                transform: "rotate(-12deg)",
              }}
            />
            <div
              className="absolute right-2 top-2 h-6 w-8 rotate-12"
              style={{
                background: "#FFBC70",
                clipPath: "polygon(0 0, 100% 50%, 0 100%)",
              }}
            />
          </div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-4 w-64 -translate-x-1/2 translate-y-2 bg-[#f7f1f4] sm:w-72" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-2 text-center">
            <div
              className="text-5xl font-bold text-[#FF6969] drop-shadow-sm sm:text-6xl"
            >
              43
            </div>
            <div className="mt-1 text-sm font-semibold text-[#2f4d76] sm:text-[15px]">
              Current WealthUp Score
            </div>
          </div>

          <div className="mt-20 text-center text-sm font-medium italic text-[#2f4d76] sm:mt-24 sm:text-[14px]">
            Better than <strong>46%</strong> of peers
          </div>

          <div className="absolute left-1/2 top-3 w-44 -translate-x-1/2 rounded-lg bg-white px-3 py-2 text-xs text-[#3a3a3a] shadow-md sm:top-4 sm:w-48 sm:text-[13px]">
            You need <strong>+27</strong> points to<br />
            reach a <span className="font-bold text-[#1f9f3b]">good</span> score of <strong>70</strong>
          </div>
          <div className="absolute left-1/2 top-16 w-12 -translate-x-1 border-t-2 border-dashed border-[#9a6bff] sm:top-20" />
          <div className="absolute left-3/5 top-20 h-2 w-4 -rotate-12 border-b-4 border-l-4 border-[#9a6bff]" />
        </div>
      </div>

      <div>
        <div className="mb-3 text-[18px] font-medium text-[#2e567f] sm:text-[20px]">Financial independence age</div>
        <div className="relative mb-5 grid grid-cols-2 overflow-hidden rounded-xl border border-[#d6e6f7] bg-white shadow-md">
          <div className="px-6 py-4 text-center">
            <div className="text-sm text-[#8a8a8a]">Current Trajectory</div>
            <div className="text-3xl font-semibold text-[#666]">65</div>
            <div className="text-xs text-[#8a8a8a]">Based on current savings<br />you have</div>
          </div>
          <div className="border-l border-[#dde8f6] bg-[#eaf4ff] px-6 py-4 text-center">
            <div className="text-sm text-[#2a7bd0]">Your Potential</div>
            <div className="text-3xl font-bold text-[#2a7bd0]">38</div>
            <div className="text-xs text-[#2a6fb3]">By following our<br />personalized roadmap</div>
          </div>
          <div className="absolute left-1/2 top-[46%] z-10 -translate-x-1/2 -translate-y-1/2">
            <div
              className="rounded-full bg-[#18b014] px-3 py-1 pr-4 text-xs font-semibold text-white shadow-md"
              style={{
                clipPath:
                  "polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%, 3% 50%)",
              }}
            >
              + 27 years sooner !
            </div>
          </div>
        </div>

        <div className="mb-2 text-[17px] font-semibold text-[#2e567f] sm:text-[18px]">Your score breakdown</div>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
          {breakdown.map((item, idx) => (
            <div
              key={item.label}
              className={`pr-0 sm:pr-4 lg:pr-4 ${
                idx % 3 === 2 ? "lg:border-r-0 lg:pr-0" : "lg:border-r lg:border-[#e6eef9]"
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[13px] font-semibold text-[#2e4f7a]">{item.label}</div>
                <div className="min-w-12 text-right text-xs tabular-nums text-[#3b5e85]">{item.value}</div>
              </div>
              <div className="h-3.5 rounded-full bg-[#f9f9f9]">
                <div
                  className="h-3.5 rounded-full"
                  style={{
                    width: `${item.percent}%`,
                    background:
                      item.gradient ??
                      "linear-gradient(90deg,#FF6969 0%,#FFBC70 50%,#7EFF7E 100%)",
                  }}
                    />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
