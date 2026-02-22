import Header from "./components/Header";
import MainScoreCard from "./components/MainScoreCard";
import Roadmap from "./components/Roadmap";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1307px_600px_at_50%_0%,#ffffff_0%,#f2f8ff_60%,#eef5ff_100%)] px-4 py-3 font-[Poppins] text-[#284a73] sm:px-6 sm:py-4">
      <Header />

      <div className="mx-auto mt-4 w-full max-w-[1307px]">
        <MainScoreCard />
        <Roadmap />
      </div>
    </div>
  );
}
